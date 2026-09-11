import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { business } from '@/config/business';
import { ShieldCheck, CheckCircle2, Phone, ArrowRight, Clock, AlertTriangle, Home, Wind, Compass } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How Long Do Asphalt Shingles Really Last in Maine Coastal Climates?',
  description: 'Manufacturer ratings say 30 years, but what is the realistic lifespan of architectural shingles in Maine? Learn warning signs, freeze-thaw impacts, and insurance rules.',
  keywords: [
    'how long do roof shingles last in maine',
    'architectural shingles lifespan maine coast',
    'asphalt shingle curling signs',
    'homeowners insurance roof age maine',
    'shingle roof replacement portland maine'
  ],
  openGraph: {
    title: 'Asphalt Shingle Lifespan in Maine: Warranty vs. Reality (18–22 Years)',
    description: 'Why Maine coastal shingles fail 30% earlier than advertised. Freeze-thaw cycles, salt air, nor\'easters and the insurance cancellation risk after 15 years.',
    images: [{ url: '/images/hero/hero-residential-coastal.png', width: 1200, height: 630, alt: 'Residential Coastal Roof Replacement in Maine' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/hero-residential-coastal.png'],
  }
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'How long do asphalt shingles actually last in Maine?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'While manufacturers advertise 25 to 30-year warranties, architectural (dimensional) asphalt shingles in Maine typically last 18 to 22 years. Along coastal areas like Portland, Kennebunk, and Cape Elizabeth, salt air, 70+ mph nor\'easter wind gusts, and severe freeze-thaw cycles can reduce 3-tab shingle lifespans to just 12 to 15 years.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Will my homeowners insurance cancel my policy if my roof is over 15 or 20 years old in Maine?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Increasingly, yes. Major insurance carriers operating in Maine now use aerial satellite imaging and drone inspections to identify aged, mossy, or curling shingles. Many insurers issue non-renewal notices or demand a certified roof inspection once an asphalt shingle roof reaches 15 to 20 years old.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What is the most urgent sign that shingles need immediate replacement?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Excessive granule loss filling your gutters (resembling coarse black sand), accompanied by cupping, clawing, or fiberglass mat exposure. Once granules wash away, UV sunlight rapidly bakes and cracks the asphalt layer beneath.'
      }
    }
  ]
};

export default function ShingleLifespanArticle() {
  return (
    <article className="py-16 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-crimson-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-crimson-600">Knowledge Hub</Link>
          <span>/</span>
          <span className="text-slate-900">Shingle Lifespan in Maine</span>
        </nav>

        {/* Header */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-crimson-600" />
            Coastal Durability & Materials Guide
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 leading-tight">
            How Long Do Roof Shingles Really Last in Maine Coastal Climates?
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Roofing manufacturers frequently stamp "Limited Lifetime" or "30-Year" labels on asphalt shingle bundles. But when exposed to Maine’s unforgiving winters, sub-zero freeze-thaw cycles, and Atlantic coastal salt air, what is the realistic operational lifespan? Here is the honest data.
          </p>
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-100 text-sm text-slate-500">
            <span>Published: September 2026</span>
            <span>•</span>
            <span>By Hassan & The Maine Roofing Scapes Residential Team</span>
            <span>•</span>
            <span>Focus: Southern & Coastal Maine Homeowners</span>
          </div>
        </header>

        {/* Hero Visual */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
          <Image
            src="/images/hero/hero-residential-coastal.png"
            alt="New Architectural Shingle Roof Replacement in Saco Maine"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white">
              <span className="bg-emerald-600 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
                Maine Installation Standard
              </span>
              <p className="text-lg font-bold mt-2">
                High-definition architectural shingles installed with 6-nail coastal fastening patterns.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Lifespan Table */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
            <Clock className="w-7 h-7 text-crimson-600" />
            Manufacturer Warranty vs. Real-World Maine Lifespan
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-4 font-semibold">Shingle Type</th>
                  <th className="p-4 font-semibold">Advertised Warranty</th>
                  <th className="p-4 font-semibold text-amber-300">Inland Maine Lifespan</th>
                  <th className="p-4 font-semibold text-crimson-300">Coastal Maine Lifespan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-white">
                  <td className="p-4 font-bold text-slate-950">Traditional 3-Tab Asphalt</td>
                  <td className="p-4 text-slate-600">20 – 25 Years</td>
                  <td className="p-4 text-slate-700">14 – 18 Years</td>
                  <td className="p-4 font-bold text-crimson-600">10 – 14 Years (High Blow-off Risk)</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-bold text-slate-950">Architectural / Dimensional</td>
                  <td className="p-4 text-slate-600">30 Years – Lifetime</td>
                  <td className="p-4 text-slate-700">20 – 25 Years</td>
                  <td className="p-4 font-semibold text-slate-900">18 – 22 Years</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-bold text-slate-950">Class 4 Impact-Resistant Asphalt</td>
                  <td className="p-4 text-slate-600">50 Years – Lifetime</td>
                  <td className="p-4 text-slate-700">25 – 30 Years</td>
                  <td className="p-4 font-semibold text-emerald-700">22 – 26 Years</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-bold text-slate-950">Standing Seam Metal (Benchmark)</td>
                  <td className="p-4 text-slate-600">50+ Years</td>
                  <td className="p-4 font-bold text-emerald-700">50 – 70 Years</td>
                  <td className="p-4 font-bold text-emerald-700">45 – 60 Years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* The 4 Maine Climate Accelerators */}
        <section className="space-y-6 text-slate-700 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
            <Wind className="w-7 h-7 text-crimson-600" />
            Why Maine Roofs Age 30% Faster Than National Averages
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-950">1. Thermal Freeze-Thaw Shock</h3>
              <p className="text-xs text-slate-600">
                A sunny January afternoon can warm dark roof shingles to 45°F, melting surface snow. When the sun sets and temperatures plunge to -5°F, that moisture refreezes inside micro-cracks in the asphalt, expanding by 9% and shattering the binder.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-950">2. Nor'easter Wind Shear</h3>
              <p className="text-xs text-slate-600">
                Sustained 50 to 70 mph wind gusts along coastal York and Cumberland counties break the factory sealant strip between shingle layers. Once the thermal seal is broken, wind drives rain directly against the underlayment.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-950">3. Ice Dam Prying Action</h3>
              <p className="text-xs text-slate-600">
                When water backs up behind ice dams along eaves, it forms an expanding ice wedge under the shingle edges, lifting nails and pulling shingle tabs loose.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-950">4. Pine Needle & Salt Moisture Retention</h3>
              <p className="text-xs text-slate-600">
                Coastal salt spray combined with heavy pine needle accumulation traps moisture against shingles, promoting aggressive black algae (Gloeocapsa magma) and moss that digests the limestone filler.
              </p>
            </div>
          </div>
        </section>

        {/* Insurance Crisis Alert */}
        <section className="p-8 rounded-2xl bg-crimson-50 border-2 border-crimson-200 space-y-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-7 h-7 text-crimson-600" />
            <h2 className="text-xl font-bold text-crimson-950">
              The Homeowners Insurance "15-Year Rule" in Maine
            </h2>
          </div>
          <p className="text-sm text-crimson-900 leading-relaxed">
            In recent years, home insurance carriers across Maine (including Travelers, Liberty Mutual, and State Farm) have instituted aggressive underwriting audits. If your roof reaches 15 to 20 years old, insurance underwriters may:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-xs text-crimson-900">
            <li>Refuse policy renewal unless the roof is completely replaced within 30 to 60 days.</li>
            <li>Convert your policy from "Replacement Cost Value" (RCV) to "Actual Cash Value" (ACV), drastically cutting storm damage payouts.</li>
            <li>Add high wind/hail deductibles or roof exclusions.</li>
          </ul>
          <p className="text-xs text-crimson-950 font-semibold pt-2">
            Maine Roofing Scapes provides certified roof inspection reports with photo documentation to satisfy underwriter requirements or substantiate insurance replacement claims.
          </p>
        </section>

        {/* Residential CTA Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-950 text-white border border-slate-800 space-y-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold">
                Unsure of Your Roof’s Age or Condition?
              </h3>
              <p className="text-slate-400 text-sm max-w-xl">
                Schedule a 21-point residential roof inspection with Hassan and our team. We evaluate granule retention, attic ventilation, flashing integrity, and ice dam resistance.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={business.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-bold transition-all shadow-lg hover:shadow-crimson-900/30"
              >
                <Phone className="w-4 h-4" />
                {business.displayPhone}
              </a>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold border border-slate-700 transition-all"
              >
                Get Free Estimate <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
