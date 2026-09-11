'use client';

import { Phone, ArrowUpRight, Zap } from 'lucide-react';
import { business } from '@/config/business';
import { trackPhoneClick } from '@/lib/tracking/dataLayer';

export function MobileStickyBar() {
  const scrollToQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const quoteEl = document.getElementById('quote');
    if (quoteEl) {
      e.preventDefault();
      quoteEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Quick Contact and Estimate Actions"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-slate-950/92 backdrop-blur-xl border-t border-white/10 px-3 pt-2.5 pb-[max(env(safe-area-inset-bottom),0.625rem)] shadow-[0_-8px_30px_rgba(0,0,0,0.35)] transition-all"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2">
        {/* Call Dispatch Action (One-Touch Emergency) */}
        <a
          href={business.phoneTel}
          onClick={() => trackPhoneClick('mobile_sticky_bar')}
          className="group relative flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-900 text-white border border-white/15 active:scale-[0.98] transition-all shadow-md overflow-hidden"
        >
          <span className="w-7 h-7 rounded-full bg-crimson-600/20 text-crimson-400 border border-crimson-500/30 flex items-center justify-center shrink-0">
            <Phone className="w-3.5 h-3.5" />
          </span>
          <div className="text-left leading-tight min-w-0">
            <span className="block text-[10px] font-extrabold tracking-wider uppercase text-crimson-400">
              Emergency
            </span>
            <span className="block text-xs font-black text-white truncate">
              Call Dispatch
            </span>
          </div>
        </a>

        {/* Free Quote Anchor Action */}
        <a
          href="#quote"
          onClick={scrollToQuote}
          className="group relative flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-black text-xs active:scale-[0.98] transition-all shadow-md shadow-crimson-600/30 overflow-hidden"
        >
          <div className="text-left leading-tight min-w-0">
            <span className="block text-[10px] font-semibold text-crimson-100 uppercase tracking-wider">
              15-Min Response
            </span>
            <span className="block text-xs font-black text-white truncate">
              Free Estimate
            </span>
          </div>
          <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </span>
        </a>
      </div>
    </aside>
  );
}
