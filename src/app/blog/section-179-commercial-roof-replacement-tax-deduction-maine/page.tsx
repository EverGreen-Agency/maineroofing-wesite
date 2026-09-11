import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { business } from '@/config/business';
import { DollarSign, CheckCircle2, Phone, ArrowRight, ShieldCheck, FileText, Building2, Calculator, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Section 179 Commercial Roof Tax Deduction in Maine (2026 IRS Rules)',
  description: 'How Maine commercial property owners can write off 100% of roof replacements, TPO membranes, coatings, and repairs under IRS Section 179 and Bonus Depreciation.',
  keywords: [
    'section 179 commercial roof maine',
    'commercial roof replacement tax deduction',
    'irs section 179 commercial roofing 2026',
    'write off commercial roof expense maine',
    'tpo roof tax write off maine'
  ],
  openGraph: {
    title: 'Section 179 Commercial Roof Tax Deduction in Maine (2026 IRS Rules)',
    description: 'Write off 100% of your commercial roof replacement in Year One under IRS Section 179. Maine properties qualifying for immediate $31K–$122K+ tax savings.',
    images: [{ url: '/images/projects/doubletree-hilton-roof-restoration.jpg', width: 1200, height: 630, alt: 'Commercial Roof Restoration in South Portland Maine' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/projects/doubletree-hilton-roof-restoration.jpg'],
  }
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'Can a commercial roof replacement be deducted under IRS Section 179 in Maine?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. Under the Tax Cuts and Jobs Act (TCJA) and current IRS Section 179 guidelines, non-residential commercial roof replacements, repairs, and silicone coatings are classified as qualifying real property, allowing building owners to deduct the entire project cost in the year of installation rather than depreciating over 39 years.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What is the expense limit for Section 179 deductions in 2026?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'For the 2026 tax year, qualifying businesses can expense up to $1,220,000 of eligible equipment and improvements, with a phase-out threshold starting after $3,050,000 of total qualifying property purchases.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Do roof coatings and restorations qualify for Section 179?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. Fluid-applied commercial roof restoration systems (such as high-solids silicone and elastomeric acrylics) often qualify as either Section 179 deductions or standard single-year operational maintenance expenses under IRC Section 162, offering immediate tax relief.'
      }
    }
  ]
};

export default function Section179Article() {
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
          <span className="text-slate-900">Commercial Roof Tax Deductions</span>
        </nav>

        {/* Header */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <DollarSign className="w-3.5 h-3.5" />
            Commercial Finance & Tax Strategy
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 leading-tight">
            Section 179 Commercial Roof Tax Deduction: How Maine Business Owners Write Off 100% of Roof Costs
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Historically, replacing a commercial flat roof required a painful 39-year straight-line depreciation schedule. Thanks to the expanded IRS Section 179 framework, commercial property owners across Maine can now write off up to 100% of their roofing project within the very first tax year.
          </p>
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-100 text-sm text-slate-500">
            <span>Published: September 2026</span>
            <span>•</span>
            <span>By Hassan & The Maine Roofing Scapes Engineering Team</span>
            <span>•</span>
            <span>Target: Industrial, Multi-Family & Commercial Assets in Maine</span>
          </div>
        </header>

        {/* Featured Case Visual */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
          <Image
            src="/images/projects/doubletree-hilton-roof-restoration.jpg"
            alt="Commercial Flat Roof Replacement in South Portland Maine Qualifying for Section 179"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white">
              <span className="bg-crimson-600 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
                Maine Commercial Case Study
              </span>
              <p className="text-lg font-bold mt-2">
                120,000 sq ft Commercial Membrane in South Portland, ME — Full Year-One Deduction Captured
              </p>
            </div>
          </div>
        </div>

        {/* Executive Summary Card */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 space-y-4">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-emerald-400" />
            <h2 className="text-xl font-bold">The Bottom-Line Financial Advantage</h2>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            If your commercial facility in Portland, Lewiston, Bangor, or Saco invests <strong>$150,000</strong> in a new TPO, EPDM, or standing seam metal roof, traditional IRS rules only allowed you to deduct approximately $3,846 per year over 39 years. Under current Section 179 rules, you can deduct the entire $150,000 in Year One, resulting in up to <strong>$31,500 – $52,500 in immediate cash savings</strong> (depending on your federal and state tax bracket).
          </p>
        </div>

        {/* Section 1: How Section 179 Applies to Roofing */}
        <section className="space-y-6 text-slate-700 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
            <Building2 className="w-7 h-7 text-crimson-600" />
            What Qualifies Under Section 179 for Commercial Roofing?
          </h2>
          <p>
            Under IRS Code Section 179, qualifying property includes "Qualified Improvement Property" (QIP) and specific improvements to non-residential real property placed in service after the date the building was first placed in service. This specifically covers:
          </p>
          <ul className="grid sm:grid-cols-2 gap-4">
            <li className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-slate-950 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Commercial Flat Roofs
              </span>
              <p className="text-xs text-slate-600">Complete tear-offs and replacements using TPO (Thermoplastic Polyolefin), EPDM rubber, or PVC membranes.</p>
            </li>
            <li className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-slate-950 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Standing Seam Metal
              </span>
              <p className="text-xs text-slate-600">Heavy-gauge structural and architectural metal roofing installed on commercial warehouses and retail plazas.</p>
            </li>
            <li className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-slate-950 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Silicone Roof Coatings
              </span>
              <p className="text-xs text-slate-600">Fluid-applied high-solids silicone coatings that restore flat roofs can often be treated as 100% operational repairs.</p>
            </li>
            <li className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-slate-950 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Thermal Insulation Upgrades
              </span>
              <p className="text-xs text-slate-600">Adding polyiso (polyisocyanurate) rigid foam insulation boards to meet Maine’s R-30 commercial energy codes.</p>
            </li>
          </ul>
        </section>

        {/* Section 2: Comparison Table */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
            <Calculator className="w-7 h-7 text-crimson-600" />
            Comparison: Old 39-Year Depreciation vs. Section 179 Expensing
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-4 font-semibold">Cost of Commercial Roof</th>
                  <th className="p-4 font-semibold">Traditional 39-Yr Method</th>
                  <th className="p-4 font-semibold text-emerald-300">Section 179 First-Year Deduction</th>
                  <th className="p-4 font-semibold text-emerald-300">Estimated Cash Tax Savings*</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-white">
                  <td className="p-4 font-bold text-slate-950">$75,000 (Small Commercial / Strip Mall)</td>
                  <td className="p-4 text-slate-600">$1,923 / year</td>
                  <td className="p-4 font-bold text-emerald-700">$75,000 (100% year one)</td>
                  <td className="p-4 font-bold text-emerald-700">$15,750 – $26,250</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-bold text-slate-950">$150,000 (Warehouse / Hotel)</td>
                  <td className="p-4 text-slate-600">$3,846 / year</td>
                  <td className="p-4 font-bold text-emerald-700">$150,000 (100% year one)</td>
                  <td className="p-4 font-bold text-emerald-700">$31,500 – $52,500</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-bold text-slate-950">$350,000 (Large Distribution Center)</td>
                  <td className="p-4 text-slate-600">$8,974 / year</td>
                  <td className="p-4 font-bold text-emerald-700">$350,000 (100% year one)</td>
                  <td className="p-4 font-bold text-emerald-700">$73,500 – $122,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 italic">
            *Assumes an effective federal + Maine state combined corporate/pass-through tax bracket of 21% to 35%. Always consult with your certified CPA or tax advisor for your entity’s exact calculation.
          </p>
        </section>

        {/* Section 3: The "Placed in Service" Rule */}
        <section className="space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-slate-900">
            Critical Timing: The "Placed in Service" Deadline
          </h2>
          <p>
            To claim the tax deduction on your upcoming return, the roof replacement or coating must be <strong>fully completed and "placed in service"</strong> before midnight on December 31st of the tax year. 
          </p>
          <div className="p-5 rounded-xl bg-amber-50 border-l-4 border-amber-500 text-amber-900 text-sm">
            <strong>Maine Winter Warning:</strong> In Maine, commercial flat roofing installations (especially adhered TPO adhesives and silicone coatings) require temperature windows above 40°F–45°F to properly cure. Booking your commercial replacement or restoration before the deep freeze sets in ensures completion before the December 31 deadline.
          </div>
        </section>

        {/* Section 4: What Hassan & Maine Roofing Scapes Provide to Your CPA */}
        <section className="space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            <FileText className="w-6 h-6 text-crimson-600" />
            Documentation Provided for Your CPA & Accounting Records
          </h2>
          <p>
            Tax deductions require rigorous audit-proof documentation. When you partner with Maine Roofing Scapes & Repairs, we provide:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Itemized Commercial Invoicing:</strong> Clear separation of tear-off labor, membrane materials, R-value insulation, and flashing assemblies.</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Certificate of Completion & Date of Service:</strong> Official engineering sign-off stating the exact date the system was placed into operational service.</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Manufacturer NDL Warranty Paperwork:</strong> 20 to 30-year No Dollar Limit warranty documents corroborating long-term capital asset qualification.</span>
            </li>
          </ul>
        </section>

        {/* Commercial CTA Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-950 text-white border border-slate-800 space-y-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold">
                Planning a Commercial Roof Project in Maine?
              </h3>
              <p className="text-slate-400 text-sm max-w-xl">
                Get an itemized commercial proposal, core sampling analysis, and Section 179 qualification packet from Hassan and our commercial roofing team.
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
