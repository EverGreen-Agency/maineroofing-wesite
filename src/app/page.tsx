import Image from 'next/image';
import Link from 'next/link';
import { business } from '@/config/business';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { RoiCalculator } from '@/components/calculator/RoiCalculator';
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
  ArrowUpRight,
  Flame,
  AlertTriangle,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full max-w-full overflow-x-clip">
      {/* HERO SECTION */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-14 sm:py-20 lg:py-28">
        {/* Background Image with High-End Dark Cinematic Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/hero/hero-craftsman-sunset.png"
            alt="Maine Roofing Scapes & Repairs - Roofer working on Maine home at sunset"
            fill
            priority
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/75" />
          <div className="absolute inset-0 bg-radial from-crimson-600/10 via-transparent to-transparent opacity-40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Col: Compelling Copy & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider bg-crimson-600/20 text-crimson-400 border border-crimson-500/30 max-w-full shadow-sm">
                <ShieldCheck className="w-4 h-4 text-crimson-500 shrink-0" />
                <span className="truncate">Serving Maine & New Hampshire Property Owners Since 2021</span>
              </div>

              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white break-words">
                Built for Maine Winters. <br className="hidden sm:inline" />
                <span className="text-crimson-500">Engineered for Decades.</span>
              </h1>

              <p className="text-sm sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Specialized in high-ROI <strong>Commercial Roof Restorations</strong>, standing seam metal systems, and heavy-duty architectural shingles built to withstand nor&apos;easters, sub-zero freeze-thaw cycles, and heavy snowpacks.
              </p>

              {/* Responsive Double-Bezel Trust Micro-Cards */}
              <div className="grid grid-cols-1 xs:grid-cols-3 gap-2.5 pt-2">
                <div className="p-1 rounded-2xl bg-white/5 border border-white/10 shadow-xs">
                  <div className="rounded-xl bg-slate-900/80 p-2.5 flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="text-xs min-w-0">
                      <span className="block font-bold text-white truncate">Commercial</span>
                      <span className="text-slate-400 text-[10px] truncate block">DoubleTree Case</span>
                    </div>
                  </div>
                </div>

                <div className="p-1 rounded-2xl bg-white/5 border border-white/10 shadow-xs">
                  <div className="rounded-xl bg-slate-900/80 p-2.5 flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0">
                      <Snowflake className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="text-xs min-w-0">
                      <span className="block font-bold text-white truncate">Ice Dam Care</span>
                      <span className="text-slate-400 text-[10px] truncate block">Safe Steam Clearing</span>
                    </div>
                  </div>
                </div>

                <div className="p-1 rounded-2xl bg-white/5 border border-white/10 shadow-xs">
                  <div className="rounded-xl bg-slate-900/80 p-2.5 flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
                      <Hammer className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-xs min-w-0">
                      <span className="block font-bold text-white truncate">100% Roofing</span>
                      <span className="text-slate-400 text-[10px] truncate block">No siding / gutters</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nested Button-in-Button Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                <a
                  href="#quote"
                  className="group inline-flex items-center justify-between sm:justify-center gap-3 pl-6 pr-2.5 py-3.5 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider text-white bg-crimson-600 hover:bg-crimson-700 shadow-xl shadow-crimson-600/30 active:scale-[0.98] transition-all text-center"
                >
                  <span className="truncate">Request Free Inspection & Quote</span>
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </span>
                </a>

                <a
                  href={business.phoneTel}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm text-white bg-slate-900/90 hover:bg-slate-850 border border-white/15 shadow-md active:scale-[0.98] transition-all text-center"
                >
                  <Phone className="w-4 h-4 text-crimson-400" />
                  <span>Call {business.displayPhone}</span>
                </a>
              </div>
            </div>

            {/* Right Col: Instant Quote Form */}
            <div className="lg:col-span-5 w-full min-w-0">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDY: COMMERCIAL ROOF RESTORATION (DOUBLETREE HILTON) */}
      <section className="py-20 lg:py-28 bg-slate-950 text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30 mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>Commercial High-Ticket Milestone</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                DoubleTree by Hilton Hotel Complex: <br />
                <span className="text-crimson-500">Commercial Roof Restoration</span>
              </h2>
            </div>
            <Link
              href="/roof-restoration"
              className="inline-flex items-center gap-2 font-bold text-sm text-amber-400 hover:text-amber-300 group shrink-0"
            >
              <span>Explore Commercial Restoration Solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Double-Bezel Showcase Container */}
          <div className="p-2 sm:p-3 rounded-[2.5rem] bg-gradient-to-b from-white/15 to-white/5 border border-white/10 shadow-2xl">
            <div className="rounded-[calc(2.5rem-0.5rem)] bg-slate-900 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[480px]">
                <Image
                  src="/images/projects/doubletree-hilton-roof-restoration.jpg"
                  alt="DoubleTree by Hilton Commercial Flat Roof Restoration Project"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-white/10">
                  Verified Project • Maine Roofing Scapes & Repairs
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-10 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Hospitality & Commercial Facilities
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
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
                    className="group inline-flex items-center justify-between w-full py-3.5 pl-6 pr-3 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider text-white bg-crimson-600 hover:bg-crimson-700 shadow-xl shadow-crimson-600/30 active:scale-[0.98] transition-all"
                  >
                    <span>Schedule Commercial Roof Survey</span>
                    <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive B2B ROI Calculator Component */}
          <div className="pt-6">
            <RoiCalculator />
          </div>
        </div>
      </section>

      {/* CORE SERVICES MATRIX (DUAL FUNNEL: COMMERCIAL & RESIDENTIAL) */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-crimson-50 text-crimson-700 border border-crimson-200">
              <Sparkles className="w-3.5 h-3.5 text-crimson-600" />
              <span>Engineered Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Specialized Roofing Services for Maine & New Hampshire
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We focus 100% on roofing. No siding, no gutters. Pure structural protection built for harsh New England winters and certified warranties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Service 1: Commercial Roof Restoration */}
            <div className="p-1.5 rounded-[2rem] bg-gradient-to-b from-amber-500/20 via-slate-100 to-slate-100 border border-amber-500/30 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between">
              <div className="rounded-[calc(2rem-0.375rem)] bg-white p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center shadow-xs">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                      Commercial Top ROI
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-2">
                      Commercial Roof Restoration
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Avoid the immense disruption and expense of a complete tear-off. High-performance liquid silicone coatings seal commercial flat roofs against leaks for 15+ years.
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
            </div>

            {/* Service 2: Standing Seam Metal Roofing */}
            <div className="p-1.5 rounded-[2rem] bg-gradient-to-b from-slate-300 via-slate-100 to-slate-100 border border-slate-200 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between">
              <div className="rounded-[calc(2rem-0.375rem)] bg-white p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-xs">
                    <Hammer className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full">
                      Lifetime Residential
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-2">
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
            </div>

            {/* Service 3: Winter Ice Dam Removal & Care */}
            <div className="p-1.5 rounded-[2rem] bg-gradient-to-b from-blue-500/20 via-slate-100 to-slate-100 border border-blue-500/30 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between relative overflow-hidden">
              <div className="rounded-[calc(2rem-0.375rem)] bg-white p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center shadow-xs">
                    <Snowflake className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
                      Winter Emergency
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-2">
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
            </div>

            {/* Service 4: Asphalt Shingle Replacement */}
            <div className="p-1.5 rounded-[2rem] bg-gradient-to-b from-slate-300 via-slate-100 to-slate-100 border border-slate-200 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between">
              <div className="rounded-[calc(2rem-0.375rem)] bg-white p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center shadow-xs">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full">
                      Residential Standard
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-2">
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
            </div>

            {/* Service 5: Commercial Flat Roofing (TPO/EPDM) */}
            <div className="p-1.5 rounded-[2rem] bg-gradient-to-b from-slate-300 via-slate-100 to-slate-100 border border-slate-200 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between">
              <div className="rounded-[calc(2rem-0.375rem)] bg-white p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-xs">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full">
                      Commercial Systems
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-2">
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
            </div>

            {/* Service 6: Leak & Freeze-Thaw Repair */}
            <div className="p-1.5 rounded-[2rem] bg-gradient-to-b from-crimson-500/20 via-slate-100 to-slate-100 border border-crimson-500/30 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between">
              <div className="rounded-[calc(2rem-0.375rem)] bg-white p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-crimson-50 text-crimson-600 flex items-center justify-center shadow-xs">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-crimson-700 bg-crimson-50 px-2 py-0.5 rounded-full">
                      Emergency Dispatch
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-2">
                      Leak & Storm Damage Repair
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Active leaks, wind-blown flashings, and chimney seal failures fixed fast. We find the source and repair it permanently with photo-documented evidence.
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
        </div>
      </section>

      {/* REAL PROJECT GALLERY SHOWCASE */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-slate-100 text-slate-700 mb-3">
                <Hammer className="w-3.5 h-3.5" />
                <span>Real Craftsmanship • Real Jobsites</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Recent Projects Across Maine & New Hampshire
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-bold text-sm text-crimson-600 hover:text-crimson-700 group shrink-0"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="p-1.5 rounded-[2rem] bg-gradient-to-b from-slate-200 to-slate-100 border border-slate-200 shadow-sm hover:shadow-xl transition-all group overflow-hidden">
              <div className="rounded-[calc(2rem-0.375rem)] bg-white overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/projects/standing-seam-metal-01.jpg"
                    alt="Standing Seam Metal Roof Installation in Maine"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-xs font-bold text-crimson-600 uppercase">Metal Roofing</span>
                  <h4 className="text-base font-bold text-slate-900">Residential Standing Seam Installation</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Custom-fabricated charcoal standing seam panels designed for heavy snow and sub-zero freeze cycles.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-1.5 rounded-[2rem] bg-gradient-to-b from-slate-200 to-slate-100 border border-slate-200 shadow-sm hover:shadow-xl transition-all group overflow-hidden">
              <div className="rounded-[calc(2rem-0.375rem)] bg-white overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/projects/residential-shingle-01.jpg"
                    alt="Architectural Shingle Replacement in Maine"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-xs font-bold text-slate-700 uppercase">Roof Replacement</span>
                  <h4 className="text-base font-bold text-slate-900">Architectural Shingle Tear-Off & Deck Repair</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Rotten plywood substrate replaced with continuous ice barrier and high-definition shingles.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="p-1.5 rounded-[2rem] bg-gradient-to-b from-slate-200 to-slate-100 border border-slate-200 shadow-sm hover:shadow-xl transition-all group overflow-hidden">
              <div className="rounded-[calc(2rem-0.375rem)] bg-white overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/projects/chimney-flashing-01.jpg"
                    alt="Chimney Flashing and Roof Repair in Maine"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase">Precision Repair</span>
                  <h4 className="text-base font-bold text-slate-900">Masonry Chimney Flashing & Valley Seal</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Eliminated persistent freeze-thaw leaks with step flashing and custom copper counter-flashing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (CITABLE CONTENT FOR AI & GEO) */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-slate-200 text-slate-800">
              <span>Clarity & Common Inquiries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-1 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="p-5 sm:p-6 space-y-2">
                <h3 className="text-base font-bold text-slate-900">
                  What roofing services does Maine Roofing Scapes & Repairs provide?
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Maine Roofing Scapes & Repairs specializes in commercial roof restoration, commercial flat roofing (TPO and EPDM), residential architectural shingle replacement, standing seam metal roofing, leak diagnostics, and winter ice dam removal. The company operates as a dedicated roofing contractor and does NOT install or service gutters or siding.
                </p>
              </div>
            </div>

            <div className="p-1 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="p-5 sm:p-6 space-y-2">
                <h3 className="text-base font-bold text-slate-900">
                  What areas in Maine and New Hampshire do you cover?
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We provide residential roofing and emergency repairs throughout the entire state of Maine (including Portland, Lewiston, Bangor, Augusta, Auburn, Biddeford, Sanford, Windham, and Brunswick) and New Hampshire (Manchester, Portsmouth, Nashua). For high-value commercial roof restorations and inspections, our senior estimators travel throughout the New England region (ME, NH, MA, VT, RI).
                </p>
              </div>
            </div>

            <div className="p-1 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="p-5 sm:p-6 space-y-2">
                <h3 className="text-base font-bold text-slate-900">
                  Why is commercial roof restoration better than a full tear-off?
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Commercial roof restoration applies an engineered elastomeric or silicone membrane directly over an existing structurally sound flat roof. This eliminates the massive labor, landfill costs, and business interruption of a complete tear-off—saving property owners 40% or more while extending the roof&apos;s leak-free lifespan by 15 to 20 years with certified warranty coverage.
                </p>
              </div>
            </div>

            <div className="p-1 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="p-5 sm:p-6 space-y-2">
                <h3 className="text-base font-bold text-slate-900">
                  How do you handle winter ice dams and roof leaks in Maine?
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  In winter, freeze-thaw cycles cause meltwater to back up under cold eaves, creating damaging ice dams. We use safe, low-pressure steam machines to melt the ice without hammering or damaging shingles. We also install snow guards, self-regulating heating cables, and diagnose attic ventilation to prevent recurrence.
                </p>
              </div>
            </div>

            <div className="p-1 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="p-5 sm:p-6 space-y-2">
                <h3 className="text-base font-bold text-slate-900">
                  How quickly can an estimator inspect my roof?
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  For urgent leaks and storm damage, we offer same-day emergency dispatch. For commercial roof restoration surveys and residential replacement estimates, our crews typically complete multi-point inspections within 24 to 48 hours. Call our dispatch hotline at (207) 383-1646 for immediate priority scheduling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CONVERSION CALLOUT BANNER */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-crimson-600/15 via-transparent to-transparent opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Ready to Protect Your Maine Property with Proven Craftsmanship?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Get your comprehensive multi-point inspection report and transparent quote. Commercial restoration teams and residential repair crews ready for immediate dispatch across Maine and New Hampshire.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#quote"
              className="group inline-flex items-center justify-between sm:justify-center gap-3 w-full sm:w-auto pl-7 pr-3 py-4 rounded-full bg-crimson-600 hover:bg-crimson-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-crimson-600/30 active:scale-[0.98] transition-all"
            >
              <span>Get Free Roofing Assessment</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </span>
            </a>

            <a
              href={business.phoneTel}
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-4 rounded-full bg-slate-900 hover:bg-slate-850 text-white font-bold text-xs sm:text-sm border border-white/15 shadow-xl active:scale-[0.98] transition-all"
            >
              <Phone className="w-4 h-4 text-crimson-400" />
              <span>Call Dispatch: {business.displayPhone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
