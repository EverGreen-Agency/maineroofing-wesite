import { NextResponse } from 'next/server';

interface QuoteRequestBody {
  name: string;
  phone: string;
  email?: string;
  propertyType: 'commercial' | 'residential';
  service: string;
  location: string;
  message?: string;
  honeypot?: string; // Bot trap
  attribution?: {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    utm_term?: string;
    gclid?: string;
    fbclid?: string;
    initial_referrer?: string;
    initial_landing_page?: string;
  };
}

export async function POST(request: Request) {
  try {
    const body: QuoteRequestBody = await request.json();

    // 1. Anti-spam honeypot verification
    if (body.honeypot && body.honeypot.trim() !== '') {
      // Quietly drop bot submission
      return NextResponse.json({ success: true, lead_id: 'bot_filtered' }, { status: 200 });
    }

    // 2. Input validation
    if (!body.name || !body.phone || !body.service) {
      return NextResponse.json(
        { error: 'Name, phone number, and service are required.' },
        { status: 400 }
      );
    }

    const leadId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const estimatedValue = body.propertyType === 'commercial' ? 100 : 50;

    // Structured lead record for CRM integration
    const leadRecord = {
      lead_id: leadId,
      timestamp: new Date().toISOString(),
      lead_type: body.propertyType,
      service: body.service,
      customer_name: body.name.trim(),
      customer_phone: body.phone.trim(),
      customer_email: body.email?.trim() || 'N/A',
      property_location: body.location?.trim() || 'Maine',
      project_notes: body.message?.trim() || '',
      estimated_payout_usd: estimatedValue,
      attribution: {
        source: body.attribution?.utm_source || 'direct/organic',
        medium: body.attribution?.utm_medium || 'web',
        campaign: body.attribution?.utm_campaign || 'general',
        term: body.attribution?.utm_term || '',
        content: body.attribution?.utm_content || '',
        gclid: body.attribution?.gclid || '',
        fbclid: body.attribution?.fbclid || '',
        initial_referrer: body.attribution?.initial_referrer || '',
        landing_page: body.attribution?.initial_landing_page || ''
      }
    };

    console.log('[EverGreen Lead Captured]:', {
      lead_id: leadRecord.lead_id,
      type: leadRecord.lead_type,
      service: leadRecord.service,
      value: `${leadRecord.estimated_payout_usd} USD`,
      source: leadRecord.attribution.source,
      campaign: leadRecord.attribution.campaign
    });

    // 3. CRM & Nova Echo AI Webhook Dispatch
    const webhookUrl = process.env.NOVA_ECHO_WEBHOOK_URL || process.env.CRM_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const nameParts = leadRecord.customer_name.split(' ');
        const firstName = nameParts[0] || leadRecord.customer_name;
        const lastName = nameParts.slice(1).join(' ') || '';

        const novaEchoPayload = {
          ...leadRecord,
          first_name: firstName,
          last_name: lastName,
          phone: leadRecord.customer_phone,
          email: leadRecord.customer_email,
          tags: [
            'Maine-Roofing',
            body.propertyType === 'commercial' ? 'Commercial ($100)' : 'Residential ($50)',
            body.service
          ],
          source: leadRecord.attribution.source || 'Website Quote Form',
          metadata: {
            agency: 'EverGreen MKT',
            payout_usd: leadRecord.estimated_payout_usd,
            location: leadRecord.property_location,
            gclid: leadRecord.attribution.gclid,
            utm_campaign: leadRecord.attribution.campaign,
            landing_page: leadRecord.attribution.landing_page
          }
        };

        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'EverGreen-MaineRoofing-LeadDispatcher/1.0'
          },
          body: JSON.stringify(novaEchoPayload)
        });
      } catch (crmErr) {
        console.error('Failed to forward lead to Nova Echo AI / CRM webhook:', crmErr);
        // We still return success to the customer so user experience is not disrupted
      }
    }

    // 4. Instant Email Notification via Resend REST API (Zero external dependencies)
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL || process.env.NOTIFICATION_EMAIL;

    if (resendApiKey && notificationEmail) {
      try {
        const fromEmail = process.env.RESEND_FROM_EMAIL || 'Maine Roofing <onboarding@resend.dev>';
        const emailSubject = `🚨 Novo Lead [${leadRecord.lead_type.toUpperCase()} - $${leadRecord.estimated_payout_usd}]: ${leadRecord.customer_name}`;

        const emailHtml = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <div style="border-bottom: 2px solid #dc2626; padding-bottom: 12px; margin-bottom: 20px;">
              <span style="display: inline-block; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background-color: #fee2e2; color: #b91c1c; padding: 4px 8px; border-radius: 6px;">
                Nova Solicitação de Orçamento
              </span>
              <h2 style="color: #0f172a; margin: 10px 0 4px 0; font-size: 20px;">
                Lead ${leadRecord.lead_type.toUpperCase()} — Valor Estimado: $${leadRecord.estimated_payout_usd} USD
              </h2>
              <p style="color: #64748b; margin: 0; font-size: 13px;">Maine Roofing Scapes & Repairs (Dispatch)</p>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
              <tr>
                <td style="padding: 10px 8px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600; width: 35%;">Cliente:</td>
                <td style="padding: 10px 8px; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 700;">${leadRecord.customer_name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 8px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;">Telefone:</td>
                <td style="padding: 10px 8px; border-bottom: 1px solid #f1f5f9; color: #0f172a;">
                  <a href="tel:${leadRecord.customer_phone}" style="color: #dc2626; font-weight: 700; text-decoration: none;">${leadRecord.customer_phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 8px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;">E-mail:</td>
                <td style="padding: 10px 8px; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${leadRecord.customer_email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 8px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;">Serviço:</td>
                <td style="padding: 10px 8px; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">${leadRecord.service}</td>
              </tr>
              <tr>
                <td style="padding: 10px 8px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;">Localização:</td>
                <td style="padding: 10px 8px; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${leadRecord.property_location}</td>
              </tr>
              <tr>
                <td style="padding: 10px 8px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600; vertical-align: top;">Mensagem / Notas:</td>
                <td style="padding: 10px 8px; border-bottom: 1px solid #f1f5f9; color: #334155; line-height: 1.5;">${leadRecord.project_notes || 'Sem observações adicionais.'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 8px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;">Origem (UTM):</td>
                <td style="padding: 10px 8px; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 12px;">
                  ${leadRecord.attribution.source} / ${leadRecord.attribution.medium} (${leadRecord.attribution.campaign})
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 8px; color: #64748b; font-weight: 600;">Landing Page:</td>
                <td style="padding: 10px 8px; color: #0f172a; font-size: 12px;">${leadRecord.attribution.landing_page || '/'}</td>
              </tr>
            </table>

            <div style="background-color: #f8fafc; border-radius: 8px; padding: 12px; font-size: 11px; color: #64748b; text-align: center;">
              Lead ID: <code>${leadRecord.lead_id}</code> • Capturado em: ${leadRecord.timestamp}
            </div>
          </div>
        `;

        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: fromEmail,
            to: notificationEmail.split(/[,;]/).map((email) => email.trim()).filter(Boolean),
            subject: emailSubject,
            html: emailHtml
          })
        });
      } catch (emailErr) {
        console.error('Failed to dispatch lead notification email via Resend:', emailErr);
        // Does not block user flow
      }
    }

    return NextResponse.json({
      success: true,
      lead_id: leadId,
      lead_type: body.propertyType,
      message: 'Thank you. A Maine roofing specialist will contact you within 15 minutes.'
    });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please call us directly at (207) 383-1646.' },
      { status: 500 }
    );
  }
}
