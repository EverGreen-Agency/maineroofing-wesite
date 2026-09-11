'use client';

import { useState } from 'react';
import { trackGenerateLead } from '@/lib/tracking/dataLayer';
import { getAttributionData } from '@/lib/tracking/attribution';
import { business } from '@/config/business';
import { Shield, Clock, CheckCircle2, AlertCircle, Building2, Home, ArrowRight, Loader2, Sparkles } from 'lucide-react';

interface QuoteFormProps {
  defaultPropertyType?: 'commercial' | 'residential';
  defaultService?: string;
  title?: string;
  subtitle?: string;
}

export function QuoteForm({
  defaultPropertyType = 'residential',
  defaultService = '',
  title = 'Request a Free Roofing Estimate & Inspection',
  subtitle = 'Get a detailed, no-obligation assessment from our Maine crew within 15 minutes.'
}: QuoteFormProps) {
  const [propertyType, setPropertyType] = useState<'commercial' | 'residential'>(defaultPropertyType);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [service, setService] = useState(defaultService);
  const [message, setMessage] = useState('');
  const [urgency, setUrgency] = useState('Standard (within 1-2 weeks)');
  const [honeypot, setHoneypot] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const commercialServices = [
    'Commercial Roof Restoration (High ROI Coating)',
    'Commercial Flat Roof Installation (TPO / EPDM)',
    'Emergency Commercial Freeze-Thaw Leak Repair',
    'Commercial Roof Inspection & Maintenance Plan',
    'Industrial / Multi-Family Roof Replacement'
  ];

  const residentialServices = [
    'Standing Seam Metal Roof Installation',
    'Asphalt Shingle Roof Replacement',
    'Winter Ice Dam Removal & Steam Clearing',
    'Emergency Leak & Storm Damage Repair',
    'Roof Deck / Flashing Inspection'
  ];

  const currentServices = propertyType === 'commercial' ? commercialServices : residentialServices;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const attribution = getAttributionData();

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          propertyType,
          service: service || currentServices[0],
          location,
          message: `[Urgency: ${urgency}] ${message}`,
          honeypot,
          attribution
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit quote request.');
      }

      // Success: Fire DataLayer conversion event AFTER confirmed backend 200 OK
      trackGenerateLead({
        lead_type: propertyType,
        service: service || currentServices[0],
        location: location || 'Maine',
        lead_id: data.lead_id,
        source: attribution.utm_source,
        medium: attribution.utm_medium,
        campaign: attribution.utm_campaign,
        estimated_value: propertyType === 'commercial' ? 100 : 50
      });

      setIsSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'An error occurred while submitting. Please call us directly.';
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="w-full max-w-full p-1.5 sm:p-2 rounded-[2rem] bg-gradient-to-b from-white/15 to-white/5 border border-white/15 shadow-2xl">
        <div className="rounded-[calc(2rem-0.375rem)] bg-white p-6 sm:p-10 text-center space-y-5 shadow-inner">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              Estimate Request Confirmed!
            </h3>
            <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
              Thank you, <strong className="text-slate-900">{name}</strong>. Our Maine dispatch inspector has received your project details for <strong className="text-slate-900">{location || 'your Maine property'}</strong>.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 max-w-md mx-auto space-y-1.5 text-left">
            <div className="flex justify-between items-center gap-2">
              <span className="text-slate-500">Service:</span>
              <span className="font-semibold text-right truncate">{service || currentServices[0]}</span>
            </div>
            <div className="flex justify-between items-center gap-2">
              <span className="text-slate-500">Classification:</span>
              <span className="font-semibold capitalize">{propertyType}</span>
            </div>
            <div className="flex justify-between items-center gap-2">
              <span className="text-slate-500">Estimated Response:</span>
              <span className="font-semibold text-emerald-700">Under 15 Minutes</span>
            </div>
          </div>

          <p className="text-xs text-slate-500 pt-1">
            Need immediate assistance? Call dispatch directly at{' '}
            <a href={business.phoneTel} className="font-bold text-crimson-600 hover:underline">
              {business.displayPhone}
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-full p-1.5 sm:p-2 rounded-[2rem] bg-gradient-to-b from-white/15 to-white/5 border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]" id="quote">
      <div className="rounded-[calc(2rem-0.375rem)] bg-white p-5 sm:p-8 shadow-inner relative overflow-hidden">
        {/* Eyebrow Micro Tag */}
        <div className="mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider bg-crimson-50 text-crimson-700 mb-2 border border-crimson-200">
            <Sparkles className="w-3.5 h-3.5 text-crimson-600" />
            <span>Fast Dispatch • Free Multi-Point Inspection</span>
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-snug">
            {title}
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Responsive Property Type Toggle (Commercial $100 vs Residential $50) */}
        <div className="grid grid-cols-2 gap-1.5 mb-5 p-1 bg-slate-100 rounded-2xl border border-slate-200/80">
          <button
            type="button"
            onClick={() => {
              setPropertyType('commercial');
              setService('');
            }}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl font-extrabold text-xs sm:text-sm transition-all min-w-0 ${
              propertyType === 'commercial'
                ? 'bg-slate-950 text-white shadow-md ring-1 ring-slate-800'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Building2 className={`w-4 h-4 shrink-0 ${propertyType === 'commercial' ? 'text-amber-400' : 'text-slate-400'}`} />
            <span className="truncate">Commercial</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setPropertyType('residential');
              setService('');
            }}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl font-extrabold text-xs sm:text-sm transition-all min-w-0 ${
              propertyType === 'residential'
                ? 'bg-crimson-600 text-white shadow-md ring-1 ring-crimson-700'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Home className={`w-4 h-4 shrink-0 ${propertyType === 'residential' ? 'text-white' : 'text-slate-400'}`} />
            <span className="truncate">Residential</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Anti-spam honeypot (invisible to humans) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website_hp">Leave this empty</label>
            <input
              type="text"
              id="website_hp"
              name="website_hp"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="min-w-0">
              <label className="block text-[11px] font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                Full Name <span className="text-crimson-600">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John Miller"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs sm:text-sm bg-slate-50/70 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-crimson-600 focus:border-transparent transition-all"
              />
            </div>

            <div className="min-w-0">
              <label className="block text-[11px] font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                Phone Number <span className="text-crimson-600">*</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(207) 000-0000"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs sm:text-sm bg-slate-50/70 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-crimson-600 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="min-w-0">
              <label className="block text-[11px] font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                Email Address <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs sm:text-sm bg-slate-50/70 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-crimson-600 focus:border-transparent transition-all"
              />
            </div>

            <div className="min-w-0">
              <label className="block text-[11px] font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                City / ZIP in ME or NH <span className="text-crimson-600">*</span>
              </label>
              <input
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Portland, Bangor, Manchester"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs sm:text-sm bg-slate-50/70 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-crimson-600 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="min-w-0">
              <label className="block text-[11px] font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                Service Requested <span className="text-crimson-600">*</span>
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs sm:text-sm bg-slate-50/70 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-crimson-600 focus:border-transparent transition-all truncate"
              >
                <option value="">Select a service...</option>
                {currentServices.map((svc) => (
                  <option key={svc} value={svc}>
                    {svc}
                  </option>
                ))}
              </select>
            </div>

            <div className="min-w-0">
              <label className="block text-[11px] font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                Timeframe / Urgency
              </label>
              <select
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs sm:text-sm bg-slate-50/70 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-crimson-600 focus:border-transparent transition-all truncate"
              >
                <option value="Emergency (Active Leak / Ice Dam)">🚨 Emergency (Active Leak / Ice Dam)</option>
                <option value="Soon (Within 1-2 weeks)">Soon (Within 1-2 weeks)</option>
                <option value="Planning Ahead (Next 1-3 months)">Planning Ahead (Next 1-3 months)</option>
                <option value="Commercial Budgeting / RFP">Commercial Budgeting / RFP</option>
              </select>
            </div>
          </div>

          <div className="min-w-0">
            <label className="block text-[11px] font-extrabold text-slate-700 uppercase tracking-wider mb-1">
              Project Notes <span className="text-slate-400 font-normal">(e.g. leak location, roof age, flat roof size)</span>
            </label>
            <textarea
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about the issue or approximate square footage..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs sm:text-sm bg-slate-50/70 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-crimson-600 focus:border-transparent transition-all"
            />
          </div>

          {errorMessage && (
            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Nested Button-in-Button CTA Architecture */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full flex items-center justify-between py-3.5 pl-6 pr-3 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider text-white bg-crimson-600 hover:bg-crimson-700 shadow-xl shadow-crimson-600/30 active:scale-[0.98] transition-all disabled:opacity-75 cursor-pointer mt-1"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2 w-full">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Transmitting Project Details...</span>
              </div>
            ) : (
              <>
                <span className="truncate">Get My Free Estimate & Inspection</span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-3 text-[11px] text-slate-500 pt-1 text-center">
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-emerald-600" />
              Zero Obligation
            </span>
            <span>•</span>
            <span>Direct Dispatch</span>
            <span>•</span>
            <span>15-Min Response</span>
          </div>
        </form>
      </div>
    </div>
  );
}
