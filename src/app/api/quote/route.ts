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

    // 3. Optional CRM Webhook Dispatch
    const crmWebhook = process.env.CRM_WEBHOOK_URL;
    if (crmWebhook) {
      try {
        await fetch(crmWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadRecord)
        });
      } catch (crmErr) {
        console.error('Failed to forward lead to CRM webhook:', crmErr);
        // We still return success to the customer so they don't see an error
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
