'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { business } from '@/config/business';
import { trackPhoneClick } from '@/lib/tracking/dataLayer';
import { 
  Phone, 
  Shield, 
  ChevronDown, 
  Clock, 
  Award, 
  Hammer, 
  Snowflake, 
  ArrowUpRight,
  AlertTriangle,
  FileText,
  Users,
  Star,
  Mail
} from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full max-w-full bg-slate-950/92 backdrop-blur-xl border-b border-white/10 text-white shadow-2xl transition-all">
      {/* Emergency & Dispatch Top Bar */}
      <div className="bg-slate-900/90 text-slate-300 text-[11px] sm:text-xs font-medium py-1.5 px-3 sm:px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black bg-crimson-600 text-white shrink-0 shadow-xs shadow-crimson-600/50 animate-pulse">
              CREWS ON STANDBY
            </span>
            <span className="truncate text-slate-400 text-[11px] hidden xs:inline">
              Serving All Maine & NH
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={business.phoneTel}
              onClick={() => trackPhoneClick('top_bar')}
              className="flex items-center gap-1.5 text-crimson-400 hover:text-crimson-300 font-bold transition-colors"
            >
              <Phone className="w-3 h-3 shrink-0" />
              <span>{business.displayPhone}</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:flex items-center gap-1 text-[11px]">
              <Clock className="w-3 h-3 text-slate-400" />
              24/7 Rapid Dispatch
            </span>
          </div>
        </div>
      </div>

      {/* Main Header Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo (Using light transparent variant on dark glass) */}
          <Link href="/" className="flex items-center gap-2 group shrink-0" onClick={() => setMobileMenuOpen(false)}>
            <div className="relative w-36 h-9 sm:w-44 sm:h-11 md:w-52 md:h-13">
              <Image
                src="/images/logos/maine-roofing-scapes-repairs-logo-light.png"
                alt="Maine Roofing Scapes & Repairs - Commercial & Residential Roofing Contractor Maine & NH"
                fill
                priority
                className="object-contain object-left group-hover:opacity-90 transition-opacity"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-200">
            <Link
              href="/"
              className="hover:text-crimson-400 transition-colors py-2"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 hover:text-crimson-400 transition-colors py-2"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-crimson-400' : 'text-slate-400'}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-[420px] bg-slate-900/98 backdrop-blur-2xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/10 p-3 grid gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-3 pt-1 pb-1 border-b border-white/5">
                    Commercial Solutions (High ROI)
                  </div>
                  
                  <Link
                    href="/roof-restoration"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Award className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-2 group-hover/item:text-amber-300 transition-colors">
                        Commercial Roof Restoration
                        <span className="text-[9px] bg-amber-500/20 text-amber-300 font-black px-1.5 py-0.5 rounded border border-amber-500/30">TOP ROI</span>
                      </div>
                      <div className="text-xs text-slate-400">Fluid-applied liquid silicone (DoubleTree Hilton Case)</div>
                    </div>
                  </Link>

                  <Link
                    href="/commercial-roofing"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Shield className="w-4 h-4 text-slate-300" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover/item:text-crimson-400 transition-colors">Commercial Flat Roofing</div>
                      <div className="text-xs text-slate-400">TPO, EPDM, cold-weather commercial installations</div>
                    </div>
                  </Link>

                  <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-3 pt-2 pb-1 border-b border-white/5">
                    Residential & Severe Winter Defense
                  </div>

                  <Link
                    href="/metal-roofing"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Hammer className="w-4 h-4 text-slate-300" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover/item:text-crimson-400 transition-colors">Standing Seam Metal Roofing</div>
                      <div className="text-xs text-slate-400">Lifetime snow-shedding metal roofs for Maine weather</div>
                    </div>
                  </Link>

                  <Link
                    href="/roof-replacement"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Shield className="w-4 h-4 text-slate-300" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover/item:text-crimson-400 transition-colors">Asphalt Shingle Replacement</div>
                      <div className="text-xs text-slate-400">Architectural shingles rated for 130 mph coastal winds</div>
                    </div>
                  </Link>

                  <Link
                    href="/ice-dam-removal"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Snowflake className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-2 group-hover/item:text-blue-300 transition-colors">
                        Ice Dam Removal & Steam Clearing
                        <span className="text-[9px] bg-blue-500/20 text-blue-300 font-black px-1.5 py-0.5 rounded border border-blue-500/30">WINTER</span>
                      </div>
                      <div className="text-xs text-slate-400">Safe steam clearing, heating cables & snow guards</div>
                    </div>
                  </Link>

                  <Link
                    href="/roof-repair"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-crimson-600/15 border border-crimson-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <AlertTriangle className="w-4 h-4 text-crimson-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover/item:text-crimson-300 transition-colors">Leak & Storm Damage Repair</div>
                      <div className="text-xs text-slate-400">Freeze-thaw leak fixes & emergency storm patchings</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/projects" className="hover:text-crimson-400 transition-colors py-2">
              Projects
            </Link>
            <Link href="/blog" className="hover:text-crimson-400 transition-colors py-2">
              Guides
            </Link>
            <Link href="/about" className="hover:text-crimson-400 transition-colors py-2">
              About
            </Link>
            <Link href="/reviews" className="hover:text-crimson-400 transition-colors py-2">
              Reviews
            </Link>
            <Link href="/contact" className="hover:text-crimson-400 transition-colors py-2">
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={business.phoneTel}
              onClick={() => trackPhoneClick('header_call_button')}
              className="flex items-center gap-2 text-slate-200 hover:text-white font-bold text-sm px-3 py-2 transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-crimson-600/20 text-crimson-400 border border-crimson-500/30 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>{business.displayPhone}</span>
            </a>

            {/* Nested Button-in-Button CTA */}
            <a
              href="#quote"
              className="group inline-flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full font-black text-xs uppercase tracking-wider text-white bg-crimson-600 hover:bg-crimson-700 shadow-lg shadow-crimson-600/30 active:scale-[0.98] transition-all"
            >
              <span>Request Quote</span>
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </span>
            </a>
          </div>

          {/* Mobile Actions: One-Touch Call + Morphing Hamburger */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <a
              href={business.phoneTel}
              onClick={() => trackPhoneClick('header_mobile_icon')}
              className="w-9 h-9 rounded-xl bg-crimson-600/20 text-crimson-400 border border-crimson-500/30 flex items-center justify-center active:scale-95 transition-all"
              aria-label="Call Maine Roofing Dispatch"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex flex-col items-center justify-center gap-1.5 active:scale-95 transition-all text-white p-2"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2 bg-crimson-400' : ''
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-white rounded-full transition-all duration-200 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2 bg-crimson-400' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Glass Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] sm:top-[77px] bottom-0 bg-slate-950/98 backdrop-blur-3xl z-50 overflow-y-auto px-4 py-6 flex flex-col justify-between border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="space-y-6">
            {/* Quick Action Top in Drawer */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href={business.phoneTel}
                onClick={() => {
                  trackPhoneClick('mobile_drawer_call');
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-900 border border-white/15 text-white font-bold text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-crimson-400" />
                <span>Call Dispatch</span>
              </a>
              <a
                href="#quote"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-crimson-600 text-white font-black text-xs shadow-md shadow-crimson-600/30"
              >
                <span>Request Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Service Category: Commercial High Ticket */}
            <div className="space-y-2">
              <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-2">
                Commercial Services (High ROI)
              </div>
              <div className="grid gap-1.5">
                <Link
                  href="/roof-restoration"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-amber-500/20 text-white hover:bg-slate-900 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-bold text-sm">Roof Restoration</span>
                  </div>
                  <span className="text-[9px] bg-amber-500/20 text-amber-300 font-extrabold px-2 py-0.5 rounded border border-amber-500/30">BEST ROI</span>
                </Link>

                <Link
                  href="/commercial-roofing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-white/5 text-white hover:bg-slate-900 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Shield className="w-4 h-4 text-slate-300 shrink-0" />
                    <span className="font-bold text-sm">Commercial Flat Roofing (TPO)</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Service Category: Residential & Winter */}
            <div className="space-y-2">
              <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-2">
                Residential & Severe Winter Protection
              </div>
              <div className="grid gap-1.5">
                <Link
                  href="/metal-roofing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-white/5 text-white"
                >
                  <Hammer className="w-4 h-4 text-slate-300 shrink-0" />
                  <span className="font-bold text-sm">Standing Seam Metal Roofs</span>
                </Link>

                <Link
                  href="/roof-replacement"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-white/5 text-white"
                >
                  <Shield className="w-4 h-4 text-slate-300 shrink-0" />
                  <span className="font-bold text-sm">Architectural Shingle Replacement</span>
                </Link>

                <Link
                  href="/ice-dam-removal"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-blue-500/20 text-white"
                >
                  <div className="flex items-center gap-2.5">
                    <Snowflake className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="font-bold text-sm">Ice Dam Steam Removal</span>
                  </div>
                  <span className="text-[9px] bg-blue-500/20 text-blue-300 font-extrabold px-2 py-0.5 rounded border border-blue-500/30">WINTER</span>
                </Link>

                <Link
                  href="/roof-repair"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-white/5 text-white"
                >
                  <AlertTriangle className="w-4 h-4 text-crimson-400 shrink-0" />
                  <span className="font-bold text-sm">Emergency Leak & Storm Repairs</span>
                </Link>
              </div>
            </div>

            {/* Standard Nav Pages */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-xs font-bold text-slate-300">
              <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-slate-400" />
                <span>Projects</span>
              </Link>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-slate-400" />
                <span>Blog & Guides</span>
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-slate-400" />
                <span>About</span>
              </Link>
              <Link href="/reviews" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 flex items-center gap-2">
                <Star className="w-3.5 h-3.5 text-amber-400" />
                <span>Reviews</span>
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="col-span-2 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>Contact Direct</span>
              </Link>
            </div>
          </div>

          {/* Drawer Footer Entity Tag */}
          <div className="pt-6 pb-4 border-t border-white/10 text-center text-xs text-slate-500 space-y-1">
            <p className="font-bold text-slate-400">Maine Roofing Scapes & Repairs</p>
            <p>Serving Maine & New Hampshire Since 2021</p>
            <p className="text-[11px] text-crimson-400 font-semibold">24/7 Immediate Dispatch: {business.displayPhone}</p>
          </div>
        </div>
      )}
    </header>
  );
}
