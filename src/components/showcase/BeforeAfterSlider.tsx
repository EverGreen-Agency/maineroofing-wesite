'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { business } from '@/config/business';
import { Sparkles, ShieldCheck, ArrowRight, Phone, Building2, Home } from 'lucide-react';

interface ComparisonCase {
  id: string;
  category: 'commercial' | 'residential';
  title: string;
  subtitle: string;
  location: string;
  beforeImage: string;
  beforeAlt: string;
  beforeLabel: string;
  beforeDetails: string[];
  afterImage: string;
  afterAlt: string;
  afterLabel: string;
  afterDetails: string[];
  metricBadge: string;
  metricDescription: string;
}

const cases: ComparisonCase[] = [
  {
    id: 'commercial-silicone',
    category: 'commercial',
    title: 'Commercial Flat Roof: Fluid Silicone Restoration',
    subtitle: '100% Watertight Monolithic Membrane vs. $180K Destructive Tear-Off',
    location: 'South Portland & Cumberland County, ME',
    beforeImage: '/images/hero/commercial-epdm-flat-roof.png',
    beforeAlt: 'Deteriorated commercial EPDM flat roof with ponding water and seam separation in Maine',
    beforeLabel: 'BEFORE: Leaking Membrane & Ponding',
    beforeDetails: [
      'Ponding water freezing into winter ice dams',
      'Separated lap seams leaking into ceiling plenum',
      'Thermal bridging and degraded insulation R-value',
      'Quoted $180,000+ for full destructive tear-off'
    ],
    afterImage: '/images/hero/commercial-restoration-coating.png',
    afterAlt: 'Fully restored commercial roof with white fluid-applied silicone coating in Maine',
    afterLabel: 'AFTER: Seamless Monolithic Silicone Seal',
    afterDetails: [
      'Continuous 100% watertight fluid silicone membrane',
      'Zero landfill waste & business disruption avoided',
      'Reflective Energy Star surface reducing cooling load',
      'Full IRS Section 179 Year-One tax deduction qualified'
    ],
    metricBadge: '50% Cost Savings',
    metricDescription: 'Saved $90,000+ vs. replacement with 20-year leak-free warranty'
  },
  {
    id: 'residential-metal',
    category: 'residential',
    title: 'Coastal Residential: Standing Seam Metal Defense',
    subtitle: 'Permanent Snow-Shedding System vs. Wind-Damaged Shingles',
    location: 'Coastal Kennebunk & Casco Bay, ME',
    beforeImage: '/images/projects/residential-shingle-01.jpg',
    beforeAlt: 'Wind-damaged asphalt shingles with curling and granule loss in coastal Maine',
    beforeLabel: 'BEFORE: Curling Shingles & Ice Dams',
    beforeDetails: [
      'Curled shingles blown off by 70 mph nor’easters',
      'Severe granule loss and rotten plywood underlayment',
      'Repetitive winter ice dam water intrusions',
      'Insurance threatened cancellation at year 16'
    ],
    afterImage: '/images/projects/standing-seam-metal-01.jpg',
    afterAlt: 'New residential standing seam metal roof installed in Maine',
    afterLabel: 'AFTER: 24-Gauge Concealed Fastener Metal',
    afterDetails: [
      'Heavy-duty 24-gauge standing seam steel panels',
      'Snow and ice shed naturally before dams form',
      'Class 4 impact resistance & 130 mph wind rating',
      '50+ year lifetime protection with zero roof raking'
    ],
    metricBadge: '50+ Year Lifespan',
    metricDescription: 'Eliminates repetitive winter leaks and costly annual roof raking'
  }
];

export function BeforeAfterSlider() {
  const [activeTab, setActiveTab] = useState<'commercial' | 'residential'>('commercial');
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = cases.find((c) => c.category === activeTab) || cases[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white overflow-hidden relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-crimson-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-crimson-600/20 text-crimson-400 border border-crimson-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Transformations • Interactive Comparison</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Before & After: See The Difference Engineered Craftsmanship Makes
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Drag the interactive slider to inspect how we solve persistent Maine roof leaks, ponding water, and winter storm damage.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center bg-slate-950 p-1.5 rounded-2xl border border-white/10 shrink-0 self-start md:self-end">
            <button
              type="button"
              onClick={() => {
                setActiveTab('commercial');
                setSliderPosition(50);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'commercial'
                  ? 'bg-crimson-600 text-white shadow-lg shadow-crimson-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Commercial Roofs</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('residential');
                setSliderPosition(50);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'residential'
                  ? 'bg-crimson-600 text-white shadow-lg shadow-crimson-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Residential & Metal</span>
            </button>
          </div>
        </div>

        {/* Interactive Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left / Center: Interactive Slider Image */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
              className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 select-none cursor-ew-resize bg-slate-950"
            >
              {/* After Image (Background full width) */}
              <div className="absolute inset-0">
                <Image
                  src={activeCase.afterImage}
                  alt={activeCase.afterAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
                {/* After Label Badge */}
                <div className="absolute top-4 right-4 bg-emerald-950/90 text-emerald-300 border border-emerald-500/40 px-3 py-1.5 rounded-xl text-xs font-black tracking-wider uppercase backdrop-blur-md shadow-lg pointer-events-none">
                  {activeCase.afterLabel}
                </div>
              </div>

              {/* Before Image (Foreground clipped by sliderPosition) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src={activeCase.beforeImage}
                  alt={activeCase.beforeAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
                {/* Before Label Badge */}
                <div className="absolute top-4 left-4 bg-slate-950/90 text-amber-300 border border-amber-500/40 px-3 py-1.5 rounded-xl text-xs font-black tracking-wider uppercase backdrop-blur-md shadow-lg pointer-events-none">
                  {activeCase.beforeLabel}
                </div>
              </div>

              {/* Slider Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Draggable Circle Knob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-crimson-600 border-2 border-white shadow-2xl flex items-center justify-center text-white text-xs font-black cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
                  <span className="flex items-center gap-0.5">
                    ◀▶
                  </span>
                </div>
              </div>

              {/* Drag Hint Overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-bold text-slate-300 pointer-events-none border border-white/10">
                Drag left or right to compare
              </div>
            </div>
          </div>

          {/* Right Col: Technical Comparison & Proof Points */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-950/80 border border-white/10 space-y-4">
              <div>
                <span className="text-xs font-bold text-crimson-400 uppercase tracking-wider block">
                  {activeCase.location}
                </span>
                <h3 className="text-xl font-black text-white mt-1">
                  {activeCase.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {activeCase.subtitle}
                </p>
              </div>

              {/* ROI Metric Callout */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-xs font-black text-emerald-400 uppercase tracking-wider block">
                  Project Outcome
                </span>
                <p className="text-2xl font-black text-white">
                  {activeCase.metricBadge}
                </p>
                <p className="text-xs text-slate-300">
                  {activeCase.metricDescription}
                </p>
              </div>

              {/* Feature Points */}
              <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-slate-300">
                <div className="font-bold text-white uppercase tracking-wider text-[10px] text-slate-400">
                  Engineered Improvements:
                </div>
                {activeCase.afterDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Direct CTA */}
              <div className="pt-2">
                <a
                  href={business.phoneTel}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-sm transition-colors shadow-lg shadow-crimson-600/30"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {business.displayPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
