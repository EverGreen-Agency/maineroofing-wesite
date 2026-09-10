'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { business } from '@/config/business';
import { trackPhoneClick } from '@/lib/tracking/dataLayer';
import { Phone, Shield, ChevronDown, Menu, X, Clock, Award, Hammer, Snowflake } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Emergency & Dispatch Top Bar */}
      <div className="bg-slate-900 text-white text-xs font-medium py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-crimson-600 text-white animate-pulse">
              MAINE CREWS ON STANDBY
            </span>
            <span className="hidden md:inline text-slate-300">
              Serving All Maine & New Hampshire Since 2021
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={business.phoneTel}
              onClick={() => trackPhoneClick('top_bar')}
              className="flex items-center gap-1.5 text-crimson-400 hover:text-crimson-300 font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call / Text: {business.displayPhone}</span>
            </a>
            <span className="text-slate-500 hidden sm:inline">|</span>
            <span className="text-slate-300 hidden sm:flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Same-Day Emergency Dispatch
            </span>
          </div>
        </div>
      </div>

      {/* Main Header Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-44 h-14 sm:w-52 sm:h-16">
              <Image
                src="/images/logo.png"
                alt="Maine Roofing Scapes & Repairs Logo"
                fill
                priority
                className="object-contain object-left group-hover:opacity-95 transition-opacity"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-semibold text-slate-700 hover:text-crimson-600 transition-colors"
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
                className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-crimson-600 transition-colors py-2"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-96 bg-white rounded-xl shadow-xl border border-slate-200 p-4 grid gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 pb-1 border-b border-slate-100">
                    Commercial (High Ticket)
                  </div>
                  <Link
                    href="/roof-restoration"
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <Award className="w-5 h-5 text-crimson-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        Commercial Roof Restoration
                        <span className="text-[10px] bg-amber-100 text-amber-800 font-extrabold px-1.5 py-0.2 rounded">BEST ROI</span>
                      </div>
                      <div className="text-xs text-slate-500">Fluid-applied membrane restoration (e.g. DoubleTree by Hilton)</div>
                    </div>
                  </Link>
                  <Link
                    href="/commercial-roofing"
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <Shield className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-slate-900">Commercial Flat Roofing</div>
                      <div className="text-xs text-slate-500">TPO, EPDM & cold-weather commercial solutions</div>
                    </div>
                  </Link>

                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 pt-2 pb-1 border-b border-slate-100">
                    Residential & Winter Defense
                  </div>
                  <Link
                    href="/metal-roofing"
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <Hammer className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-slate-900">Standing Seam Metal Roofing</div>
                      <div className="text-xs text-slate-500">Lifetime snow-shedding metal roofs for Maine winters</div>
                    </div>
                  </Link>
                  <Link
                    href="/roof-replacement"
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <Shield className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-slate-900">Asphalt Shingle Replacement</div>
                      <div className="text-xs text-slate-500">Architectural shingles rated for 130 mph coastal winds</div>
                    </div>
                  </Link>
                  <Link
                    href="/ice-dam-removal"
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <Snowflake className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        Ice Dam Removal & Winter Care
                        <span className="text-[10px] bg-blue-100 text-blue-800 font-extrabold px-1.5 py-0.2 rounded">SEASONAL</span>
                      </div>
                      <div className="text-xs text-slate-500">Low-pressure steam removal, snow guards, heating cables</div>
                    </div>
                  </Link>
                  <Link
                    href="/roof-repair"
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <Shield className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-slate-900">Leak & Storm Damage Repair</div>
                      <div className="text-xs text-slate-500">Freeze-thaw leak fixes & emergency storm patchings</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/projects"
              className="text-sm font-semibold text-slate-700 hover:text-crimson-600 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="text-sm font-semibold text-slate-700 hover:text-crimson-600 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold text-slate-700 hover:text-crimson-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/reviews"
              className="text-sm font-semibold text-slate-700 hover:text-crimson-600 transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-slate-700 hover:text-crimson-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={business.phoneTel}
              onClick={() => trackPhoneClick('header_call_button')}
              className="flex items-center gap-2 text-slate-900 hover:text-crimson-600 font-bold text-sm px-3 py-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-crimson-600" />
              <span>{business.displayPhone}</span>
            </a>

            <a
              href="#quote"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-bold text-sm text-white bg-crimson-600 hover:bg-crimson-700 shadow-sm hover:shadow-md transition-all active:scale-98"
            >
              Request a Free Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={business.phoneTel}
              onClick={() => trackPhoneClick('header_mobile_icon')}
              className="p-2 text-crimson-600 bg-crimson-50 rounded-lg hover:bg-crimson-100 transition-colors"
              aria-label="Call Maine Roofing"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="grid gap-2 text-base font-semibold text-slate-800">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Home
            </Link>
            <div className="px-3 py-1 text-xs font-bold text-slate-400 uppercase">Commercial Services</div>
            <Link
              href="/roof-restoration"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center justify-between"
            >
              <span>Commercial Roof Restoration</span>
              <span className="text-[10px] bg-amber-100 text-amber-800 font-extrabold px-1.5 py-0.5 rounded">High ROI</span>
            </Link>
            <Link
              href="/commercial-roofing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Commercial Flat Roofing (TPO/EPDM)
            </Link>
            <div className="px-3 py-1 text-xs font-bold text-slate-400 uppercase">Residential & Winter Services</div>
            <Link
              href="/metal-roofing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Standing Seam Metal Roofing
            </Link>
            <Link
              href="/roof-replacement"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Asphalt Shingle Roof Replacement
            </Link>
            <Link
              href="/ice-dam-removal"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 text-blue-700"
            >
              Ice Dam Removal & Winter Leak Defense
            </Link>
            <Link
              href="/roof-repair"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Roof Leak & Storm Repair
            </Link>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Recent Projects & Case Studies
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Guides & Blog
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              About Maine Roofing
            </Link>
            <Link
              href="/reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Customer Reviews
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={business.phoneTel}
              onClick={() => trackPhoneClick('mobile_menu_call')}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-slate-900 text-white font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-crimson-400" />
              Call {business.displayPhone}
            </a>
            <a
              href="#quote"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-full py-3 px-4 rounded-lg bg-crimson-600 text-white font-bold text-sm"
            >
              Request Free Estimate
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
