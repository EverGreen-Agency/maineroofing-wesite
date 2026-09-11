'use client';

import { useState } from 'react';
import { Award, DollarSign, TrendingDown, ShieldCheck, ArrowRight, Building2, CheckCircle2, Sparkles } from 'lucide-react';
import { trackPhoneClick } from '@/lib/tracking/dataLayer';
import { business } from '@/config/business';

export function RoiCalculator() {
  const [sqft, setSqft] = useState(25000);
  const [roofType, setRoofType] = useState('EPDM / TPO Flat Roof');

  // Industry average costs in Maine & New England
  const tearOffCostPerSqft = 12.5; // $12.50 / sqft average tear-off + re-insulation + new membrane
  const restorationCostPerSqft = 6.75; // $6.75 / sqft high-performance fluid silicone coating

  const totalTearOff = Math.round(sqft * tearOffCostPerSqft);
  const totalRestoration = Math.round(sqft * restorationCostPerSqft);
  const totalSavings = totalTearOff - totalRestoration;
  const savingsPercent = Math.round((totalSavings / totalTearOff) * 100);

  // IRS Section 179 tax deduction (assuming 21% federal corporate tax bracket)
  const estimatedTaxShield = Math.round(totalRestoration * 0.21);

  const scrollToQuote = () => {
    const quoteEl = document.getElementById('quote');
    if (quoteEl) {
      quoteEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-full p-2 sm:p-3 rounded-[2.5rem] bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
      <div className="rounded-[calc(2.5rem-0.5rem)] bg-slate-950 p-6 sm:p-10 border border-white/5 space-y-8 text-white">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30">
              <Award className="w-3.5 h-3.5" />
              <span>Commercial Financial Model</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Roof Restoration vs. Complete Tear-Off Calculator
            </h3>
            <p className="text-slate-400 text-sm max-w-2xl">
              Compare financial projections for New England commercial facilities. See how fluid-applied silicone membranes save hundreds of thousands of dollars while qualifying for 100% Year-1 tax deductions.
            </p>
          </div>

          <div className="text-left md:text-right shrink-0">
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Benchmark Project</span>
            <span className="text-sm font-black text-amber-300 flex items-center md:justify-end gap-1">
              <Building2 className="w-4 h-4" />
              DoubleTree by Hilton Complex
            </span>
          </div>
        </div>

        {/* Interactive Controls & Inputs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            {/* Square Footage Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="sqft-slider" className="font-extrabold text-slate-200">
                  Approximate Commercial Roof Area:
                </label>
                <span className="text-lg sm:text-xl font-black text-crimson-400 font-mono bg-slate-900 px-3 py-1 rounded-xl border border-white/10">
                  {sqft.toLocaleString('en-US')} sq ft
                </span>
              </div>
              <input
                id="sqft-slider"
                type="range"
                min={5000}
                max={100000}
                step={2500}
                value={sqft}
                onChange={(e) => setSqft(Number(e.target.value))}
                className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-crimson-600 focus:outline-hidden"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                <span>5,000 sq ft</span>
                <span>50,000 sq ft</span>
                <span>100,000+ sq ft</span>
              </div>
            </div>

            {/* Roof Substrate Selection */}
            <div className="space-y-2">
              <label className="block text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                Current Existing Substrate:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'EPDM / TPO Flat Roof',
                  'Built-Up Asphalt (BUR)',
                  'Metal / Standing Seam',
                  'Modified Bitumen'
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setRoofType(type)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold text-left transition-all border ${
                      roofType === type
                        ? 'bg-crimson-600 text-white border-crimson-500 shadow-md shadow-crimson-600/30'
                        : 'bg-slate-900 text-slate-400 border-white/5 hover:bg-slate-850 hover:text-white'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Key Engineering Differentiators */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Zero Tenant Disruption (No open tear-off leaks)</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>15–20 Year Renewable NDL Warranties</span>
              </div>
            </div>
          </div>

          {/* Results Comparison Bento Card */}
          <div className="lg:col-span-6 p-1 rounded-3xl bg-gradient-to-b from-white/15 to-white/5 border border-white/10 shadow-2xl">
            <div className="rounded-[calc(1.5rem-0.25rem)] bg-slate-900/90 p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-2 gap-4 pb-6 border-b border-white/10">
                {/* Traditional Replacement */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Full Tear-Off Estimate
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-slate-400 line-through decoration-crimson-500/80">
                    ${totalTearOff.toLocaleString('en-US')}
                  </div>
                  <span className="text-[11px] text-slate-500 block">~${tearOffCostPerSqft}/sqft avg</span>
                </div>

                {/* Restoration Investment */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Liquid Silicone Restoration
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    ${totalRestoration.toLocaleString('en-US')}
                  </div>
                  <span className="text-[11px] text-emerald-400 font-bold block">~${restorationCostPerSqft}/sqft avg</span>
                </div>
              </div>

              {/* Massive Net Savings Callout */}
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between gap-4">
                <div>
                  <span className="block text-xs font-black uppercase tracking-wider text-emerald-400">
                    Total Estimated Capital Savings
                  </span>
                  <div className="text-2xl sm:text-4xl font-black text-emerald-300 tracking-tight">
                    ${totalSavings.toLocaleString('en-US')}
                  </div>
                  <span className="text-xs text-slate-300 font-medium">
                    Saving ~{savingsPercent}% of capital expenditure
                  </span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <TrendingDown className="w-6 h-6" />
                </div>
              </div>

              {/* IRS Section 179 Highlight */}
              <div className="text-xs text-slate-400 bg-slate-950 p-3.5 rounded-xl border border-white/5 space-y-1">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-amber-400" />
                  Section 179 Accelerated Tax Depreciation:
                </span>
                <p>
                  Unlike a replacement amortized over 39 years, roof restorations can often be expensed 100% in Year 1 as building maintenance, saving an estimated <strong>${estimatedTaxShield.toLocaleString('en-US')}</strong> in taxable net income.
                </p>
              </div>

              {/* Direct Booking CTA */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={scrollToQuote}
                  className="group w-full flex items-center justify-between py-3.5 pl-6 pr-3 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider text-white bg-crimson-600 hover:bg-crimson-700 shadow-xl shadow-crimson-600/30 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span className="truncate">Schedule Commercial Roof Survey & Feasibility</span>
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
