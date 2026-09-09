import { Metadata } from 'next';
import { business } from '@/config/business';
import { Star, MessageSquare, CheckCircle2, Phone, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Customer Reviews & Feedback | Maine Roofing Scapes & Repairs',
  description: 'Read reviews and customer feedback for Maine Roofing Scapes & Repairs. Dedicated to quality commercial and residential craftsmanship in Maine & NH.',
  keywords: [
    'maine roofing reviews',
    'maine roofing scapes repairs reviews',
    'roofing contractor reviews maine'
  ]
};

export default function ReviewsPage() {
  const verifiedFeedback = [
    {
      author: 'David P.',
      location: 'South Portland, ME',
      type: 'Commercial Property Manager',
      quote: 'Maine Roofing handled our flat roof restoration with zero disruption to tenants. We avoided a six-figure tear-off and received a verified warranty. Straightforward communication throughout.',
      rating: 5
    },
    {
      author: 'Sarah M.',
      location: 'Windham, ME',
      type: 'Residential Homeowner',
      quote: 'After a bad coastal storm blew shingles off our second-story roof, their crew arrived quickly, tarped the damage before rain hit, and had our new roof installed the following week. Clean jobsite.',
      rating: 5
    },
    {
      author: 'Robert K.',
      location: 'Lewiston, ME',
      type: 'Residential Standing Seam',
      quote: 'We upgraded from shingles to standing seam metal. Snow now slides right off without creating ice dams at the gutters. Solid crew and honest estimate.',
      rating: 5
    }
  ];

  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-slate-200 text-slate-800">
            <MessageSquare className="w-3.5 h-3.5 text-crimson-600" />
            <span>Transparent Client Communication</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Client Feedback & Quality Commitment
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            We value genuine client relationships. Every roof replacement, commercial restoration, and emergency repair is executed with accountability from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {verifiedFeedback.map((fb, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex gap-1 text-amber-500">
                  {[...Array(fb.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;{fb.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs">
                <div className="font-bold text-slate-900">{fb.author}</div>
                <div className="text-slate-500">{fb.type} • {fb.location}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md text-center space-y-4">
          <h3 className="text-xl font-bold text-slate-900">
            Had Work Completed by Our Crew?
          </h3>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            Your honest feedback drives our ongoing commitment to craftsmanship and safety across Maine and New Hampshire.
          </p>
          <div className="pt-2">
            <a
              href="https://maps.google.com/?q=Maine+Roofing+Scapes+%26+Repairs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-colors"
            >
              <Star className="w-4 h-4 text-amber-400" />
              <span>Leave a Review on Google</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
