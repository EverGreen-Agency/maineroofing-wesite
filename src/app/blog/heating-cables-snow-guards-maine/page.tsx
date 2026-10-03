import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { business } from '@/config/business';
import { Snowflake, ShieldCheck, Phone, ArrowRight, Zap, AlertTriangle, Shield, CheckCircle2, Flame, Wrench, ThermometerSnowflake, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Heating Cables & Snow Guards Maine: Stop Coastal Ice Dams & Avalanches (2026)',
  description: 'Complete Maine guide to roof heating cables and snow guards. Prevent dangerous metal roof snow slides, frozen gutters, and ice dam water leaks. Local contractor specs & costs.',
  keywords: [
    'heating cables roof maine',
    'snow guards metal roof coastal maine',
    'self regulating heat tape eaves maine',
    'prevent roof ice avalanche portland maine',
    'ice dam heat wire installation cost',
    'standing seam snow retention systems maine'
  ],
  openGraph: {
    title: 'Heating Cables & Snow Guards in Maine: Stop Ice Dams & Snow Avalanches',
    description: 'Protect your eaves, gutters, decks, and family. Engineering comparison between self-regulating heat trace cables and commercial snow retention bars in Maine.',
    images: [{ url: '/images/hero/metal-roof-winter-snow.png', width: 1200, height: 630, alt: 'Heating cables and snow guards on Maine roof' }],
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
      'name': 'Do heating cables prevent ice dams from forming in Maine?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Heating cables do not stop ice dams from forming, but high-grade self-regulating cables melt open drainage channels through the ice. This allows snowmelt to escape off the roof and through downspouts rather than backing up under your shingles and flooding your interior ceilings.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Are snow guards mandatory on metal roofs in Maine?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'While not universally mandated by statewide residential code, snow guards are critically recommended by structural engineers over entryways, walkways, garage doors, HVAC units, and lower roof sections. Without snow guards, accumulated snow packs on slick metal roofs can suddenly release as multi-ton roof avalanches, crushing gutters, decks, and posing severe life-safety hazards.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What is the difference between cheap hardware store heat tape and self-regulating commercial cable?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Constant-wattage big-box heat tape outputs a fixed heat level regardless of ambient temperature, cannot overlap without melting, has a high failure rate within 1-2 seasons, and poses significant fire risks. Commercial self-regulating heat cable automatically adjusts its thermal output based on temperature (hotter when icy, idle when mild), can overlap safely, and lasts 10 to 15+ years.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How much does professional heating cable installation cost in Maine?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Professional commercial-grade self-regulating heat cable installation in Maine typically costs between $18 and $32 per linear foot, including roof clips, gutter traces, downspout runs, and electrical controller integration.'
      }
    }
  ]
};

export default function HeatingCablesSnowGuardsArticle() {
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
          <span className="text-slate-900">Heating Cables & Snow Guards</span>
        </nav>

        {/* Header */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-amber-600" />
            Winter Defense & Structural Protection
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 leading-tight">
            Heating Cables & Snow Guards in Maine: How to Stop Coastal Ice Dams and Deadly Roof Avalanches
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Every winter from Kittery to Bar Harbor, Maine property owners face two severe cold-weather threats: massive ice dams forcing meltwater into drywall, and sudden multi-ton snow slides rocketing off slick metal roofs. Here is how modern heating cables and snow retention systems work together to protect your home.
          </p>
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-100 text-sm text-slate-500">
            <span>Published: October 2026</span>
            <span>•</span>
            <span>By Maine Roofing Scapes Engineering & Safety Division</span>
            <span>•</span>
            <span>Audience: Homeowners, HOAs & Commercial Property Managers</span>
          </div>
        </header>

        {/* Hero Visual */}
        <div className="relative aspect-16/9 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
          <Image
            src="/images/hero/metal-roof-winter-snow.png"
            alt="Standing seam metal roof with snow retention and heating systems in Maine"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
            <p className="text-white text-sm sm:text-base font-medium max-w-xl">
              Engineered snow retention bars and commercial-grade self-regulating heat trace installed on a high-slope Maine coastal residence.
            </p>
          </div>
        </div>

        {/* Quick Decision Summary Box */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-crimson-600 text-white">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold">The Core Takeaway for Maine Roofs</h2>
              <p className="text-xs text-slate-400">What every property owner must know before December</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="font-bold text-amber-400 flex items-center gap-1.5">
                <Zap className="w-4 h-4" /> Self-Regulating Heat Cables
              </span>
              <p className="text-slate-300 text-xs leading-relaxed">
                They do NOT replace attic insulation or air sealing, but they create reliable melted drainage channels through frozen gutters and eaves so water never pools behind an ice dam.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="font-bold text-blue-400 flex items-center gap-1.5">
                <Snowflake className="w-4 h-4" /> Continuous Snow Guards
              </span>
              <p className="text-slate-300 text-xs leading-relaxed">
                Crucial on standing seam and metal roofs. They hold the snow blanket in place, allowing it to melt off gradually instead of shearing off in a 3,000-lb avalanche over walkways and decks.
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: The Dual Winter Threat */}
        <section className="space-y-6 text-slate-700 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 flex items-center gap-3">
            <ThermometerSnowflake className="w-7 h-7 text-blue-600" />
            1. Why Maine’s Coastal Microclimate Destroys Roof Eaves
          </h2>
          <p>
            Coastal Maine from Portland to Camden experiences a relentless cycle that inland regions rarely see: <strong>oscillating 30°F to 34°F daytime temperatures paired with damp Atlantic winds and sub-zero nighttime drops</strong>.
          </p>
          <p>
            When daytime sun hits your roof, snow on the upper slopes melts. As that meltwater reaches the unheated roof overhang (the eave), it strikes freezing ambient air and refreezes into a solid ridge of ice. As the dam grows taller, meltwater pools behind it. Because asphalt shingles are designed to shed water downward by gravity—not hold standing ponds—the water pushes backward under the shingle laps, soaking roof sheathing, rotting fascia boards, and dripping into bedroom ceilings.
          </p>
          <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-sm space-y-2">
            <p className="font-bold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              The Metal Roof Problem: Friction Loss & Avalanches
            </p>
            <p className="text-xs leading-relaxed text-amber-900">
              Metal roofs shed water brilliantly, but their smooth finish creates near-zero friction. When the bottom layer of snow melts against the metal during a sunny morning, the entire snow pack loses adhesion. Thousands of pounds of hard-packed snow slide instantly in a catastrophic roof avalanche, destroying gutters, crushing landscaping, snapping gas meters, and endangering people below.
            </p>
          </div>
        </section>

        {/* Section 2: Snow Guards Breakdown */}
        <section className="space-y-6 text-slate-700 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 flex items-center gap-3">
            <Shield className="w-7 h-7 text-crimson-600" />
            2. Pad Guards vs. Continuous Pipe Systems: What Holds Maine Snow?
          </h2>
          <p>
            Not all snow guards can survive a Maine winter. Choosing the wrong style or improper spacing can lead to torn metal seams and sheared fasteners:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Individual Pad / Cleat Guards</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Small triangular brackets fastened or clamped to seams in staggered rows.
              </p>
              <ul className="text-xs space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Best for:</strong> Lower slope roofs (under 6/12 pitch) and moderate snow load areas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Warning:</strong> Glued plastic pads routinely pop off during Maine freezes. Never use adhesive-only pads—always use non-penetrating seam clamps.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Continuous Pipe / Bar Systems</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Heavy-gauge horizontal aluminum or steel pipes running uninterrupted along the eave line.
              </p>
              <ul className="text-xs space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Best for:</strong> Steep pitches (7/12+), commercial facilities, long roof runs, and entryways.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Structural integrity:</strong> Distributes snow weight evenly across multiple standing seams without puncturing the roof membrane.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Commercial Heat Cables vs Cheap Big-Box Heat Tape */}
        <section className="space-y-6 text-slate-700 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 flex items-center gap-3">
            <Flame className="w-7 h-7 text-amber-600" />
            3. Self-Regulating Heat Trace vs. Cheap Constant-Wattage Heat Tape
          </h2>
          <p>
            Homeowners often buy $60 DIY heat tape rolls at big-box hardware stores, only to find them burned out or tripping circuit breakers by mid-January. Here is the technical difference:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse rounded-2xl overflow-hidden shadow-xs border border-slate-200">
              <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Feature</th>
                  <th className="p-4">DIY Constant-Wattage Tape</th>
                  <th className="p-4 bg-crimson-900/60">Commercial Self-Regulating Cable</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">How It Operates</td>
                  <td className="p-4 text-slate-600">Fixed heat output (5W/ft) constantly, regardless of snow or ice presence</td>
                  <td className="p-4 font-semibold text-crimson-950 bg-crimson-50/50">Conductive core increases heat when cold/icy; throttles down when mild</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">Cable Overlapping</td>
                  <td className="p-4 text-red-600 font-bold">Severe fire hazard (will overheat and melt)</td>
                  <td className="p-4 text-emerald-700 font-bold bg-crimson-50/50">100% safe to overlap in valleys and gutters</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">UV & Cold Toughness</td>
                  <td className="p-4 text-slate-600">Thin PVC jacket cracks after 1-2 Maine freeze cycles</td>
                  <td className="p-4 text-slate-800 bg-crimson-50/50">Fluoropolymer industrial outer jacket resistant to UV and ice abrasion</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">Expected Lifespan</td>
                  <td className="p-4 text-slate-600">1 to 3 winters maximum</td>
                  <td className="p-4 font-bold text-slate-900 bg-crimson-50/50">10 to 15+ years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Installation Formula */}
        <section className="space-y-6 text-slate-700 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 flex items-center gap-3">
            <Wrench className="w-7 h-7 text-slate-800" />
            4. The Engineering Layout: The Eave, Valley, and Downspout Formula
          </h2>
          <p>
            Simply laying a cable in a straight line does nothing. An effective ice dam mitigation system requires a calibrated geometric layout:
          </p>
          <ul className="space-y-3 text-sm">
            <li className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-950">1. Eave Zig-Zag Triangles:</strong> The top peak of each cable loop must extend at least 12 inches past the interior wall plane into the heated roof zone. If the cable only touches the cold overhang, the ice dam simply moves 6 inches further up the roof.
            </li>
            <li className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-950">2. Valley Tracing:</strong> Roof valleys channel snowmelt from massive surface areas. We run dual-cable loops 6 to 10 feet up every critical roof valley to keep the main drainage channel open.
            </li>
            <li className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-950">3. Continuous Downspout Escape:</strong> Water melted on the roof must exit the building. Cables must trace through the gutter trough and loop down inside downspouts below the frost line to prevent frozen downspout plugs.
            </li>
          </ul>
        </section>

        {/* Section 5: ROI and Cost */}
        <section className="space-y-6 text-slate-700 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 flex items-center gap-3">
            <DollarSign className="w-7 h-7 text-emerald-600" />
            5. Costs vs. Payoff: Why Prevention Beats Emergency Steam Pumping
          </h2>
          <p>
            An emergency mid-winter call for steam ice dam removal in Maine costs between <strong>$500 and $850 per hour</strong>, with typical emergency visits exceeding $2,500. Add interior drywall repair, insulation replacement, and mold remediation, and an ice dam breach routinely tops <strong>$8,000 to $15,000</strong>.
          </p>
          <p>
            By contrast, professional installation of commercial self-regulating heat trace and engineered snow retention on vulnerable eaves typically costs between <strong>$1,800 and $3,800 total</strong>, protecting your structure permanently for over a decade.
          </p>
        </section>

        {/* Call to Action Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-linear-to-br from-slate-950 via-slate-900 to-crimson-950 text-white space-y-6 shadow-2xl">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-crimson-400">Pre-Winter Scheduling</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Get Your Eaves and Metal Roof Winter-Ready Before First Snow
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Don’t wait for a 4-foot ice dam or a crushing snow slide. The Maine Roofing Scapes engineering team inspects roof pitch, heat loss zones, and gutter layouts to specify the exact system your building needs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={business.phoneTel}
              className="px-6 py-4 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-crimson-900/40"
            >
              <Phone className="w-4 h-4" />
              <span>Call Direct: {business.displayPhone}</span>
            </a>
            <Link
              href="/contact"
              className="px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <span>Schedule Winter Eave Inspection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* FAQ Accordion */}
        <section className="space-y-6 pt-6 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-950">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">{item.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Guides */}
        <footer className="pt-8 border-t border-slate-200 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Related Winter Roofing Guides</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/commercial-roof-winterization-checklist-maine"
              className="p-4 rounded-xl border border-slate-200 hover:border-crimson-300 hover:bg-slate-50 transition-colors group"
            >
              <span className="text-xs font-semibold text-blue-600 block mb-1">Commercial Guide</span>
              <p className="text-sm font-bold text-slate-900 group-hover:text-crimson-600 transition-colors">
                Commercial Roof Winterization: 7 Steps Before Maine’s First Snow
              </p>
            </Link>
            <Link
              href="/blog/ice-dam-prevention-removal-maine"
              className="p-4 rounded-xl border border-slate-200 hover:border-crimson-300 hover:bg-slate-50 transition-colors group"
            >
              <span className="text-xs font-semibold text-amber-600 block mb-1">Emergency Protocols</span>
              <p className="text-sm font-bold text-slate-900 group-hover:text-crimson-600 transition-colors">
                Emergency Ice Dam Removal & Prevention in Maine
              </p>
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
