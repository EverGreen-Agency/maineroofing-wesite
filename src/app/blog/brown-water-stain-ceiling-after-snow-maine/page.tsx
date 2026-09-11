import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { business } from '@/config/business';
import { AlertCircle, CheckCircle2, Phone, ArrowRight, ShieldCheck, Droplets, Home, Clock, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Brown Water Stain on Ceiling After Snow in Maine? Causes & Fixes',
  description: 'Discovered a brown water spot on your ceiling after a Maine snowstorm? Learn how to tell if it’s an ice dam, attic condensation, or roof leak before ceiling collapse.',
  keywords: [
    'brown water stain on ceiling after snow',
    'ceiling leaking after snow maine',
    'brown spot on ceiling winter',
    'ice dam ceiling stain maine',
    'attic condensation vs roof leak'
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'Why is the water stain on my ceiling brown or yellowish?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'The brown, yellow, or coffee-colored discoloration is caused by tannins and wood resins dissolving out of the plywood roof sheathing, attic rafters, ceiling joists, and cellulose/fiberglass insulation as melted roof water seeps through your home’s building materials before reaching your drywall ceiling.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Should I poke a hole in a sagging, water-filled ceiling blister?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. Place a bucket or large plastic container beneath the bulge, lay down towels, and carefully puncture the center of the sagging drywall blister with a screwdriver or nail. Releasing the pooled water relieves gravitational weight and prevents the entire drywall sheet from collapsing.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Is a brown ceiling stain always a roof leak in winter?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Not always, but in Maine winters, 90% of stains appearing after snowstorms are caused by ice dams backing water beneath shingles. The remaining 10% are caused by attic bypass condensation (warm indoor humidity freezing to frost on cold roof rafters, then rapidly melting on sunny days) or frozen plumbing pipe leaks.'
      }
    }
  ]
};

export default function BrownStainArticle() {
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
          <span className="text-slate-900">Ceiling Water Stains</span>
        </nav>

        {/* Article Header */}
        <header className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
            <Droplets className="w-4 h-4 text-amber-700" />
            <span>Homeowner Symptom &amp; Diagnostic Guide • Maine &amp; NH</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Brown Water Stain on Your Ceiling After Snow in Maine? 4 Causes, Dangers &amp; Exact Next Steps
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 pb-6 border-b border-slate-200">
            <span>Published: <strong>September 2026</strong></span>
            <span>•</span>
            <span>By: <strong>Maine Roofing Forensic Inspection Team</strong></span>
            <span>•</span>
            <span>Estimated Reading Time: <strong>8 minutes</strong></span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md">
          <Image
            src="/images/hero/standing-seam-metal-snow.jpg"
            alt="Snow Accumulation on Roof Causing Ceiling Water Stains in Maine"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Direct Answer Paragraph for AI Overviews / ChatGPT */}
        <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-amber-600 space-y-3">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-amber-800">
            The Direct Diagnosis: Why That Brown Stain Appeared
          </h2>
          <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
            If a circular brown or yellowish stain appears on your ceiling within 24 to 72 hours of a Maine snowstorm, <strong>there is a 90% probability you have an ice dam backing up behind your roof eaves</strong>. The water turns brown because it extracts natural wood tannins and fiberglass dust while percolating through your attic rafters and insulation. Do not paint over it immediately; relieve water weight by puncturing bulging drywall blisters and contact an emergency roofing professional.
          </p>
        </div>

        {/* Article Body */}
        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed text-base sm:text-lg">
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              The Physics Behind the Brown Stain: Tannins, Wood Sheathing &amp; Gravity
            </h2>
            <p>
              Most homeowners in Portland, Augusta, Bangor, and Lewiston are surprised by the color. They expect water from fresh snow to be crystal clear.
            </p>
            <p>
              However, before that water drips through your plaster or Sheetrock ceiling, it travels a long, contaminated path:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Meltwater backs up underneath your shingles due to frozen ice at the gutters.</li>
              <li>Water bypasses compromised underlayment and penetrates the CDX plywood or OSB roof sheathing.</li>
              <li>As it soaks through structural spruce or pine rafters, it leaches out natural wood tannins (the same organic compounds that give tea and bourbon their amber color).</li>
              <li>It saturates fiberglass or cellulose attic insulation, picking up decades of dust and soot before pooling on top of your ceiling drywall.</li>
            </ol>
          </section>

          {/* Diagnostic Comparison Table */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Diagnostic Guide: What Is Causing Your Ceiling Water Stain?
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left border-collapse text-sm sm:text-base border border-slate-200">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 font-bold">Symptom / Timing</th>
                    <th className="p-4 font-bold text-amber-400">Most Likely Cause</th>
                    <th className="p-4 font-bold">Severity Level</th>
                    <th className="p-4 font-bold">Immediate Fix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-white">
                    <td className="p-4 font-semibold">Stain near exterior walls after snow + freeze</td>
                    <td className="p-4 font-bold text-slate-900">Ice Dam Backup at Eaves</td>
                    <td className="p-4 text-rose-600 font-bold">Critical</td>
                    <td className="p-4">Low-pressure steam ice dam removal</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-4 font-semibold">Stain near center of room around bathroom vent</td>
                    <td className="p-4 font-bold text-slate-900">Attic Ductwork Frost Thaw</td>
                    <td className="p-4 text-amber-600 font-semibold">Moderate</td>
                    <td className="p-4">Insulate exhaust pipe &amp; seal roof cap</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-semibold">Stain down brick chimney breast</td>
                    <td className="p-4 font-bold text-slate-900">Chimney Flashing Separation</td>
                    <td className="p-4 text-rose-600 font-bold">High</td>
                    <td className="p-4">Tarp chimney &amp; cut new copper step flashing</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-4 font-semibold">Continuous drip regardless of weather</td>
                    <td className="p-4 font-bold text-slate-900">PEX/Copper Plumbing Pipe Freeze</td>
                    <td className="p-4 text-rose-700 font-bold">Emergency</td>
                    <td className="p-4">Shut off main water valve immediately</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Emergency Protocol */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              The 4-Step Emergency Protocol: Preventing a Ceiling Collapse
            </h2>
            <p>
              Drywall is essentially gypsum plaster pressed between cardboard sheets. When soaked, it loses 95% of its structural tensile strength. If 5 to 10 gallons of water pool above your ceiling, the entire sheet can collapse without warning.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-crimson-600 shrink-0" />
                  1. Relieve the Weight (The Screwdriver Trick)
                </div>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Place a 5-gallon bucket directly beneath the dampest or sagging point of the ceiling. Using a screwdriver or large nail, puncture a clean hole in the center. The pooled water will drain into the bucket instead of spreading across the ceiling sheet.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-crimson-600 shrink-0" />
                  2. Clear Attic Access (If Safe)
                </div>
                <p className="text-slate-600 text-xs sm:text-sm">
                  If you have a walk-up attic and safe flooring, locate the wet insulation. Move the soaked fiberglass aside to allow the plaster/drywall to dry from above and prevent mold spores from multiplying.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-crimson-600 shrink-0" />
                  3. Never Paint Over a Wet Stain
                </div>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Applying Kilz or primer over a moist ceiling traps water inside the sheetrock, guaranteeing mold growth within 48 to 72 hours. Dry the area completely with dehumidifiers before spraying stain-blocking oil-based primer.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-crimson-600 shrink-0" />
                  4. Address the Source on the Roof
                </div>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Fixing the ceiling is cosmetic; stopping the water on the roof is permanent. Call an emergency team for low-pressure steam removal or emergency tarping to stop active water flow.
                </p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="space-y-6 pt-6">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Frequently Asked Questions (Ceiling Water Stains)
            </h2>
            <div className="space-y-4">
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <h3 className="text-lg font-bold text-slate-900">
                  Will insurance pay to fix my ceiling water damage?
                </h3>
                <p className="text-base text-slate-600">
                  Yes. Most Maine homeowners insurance policies cover the resulting interior water damage caused by ice dams or storm leaks (drywall repair, insulation replacement, painting, and hardwood drying) subject to your deductible.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <h3 className="text-lg font-bold text-slate-900">
                  Can I just scrape off the ice dam with a shovel?
                </h3>
                <p className="text-base text-slate-600">
                  Never use metal shovels, axes, or ice picks. Shingles freeze solid at sub-zero temperatures; hammering them breaks the fiberglass matting and creates massive holes, turning a minor leak into a structural catastrophe.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Lead Conversion Card */}
        <div className="mt-12 p-8 sm:p-10 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Emergency Leak Source Elimination</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Stop That Ceiling Leak at the Roof Source
          </h2>
          <p className="text-slate-300 text-base">
            Don&apos;t wait for your ceiling to collapse. Our emergency crews carry low-pressure steam equipment and cold-weather repair materials across Southern and Central Maine.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={business.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-lg transition-all text-center"
            >
              <Phone className="w-4 h-4" />
              Call Emergency Dispatch: {business.displayPhone}
            </a>
            <Link
              href="/#quote"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all text-center"
            >
              Schedule Inspection Online
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
