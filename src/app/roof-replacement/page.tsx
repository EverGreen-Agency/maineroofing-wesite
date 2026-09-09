import Image from 'next/image';
import { Metadata } from 'next';
import { business } from '@/config/business';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { ShieldCheck, Wind, CheckCircle2, Phone, ArrowRight, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Asphalt Shingle Roof Replacement Maine & NH | Architectural Shingles',
  description: 'Complete roof tear-off and replacement engineered for Maine coastal storms and sub-zero winters. 50-year warranty options, full ice & water protection. Call (207) 383-1646.',
  keywords: [
    'roof replacement maine',
    'shingle roof replacement maine',
    'roof replacement contractor maine',
    'residential roofing contractors maine',
    'architectural shingles maine'
  ]
};

export default function RoofReplacementPage() {
  return (
    <div className="flex flex-col">
      <section className="relative bg-slate-950 text-white py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects/residential-shingle-01.jpg"
            alt="Asphalt Shingle Roof Replacement Project in Maine"
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
                <ShieldCheck className="w-4 h-4 text-crimson-500" />
                <span>Engineered Residential Roof Replacements • Serving Maine & NH</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Complete Roof Replacement: <br />
                <span className="text-crimson-500">Protection Against 130 mph Storms</span>
              </h1>

              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                When an old roof begins shedding granules, cupping, or leaking through rotted decking, a patch is no longer enough. We perform clean tear-offs down to the plywood decking, replacing rotted lumber and installing continuous ice & water shield barriers.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
                  <div className="text-2xl font-black text-white">130 MPH</div>
                  <div className="text-xs text-slate-400">Wind Uplift Rating</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
                  <div className="text-2xl font-black text-emerald-400">Full Deck</div>
                  <div className="text-xs text-slate-400">Inspection & Repair</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl col-span-2 sm:col-span-1">
                  <div className="text-2xl font-black text-crimson-400">Multi-Layer</div>
                  <div className="text-xs text-slate-400">Ice & Water Shield</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#quote"
                  className="px-8 py-4 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-sm shadow-xl transition-colors"
                >
                  Request Roof Replacement Quote
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
                defaultPropertyType="residential"
                defaultService="Asphalt Shingle Roof Replacement"
                title="Get a Roof Replacement Quote"
                subtitle="Fast on-site assessment and clear written estimate."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-crimson-600">
              The Replacement Process
            </h2>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">
              How We Install a Roof That Never Leaks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="text-2xl font-black text-crimson-600">01</div>
              <h3 className="text-lg font-bold text-slate-900">Complete Tear-Off</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We remove old shingles down to the bare wooden deck to expose hidden water damage, soft spots, and rot.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="text-2xl font-black text-crimson-600">02</div>
              <h3 className="text-lg font-bold text-slate-900">Substrate Rebuild</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Damaged CDX plywood sheathing is cut away and replaced with new exterior-grade wood, firmly re-fastened to rafters.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="text-2xl font-black text-crimson-600">03</div>
              <h3 className="text-lg font-bold text-slate-900">Double Ice Defense</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Self-adhering ice & water shield is laid at least 6 feet up eaves, valleys, and around chimneys to stop freeze-thaw dam leaks.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="text-2xl font-black text-crimson-600">04</div>
              <h3 className="text-lg font-bold text-slate-900">Architectural Shingles</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Heavyweight shingles with 6 nails per shingle for 130 mph wind certification, capped with high-flow ridge vents.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
