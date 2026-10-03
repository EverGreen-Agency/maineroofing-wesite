import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { business } from '@/config/business';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { BeforeAfterSlider } from '@/components/showcase/BeforeAfterSlider';
import { 
  ShieldCheck, 
  Phone, 
  MapPin, 
  Building2, 
  Home, 
  Hammer, 
  Snowflake, 
  CheckCircle2, 
  Award, 
  Clock, 
  ArrowRight,
  Compass,
  Scale,
  Factory
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roofing Contractor Lewiston & Auburn ME | Commercial & Residential Experts',
  description: 'Top-rated roofing contractor serving Lewiston, Auburn, and Androscoggin County ME. Historic mill restorations, commercial flat roofs, standing seam metal, shingle replacement & ice dam services. Call (207) 383-1646.',
  keywords: [
    'roofing contractor lewiston maine',
    'roofing contractor auburn me',
    'commercial roofing lewiston me',
    'roof repair androscoggin county',
    'standing seam metal roof auburn maine',
    'mill roof restoration lewiston',
    'ice dam removal lewiston auburn me',
    'emergency roofer lewiston maine'
  ],
  openGraph: {
    title: 'Roofing Contractor Lewiston & Auburn ME | Maine Roofing Scapes & Repairs',
    description: 'Engineered for Central Maine inland snow packs and historic architecture. Commercial mill restorations, fluid coatings, and residential roof replacements across Lewiston-Auburn.',
    url: 'https://maineroofingscapesrepairs.com/service-areas/lewiston-auburn-me',
    images: [
      {
        url: '/images/hero/hero-roofer-inspection.png',
        width: 1200,
        height: 630,
        alt: 'Lewiston Auburn Maine Roofing Contractor Commercial and Residential Specialists',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/hero-roofer-inspection.png'],
  }
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  'name': 'Maine Roofing Scapes & Repairs - Lewiston-Auburn Service Division',
  'image': 'https://maineroofingscapesrepairs.com/images/hero/hero-roofer-inspection.png',
  'telephone': '+12073831646',
  'url': 'https://maineroofingscapesrepairs.com/service-areas/lewiston-auburn-me',
  'priceRange': '$$$',
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Lewiston',
    'addressRegion': 'ME',
    'postalCode': '04240',
    'addressCountry': 'US'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 44.1004,
    'longitude': -70.2148
  },
  'areaServed': [
    'Lewiston, ME',
    'Auburn, ME',
    'Lisbon, ME',
    'Lisbon Falls, ME',
    'Sabattus, ME',
    'Poland, ME',
    'Poland Spring, ME',
    'Turner, ME',
    'Minot, ME',
    'Greene, ME',
    'Androscoggin County, ME'
  ],
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    'opens': '00:00',
    'closes': '23:59'
  }
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'How do inland snow loads in Lewiston and Auburn compare to coastal Maine?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Lewiston-Auburn and inland Androscoggin County regularly experience higher ground snow loads (60 to 70 lbs/sq ft) than coastal Portland (40 to 50 lbs/sq ft). Because inland temperatures remain sub-freezing longer without ocean moderating effects, snow accumulates continuously across roof decks, requiring heavy-duty roof framing, high-gauge metal panels, and proactive winter snow removal.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Do you restore historic mill roofs and industrial commercial buildings in Lewiston-Auburn?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. We specialize in commercial flat roof restorations for historic brick mill complexes, warehouses, and industrial parks along the Androscoggin River. Using high-solids fluid silicone membranes, we restore aging flat roofs at 50% of the cost of full tear-offs without disrupting ongoing tenant operations.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How fast can an emergency roof repair crew arrive in Lewiston or Auburn?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Our local Central Maine crews are dispatched within 2 to 4 hours for active leaks, severe storm punctures, or structural snow deflection across Lewiston, Auburn, Lisbon, and surrounding Androscoggin communities.'
      }
    }
  ]
};

export default function LewistonAuburnServiceAreaPage() {
  return (
    <div className="bg-white">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-16 lg:py-24 border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/hero/hero-roofer-inspection.png"
            alt="Roofing contractor surveying commercial and residential projects in Lewiston Auburn Maine"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Headings & Value Props */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-crimson-950/80 border border-crimson-800/80 text-crimson-400 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-crimson-500" />
                <span>Androscoggin County • Lewiston & Auburn Division</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Top-Rated Roofing Contractor in{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-crimson-400 to-amber-300">
                  Lewiston & Auburn, ME
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Engineered for Central Maine inland snow packs, historic mill complexes, and multi-family structures. Delivering high-ROI commercial silicone restorations, standing seam metal roofs, and lifetime architectural shingles across the Twin Cities.
              </p>

              {/* Service Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
                  <Factory className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">Historic Mill Roofs</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-crimson-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">Commercial TPO & Silicone</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
                  <Snowflake className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">Inland Snow Load Defense</span>
                </div>
              </div>

              {/* Callouts */}
              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Licensed & Fully Insured in Maine</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>24/7 Emergency Storm Dispatch</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>50-Year Non-Prorated Warranties</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <a
                  href="#quote"
                  className="px-6 py-4 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-crimson-900/50"
                >
                  <span>Request Lewiston-Auburn Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={business.phoneTel}
                  className="px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm flex items-center justify-center gap-2.5 transition-colors"
                >
                  <Phone className="w-4 h-4 text-crimson-500" />
                  <span>{business.displayPhone}</span>
                </a>
              </div>
            </div>

            {/* Right Col: Quote Form */}
            <div className="lg:col-span-5" id="quote">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Before & After Transformation */}
      <BeforeAfterSlider />

      {/* Climate & Architecture Engineering */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-crimson-600">Central Maine Structural Engineering</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950">
              Why Roofing in Lewiston-Auburn Requires Heavy-Duty Specifications
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Inland Maine experiences deeper sustained snow accumulation, lower sub-zero temperatures, and unique architectural challenges across historic Androscoggin County:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Heavy Inland Snow Loads (65+ PSF)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Unlike coastal areas moderated by ocean air, snow in Lewiston-Auburn remains on roofs for months. We engineer trusses and standing seam clips for sustained 60-70 psf snow loads to prevent structural sagging and deck failure.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Historic Mill & Triple-Decker Flashing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Lewiston’s architectural heritage includes 19th-century brick mills and steep multi-family triple-deckers. We specialize in custom lead-coated copper flashings and chimney counter-flashings that bond permanently to aged brick masonry.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Industrial Flat Roof Silicone Coatings</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                For manufacturing plants and warehouses along Lisbon Street and Hotel Road, full roof tear-offs cause costly shutdowns. Our fluid silicone membranes restore industrial flat roofs at half the cost and qualify for 100% Year-One Section 179 tax deductions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Communities Served */}
      <section className="py-16 bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold">Serving the Twin Cities & Androscoggin County</h2>
            <p className="text-slate-400 text-sm">Emergency dispatch and full roofing installations across:</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Downtown Lewiston',
              'Auburn Heights',
              'New Auburn',
              'Lake Auburn',
              'Bates College District',
              'Lisbon',
              'Lisbon Falls',
              'Sabattus',
              'Poland Spring',
              'Turner',
              'Minot',
              'Greene',
              'Mechanic Falls',
              'Livermore Falls'
            ].map((area) => (
              <span key={area} className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm font-semibold">
                {area}
              </span>
            ))}
          </div>

          <div className="pt-6 text-center">
            <p className="text-slate-400 text-xs">
              Need immediate roofing assistance in Central Maine? Call our direct 24/7 line at{' '}
              <a href={business.phoneTel} className="text-crimson-400 font-bold hover:underline">
                {business.displayPhone}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Lewiston & Auburn Roofing Questions</h2>
          </div>

          <div className="space-y-4">
            {faqSchema.mainEntity.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base">{item.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
