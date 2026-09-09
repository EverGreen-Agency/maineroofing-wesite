import Image from 'next/image';
import { Metadata } from 'next';
import { business } from '@/config/business';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { Hammer, ShieldCheck, Wind, Snowflake, CheckCircle2, Phone, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Standing Seam Metal Roofing Maine & NH | Lifetime Snow-Shedding',
  description: 'Premium standing seam metal roof installations in Maine. Engineered to shed heavy winter snow, withstand coastal winds, and last 50+ years. Call (207) 383-1646.',
  keywords: [
    'metal roofs in maine',
    'metal roofing maine',
    'standing seam metal roof maine',
    'metal roof contractors maine',
    'lifetime metal roofing new hampshire'
  ]
};

export default function MetalRoofingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Header */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects/standing-seam-metal-01.jpg"
            alt="Standing Seam Metal Roof Installation in Maine"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-slate-950/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-slate-200 border border-slate-700">
                <Hammer className="w-4 h-4 text-crimson-500" />
                <span>Lifetime Architectural Metal Roofing • Built for Maine Weather</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Standing Seam Metal Roofs: <br />
                <span className="text-crimson-500">The Last Roof You&apos;ll Ever Buy</span>
              </h1>

              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                Engineered with concealed fasteners and heavy-gauge steel, our standing seam metal roofs shed Maine&apos;s heaviest snowfalls with ease, completely eliminate winter ice dams, and endure 140+ mph coastal gale winds without curling, cracking, or leaking.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
                  <div className="text-2xl font-black text-white">50+ Yrs</div>
                  <div className="text-xs text-slate-400">Design Lifespan</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
                  <div className="text-2xl font-black text-emerald-400">Zero</div>
                  <div className="text-xs text-slate-400">Exposed Fasteners</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl col-span-2 sm:col-span-1">
                  <div className="text-2xl font-black text-blue-400">100%</div>
                  <div className="text-xs text-slate-400">Snow-Shedding Flow</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#quote"
                  className="px-8 py-4 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-sm shadow-xl transition-colors"
                >
                  Get Free Metal Roof Estimate
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
                defaultService="Standing Seam Metal Roof Installation"
                title="Request Metal Roofing Quote"
                subtitle="Customized color, profile, and pricing options."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative h-96 sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="/images/projects/standing-seam-metal-02.jpg"
                alt="Standing Seam Metal Roof Close-Up Craftsmanship"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Why Maine Homeowners Upgrade to Standing Seam Metal
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed">
                Standard asphalt shingles often suffer from premature granular loss, wind uplift, and heavy freeze-thaw cracking after just 12 to 15 years in Maine. Standing seam metal is the premier architectural standard:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-sm text-slate-700">
                    <strong className="text-slate-900">Concealed Fastener Integrity:</strong> Unlike cheap agricultural screw-down metal panels with exposed rubber washers that dry rot in 5 years, standing seam clips are hidden beneath interlocking vertical seams.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-sm text-slate-700">
                    <strong className="text-slate-900">Effortless Snow & Ice Release:</strong> The smooth Kynar 500 resin coating prevents wet snow from bonding to the metal. Snow slides off cleanly, safeguarding your home from dangerous roof collapse and ice dam interior floods.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-sm text-slate-700">
                    <strong className="text-slate-900">Energy Star Reflectivity:</strong> Cool-roof pigments reflect solar heat in summer, reducing attic cooling costs by up to 25% while remaining non-combustible with a Class A fire rating.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 text-sm font-bold text-crimson-600 hover:text-crimson-700"
                >
                  <span>Request Profile Samples & Color Swatches</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
