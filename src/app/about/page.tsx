import Image from 'next/image';
import { Metadata } from 'next';
import { business } from '@/config/business';
import { ShieldCheck, CheckCircle2, Hammer, Award, Building2, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Maine Roofing Scapes & Repairs | Serving Maine Since 2021',
  description: 'Learn about Maine Roofing Scapes & Repairs. Founded in 2021, dedicated exclusively to residential and commercial roofing across Maine & NH. Call (207) 383-1646.',
  keywords: [
    'about maine roofing scapes repairs',
    'maine roofing company history',
    'roofing contractor maine since 2021',
    'local roofers maine'
  ]
};

export default function AboutPage() {
  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-crimson-100 text-crimson-800">
              <ShieldCheck className="w-4 h-4 text-crimson-600" />
              <span>Serving Maine & New Hampshire Since 2021</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Roofing Excellence Built on Craftsmanship, Integrity & Local Experience
            </h1>

            <p className="text-slate-600 text-base leading-relaxed">
              Founded in 2021, Maine Roofing Scapes & Repairs was established with a singular focus: to engineer and construct roofing systems specifically capable of enduring the harshest weather in the northeastern United States.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Unlike broad exterior contractors who dabble in siding, windows, and gutters, <strong>we focus 100% of our training, equipment, and craftsmanship strictly on roofs</strong>. From multi-tiered commercial roof restorations like the DoubleTree by Hilton complex to lifetime residential standing seam metal roofs, our crews deliver structural peace of mind.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-800 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Operating as a verified Service Area Business across all Maine & NH</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-800 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Senior estimators travel up to 5 hours for commercial site consultations</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-800 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Zero gutters or siding claims — pure roofing specialization</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={business.phoneTel}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-sm shadow-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us Directly: {business.displayPhone}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-96 sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <Image
              src="/images/hero/hero-roofer-inspection.png"
              alt="Maine Roofing Crew Conducting Roof Inspection"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
