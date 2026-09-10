import Link from 'next/link';
import Image from 'next/image';
import { business } from '@/config/business';
import { Phone, Mail, Clock, ShieldCheck, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand & Entity Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative w-48 h-14 bg-white/10 rounded-lg p-2 backdrop-blur-xs">
              <Image
                src="/images/logo.png"
                alt="Maine Roofing Scapes & Repairs"
                fill
                className="object-contain object-left invert"
              />
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Serving Maine and New Hampshire homeowners, commercial facility managers, and business operators since 2021. Engineered specifically for New England weather, extreme snow loads, and freeze-thaw cycles.
            </p>

            <div className="space-y-2 pt-2 text-sm">
              <a
                href={business.phoneTel}
                className="flex items-center gap-2.5 text-white font-bold hover:text-crimson-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-crimson-500" />
                <span>Call/Text: {business.displayPhone}</span>
              </a>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Mail className="w-4 h-4 text-slate-500" />
                <span>{business.email}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-slate-500" />
                <span>{business.hours.display}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>Service Area: All Maine & New Hampshire</span>
              </div>
            </div>
          </div>

          {/* Col 3: Commercial Services ($100 Target) */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Commercial Roofing
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/roof-restoration" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Roof Restoration</span>
                  <span className="text-[9px] bg-amber-900/80 text-amber-200 px-1.5 py-0.5 rounded font-bold">Top ROI</span>
                </Link>
              </li>
              <li>
                <Link href="/commercial-roofing" className="hover:text-white transition-colors">
                  Commercial Flat Roofs (TPO)
                </Link>
              </li>
              <li>
                <Link href="/commercial-roofing" className="hover:text-white transition-colors">
                  EPDM Rubber Roofing
                </Link>
              </li>
              <li>
                <Link href="/roof-repair" className="hover:text-white transition-colors">
                  Commercial Freeze-Thaw Leak Fixes
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  DoubleTree by Hilton Case Study
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Residential Services ($50 Target & Winter) */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Residential Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/metal-roofing" className="hover:text-white transition-colors">
                  Standing Seam Metal Roofs
                </Link>
              </li>
              <li>
                <Link href="/roof-replacement" className="hover:text-white transition-colors">
                  Asphalt Shingle Replacement
                </Link>
              </li>
              <li>
                <Link href="/ice-dam-removal" className="hover:text-white transition-colors text-blue-300 font-medium">
                  Ice Dam Removal & Snow Clearing
                </Link>
              </li>
              <li>
                <Link href="/roof-repair" className="hover:text-white transition-colors">
                  Storm Damage & Leak Repair
                </Link>
              </li>
              <li>
                <Link href="/roof-inspection" className="hover:text-white transition-colors">
                  Insurance Roof Inspection
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Service Coverage & Trust */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Service Areas
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Crews stationed on standby across Maine and New Hampshire:
            </p>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {['Portland', 'Lewiston', 'Bangor', 'Augusta', 'Auburn', 'Biddeford', 'Sanford', 'Windham', 'Brunswick', 'Manchester NH', 'Portsmouth NH'].map((city) => (
                <span key={city} className="bg-slate-900 border border-slate-800 text-slate-300 px-2 py-1 rounded">
                  {city}
                </span>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Fully Insured & OSHA Compliant</span>
            </div>
          </div>
        </div>

        {/* Scope disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center md:text-left">
            <strong className="text-slate-400">Scope Notice:</strong> Maine Roofing Scapes & Repairs specializes strictly in residential and commercial roofing systems. We do not provide or install gutters or siding.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/blog" className="hover:text-slate-400 transition-colors">
              Knowledge Hub & Blog
            </Link>
            <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <span>© {new Date().getFullYear()} Maine Roofing Scapes & Repairs. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
