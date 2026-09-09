import Image from 'next/image';
import { Metadata } from 'next';
import { business } from '@/config/business';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { ShieldCheck, CheckCircle2, Phone, ArrowRight, Camera } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roof Inspection Maine & NH | Multi-Point Diagnostic Reports',
  description: 'Thorough multi-point drone and physical roof inspections in Maine. Pre-winter assessments, storm damage documentation, and insurance claim reports. Call (207) 383-1646.',
  keywords: [
    'roof inspection maine',
    'roof inspection cost maine',
    'drone roof inspection maine',
    'commercial roof survey maine',
    'pre winter roof inspection maine'
  ]
};

export default function RoofInspectionPage() {
  return (
    <div className="flex flex-col">
      <section className="relative bg-slate-950 text-white py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/roof-inspection-crew.png"
            alt="Maine Roofing Inspection Crew"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-slate-950/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-slate-200 border border-slate-700">
                <Camera className="w-4 h-4 text-crimson-500" />
                <span>Thorough Multi-Point Diagnostics • High-Resolution Drone & Manual Surveys</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Comprehensive Roof Inspections: <br />
                <span className="text-crimson-500">Know Your Roof&apos;s True Condition</span>
              </h1>

              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                Whether you are budgeting for commercial capital improvements, preparing a home for severe Maine winter freezes, or documenting hail and wind storm damage for an insurance claim, our detailed multi-point inspections provide factual, unvarnished assessments.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
                  <div className="text-2xl font-black text-white">21-Point</div>
                  <div className="text-xs text-slate-400">Diagnostic Checklist</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
                  <div className="text-2xl font-black text-emerald-400">HD Drone</div>
                  <div className="text-xs text-slate-400">Aerial Imaging</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl col-span-2 sm:col-span-1">
                  <div className="text-2xl font-black text-amber-400">24 Hours</div>
                  <div className="text-xs text-slate-400">Report Delivery</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#quote"
                  className="px-8 py-4 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-sm shadow-xl transition-colors"
                >
                  Schedule an Inspection
                </a>
                <a
                  href={business.phoneTel}
                  className="px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-crimson-500" />
                  <span>{business.displayPhone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5" id="quote">
              <QuoteForm
                defaultService="Roof Deck / Flashing Inspection"
                title="Schedule a Roof Inspection"
                subtitle="Residential homeowners & commercial facility managers."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
