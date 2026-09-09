import Image from 'next/image';
import Link from 'next/link';
import { business } from '@/config/business';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { 
  ShieldCheck, 
  Phone, 
  Snowflake, 
  Building2, 
  Home, 
  Hammer, 
  Award, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Flame,
  AlertTriangle,
  ChevronRight
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-16 lg:py-24">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-craftsman-sunset.png"
            alt="Maine Roofing Scapes & Repairs - Roofer working on Maine home at sunset"
            fill
            priority
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/85 to-slate-950/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Col: Compelling Copy & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-crimson-600/20 text-crimson-400 border border-crimson-500/30">
                <ShieldCheck className="w-4 h-4 text-crimson-500" />
                <span>Serving Maine & New Hampshire Property Owners Since 2021</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Built for Maine Winters. <br />
                <span className="text-crimson-500">Engineered for Decades.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
                Specialized in high-ROI <strong>Commercial Roof Restorations</strong>, standing seam metal systems, and heavy-duty architectural shingles built to withstand nor&apos;easters, sub-zero freeze-thaw cycles, and heavy snowpacks.
              </p>

              {/* Trust badges row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4 text-crimson-400" />
                  </div>
                  <div className="text-xs">
                    <span className="block font-bold text-white">Commercial Restoration</span>
                    <span className="text-slate-400">DoubleTree Hilton Case</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Snowflake className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="text-xs">
                    <span className="block font-bold text-white">Winter Ice Dam Care</span>
                    <span className="text-slate-400">Safe Steam Removal</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Hammer className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-xs">
                    <span className="block font-bold text-white">100% Roofing Focus</span>
                    <span className="text-slate-400">No siding, no gutters</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-black text-base text-white bg-crimson-600 hover:bg-crimson-700 shadow-xl hover:shadow-crimson-600/30 transition-all text-center"
                >
                  Request a Free Inspection & Quote
                </a>

                <a
                  href={business.phoneTel}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-base text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 transition-colors text-center"
                >
                  <Phone className="w-5 h-5 text-crimson-500" />
                  <span>{business.displayPhone}</span>
                </a>
              </div>
            </div>

            {/* Right Col: Instant Quote Form */}
            <div className="lg:col-span-5">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDY: COMMERCIAL ROOF RESTORATION (DOUBLETREE HILTON) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-100 text-amber-900 mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>Featured Commercial Milestone</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                DoubleTree by Hilton Hotel Complex: <br />
                <span className="text-crimson-600">Full Commercial Roof Restoration</span>
              </h2>
            </div>
            <Link
              href="/roof-restoration"
              className="inline-flex items-center gap-2 font-bold text-sm text-crimson-600 hover:text-crimson-700 group"
            >
              <span>Explore Commercial Restoration Solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950 text-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="lg:col-span-7 relative h-80 sm:h-[480px]">
              <Image
                src="/images/projects/doubletree-hilton-roof-restoration.jpg"
                alt="DoubleTree by Hilton Commercial Flat Roof Restoration Project"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-700">
                Verified Project • Maine Roofing Scapes & Repairs
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Hospitality & Commercial Facilities
                </span>
                <h3 className="text-2xl font-black text-white">
                  Restoration vs. Costly Tear-Off: Saving 40%+ with Seamless Liquid Membranes
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Complete roof replacements on commercial properties disrupt operations, require heavy landfill disposal, and cost tens of thousands more. Our engineered fluid-applied restoration system sealed every parapet, HVAC curb, and seam—creating a monolithic, weather-impervious barrier backed by extended warranties.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-800">
                <div>
                  <div className="text-2xl font-black text-white">15–20 Yrs</div>
                  <div className="text-xs text-slate-400">Added Roof Lifespan</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-emerald-400">40%+</div>
                  <div className="text-xs text-slate-400">Cost Savings vs Tear-Off</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/roof-restoration"
                  className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-sm shadow-md transition-colors"
                >
                  Schedule a Commercial Roof Survey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES MATRIX (DUAL FUNNEL: COMMERCIAL & RESIDENTIAL) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-crimson-600">
              Our Core Disciplines
            </h2>
            <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Specialized Roofing Services for Maine & New Hampshire
            </p>
            <p className="text-slate-600 text-base">
              We focus 100% on roofing. No siding, no gutters. Pure structural protection built for harsh New England winters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1: Commercial Roof Restoration */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-200 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                    Commercial High-ROI
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Commercial Roof Restoration
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Avoid the immense disruption and expense of a complete tear-off. High-performance coatings seal commercial flat roofs against leaks for 15+ years.
                </p>
              </div>
              <Link
                href="/roof-restoration"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-crimson-600 group-hover:text-crimson-700"
              >
                <span>Learn About Restoration</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Service 2: Standing Seam Metal Roofing */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-200 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                  <Hammer className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                    Lifetime Residential
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Standing Seam Metal Roofs
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The ultimate defense against Maine blizzards. Sheds snow loads automatically, resists high winds, and permanently eliminates ice dam formations.
                </p>
              </div>
              <Link
                href="/metal-roofing"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-crimson-600 group-hover:text-crimson-700"
              >
                <span>Metal Roofing Options</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Service 3: Winter Ice Dam Removal & Care */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-blue-200 transition-all flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-bl-lg">
                WINTER URGENT
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
                  <Snowflake className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                    Seasonal Emergency
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Ice Dam Removal & Steam Clearing
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Safe low-pressure steam clears ice dams without puncturing shingles. Snow guard installations and self-regulating heating cables stop recurrent winter interior leaks.
                </p>
              </div>
              <Link
                href="/ice-dam-removal"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-700"
              >
                <span>Winter Emergency Care</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Service 4: Asphalt Shingle Replacement */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-200 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                    Residential Standard
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Asphalt Shingle Roof Replacement
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Heavy-duty architectural shingles with reinforced ice & water underlayments. Installed strictly to local building codes for coastal and inland Maine homes.
                </p>
              </div>
              <Link
                href="/roof-replacement"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-crimson-600 group-hover:text-crimson-700"
              >
                <span>Shingle Replacement Details</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Service 5: Commercial Flat Roofing (TPO/EPDM) */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-200 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                    Commercial Systems
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Commercial TPO & EPDM Roofing
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Single-ply membrane installations for industrial warehouses, shopping centers, and municipal facilities engineered to handle standing water and heavy snow.
                </p>
              </div>
              <Link
                href="/commercial-roofing"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-crimson-600 group-hover:text-crimson-700"
              >
                <span>Commercial Roofing Info</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Service 6: Leak & Freeze-Thaw Repair */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-200 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-crimson-50 text-crimson-600 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-crimson-700 bg-crimson-50 px-2 py-0.5 rounded">
                    Emergency Dispatch
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Leak & Storm Damage Repair
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Active goteiras, wind-blown flashings, and chimney seal failures fixed fast. We find the source and repair it permanently with photo-documented evidence.
                </p>
              </div>
              <Link
                href="/roof-repair"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-crimson-600 group-hover:text-crimson-700"
              >
                <span>Repair Services</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REAL PROJECT GALLERY SHOWCASE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-crimson-600 mb-2">
                Real Craftsmanship • Real Jobsites
              </h2>
              <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Recent Projects Across Maine & New Hampshire
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-bold text-sm text-crimson-600 hover:text-crimson-700 group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 group hover:shadow-lg transition-all">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/projects/standing-seam-metal-01.jpg"
                  alt="Standing Seam Metal Roof Installation in Maine"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 space-y-2">
                <span className="text-xs font-bold text-crimson-600 uppercase">Metal Roofing</span>
                <h4 className="text-base font-bold text-slate-900">Residential Standing Seam Installation</h4>
                <p className="text-xs text-slate-500">
                  Custom-fabricated charcoal standing seam panels designed for heavy snow and sub-zero freeze cycles.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 group hover:shadow-lg transition-all">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/projects/residential-shingle-01.jpg"
                  alt="Architectural Shingle Replacement in Maine"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 space-y-2">
                <span className="text-xs font-bold text-slate-700 uppercase">Roof Replacement</span>
                <h4 className="text-base font-bold text-slate-900">Architectural Shingle Tear-Off & Deck Repair</h4>
                <p className="text-xs text-slate-500">
                  Rotten plywood substrate replaced with continuous ice barrier and high-definition shingles.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 group hover:shadow-lg transition-all">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/projects/chimney-flashing-01.jpg"
                  alt="Chimney Flashing and Roof Repair in Maine"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 space-y-2">
                <span className="text-xs font-bold text-emerald-700 uppercase">Precision Repair</span>
                <h4 className="text-base font-bold text-slate-900">Masonry Chimney Flashing & Valley Seal</h4>
                <p className="text-xs text-slate-500">
                  Eliminated persistent freeze-thaw goteiras with step flashing and custom copper counter-flashing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (CITABLE CONTENT FOR AI & GEO) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-crimson-600">
              Clarity & Common Questions
            </h2>
            <p className="text-3xl font-black text-slate-900">
              Frequently Asked Questions
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
              <h3 className="text-base font-bold text-slate-900">
                What roofing services does Maine Roofing Scapes & Repairs provide?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Maine Roofing Scapes & Repairs specializes in commercial roof restoration, commercial flat roofing (TPO and EPDM), residential architectural shingle replacement, standing seam metal roofing, leak diagnostics, and winter ice dam removal. The company operates as a dedicated roofing contractor and does NOT install or service gutters or siding.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
              <h3 className="text-base font-bold text-slate-900">
                What areas in Maine and New Hampshire do you cover?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We provide residential roofing and emergency repairs throughout the entire state of Maine (including Portland, Lewiston, Bangor, Augusta, Auburn, Biddeford, Sanford, Windham, and Brunswick) and New Hampshire (Manchester, Portsmouth, Nashua). For high-value commercial roof restorations and inspections, our senior estimators travel throughout the New England region (ME, NH, MA, VT, RI).
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
              <h3 className="text-base font-bold text-slate-900">
                Why is commercial roof restoration better than a full tear-off?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Commercial roof restoration applies an engineered elastomeric or silicone membrane directly over an existing structurally sound flat roof. This eliminates the massive labor, landfill costs, and business interruption of a complete tear-off—saving property owners 40% or more while extending the roof&apos;s leak-free lifespan by 15 to 20 years with certified warranty coverage.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
              <h3 className="text-base font-bold text-slate-900">
                How do you handle winter ice dams and roof leaks in Maine?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                In winter, freeze-thaw cycles cause meltwater to back up under cold eaves, creating damaging ice dams. We use safe, low-pressure steam machines to melt the ice without hammering or damaging shingles. We also install snow guards, self-regulating heating cables, and diagnose attic ventilation to prevent recurrence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
              <h3 className="text-base font-bold text-slate-900">
                How quickly can an estimator inspect my roof?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                For urgent leaks and storm damage, we offer same-day emergency dispatch. For commercial roof restoration surveys and residential replacement estimates, our crews typically complete multi-point inspections within 24 to 48 hours. Call our dispatch hotline at (207) 383-1646 for immediate priority scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CONVERSION CALLOUT BANNER */}
      <section className="bg-crimson-600 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Ready to Protect Your Maine Property with Proven Craftsmanship?
          </h2>
          <p className="text-crimson-100 max-w-2xl mx-auto text-base">
            Get your comprehensive inspection report and transparent quote. Commercial and residential crews ready for dispatch across Maine and New Hampshire.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#quote"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-black text-sm shadow-xl transition-colors"
            >
              Get My Free Roofing Estimate
            </a>
            <a
              href={business.phoneTel}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-black text-sm shadow-xl transition-colors"
            >
              <Phone className="w-4 h-4 text-crimson-600" />
              <span>Call {business.displayPhone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
