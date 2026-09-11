import Image from 'next/image';
import { Metadata } from 'next';
import { business } from '@/config/business';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { RoiCalculator } from '@/components/calculator/RoiCalculator';
import { Award, ShieldCheck, DollarSign, Clock, CheckCircle2, Building2, Phone, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Roof Restoration Maine & NH | Save 40%+ vs Tear-Off',
  description: 'Extend commercial flat roof lifespan by 15-20 years with engineered fluid-applied coating systems. Proven on projects like DoubleTree by Hilton. Call (207) 383-1646.',
  keywords: [
    'commercial roof restoration maine',
    'roof restoration contractor maine',
    'commercial flat roof coating',
    'silicone roof restoration',
    'doubletree hilton roof restoration'
  ],
  openGraph: {
    title: 'Commercial Roof Restoration Maine & NH | DoubleTree by Hilton Case Study',
    description: 'Save 40-50% vs costly roof tear-offs with seamless liquid silicone coatings. 15-20 Year NDL Warranties & Year-1 Section 179 tax write-offs.',
    url: 'https://maineroofingscapesrepairs.com/roof-restoration',
    images: [
      {
        url: '/images/projects/doubletree-hilton-roof-restoration.jpg',
        width: 1200,
        height: 630,
        alt: 'DoubleTree by Hilton Hotel Commercial Roof Restoration Project by Maine Roofing Scapes & Repairs',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Roof Restoration Maine & NH | Save 40%+',
    description: '15-20 Year Warranties & Section 179 tax deduction. Call (207) 383-1646.',
    images: ['/images/projects/doubletree-hilton-roof-restoration.jpg'],
  }
};


export default function RoofRestorationPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Header */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects/doubletree-hilton-roof-restoration.jpg"
            alt="DoubleTree by Hilton Commercial Roof Restoration"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-slate-950/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Award className="w-4 h-4" />
                <span>Commercial High-ROI Engineering • Serving All Maine, NH & New England</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Commercial Roof Restoration: <br />
                <span className="text-amber-400">Save 40%+ Compared to Tear-Off</span>
              </h1>

              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                Restore and renew your commercial flat roof without tearing off the existing membrane. Our seamless fluid-applied silicone and elastomeric systems stop persistent leaks, extend structural lifespan by 15–20 years, and qualify for immediate 100% tax write-offs as maintenance.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
                  <div className="text-2xl font-black text-emerald-400">40%–50%</div>
                  <div className="text-xs text-slate-400">Cost Savings vs Replacement</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
                  <div className="text-2xl font-black text-white">15–20 Yrs</div>
                  <div className="text-xs text-slate-400">Renewable Warranty</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl col-span-2 sm:col-span-1">
                  <div className="text-2xl font-black text-amber-400">Zero</div>
                  <div className="text-xs text-slate-400">Business Interruption</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#quote"
                  className="px-8 py-4 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-sm shadow-xl transition-colors"
                >
                  Schedule Commercial Feasibility Survey
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
                defaultService="Commercial Roof Restoration (High ROI Coating)"
                title="Commercial Roof Restoration Survey"
                subtitle="Speak directly with our senior commercial roof estimator."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Deep Dive: DoubleTree by Hilton */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative h-96 sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="/images/projects/doubletree-hilton-roof-restoration.jpg"
                alt="DoubleTree by Hilton Aerial View - Commercial Roof Restoration by Maine Roofing"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800">
                <Building2 className="w-4 h-4 text-crimson-600" />
                <span>Featured Project Case Study</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Case Study: DoubleTree by Hilton Hotel Complex
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed">
                When facility managers at the DoubleTree by Hilton complex faced recurrent membrane failure and water ingress across multiple circular and multi-level roof decks, full tear-off was estimated at over $180,000 with months of noisy disruption to hotel guests.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-sm text-slate-700">
                    <strong className="text-slate-900">Core Inspection & Thermal Scan:</strong> Identified specific saturated insulation pockets, surgically replacing failed sub-materials while preserving 90% of the structurally sound roof substrate.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-sm text-slate-700">
                    <strong className="text-slate-900">Seamless Monolithic Barrier:</strong> Applied high-solids silicone coating over seams, flashing curbs, and circular perimeter coping, creating a seamless, ponding-water-proof protective shield.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-sm text-slate-700">
                    <strong className="text-slate-900">Substantial Financial Advantage:</strong> The hotel saved over $75,000 compared to full replacement, zero guests were disrupted, and the roof received an extended leak-free warranty.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 text-sm font-bold text-crimson-600 hover:text-crimson-700"
                >
                  <span>Request a Commercial Site Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Embedded B2B ROI Calculator */}
          <div className="pt-12">
            <RoiCalculator />
          </div>
        </div>
      </section>


      {/* Why Facility Managers Choose Restoration */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-crimson-600">
              The Restoration Advantage
            </h2>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">
              Why Replacement Is Often a Costly Mistake
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Tax & Depreciation Benefits</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Roof replacements are capital expenditures amortized over 39 years. Roof restorations are classified as maintenance, allowing commercial owners to deduct 100% of the project expense in the current tax year.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Zero Business Interruption</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                No loud tear-offs, falling debris, smelly hot asphalt, or open exposed roofs during sudden rainstorms. Your tenants, customers, and operations continue uninterrupted.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Freeze-Thaw Durability</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Maine winters subject flat roofs to brutal thermal expansion and contraction. Liquid silicone membranes remain flexible below -40°F, eliminating seam separation caused by ice expansion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
