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
  Scale
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roofing Contractor Portland Maine | Commercial & Residential Specialists',
  description: 'Top-rated roofing contractor serving Portland, South Portland, and Cumberland County ME. Commercial roof restoration, standing seam metal, shingle replacement, and winter ice dam clearing. Call (207) 383-1646.',
  keywords: [
    'roofing contractor portland maine',
    'commercial roofing portland me',
    'roof repair portland maine',
    'standing seam metal roof portland me',
    'flat roof restoration south portland',
    'ice dam removal portland maine',
    'emergency roofer portland me'
  ],
  openGraph: {
    title: 'Roofing Contractor Portland Maine | Maine Roofing Scapes & Repairs',
    description: 'Engineered for Casco Bay winds and Atlantic winter freezes. High-ROI commercial restorations and lifetime residential roofing across Portland and Cumberland County.',
    url: 'https://maineroofingscapesrepairs.com/service-areas/portland-me',
    images: [
      {
        url: '/images/hero/hero-residential-coastal.png',
        width: 1200,
        height: 630,
        alt: 'Portland Maine Roofing Contractor Commercial and Residential Installations',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/hero-residential-coastal.png'],
  }
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  'name': 'Maine Roofing Scapes & Repairs - Portland Service Division',
  'image': 'https://maineroofingscapesrepairs.com/images/hero/hero-residential-coastal.png',
  'telephone': '+12073831646',
  'url': 'https://maineroofingscapesrepairs.com/service-areas/portland-me',
  'priceRange': '$$$',
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Portland',
    'addressRegion': 'ME',
    'postalCode': '04101',
    'addressCountry': 'US'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 43.6591,
    'longitude': -70.2568
  },
  'areaServed': [
    'Portland, ME',
    'South Portland, ME',
    'Cape Elizabeth, ME',
    'Scarborough, ME',
    'Westbrook, ME',
    'Falmouth, ME',
    'Cumberland County, ME'
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
      'name': 'Why do Portland Maine roofs face unique climate risks?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Portland is directly exposed to Casco Bay coastal nor’easters with sustained 60-70+ mph winds, corrosive salt air, and rapid freeze-thaw cycles. Shingles require Class F wind ratings (up to 130 mph) and double-layer ice & water shields along all eaves to prevent winter leaks.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Do you offer emergency winter ice dam removal in Portland ME?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. We provide 24/7 rapid emergency dispatch across Portland, South Portland, and Cumberland County using gentle, low-pressure steam to clear ice dams without damaging shingles.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What commercial roofing systems do you install in South Portland and Portland industrial parks?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'We specialize in fluid-applied silicone roof restorations (saving up to 50% vs tear-off, as demonstrated at the DoubleTree by Hilton), single-ply TPO, and durable EPDM rubber membranes for industrial warehouses and office parks.'
      }
    }
  ]
};

export default function PortlandServiceAreaPage() {
  return (
    <div className="flex flex-col w-full max-w-full overflow-x-clip">
      {/* Schema Microdata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-residential-coastal.png"
            alt="Portland Maine Coastal Roofing Contractor"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Col: Local Hook & Authority */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-crimson-600/20 text-crimson-400 border border-crimson-500/30">
                <MapPin className="w-3.5 h-3.5" />
                <span>Portland & Cumberland County Roofing Specialists</span>
              </div>

              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Portland Maine Roofing Contractor: <br />
                <span className="text-crimson-500">Commercial & Coastal Residential</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                From the historic brick Victorians of the West End and Munjoy Hill to the industrial warehouse flat roofs of South Portland and Westbrook, Maine Roofing Scapes & Repairs delivers engineered roof restorations, standing seam metal, and rapid storm leak repairs.
              </p>

              {/* Local Proof Micro-Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
                  <div className="text-xl font-black text-emerald-400">130 MPH</div>
                  <div className="text-xs text-slate-400">Coastal Wind Resistance</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
                  <div className="text-xl font-black text-white">24/7</div>
                  <div className="text-xs text-slate-400">Winter Storm Dispatch</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl col-span-2 sm:col-span-1">
                  <div className="text-xl font-black text-amber-400">DoubleTree</div>
                  <div className="text-xs text-slate-400">South Portland Project</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#quote"
                  className="px-8 py-4 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-sm shadow-xl shadow-crimson-600/30 transition-all active:scale-[0.98]"
                >
                  Schedule Portland Roof Survey
                </a>
                <a
                  href={business.phoneTel}
                  className="px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm flex items-center gap-2.5 transition-colors"
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

      {/* Portland Specific Climate Challenges */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-crimson-600">Local Climate Engineering</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950">
              Why Roofing in Greater Portland Demands Marine-Grade Specifications
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Standard inland roofing techniques fail early along Casco Bay. We build strictly to Cumberland County’s environmental realities:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Nor’easter Gale-Force Winds</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Winter blizzards and autumn nor’easters frequently deliver 60 to 75 mph wind gusts off the Atlantic. We use 6-nail enhanced fastening patterns and ASTM D3161 Class F shingles rated to 130 mph to prevent blow-offs.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Snowflake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Severe Coastal Freeze-Thaw Cycles</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Portland experiences dozens of rapid freeze-thaw cycles between December and March. Melting snow runs down to frozen eaves, backing up under shingles. We install full ice-and-water shields 6 feet up all eaves to stop interior leaks.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Commercial Flat Roof Ponding</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Industrial and commercial buildings in South Portland and Westbrook often suffer from roof ponding water that freezes into thick ice sheets. Our fluid-applied silicone coatings create a monolithic, jointless membrane impervious to standing water.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Communities Served */}
      <section className="py-16 bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold">Serving Greater Portland & Cumberland County</h2>
            <p className="text-slate-400 text-sm">Emergency dispatch and scheduled roofing surveys across:</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Downtown Portland',
              'West End',
              'East End / Munjoy Hill',
              'Deering Center',
              'South Portland',
              'Scarborough',
              'Cape Elizabeth',
              'Falmouth',
              'Cumberland',
              'Yarmouth',
              'Westbrook',
              'Gorham',
              'Windham'
            ].map((area) => (
              <span key={area} className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm font-semibold">
                {area}
              </span>
            ))}
          </div>

          <div className="pt-6 text-center">
            <p className="text-slate-400 text-xs">
              Need immediate roofing assistance in Cumberland County? Call our 24/7 direct line at{' '}
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
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Portland Roofing Questions & Answers</h2>
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
