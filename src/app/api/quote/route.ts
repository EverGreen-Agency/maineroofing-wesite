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
