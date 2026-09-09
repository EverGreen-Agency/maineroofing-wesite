import { Metadata } from 'next';
import { business } from '@/config/business';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { Phone, Mail, Clock, MapPin, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Maine Roofing Scapes & Repairs | (207) 383-1646',
  description: 'Get in touch with Maine Roofing Scapes & Repairs for commercial and residential roofing estimates. Emergency dispatch across Maine and New Hampshire. Call (207) 383-1646.',
  keywords: [
    'contact maine roofing',
    'maine roofing phone number',
    'roof repair contact maine',
    'commercial roofer contact maine'
  ]
};

export default function ContactPage() {
  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Contact Maine Roofing
          </h1>
          <p className="text-slate-600 text-base">
            Emergency leak dispatch, commercial roof surveys, and residential estimates across Maine and New Hampshire.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md">
            <h2 className="text-2xl font-black text-slate-900">
              Direct Contact & Dispatch
            </h2>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-crimson-100 text-crimson-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone / Text Dispatch</div>
                  <a href={business.phoneTel} className="text-lg font-black text-slate-900 hover:text-crimson-600 transition-colors">
                    {business.displayPhone}
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">24/7 Emergency Storm & Leak Hotline</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Inquiry</div>
                  <a href={`mailto:${business.email}`} className="text-base font-bold text-slate-900 hover:text-crimson-600 transition-colors">
                    {business.email}
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">Responses within 1-2 business hours</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Operating Hours</div>
                  <div className="text-sm font-bold text-slate-900">{business.hours.display}</div>
                  <div className="text-xs text-emerald-700 font-semibold mt-0.5">{business.hours.emergency}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Service Coverage</div>
                  <div className="text-sm font-bold text-slate-900">State of Maine & New Hampshire</div>
                  <div className="text-xs text-slate-500 mt-0.5">Commercial inspection radius throughout New England</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
              <strong className="text-slate-900 block font-bold mb-1">Notice on Specialization:</strong>
              Maine Roofing Scapes & Repairs provides exclusive roofing installations and restorations. We do not provide gutter or siding services.
            </div>
          </div>

          <div className="lg:col-span-7">
            <QuoteForm
              title="Send Us a Direct Project Message"
              subtitle="Fill out the form below and an estimator will follow up promptly."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
