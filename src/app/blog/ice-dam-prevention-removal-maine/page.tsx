import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { business } from '@/config/business';
import { Snowflake, AlertTriangle, CheckCircle2, Phone, ArrowRight, ShieldCheck, ThermometerSnowflake, Flame } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Prevent & Remove Ice Dams in Maine | Steam vs. Roof Damage',
  description: 'Complete Maine guide to safe ice dam removal and prevention. Learn why low-pressure steam is the only safe method, average costs in Maine, and how to stop winter leaks.',
  keywords: [
    'ice dam removal maine',
    'ice dam steaming cost maine',
    'prevent ice dams maine roofs',
    'emergency winter roof leak repair maine',
    'low pressure steam ice dam removal'
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'How much does professional ice dam steaming cost in Maine?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Professional low-pressure ice dam steaming in Maine typically costs between $650 and $2,400 depending on roof pitch, ice thickness, and accessibility. Most reputable contractors charge between $350 and $600 per hour with a 2-hour minimum during emergency winter storm periods.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Why should you never use a pressure washer or axe to remove ice dams?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Pressure washers operate at excessive PSI (1,500 to 4,000 PSI) which strips the protective ceramic granules off asphalt shingles and cuts through roof underlayment. Axes, hammers, and chisels shatter brittle cold shingles and crack roof plywood decking. True low-pressure steam (below 300 PSI at 290°F) melts ice without mechanical abrasion.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How do you permanently stop ice dams from forming on a Maine home?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Permanent ice dam prevention requires three steps: 1) Air-sealing attic bypasses and upgrading attic insulation to R-60; 2) Ensuring balanced soffit-to-ridge ventilation to keep the roof deck at exterior temperature; and 3) Installing 6+ feet of self-adhering ice & water shield under standing seam metal or architectural shingles.'
      }
    }
  ]
};

export default function IceDamArticle() {
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
          <span className="text-slate-900">Ice Dam Guide</span>
        </nav>

        {/* Article Header */}
        <header className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-100 text-blue-900">
            <Snowflake className="w-4 h-4" />
            <span>Maine Winter Roofing Emergency Guide</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            How to Prevent & Safely Remove Ice Dams in Maine: Low-Pressure Steam vs. Shingle Damage
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 pb-6 border-b border-slate-200">
            <span>Published: <strong>September 2026</strong></span>
            <span>•</span>
            <span>By: <strong>Emergency Winter Response Division</strong></span>
            <span>•</span>
            <span>Estimated Reading Time: <strong>7 minutes</strong></span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md">
          <Image
            src="/images/hero/standing-seam-metal-snow.jpg"
            alt="Winter Ice Dam and Snow Accumulation on Maine Roof Eaves"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Direct Answer Paragraph for AI Overviews / ChatGPT */}
        <div className="p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-600 space-y-3">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-blue-800">
            Direct Answer: Safe Removal & Costs in Maine
          </h2>
          <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
            <strong>The only safe method to remove an ice dam</strong> without destroying your roofing shingles is <strong>low-pressure, high-temperature steam</strong> (operating at under 300 PSI and ~290°F). In Maine, professional ice dam steaming averages between <strong>$650 and $2,400 per project</strong> ($350 to $600/hr). Methods involving axes, rock salt, or high-pressure washers void manufacturer warranties, tear shingle granules, and worsen interior ceiling leaks.
          </p>
        </div>

        {/* Article Body */}
        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed text-base sm:text-lg">
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              How Do Ice Dams Form on Maine Roofs?
            </h2>
            <p>
              In Maine, winter temperatures fluctuate across the freezing mark (32°F). When warm conditioned air leaks from living spaces into the attic, it warms the upper roof deck. Snow on the upper roof melts and trickles down toward the eaves.
            </p>
            <p>
              Because the roof eaves extend past exterior walls, they remain below 32°F. The meltwater refreezes at the gutters and overhangs, creating a solid ice ridge—an <strong>ice dam</strong>. As more snow melts, water pools behind the ice dam, backs up underneath the shingles, and penetrates into ceilings, wall cavities, and insulation.
            </p>
          </section>

          {/* Safe vs Dangerous Removal Table */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Comparing Ice Dam Removal Techniques
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left border-collapse text-sm sm:text-base border border-slate-200">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 font-bold">Removal Method</th>
                    <th className="p-4 font-bold">Operating Spec</th>
                    <th className="p-4 font-bold">Risk to Roof Deck</th>
                    <th className="p-4 font-bold">Safety Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-emerald-50/50">
                    <td className="p-4 font-bold text-emerald-900">Low-Pressure Steam (Professional Standard)</td>
                    <td className="p-4 text-emerald-800">Under 300 PSI @ 290°F</td>
                    <td className="p-4 text-emerald-800 font-semibold">Zero damage to asphalt, metal or rubber</td>
                    <td className="p-4 font-bold text-emerald-700">Recommended</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-semibold text-rose-900">Hot Water Pressure Washer</td>
                    <td className="p-4 text-slate-600">1,500 – 3,500+ PSI</td>
                    <td className="p-4 text-rose-700">Strips protective granules; punctures underlayment</td>
                    <td className="p-4 font-bold text-rose-600">Dangerous</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-4 font-semibold text-rose-900">Hammers, Axes &amp; Ice Picks</td>
                    <td className="p-4 text-slate-600">Mechanical force</td>
                    <td className="p-4 text-rose-700">Shatters frozen shingles; cracks decking</td>
                    <td className="p-4 font-bold text-rose-600">Destructive</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-semibold text-amber-900">Rock Salt Pucks / Calcium Chloride Socks</td>
                    <td className="p-4 text-slate-600">Chemical runoff</td>
                    <td className="p-4 text-amber-700">Corrodes aluminum gutters, stains paint, kills shrubs</td>
                    <td className="p-4 font-bold text-amber-600">Not Recommended</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Long-Term Solutions */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              3 Long-Term Fixes to Never Deal with an Ice Dam Again
            </h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Attic Air-Sealing &amp; Insulation:</strong> Seal recessed light cans, plumbing vent penetrations, and attic access hatches. Upgrade attic insulation to R-60 to keep attic air within 5°F of outside winter air.
              </li>
              <li>
                <strong>Standing Seam Metal Roof Installation:</strong> Metal roofs feature smooth, vertical interlocking ribs that naturally shed heavy snow loads before ice dams have time to build up.
              </li>
              <li>
                <strong>Self-Regulating Radiant Heat Cables &amp; Snow Guards:</strong> For low-slope residential eaves and commercial gutters, commercial-grade heating cables create open drainage channels so meltwater escapes freely.
              </li>
            </ol>
          </section>

          {/* Emergency FAQ */}
          <section className="space-y-6 pt-6">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Ice Dam Emergency FAQs
            </h2>
            <div className="space-y-4">
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <h3 className="text-lg font-bold text-slate-900">
                  Does homeowners insurance cover ice dam removal?
                </h3>
                <p className="text-base text-slate-600">
                  Most insurance carriers in Maine will cover the resulting interior water damage (drywall, paint, flooring), but usually exclude the cost of the ice dam removal itself unless actively mitigating an ongoing structural emergency. We provide itemized receipts and photo documentation for your insurance adjuster.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <h3 className="text-lg font-bold text-slate-900">
                  How fast can Maine Roofing Scapes &amp; Repairs respond to an emergency leak?
                </h3>
                <p className="text-base text-slate-600">
                  During peak winter storms, our emergency crews operate 7 days a week with rapid same-day and next-day steam dispatch across Southern and Central Maine.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Emergency Winter Action Card */}
        <div className="mt-12 p-8 sm:p-10 bg-blue-900 text-white rounded-3xl border border-blue-800 shadow-xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-700 text-white">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Active Winter Leak? We Can Help Today</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Schedule Immediate Low-Pressure Steam Ice Dam Removal
          </h2>
          <p className="text-blue-100 text-base">
            Don&apos;t let water ruin your ceilings or rot your roof deck. Call Maine Roofing Scapes &amp; Repairs for prompt, non-damaging steam removal.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={business.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md transition-all text-center"
            >
              <Phone className="w-4 h-4" />
              Call Emergency Line: {business.displayPhone}
            </a>
            <Link
              href="/#quote"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-white bg-blue-800 hover:bg-blue-700 border border-blue-600 transition-all text-center"
            >
              Request Winter Service Online
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
