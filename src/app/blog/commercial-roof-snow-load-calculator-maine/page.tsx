import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { business } from '@/config/business';
import { AlertTriangle, CheckCircle2, Phone, ArrowRight, ShieldCheck, Scale, Ruler, Wind, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Roof Snow Load Capacity in Maine: How Much Snow Can It Hold?',
  description: 'Learn how to calculate snow weight on Maine commercial flat roofs, identify warning signs of structural overload, and safely remove heavy snow without voiding warranties.',
  keywords: [
    'commercial roof snow load capacity maine',
    'how much snow can a flat roof hold',
    'flat roof snow load calculator',
    'commercial roof collapse warning signs winter',
    'snow removal commercial flat roof maine'
  ],
  openGraph: {
    title: 'Commercial Roof Snow Load in Maine: Weight Tables & Collapse Warning Signs',
    description: 'Snow density tables, 5 structural overload warning signs, parapet drifting hazards, and safe steam removal protocols for Maine commercial flat roofs.',
    images: [{ url: '/images/hero/metal-roof-winter-snow.png', width: 1200, height: 630, alt: 'Commercial Roof Heavy Snow Accumulation in Maine Winter' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/metal-roof-winter-snow.png'],
  }
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'How much snow load can a commercial roof in Maine typically hold?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Under the Maine Uniform Building and Energy Code (MUBEC) and International Building Code (IBC), most commercial flat roofs in Southern and Central Maine are engineered to support a ground snow load of 40 to 60 pounds per square foot (PSF). However, older buildings or structures with drifted snow can exceed this threshold quickly.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How many inches of snow equals 40 to 50 lbs per square foot?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Fresh, dry powder weighs only 3 to 5 lbs per cubic foot, meaning a roof can hold 4 to 5 feet of fresh snow. However, heavy, wet snow weighs 12 to 20 lbs per cubic foot (only 2 to 2.5 feet before reaching maximum capacity). Pure ice weighs roughly 57 lbs per cubic foot, meaning just 10 to 12 inches of solid ice will surpass the structural load limit of most commercial roofs.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What are the first signs that a commercial roof is overloaded with snow?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Critical warning signs include interior doors sticking or jamming in door frames, cracking or popping sounds from steel trusses or wood joists, sprinkler heads dropping below ceiling tile grids, and noticeable sagging in ceiling deck pans.'
      }
    }
  ]
};

export default function SnowLoadArticle() {
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
          <span className="text-slate-900">Commercial Snow Load Guide</span>
        </nav>

        {/* Header */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5" />
            Structural Engineering & Maine Winter Safety
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 leading-tight">
            Commercial Roof Snow Load Capacity: How Much Snow Can Your Maine Building Hold?
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            During heavy Maine nor'easters, facility managers and commercial building owners face a high-stakes calculation: is the accumulating snow safe, or is the roof structure approaching catastrophic failure? Here is how to calculate roof snow weight and recognize critical warning signs.
          </p>
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-100 text-sm text-slate-500">
            <span>Published: September 2026</span>
            <span>•</span>
            <span>By Hassan & The Maine Roofing Scapes Commercial Inspection Team</span>
            <span>•</span>
            <span>Compliance: MUBEC & IBC Structural Snow Load Standards</span>
          </div>
        </header>

        {/* Hero Visual */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
          <Image
            src="/images/hero/metal-roof-winter-snow.png"
            alt="Commercial Flat Roof with Heavy Maine Snow Accumulation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white">
              <span className="bg-amber-600 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
                Maine Winter Alert
              </span>
              <p className="text-lg font-bold mt-2">
                Heavy drifted snow near parapet walls can generate loads exceeding 90 lbs/sq ft.
              </p>
            </div>
          </div>
        </div>

        {/* Snow Density Table */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
            <Scale className="w-7 h-7 text-crimson-600" />
            The Weight of Winter: Snow Density & Load Table
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Snow load is not determined by depth alone; it is entirely determined by water density. A foot of dry, fluffy snow puts minimal stress on a building, whereas a foot of rain-soaked snow can collapse steel joists.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-4 font-semibold">Snow / Ice Type</th>
                  <th className="p-4 font-semibold">Weight per Cubic Foot</th>
                  <th className="p-4 font-semibold">Weight per 12" Depth (PSF)</th>
                  <th className="p-4 font-semibold text-amber-300">Depth to Reach 40 PSF Limit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-white">
                  <td className="p-4 font-bold text-slate-950">Fresh, Dry Powder Snow</td>
                  <td className="p-4 text-slate-600">3 – 5 lbs/cu. ft.</td>
                  <td className="p-4 text-slate-600">3 – 5 lbs / sq. ft.</td>
                  <td className="p-4 font-semibold text-emerald-700">8 to 12 Feet (Low Risk)</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-bold text-slate-950">Settled / Packed Snow</td>
                  <td className="p-4 text-slate-600">12 – 18 lbs/cu. ft.</td>
                  <td className="p-4 text-slate-600">12 – 18 lbs / sq. ft.</td>
                  <td className="p-4 font-semibold text-amber-700">2.2 to 3.3 Feet</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-bold text-slate-950">Rain-Soaked, Heavy Wet Snow</td>
                  <td className="p-4 text-slate-600">20 – 32 lbs/cu. ft.</td>
                  <td className="p-4 text-slate-600">20 – 32 lbs / sq. ft.</td>
                  <td className="p-4 font-bold text-crimson-600">1.2 to 2 Feet (CRITICAL RISK)</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-bold text-slate-950">Solid Ice (Ice Dams / Ponding)</td>
                  <td className="p-4 text-slate-600">~57 lbs/cu. ft.</td>
                  <td className="p-4 text-slate-600">~57 lbs / sq. ft.</td>
                  <td className="p-4 font-bold text-crimson-700">8 to 9 Inches (IMMEDIATE DANGER)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Warning Signs Box */}
        <section className="p-8 rounded-2xl bg-amber-50 border-2 border-amber-300 space-y-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-amber-600" />
            <h2 className="text-2xl font-extrabold text-amber-950">
              5 Critical Warning Signs of Commercial Roof Deflection & Overload
            </h2>
          </div>
          <p className="text-amber-900 text-sm sm:text-base leading-relaxed">
            If your building exhibits any of these internal structural symptoms during or after a storm, evacuate vulnerable areas and call for emergency structural assessment immediately:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-amber-200 space-y-1">
              <span className="font-bold text-slate-950 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" /> Jamming or Sticking Interior Doors
              </span>
              <p className="text-xs text-slate-600">When roof trusses deflect downward under load, they press down on interior non-load-bearing partition walls, warping door jambs.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-amber-200 space-y-1">
              <span className="font-bold text-slate-950 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" /> Audible Popping or Cracking Sounds
              </span>
              <p className="text-xs text-slate-600">Metal decking shearing against steel bar joists or wood rafters popping under extreme compression tension.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-amber-200 space-y-1">
              <span className="font-bold text-slate-950 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" /> Sagging Ceiling Grids & Pipes
              </span>
              <p className="text-xs text-slate-600">Sprinkler heads or electrical conduit pipes pulling downward away from the ceiling plane.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-amber-200 space-y-1">
              <span className="font-bold text-slate-950 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" /> Deep Water Ponding Near Center
              </span>
              <p className="text-xs text-slate-600">Melted snow pooling in the center of the roof rather than flowing toward scuppers or internal roof drains.</p>
            </div>
          </div>
        </section>

        {/* Snow Drift Hazards */}
        <section className="space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            <Wind className="w-6 h-6 text-crimson-600" />
            The Parapet & HVAC Snow Drift Hazard
          </h2>
          <p>
            In Maine, roofs rarely collapse under uniform snow load. Collapses almost universally occur due to <strong>unbalanced drifting</strong>. Strong coastal winds blow across expansive open roof areas and deposit massive, triangular snow drifts against:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>High parapet walls on the leeward side of the building.</li>
            <li>Large rooftop HVAC units and chillers.</li>
            <li>Step-downs between multistory roof elevations (e.g., a 2-story office connected to a 1-story warehouse).</li>
          </ul>
          <p className="text-sm">
            A building engineered for 40 PSF can easily experience <strong>90 to 110 PSF</strong> in drift pockets, causing localized structural failure.
          </p>
        </section>

        {/* How NOT to remove commercial snow */}
        <section className="space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            <Building className="w-6 h-6 text-crimson-600" />
            Safe Snow Removal: Why Metal Shovels Destroy Commercial Warranties
          </h2>
          <p>
            When panic sets in, facility managers often send maintenance crews onto the roof with standard metal shovels, ice picks, or snow blowers. <strong>This is a critical mistake:</strong>
          </p>
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-sm">
            <p className="text-slate-800">
              <strong>Membrane Punctures:</strong> In freezing temperatures, TPO and PVC single-ply membranes become brittle. A metal shovel edge hitting a hidden seam or fastener head can slice through the 60-mil membrane, creating dozens of immediate leaks.
            </p>
            <p className="text-slate-800">
              <strong>Voided Manufacturer Warranties:</strong> Carlisle, Firestone, and Johns Manville explicitly void NDL (No Dollar Limit) warranties if roof membranes are damaged by unauthorized mechanical tools during snow removal.
            </p>
            <p className="text-slate-800">
              <strong>The Professional Protocol:</strong> Maine Roofing Scapes uses specialized plastic polymer scoops leaving a 2-inch protective snow buffer, paired with <strong>low-pressure hot steam systems</strong> to clear internal roof drains and scuppers without touching the membrane surface.
            </p>
          </div>
        </section>

        {/* Commercial Snow Removal CTA */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-950 text-white border border-slate-800 space-y-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold">
                Worried About Heavy Snow Load on Your Building?
              </h3>
              <p className="text-slate-400 text-sm max-w-xl">
                Call Maine Roofing Scapes for priority commercial snow clearing, roof drain steam defrosting, and certified structural load assessments.
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
                href="/commercial-roofing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold border border-slate-700 transition-all"
              >
                Commercial Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
