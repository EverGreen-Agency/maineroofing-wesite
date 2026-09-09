// Type-safe DataLayer interface for EverGreen MKT Attribution

export type LeadType = 'commercial' | 'residential';

export interface DataLayerEvent {
  event: string;
  [key: string]: unknown;
}

export interface GenerateLeadEventData {
  lead_type: LeadType;
  service?: string;
  location?: string;
  lead_id?: string;
  page_path?: string;
  landing_page?: string;
  source?: string;
  medium?: string;
  campaign?: string;
  estimated_value?: number; // $100 for commercial, $50 for residential
}

// Ensure window.dataLayer exists
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function pushToDataLayer(data: DataLayerEvent): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
}

// Track phone clicks
export function trackPhoneClick(locationContext: string = 'header'): void {
  pushToDataLayer({
    event: 'click_phone',
    click_context: locationContext,
    target_phone: '+12073831646'
  });
}

// Track email clicks
export function trackEmailClick(locationContext: string = 'footer'): void {
  pushToDataLayer({
    event: 'click_email',
    click_context: locationContext
  });
}

// Core business conversion event: generate_lead (dispatched only AFTER backend 200 OK)
export function trackGenerateLead(leadData: GenerateLeadEventData): void {
  pushToDataLayer({
    event: 'generate_lead',
    lead_type: leadData.lead_type,
    service: leadData.service || 'general_roofing',
    location: leadData.location || 'maine',
    lead_id: leadData.lead_id || '',
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    value: leadData.lead_type === 'commercial' ? 100 : 50,
    currency: 'USD'
  });
}
