// Attribution persistence module: captures and retains traffic sources across sessions

export interface AttributionData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  fbclid?: string;
  msclkid?: string;
  initial_referrer?: string;
  initial_landing_page?: string;
  captured_at?: string;
}

const STORAGE_KEY = 'eg_roofing_attribution';

export function initializeAttribution(): void {
  if (typeof window === 'undefined') return;

  try {
    const existing = sessionStorage.getItem(STORAGE_KEY);
    if (!existing) {
      const urlParams = new URLSearchParams(window.location.search);
      
      const attribution: AttributionData = {
        utm_source: urlParams.get('utm_source') || undefined,
        utm_medium: urlParams.get('utm_medium') || undefined,
        utm_campaign: urlParams.get('utm_campaign') || undefined,
        utm_content: urlParams.get('utm_content') || undefined,
        utm_term: urlParams.get('utm_term') || undefined,
        gclid: urlParams.get('gclid') || undefined,
        gbraid: urlParams.get('gbraid') || undefined,
        wbraid: urlParams.get('wbraid') || undefined,
        fbclid: urlParams.get('fbclid') || undefined,
        msclkid: urlParams.get('msclkid') || undefined,
        initial_referrer: document.referrer || 'direct',
        initial_landing_page: window.location.href,
        captured_at: new Date().toISOString()
      };

      // Fallback detection if no UTMs present
      if (!attribution.utm_source) {
        if (document.referrer.includes('google.')) {
          attribution.utm_source = 'google';
          attribution.utm_medium = 'organic';
        } else if (document.referrer.includes('bing.')) {
          attribution.utm_source = 'bing';
          attribution.utm_medium = 'organic';
        } else if (document.referrer.includes('facebook.') || document.referrer.includes('instagram.')) {
          attribution.utm_source = 'meta';
          attribution.utm_medium = 'social';
        }
      }

      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
    }
  } catch (e) {
    console.warn('Unable to access sessionStorage for attribution:', e);
  }
}

export function getAttributionData(): AttributionData {
  if (typeof window === 'undefined') return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
