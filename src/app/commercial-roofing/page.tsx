import Image from 'next/image';
import { Metadata } from 'next';
import { business } from '@/config/business';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { Building2, ShieldCheck, CheckCircle2, Phone, ArrowRight, Layers, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Flat Roofing Maine & NH | TPO, EPDM, Roof Restoration',
  description: 'Certified commercial flat roofing contractor in Maine & NH. TPO single-ply, EPDM rubber, and fluid-applied roof restorations. Call (207) 383-1646.',
  keywords: [
    'commercial roofing maine',
    'commercial roofing contractors maine',
    'commercial flat roof repair maine',
    'tpo commercial roofing maine',
    'epdm rubber roofing maine'
  ]
};

export default function CommercialRoofingPage() {
  return (
    <div className="flex flex-col">
      <section className="relative bg-slate-950 text-white py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/commercial-epdm-flat-roof.png"
            alt="Commercial Flat Roofing Installation in Maine"
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
                <Building2 className="w-4 h-4 text-crimson-500" />
                <span>Commercial Roofing Specialists • Serving All Maine, NH & New England</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Commercial Flat Roofing: <br />
                <span className="text-crimson-500">TPO, EPDM & Restoration Systems</span>
              </h1>

              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                From shopping centers and municipal facilities to hospitality resorts like the DoubleTree by Hilton, we deliver heavy-duty single-ply and liquid restoration roofing systems engineered to withstand ponding snow, thermal movement, and persistent freeze-thaw cycles.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
                  <div className="text-2xl font-black text-white">TPO & EPDM</div>
                  <div className="text-xs text-slate-400">Certified Membranes</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
                  <div className="text-2xl font-black text-emerald-400">Restoration</div>
                  <div className="text-xs text-slate-400">Option Available</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl col-span-2 sm:col-span-1">
                  <div className="text-2xl font-black text-amber-400">Rapid</div>
                  <div className="text-xs text-slate-400">Leak Dispatch</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#quote"
                  className="px-8 py-4 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-sm shadow-xl transition-colors"
                >
                  Request Commercial Roof Proposal
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
                defaultPropertyType="commercial"
                defaultService="Commercial Flat Roof Installation (TPO / EPDM)"
                title="Commercial Roof Proposal"
                subtitle="Estimators available to meet on-site across New England."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Systems Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-crimson-600">
              Commercial Systems
            </h2>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">
              Engineered Flat Roof Options for Facility Managers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">TPO Single-Ply Membrane</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Heat-welded thermoplastic polyolefin provides outstanding resistance to chemical exposure, UV degradation, and punctures, reflecting heat in summer to reduce energy costs.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">EPDM Rubber Roofing</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Time-tested synthetic rubber with phenomenal flexibility during severe sub-zero Maine winters. Will not crack or become brittle under heavy snow packs.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Liquid-Applied Restoration</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Seamless monolithic silicone coating applied over existing sound membranes, eliminating seams and parapet leaks while saving 40%+ vs total replacement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
