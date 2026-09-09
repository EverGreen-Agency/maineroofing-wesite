'use client';

import { useState } from 'react';
import { trackGenerateLead } from '@/lib/tracking/dataLayer';
import { getAttributionData } from '@/lib/tracking/attribution';
import { business } from '@/config/business';
import { Shield, Clock, CheckCircle2, AlertCircle, Building2, Home, ArrowRight, Loader2 } from 'lucide-react';

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
  subtitle = 'Get a detailed, no-obligation quote from our Maine crew within 15 minutes.'
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
      <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-xl border border-emerald-100 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-black text-slate-900">
            Estimate Request Confirmed!
          </h3>
          <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
            Thank you, <strong className="text-slate-900">{name}</strong>. Our dispatch inspector has received your project details for <strong className="text-slate-900">{location || 'your Maine property'}</strong>.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 max-w-md mx-auto space-y-1 text-left">
          <div className="flex justify-between">
            <span className="text-slate-500">Service:</span>
            <span className="font-semibold">{service || currentServices[0]}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Classification:</span>
            <span className="font-semibold capitalize">{propertyType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Estimated Response Time:</span>
            <span className="font-semibold text-emerald-700">Under 15 Minutes</span>
          </div>
        </div>

        <p className="text-xs text-slate-500">
          Need immediate assistance? Call dispatch directly at{' '}
          <a href={business.phoneTel} className="font-bold text-crimson-600 hover:underline">
            {business.displayPhone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200/80 relative" id="quote">
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-crimson-50 text-crimson-700 mb-3 border border-crimson-200">
          <Clock className="w-3.5 h-3.5" />
          <span>Fast Turnaround • Free Roof Assessment</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          {title}
        </h3>
        <p className="text-slate-600 text-sm mt-1.5">
          {subtitle}
        </p>
      </div>

      {/* Property Type Toggle (Commercial $100 vs Residential $50) */}
      <div className="grid grid-cols-2 gap-3 mb-6 p-1.5 bg-slate-100 rounded-xl">
        <button
          type="button"
          onClick={() => {
            setPropertyType('commercial');
            setService('');
          }}
          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-bold text-xs sm:text-sm transition-all ${
            propertyType === 'commercial'
              ? 'bg-slate-900 text-white shadow-md'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>Commercial Property</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setPropertyType('residential');
            setService('');
          }}
          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-bold text-xs sm:text-sm transition-all ${
            propertyType === 'residential'
              ? 'bg-crimson-600 text-white shadow-md'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
          }`}
        >
          <Home className="w-4 h-4" />
          <span>Residential Home</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Full Name <span className="text-crimson-600">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. John Miller"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-crimson-600 focus:border-transparent text-slate-900 text-sm bg-slate-50/50 hover:bg-white transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Phone Number <span className="text-crimson-600">*</span>
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(207) 000-0000"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-crimson-600 focus:border-transparent text-slate-900 text-sm bg-slate-50/50 hover:bg-white transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Email Address <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-crimson-600 focus:border-transparent text-slate-900 text-sm bg-slate-50/50 hover:bg-white transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              City or ZIP in Maine / NH <span className="text-crimson-600">*</span>
            </label>
            <input
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Portland, Bangor, Manchester"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-crimson-600 focus:border-transparent text-slate-900 text-sm bg-slate-50/50 hover:bg-white transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Service Requested <span className="text-crimson-600">*</span>
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-crimson-600 focus:border-transparent text-slate-900 text-sm bg-slate-50/50 hover:bg-white transition-colors"
            >
              <option value="">Select a service...</option>
              {currentServices.map((svc) => (
                <option key={svc} value={svc}>
                  {svc}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Timeframe / Urgency
            </label>
            <select
              value={urgency}
              onChange={(e) => setUrgency(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-crimson-600 focus:border-transparent text-slate-900 text-sm bg-slate-50/50 hover:bg-white transition-colors"
            >
              <option value="Emergency (Active Leak / Ice Dam)">🚨 Emergency (Active Leak / Ice Dam)</option>
              <option value="Soon (Within 1-2 weeks)">Soon (Within 1-2 weeks)</option>
              <option value="Planning Ahead (Next 1-3 months)">Planning Ahead (Next 1-3 months)</option>
              <option value="Commercial Budgeting / RFP">Commercial Budgeting / RFP</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Project Notes or Symptoms <span className="text-slate-400 font-normal">(e.g. leak area, roof age, flat roof size)</span>
          </label>
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about the issue or project size..."
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-crimson-600 focus:border-transparent text-slate-900 text-sm bg-slate-50/50 hover:bg-white transition-colors"
          />
        </div>

        {errorMessage && (
          <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-6 rounded-xl text-white font-black text-base uppercase tracking-wider bg-crimson-600 hover:bg-crimson-700 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-75 cursor-pointer active:scale-99"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Transmitting Project Details...</span>
            </>
          ) : (
            <>
              <span>Get My Free Estimate & Inspection</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-2 text-center">
          <span className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-emerald-600" />
            Zero Obligation
          </span>
          <span>•</span>
          <span>No Spam Guarantee</span>
          <span>•</span>
          <span>Direct Dispatch</span>
        </div>
      </form>
    </div>
  );
}
