import Image from 'next/image';
import { Metadata } from 'next';
import { business } from '@/config/business';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { Snowflake, ShieldAlert, CheckCircle2, Phone, AlertTriangle, Flame, ShieldCheck, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Maine Ice Dam Removal & Roof Snow Clearing | Safe Steam Services',
  description: 'Emergency low-pressure steam ice dam removal in Maine & NH. No hammers, zero shingle damage. Snow guards and heating cable installation. Call (207) 383-1646.',
  keywords: [
    'ice dam removal maine',
    'roof ice dam removal near me',
    'steam ice dam removal maine',
    'roof snow removal maine',
    'ice dam prevention heating cables maine'
  ],
  openGraph: {
    title: 'Emergency Ice Dam Removal & Steam Clearing in Maine & NH',
    description: 'Zero shingle damage low-pressure steam removal. Stop emergency winter ceiling leaks fast. Call (207) 383-1646 for same-day dispatch.',
    url: 'https://maineroofingscapesrepairs.com/ice-dam-removal',
    images: [
      {
        url: '/images/hero/metal-roof-winter-snow.png',
        width: 1200,
        height: 630,
        alt: 'Maine Emergency Ice Dam Removal and Winter Snow Clearing Services',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maine Emergency Ice Dam Removal | Safe Steam Services',
    description: 'Safe steam clearing & emergency winter leak dispatch. Call (207) 383-1646.',
    images: ['/images/hero/metal-roof-winter-snow.png'],
  }
};


export default function IceDamRemovalPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Header */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/metal-roof-winter-snow.png"
            alt="Maine Winter Roof Covered in Snow"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-slate-950/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                <Snowflake className="w-4 h-4 text-blue-400" />
                <span>Winter Emergency Dispatch • Fast Response Across Maine & NH</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Safe Steam Ice Dam Removal <br />
                <span className="text-blue-400">& Winter Roof Leak Defense</span>
              </h1>

              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                When heavy Maine snow melts and refreezes at the eaves, backed-up water forces its way beneath your shingles into ceilings and insulation. We use gentle, low-pressure commercial steam machines that melt thick ice blocks without hammering, chiseling, or damaging your roof.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
                  <div className="text-2xl font-black text-blue-400">100% Steam</div>
                  <div className="text-xs text-slate-400">Zero Shingle Damage</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
                  <div className="text-2xl font-black text-emerald-400">Same-Day</div>
                  <div className="text-xs text-slate-400">Emergency Dispatch</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl col-span-2 sm:col-span-1">
                  <div className="text-2xl font-black text-white">Full Care</div>
                  <div className="text-xs text-slate-400">Snow Clearing & Cables</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#quote"
                  className="px-8 py-4 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-sm shadow-xl transition-colors"
                >
                  Request Ice Dam Emergency Dispatch
                </a>
                <a
                  href={business.phoneTel}
                  className="px-6 py-4 rounded-xl bg-blue-900/80 hover:bg-blue-800 border border-blue-700 text-white font-bold text-sm flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-blue-300" />
                  <span>Call Dispatch: {business.displayPhone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5" id="quote">
              <QuoteForm
                defaultPropertyType="residential"
                defaultService="Winter Ice Dam Removal & Steam Clearing"
                title="Emergency Ice Dam & Snow Removal"
                subtitle="Crews on standby for immediate winter dispatch."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Steam Is Mandatory (Warning Section) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 sm:p-12 mb-16">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-amber-600 shrink-0 mt-1" />
              <div className="space-y-3">
                <h3 className="text-2xl font-black text-slate-900">
                  Beware of Contractors Using Hammers, Pressure Washers, or Salt Pucks
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Inexperienced handymen frequently attack ice dams with axes, hatchets, metal ice picks, or high-pressure power washers. This voids your shingle warranty, punctures underlayments, and fractures frozen shingles. <strong>True commercial steam operates at high temperature and low pressure (sub-300 PSI)</strong>, melting the ice like a warm knife through butter without touching the granules.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
                <Snowflake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Low-Pressure Steam Removal</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We cut through the ice mass into small manageable blocks and remove them safely from the gutters and eaves, immediately opening flow channels for trapped meltwater.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Roof Snow Load Mitigation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Excessive snow load stresses roof trusses and creates the thermal blanket that fuels ice dams. We safely rake and shovel deep snowdrifts from vulnerable roof sections.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Heat Cables & Snow Guards</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Permanently prevent recurring dams with commercial-grade, self-regulating heating cables in valleys and eaves, paired with heavy-duty snow guards for metal roofs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
