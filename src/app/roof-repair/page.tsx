import Image from 'next/image';
import { Metadata } from 'next';
import { business } from '@/config/business';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { AlertTriangle, Clock, CheckCircle2, Phone, ShieldCheck, Flame } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roof Leak & Storm Damage Repair Maine | Emergency Roofers',
  description: 'Fast emergency roof repair across Maine & NH. Freeze-thaw leak repairs, missing shingles, storm damage, and flashing leaks. Call (207) 383-1646.',
  keywords: [
    'roof repair maine',
    'emergency roof repair maine',
    'roof leak repair contractor maine',
    'storm damage roof repair maine',
    'chimney flashing leak repair maine'
  ]
};

export default function RoofRepairPage() {
  return (
    <div className="flex flex-col">
      <section className="relative bg-slate-950 text-white py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects/chimney-flashing-01.jpg"
            alt="Chimney Flashing and Roof Repair in Maine"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-slate-950/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-crimson-600/20 text-crimson-400 border border-crimson-500/30">
                <AlertTriangle className="w-4 h-4 text-crimson-500" />
                <span>Emergency Storm & Leak Dispatch • Serving All Maine & NH</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Roof Leak & Storm Repair: <br />
                <span className="text-crimson-500">Same-Day Emergency Response</span>
              </h1>

              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                Active ceiling leak? Missing shingles from a coastal nor&apos;easter? Winter ice dam forcing water inside? Our emergency crews locate the true origin of your water intrusion, perform immediate water-stop tarping, and execute permanent structural repairs.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
                  <div className="text-2xl font-black text-crimson-400">Same-Day</div>
                  <div className="text-xs text-slate-400">Emergency Dispatch</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
                  <div className="text-2xl font-black text-white">Full Photo</div>
                  <div className="text-xs text-slate-400">Diagnostic Reports</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl col-span-2 sm:col-span-1">
                  <div className="text-2xl font-black text-emerald-400">Insurance</div>
                  <div className="text-xs text-slate-400">Claim Assistance</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#quote"
                  className="px-8 py-4 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-sm shadow-xl transition-colors"
                >
                  Request Emergency Repair
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
                defaultService="Emergency Leak & Storm Damage Repair"
                title="Request Emergency Roof Repair"
                subtitle="Dispatcher will review your request immediately."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Common Repairs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-crimson-600">
              Diagnostic Precision
            </h2>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">
              Common Roof Repairs We Solve in Maine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-3">
              <h3 className="text-lg font-bold text-slate-900">Chimney & Skylight Flashings</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Masonry chimneys and skylight curbs are prime leak points when mortar cracks and aluminum counter-flashings pull away during winter freeze-thaw cycles.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-3">
              <h3 className="text-lg font-bold text-slate-900">High-Wind Shingle Blow-Offs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Coastal gusts over 60 mph lift degraded shingle tabs. We replace blown sections with high-adhesion architectural shingles color-matched to your existing roof.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-3">
              <h3 className="text-lg font-bold text-slate-900">Valley & Eave Ice Ingress</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                When ice dams force water under valleys and eaves, we remediate the wet sheathing, install heavy-duty ice membranes, and reinstall watertight flashings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
