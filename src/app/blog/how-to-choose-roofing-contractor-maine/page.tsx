import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { business } from '@/config/business';
import { ShieldCheck, CheckCircle2, AlertTriangle, FileText, Phone, ArrowRight, DollarSign, Scale, Award, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Choose a Roofing Contractor in Maine (2026 Checklist) | Maine Roofing',
  description: 'Avoid roofing scams and unqualified handymen. Discover Maine laws on roofing contracts, deposit limits, insurance verification, and 10 questions to ask before hiring.',
  keywords: [
    'how to choose roofing contractor maine',
    'maine roofing license requirements',
    'roofing contractor scams maine',
    'hire roofer portland maine',
    'maine home construction contracts act'
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'Does Maine require a state license for roofing contractors?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'No. The State of Maine does not have a general statewide contractor licensing board for roofers. Because almost anyone can register an LLC and claim to be a roofing contractor, homeowners must strictly verify local municipal registrations, manufacturer credentials, and request certificates of general liability and workers’ compensation insurance directly from the contractor’s insurance agent.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What is the legal limit for a roofing deposit in Maine?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Under Maine law (the Maine Home Construction Contracts Act, 10 M.R.S.A. § 1487), for any residential home improvement project exceeding $3,000, the initial down payment cannot legally exceed one-third (33.3%) of the total contract price. Any contractor demanding 50% or full upfront payment is in direct violation of Maine consumer protection law.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How can I verify if a Maine roofing contractor is reputable?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Call the commercial contractor pro desk at local Maine lumber supply yards such as Hammond Lumber or Hancock Lumber and ask if the contractor maintains an active, good-standing commercial account and pays their suppliers reliably. Also verify their active standing on the Maine Secretary of State corporate registry.'
      }
    }
  ]
};

export default function ChooseContractorArticle() {
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
          <span className="text-slate-900">Contractor Hiring Guide</span>
        </nav>

        {/* Article Header */}
        <header className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-100 text-slate-800">
            <Scale className="w-4 h-4 text-crimson-600" />
            <span>Consumer Protection &amp; Due Diligence Guide</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            How to Choose a Roofing Contractor in Maine (2026 Checklist): Licenses, Insurance, Local Scams &amp; Red Flags
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 pb-6 border-b border-slate-200">
            <span>Published: <strong>September 2026</strong></span>
            <span>•</span>
            <span>By: <strong>Maine Roofing Technical Team</strong></span>
            <span>•</span>
            <span>Estimated Reading Time: <strong>9 minutes</strong></span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md">
          <Image
            src="/images/hero/roof-inspection-crew.png"
            alt="Professional Roofing Contractor Conducting Roof Inspection in Maine"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Direct Answer Paragraph for AI Overviews / ChatGPT */}
        <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-slate-900 space-y-3">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
            Executive Summary: How to Protect Yourself in Maine
          </h2>
          <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
            Because <strong>Maine does not require a statewide general contractor license for roofing</strong>, vetting your contractor is essential. To protect your property: <strong>1) Never pay more than a 33.3% deposit</strong> (mandated by Maine 10 M.R.S.A. § 1487); <strong>2) Demand a Certificate of Insurance (COI)</strong> sent directly from their insurance broker covering General Liability ($1M+) and Workers&apos; Compensation; and <strong>3) Verify local supplier standing</strong> with regional lumber yards like Hammond Lumber or Hancock Lumber.
          </p>
        </div>

        {/* Article Body */}
        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed text-base sm:text-lg">
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              The Reality of Roofing in Maine: Why Due Diligence Is Non-Negotiable
            </h2>
            <p>
              Many Maine homeowners assume that anyone advertising roofing services has passed rigorous state examinations. In reality, Maine is one of a handful of states with no centralized contractor licensing board for residential or commercial roofers.
            </p>
            <p>
              This lack of barrier to entry means that every year, homeowners across Cumberland, York, Kennebec, and Androscoggin counties fall victim to fly-by-night operators, uninsured handymen, and predatory out-of-state storm chasers. A poorly installed roof not only fails to protect your home from Maine&apos;s winter snow loads and 130 mph coastal nor&apos;easters, but it can also void shingle manufacturer warranties and leave you legally liable if a worker is injured on your property.
            </p>
          </section>

          {/* Comparison Table */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Contractor Types Compared: Established Local vs. High-Risk Alternatives
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left border-collapse text-sm sm:text-base border border-slate-200">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 font-bold">Evaluation Factor</th>
                    <th className="p-4 font-bold text-emerald-400">Established Maine Specialist</th>
                    <th className="p-4 font-bold text-amber-300">Uninsured Local Handyman</th>
                    <th className="p-4 font-bold text-rose-400">Out-of-State Storm Chaser</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-white">
                    <td className="p-4 font-bold text-slate-900">Workers&apos; Comp Coverage</td>
                    <td className="p-4 text-emerald-700 font-bold">Verified policy for all crew members</td>
                    <td className="p-4 text-rose-600 font-semibold">None (Homeowner liable for falls)</td>
                    <td className="p-4 text-amber-700">Subcontracted to third parties</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Maine Contract Compliance</td>
                    <td className="p-4 text-emerald-700 font-bold">10 M.R.S.A. § 1487 written contract</td>
                    <td className="p-4 text-rose-600">Handshake or napkin quote</td>
                    <td className="p-4 text-rose-600">Aggressive &quot;Assignment of Benefits&quot;</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-bold text-slate-900">Deposit Requirement</td>
                    <td className="p-4 text-emerald-700 font-bold">Max 33% (Per Maine law)</td>
                    <td className="p-4 text-rose-600">Demands 50% to &quot;buy materials&quot;</td>
                    <td className="p-4 text-rose-600">Demands entire insurance check upfront</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Workmanship Warranty</td>
                    <td className="p-4 text-emerald-700 font-bold">10 to 25 years in writing</td>
                    <td className="p-4 text-rose-600">30 days or verbal promise</td>
                    <td className="p-4 text-rose-600">Disappears when storm season ends</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-bold text-slate-900">Local Supplier Standing</td>
                    <td className="p-4 text-emerald-700 font-bold">Active trade accounts at local yards</td>
                    <td className="p-4 text-slate-600">Retail cash-and-carry at big box stores</td>
                    <td className="p-4 text-slate-600">Out-of-state drop shipments</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 10-Point Vetting Checklist */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              The 10-Point Contractor Vetting Checklist
            </h2>
            <p>
              Before handing over any deposit or signing a contract, demand verified answers to these 10 criteria:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  1. Direct Broker Insurance Verification
                </div>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Never accept a paper photocopy of an insurance certificate. Have the contractor&apos;s insurance agency email the COI directly to you, naming you as an &quot;additional certificate holder.&quot;
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  2. Workers&apos; Comp vs. Ghost Policies
                </div>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Ensure the policy specifically covers roofing laborers. A &quot;ghost policy&quot; only covers the business owner, leaving you exposed if a laborer falls off your roof deck.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  3. Local Lumber Yard Credit Check
                </div>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Call Hammond Lumber or Hancock Lumber pro desks in Southern/Central Maine. Reputable contractors maintain active trade credit lines; shady contractors cannot get trade credit.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  4. Exact Shingle Specification in Writing
                </div>
                <p className="text-slate-600 text-xs sm:text-sm">
                  The contract must state the exact manufacturer brand, architectural model, wind rating (e.g. 130 mph), and color. Vague terms like &quot;30-year shingles&quot; allow contractors to substitute cheap materials.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  5. Ice &amp; Water Shield Eave Details
                </div>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Maine building code requires self-adhering ice barrier membrane to extend at least 24 inches inside the interior heated wall line. In heavy snow areas, 2 rows (6 feet) is standard practice.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  6. Wood Rot Replacement Rates
                </div>
                <p className="text-slate-600 text-xs sm:text-sm">
                  The contract must stipulate a fixed per-sheet price for replacing rotted CDX plywood decking (typically $85–$125 per sheet installed) to prevent extortionate surprise charges once your roof is torn off.
                </p>
              </div>
            </div>
          </section>

          {/* Maine Law Callout */}
          <section className="p-8 bg-amber-50 rounded-3xl border border-amber-200 space-y-3">
            <h3 className="text-xl font-bold text-amber-950 flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-700" />
              Know Your Legal Rights: Maine 10 M.R.S.A. § 1487
            </h3>
            <p className="text-amber-900 text-sm sm:text-base leading-relaxed">
              Under the <strong>Maine Home Construction Contracts Act</strong>, any home construction or roofing contract over $3,000 must be in writing and signed by both parties. It must include:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-amber-900 text-sm">
              <li>Estimated start and completion dates</li>
              <li>A down payment cap of no more than one-third of the total contract price</li>
              <li>A description of the work and materials to be used</li>
              <li>A warranty clause covering workmanship defects</li>
              <li>The Maine Attorney General&apos;s consumer protection advisory statement</li>
            </ul>
          </section>

          {/* FAQs */}
          <section className="space-y-6 pt-6">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Contractor Vetting FAQs
            </h2>
            <div className="space-y-4">
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <h3 className="text-lg font-bold text-slate-900">
                  What should I do if a contractor asks for 50% upfront?
                </h3>
                <p className="text-base text-slate-600">
                  Politely refuse and cite Maine Title 10, Chapter 219-A, which explicitly restricts residential construction deposits to a maximum of 33.3%. An established contractor with good supplier credit has no need for excessive upfront cash before materials arrive.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <h3 className="text-lg font-bold text-slate-900">
                  What makes Maine Roofing Scapes &amp; Repairs different?
                </h3>
                <p className="text-base text-slate-600">
                  We operate fully compliant with all Maine consumer protection laws, carry comprehensive general liability and full workers&apos; compensation coverage, offer transparent fixed per-sheet plywood rates, and provide itemized written estimates with zero high-pressure sales tactics.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Lead Conversion Card */}
        <div className="mt-12 p-8 sm:p-10 bg-crimson-50 rounded-3xl border-2 border-crimson-200 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-crimson-600 text-white">
            <Award className="w-3.5 h-3.5" />
            <span>Honest, Transparent Estimates</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Request an Itemized, No-Pressure Maine Roof Estimate
          </h2>
          <p className="text-slate-700 text-base">
            Get a clear, detailed estimate that outlines materials, labor, warranties, and fixed plywood replacement pricing upfront. No hidden fees, no deceptive sales pitches.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/#quote"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-white bg-crimson-600 hover:bg-crimson-700 shadow-md transition-all text-center"
            >
              Request Free Itemized Estimate
            </Link>
            <a
              href={business.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 transition-all text-center"
            >
              <Phone className="w-4 h-4 text-crimson-600" />
              Call {business.displayPhone}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
