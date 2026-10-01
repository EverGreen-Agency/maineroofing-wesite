import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { business } from '@/config/business';
import { Snowflake, ShieldCheck, Phone, ArrowRight, Droplets, AlertTriangle, ThermometerSnowflake, Wrench, Search, HelpCircle, Eye, Hammer } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why Your Roof Only Leaks in January & February in Maine: Freeze-Thaw Science (2026)',
  description: 'Roof dry during summer storms but dripping during mid-winter? Learn the physics of Maine freeze-thaw cycles, capillary snowmelt leaks, attic frost, and emergency fixes.',
  keywords: [
    'freeze thaw roof leaks maine',
    'roof leaking in winter only maine',
    'capillary action roof leak snowmelt',
    'flashing expansion contraction winter leak',
    'attic frost condensation ceiling leak maine',
    'winter roof leak emergency repair portland me'
  ],
  openGraph: {
    title: 'Why Your Roof Only Leaks in January & February in Maine (Freeze-Thaw Science)',
    description: 'Forensic explanation of winter-only roof leaks in Maine: ice dam back-up, thermal flashing contraction, and attic frost melting. Stop interior ceiling damage.',
    images: [{ url: '/images/hero/ice-dam-removal-maine.png', width: 1200, height: 630, alt: 'Winter freeze thaw roof leak inspection in Maine' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/ice-dam-removal-maine.png'],
  }
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'Why does my Maine roof leak during winter snow but never during heavy summer thunderstorms?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Summer thunderstorms shed rapidly off the roof by gravity along downward-sloping shingles. In January and February, ice dams at the cold gutters trap meltwater, creating standing ponds. Because shingles are not watertight against standing water, hydrostatic pressure and capillary action force water backward and upward under the shingle laps, bypassing standard underlayment.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Can attic frost masquerade as a roof leak in winter?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. Warm, moist air escaping from living spaces into the attic condenses on sub-zero roof decking and turns into solid white frost. When outdoor temperatures briefly rise above freezing on a sunny January afternoon, that frost melts simultaneously across hundreds of square feet, dripping through ceiling drywall and exactly mimicking a massive active roof puncture.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Why do chimney and valley flashings leak more in sub-zero Maine temperatures?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Different materials contract at different rates when temperatures plunge from 35°F to -10°F. Aluminum and copper flashings shrink faster than brick masonry or timber roof trusses. This differential thermal movement tears brittle caulking and pulls counter-flashings away from mortar joints, creating micro-gaps for driven snowmelt to penetrate.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Is it safe to break ice dams with a hammer or pickaxe?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Never. Shingles become extremely brittle at sub-freezing temperatures. Striking ice dams with a hammer, axe, or shovel shatters shingle tabs, punctures underlayment, and voids manufacturer warranties. Only calibrated low-pressure hot water steamers should be used to cut drainage channels through ice dams.'
      }
    }
  ]
};

export default function FreezeThawRoofLeaksArticle() {
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
          <span className="text-slate-900">Freeze-Thaw Winter Leaks</span>
        </nav>

        {/* Header */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider">
            <ThermometerSnowflake className="w-3.5 h-3.5 text-blue-600" />
            Forensic Roof Diagnostics & Physics
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 leading-tight">
            Why Your Roof Only Leaks in January and February: The Science of Maine Freeze-Thaw Infiltration
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Your roof survived torrential July downpours without a single drop entering your home. But come mid-January, water suddenly begins staining your living room ceiling. Here is the exact physics behind Maine’s notorious winter-only leaks—and how to diagnose whether it’s an ice dam, flashing contraction, or attic frost.
          </p>
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-100 text-sm text-slate-500">
            <span>Published: October 2026</span>
            <span>•</span>
            <span>By Hassan & The Maine Roofing Scapes Forensic Inspection Division</span>
            <span>•</span>
            <span>Focus: Residential & Commercial Moisture Diagnostics</span>
          </div>
        </header>

        {/* Hero Visual */}
        <div className="relative aspect-16/9 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
          <Image
            src="/images/hero/ice-dam-removal-maine.png"
            alt="Forensic winter roof leak inspection on a snow-covered Maine roof"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
            <p className="text-white text-sm sm:text-base font-medium max-w-xl">
              Thermal scanning and gentle steam channel creation during a sub-zero January freeze-thaw emergency in Southern Maine.
            </p>
          </div>
        </div>

        {/* Quick Diagnostic Checklist Box */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-crimson-600 text-white">
              <Search className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold">The 3-Second Winter Leak Diagnostic</h2>
              <p className="text-xs text-slate-400">Match your symptoms to pinpoint the exact failure point</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="font-bold text-amber-400 text-xs uppercase tracking-wider block">Symptom 1</span>
              <h3 className="font-bold text-white text-sm">Leaking Near Outer Exterior Walls</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Almost certainly an <strong>Ice Dam</strong>. Water is trapped behind frozen gutters and climbing upward under the eaves.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="font-bold text-blue-400 text-xs uppercase tracking-wider block">Symptom 2</span>
              <h3 className="font-bold text-white text-sm">Leaking Around Chimney or Vent Pipe</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                <strong>Differential Thermal Contraction</strong>. Cold snap contracted metal flashings away from masonry or dried sealant joints.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="font-bold text-emerald-400 text-xs uppercase tracking-wider block">Symptom 3</span>
              <h3 className="font-bold text-white text-sm">Dripping in Middle of Room on Sunny Days</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                <strong>Attic Frost Condensation</strong>. Indoor warm moisture accumulated as frost on roof decking and is raining down as the sun heats the attic.
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: The Diurnal Freeze-Thaw Physics */}
        <section className="space-y-6 text-slate-700 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 flex items-center gap-3">
            <Droplets className="w-7 h-7 text-blue-600" />
            1. The Diurnal Cycle: How Gravity-Based Shingles Fail Against Water
          </h2>
          <p>
            Asphalt architectural shingles and cedar shakes are not waterproof membranes; they are <strong>water-shedding systems</strong>. They rely entirely on gravity to shed liquid downward before it can seep between overlapping courses.
          </p>
          <p>
            In Maine’s mid-winter climate, this gravity-first defense is shattered by the diurnal freeze-thaw rhythm:
          </p>
          <ul className="space-y-3 text-sm">
            <li className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong>1. Daytime Solar & Heat Loss Melt:</strong> Even in 25°F air, solar radiation heating dark shingles and attic heat loss warm the underside of the snow blanket, creating a constant trickle of water down the roof deck.
            </li>
            <li className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong>2. The Eave Dam Barrier:</strong> When that trickle reaches the overhang (which has no heated living space below it), temperature drops below 32°F instantly, freezing into an ice ridge.
            </li>
            <li className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong>3. Hydrostatic Capillary Back-Up:</strong> As the ice ridge grows into a dam, meltwater forms a pond. Standing water generates hydrostatic pressure, driving water <em>upward</em> beneath shingle laps by capillary action. Once past the nail line, water soaks the wood deck and enters your ceiling.
            </li>
          </ul>
        </section>

        {/* Section 2: Thermal Contraction */}
        <section className="space-y-6 text-slate-700 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 flex items-center gap-3">
            <ThermometerSnowflake className="w-7 h-7 text-crimson-600" />
            2. The Thermal Shock: Metal Flashings vs. Masonry & Wood
          </h2>
          <p>
            Few homeowners realize that buildings physically shrink during Maine’s extreme -10°F cold snaps. The problem is that different construction materials shrink at vastly different rates:
          </p>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <h3 className="font-bold text-slate-900 text-base">The Physics of Winter Joint Failure</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Aluminum and steel flashings have a thermal coefficient of expansion 3 to 5 times higher than red clay brick or structural lumber. When ambient temperatures plummet 40 degrees in 12 hours:
            </p>
            <ul className="text-xs space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Chimney step flashings:</strong> The metal contracts and pulls slightly away from the mortar reglet joint, cracking brittle silicone or urethane caulking applied during summer.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Plumbing vent boots:</strong> Neoprene rubber collars stiffen into brittle plastic under freezing cold, cracking along the pipe seal and allowing melting snow to trace the pipe straight to your bathroom ceiling.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: The Ghost Leak (Attic Frost) */}
        <section className="space-y-6 text-slate-700 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 flex items-center gap-3">
            <Eye className="w-7 h-7 text-indigo-600" />
            3. The "Ghost Leak": Attic Frost Condensation
          </h2>
          <p>
            Roughly 25% of the emergency winter leak calls we receive in Cumberland and Androscoggin County are not roof penetrations at all—they are <strong>attic ventilation and air sealing failures</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2">
              <h3 className="font-bold text-blue-950">How It Builds in Silence</h3>
              <p className="text-xs text-blue-900 leading-relaxed">
                Warm, moisture-laden air from showers, cooking, and human respiration escapes into the attic through unsealed can lights, attic hatches, and bath fans. In sub-zero weather, this water vapor instantly freezes to the cold plywood roof sheathing, building up a blanket of white frost up to an inch thick.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
              <h3 className="font-bold text-amber-950">The January Thaw Meltdown</h3>
              <p className="text-xs text-amber-900 leading-relaxed">
                On the first 40°F sunny afternoon in late January or February, that entire frost layer melts within 90 minutes. Gallons of water saturate attic insulation and pour through drywall seams across multiple rooms simultaneously.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: What NEVER to Do */}
        <section className="space-y-6 text-slate-700 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 flex items-center gap-3">
            <Hammer className="w-7 h-7 text-red-600" />
            4. Dangerous DIY Myths That Destroy Maine Roofs
          </h2>
          <div className="p-6 rounded-3xl bg-red-50 border border-red-200 space-y-4">
            <h3 className="text-lg font-bold text-red-950">Avoid These Common Winter Mistakes:</h3>
            <ul className="space-y-3 text-xs sm:text-sm text-red-900">
              <li className="flex items-start gap-2.5">
                <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <span><strong>No Axes, Shovels, or Pickaxes:</strong> At 15°F, asphalt shingles are like glass. Striking the ice with metal tools punctures the waterproof underlayment and snaps shingle corners, causing permanent leaks that won’t stop until full summer replacement.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <span><strong>No Rock Salt in Pantyhose:</strong> Rock salt (sodium chloride) chemically degrades asphalt shingle binders, corrodes aluminum gutters, and kills delicate landscaping and shrubbery below when saline meltwater drains off.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <span><strong>No Open Flame Blowtorches:</strong> Multiple New England structures suffer total fire loss every winter from homeowners attempting to melt frozen gutters with propane torches.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5: The Professional Solution */}
        <section className="space-y-6 text-slate-700 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 flex items-center gap-3">
            <Wrench className="w-7 h-7 text-emerald-600" />
            5. The Safe Professional Fix: Thermal Imaging & Low-Pressure Steam
          </h2>
          <p>
            When a freeze-thaw leak strikes, professional contractors utilize two non-invasive technologies:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900">1. FLIR Thermal Infrared Moisture Mapping</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pinpoints the exact path of wet insulation and moisture migration behind ceilings without tearing open drywall needlessly.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900">2. Low-Pressure Hot Water Steaming</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Uses 290°F steam at gentle low pressure (under 300 PSI) to slice through 18 inches of solid ice in minutes without abrading a single shingle granule.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 text-white space-y-6 shadow-2xl">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Emergency Winter Dispatch</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Active Winter Leak or Dam in Southern or Central Maine?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Don’t let January freeze-thaw cycles ruin your ceilings, insulation, and hardwood flooring. Our certified crews provide rapid thermal moisture inspection and non-destructive steam relief.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={business.phoneTel}
              className="px-6 py-4 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-crimson-900/40"
            >
              <Phone className="w-4 h-4" />
              <span>Call Direct 24/7: {business.displayPhone}</span>
            </a>
            <Link
              href="/contact"
              className="px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <span>Request Winter Leak Inspection</span>
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
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Related Diagnostic Guides</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/brown-water-stain-ceiling-after-snow-maine"
              className="p-4 rounded-xl border border-slate-200 hover:border-crimson-300 hover:bg-slate-50 transition-colors group"
            >
              <span className="text-xs font-semibold text-amber-600 block mb-1">Symptom Guide</span>
              <p className="text-sm font-bold text-slate-900 group-hover:text-crimson-600 transition-colors">
                Brown Water Stain on Ceiling After Snow: 4 Causes & Steps
              </p>
            </Link>
            <Link
              href="/blog/heating-cables-snow-guards-maine"
              className="p-4 rounded-xl border border-slate-200 hover:border-crimson-300 hover:bg-slate-50 transition-colors group"
            >
              <span className="text-xs font-semibold text-blue-600 block mb-1">Prevention Systems</span>
              <p className="text-sm font-bold text-slate-900 group-hover:text-crimson-600 transition-colors">
                Heating Cables & Snow Guards: Stop Eave Ice Dams
              </p>
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
