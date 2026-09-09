import { Metadata } from 'next';
import { business } from '@/config/business';

export const metadata: Metadata = {
  title: 'Privacy Policy | Maine Roofing Scapes & Repairs',
  description: 'Privacy Policy for Maine Roofing Scapes & Repairs. Information on data handling, lead forms, and analytics consent.'
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 leading-relaxed text-sm">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500">
          Last Updated: September 2026
        </p>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">1. Information We Collect</h2>
          <p>
            Maine Roofing Scapes & Repairs collects information you voluntarily provide when requesting an estimate or roof inspection, including your name, telephone number, email address, property location, and project details.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">2. How We Use Your Information</h2>
          <p>
            Information submitted via our forms is used exclusively to evaluate your roofing project, schedule on-site inspections, generate accurate estimates, and communicate regarding project status. We do not sell, rent, or lease your personal information to third parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. Analytics & Attribution Technologies</h2>
          <p>
            We use Google Tag Manager, Google Analytics, and Microsoft Clarity to understand website traffic and improve user experience. These tools may collect non-personally identifiable information such as browser type, referring URLs, time spent on pages, and interaction patterns.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">4. Contact Information</h2>
          <p>
            If you have questions regarding this Privacy Policy or your personal data, contact us directly at {business.email} or by phone at {business.displayPhone}.
          </p>
        </section>
      </div>
    </div>
  );
}
