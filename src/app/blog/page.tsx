import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { business } from '@/config/business';
import { BookOpen, Calendar, Clock, ArrowRight, ShieldCheck, Award, Snowflake, Sparkles, AlertOctagon, Scale, Droplets } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Maine Roofing Insights & Knowledge Hub | Maine Roofing Scapes & Repairs',
  description: 'Expert guides on commercial roof restoration, standing seam metal roofing, winter ice dam prevention, storm repair, and contractor vetting in Maine. Unbiased contractor advice from local specialists.',
  keywords: [
    'maine roofing blog',
    'commercial roof restoration maine',
    'ice dam removal maine guide',
    'metal roof cost maine',
    'emergency roof repair maine',
    'how to choose roofing contractor maine',
    'brown water stain ceiling after snow'
  ]
};

const articles = [
  {
    slug: 'brown-water-stain-ceiling-after-snow-maine',
    title: 'Brown Water Stain on Your Ceiling After Snow in Maine? 4 Causes, Dangers & Exact Next Steps',
    excerpt: 'Circular brown stain appeared on your ceiling after a snowstorm? Learn why melted roof ice leaches wood tannins, the screwdriver relief trick, and how to tell an ice dam from a pipe leak.',
    category: 'Homeowner Symptom Guide',
    categoryColor: 'bg-amber-100 text-amber-900',
    icon: Droplets,
    image: '/images/hero/standing-seam-metal-snow.jpg',
    readTime: '8 min read',
    publishedDate: 'September 2026',
    author: 'Forensic Roof Inspection Team'
  },
  {
    slug: 'commercial-roof-restoration-vs-replacement',
    title: 'Commercial Roof Restoration vs. Replacement in Maine: How Fluid Coatings Save 50% & Section 179 Tax Benefits',
    excerpt: 'Why business owners in Southern and Midcoast Maine are choosing fluid-applied silicone membrane restorations over destructive tear-offs. Explore cost comparisons, tax write-offs, and hotel/facility case studies.',
    category: 'Commercial Roofing',
    categoryColor: 'bg-amber-100 text-amber-800',
    icon: Award,
    image: '/images/projects/doubletree-hilton-roof-restoration.jpg',
    readTime: '6 min read',
    publishedDate: 'September 2026',
    author: 'Maine Roofing Commercial Technical Team'
  },
  {
    slug: 'emergency-roof-repair-storm-damage-maine',
    title: 'Emergency Storm Damage Roof Repair in Maine: 2026 Insurance Claim Steps, Tarping & Freeze-Thaw Leak Detection',
    excerpt: 'What to do when nor’easters or heavy snow cause active leaks. Step-by-step insurance claim protocol, emergency tarping costs, and how to avoid claim denials.',
    category: 'Storm Damage & Emergency',
    categoryColor: 'bg-crimson-100 text-crimson-800',
    icon: AlertOctagon,
    image: '/images/hero/hero-roof-repair-crane.jpg',
    readTime: '9 min read',
    publishedDate: 'September 2026',
    author: 'Rapid Response Storm Division'
  },
  {
    slug: 'how-to-choose-roofing-contractor-maine',
    title: 'How to Choose a Roofing Contractor in Maine (2026 Checklist): Licenses, Insurance, Local Scams & Red Flags',
    excerpt: 'Maine has no statewide contractor license. Learn Maine’s deposit laws (33% max), how to verify workers’ comp insurance with brokers, and 10 questions to ask before hiring.',
    category: 'Consumer Guide',
    categoryColor: 'bg-purple-100 text-purple-800',
    icon: Scale,
    image: '/images/hero/hero-roof-inspection-drone.jpg',
    readTime: '9 min read',
    publishedDate: 'September 2026',
    author: 'Consumer Protection Due Diligence Team'
  },
  {
    slug: 'ice-dam-prevention-removal-maine',
    title: 'How to Prevent & Safely Remove Ice Dams in Maine: Low-Pressure Steam vs. Shingle Damage',
    excerpt: 'Winter freeze-thaw cycles in Maine create severe roof leaks. Discover why low-pressure steam is the only safe removal method, how much it costs, and how to permanently prevent winter water intrusion.',
    category: 'Winter Defense & Ice Dams',
    categoryColor: 'bg-blue-100 text-blue-800',
    icon: Snowflake,
    image: '/images/hero/standing-seam-metal-snow.jpg',
    readTime: '7 min read',
    publishedDate: 'September 2026',
    author: 'Emergency Winter Response Division'
  },
  {
    slug: 'standing-seam-metal-roof-cost-maine',
    title: 'Standing Seam Metal Roofs in Maine: 2026 Costs, Snow Loads & 50-Year Coastal Durability',
    excerpt: 'Detailed cost breakdown of standing seam metal roofing in Maine vs. architectural shingles. Learn why concealed-fastener 24-gauge steel handles 130 mph coastal winds and sheds heavy snow effortlessly.',
    category: 'Residential Metal',
    categoryColor: 'bg-slate-100 text-slate-800',
    icon: ShieldCheck,
    image: '/images/projects/standing-seam-metal-01.jpg',
    readTime: '8 min read',
    publishedDate: 'September 2026',
    author: 'Maine Architectural Metal Specialists'
  }
];

export default function BlogHubPage() {
  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-crimson-100 text-crimson-800">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Expert Field Guides & Technical Insights</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Maine Roofing Knowledge & Advice
          </h1>
          <p className="text-lg text-slate-600">
            Actionable, real-world roofing guides written by Maine contractors. No fluff—just engineering facts, honest cost ranges, and climate-specific solutions.
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((post) => {
            const Icon = post.icon;
            return (
              <article
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <Link href={`/blog/${post.slug}`} className="relative h-56 w-full block overflow-hidden bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-xs ${post.categoryColor}`}>
                      <Icon className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                </Link>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {post.publishedDate}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-crimson-600 transition-colors leading-snug line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">{post.author}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-bold text-crimson-600 hover:text-crimson-700 transition-colors"
                    >
                      Read Guide
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Lead Capture Callout */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-slate-800 shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-crimson-600 text-white">
              <Sparkles className="w-3.5 h-3.5" />
              DIRECT PROFESSIONAL ESTIMATES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Have Specific Questions About Your Maine Roof?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Whether evaluating a commercial silicone restoration, scheduling winter ice dam removal, or pricing standing seam metal, our specialists provide straightforward answers and free on-site inspections.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#quote"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-white bg-crimson-600 hover:bg-crimson-700 shadow-lg shadow-crimson-900/30 transition-all text-center"
              >
                Request Free Assessment
              </a>
              <a
                href={business.phoneTel}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all text-center"
              >
                Call / Text {business.displayPhone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
