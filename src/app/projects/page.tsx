import Image from 'next/image';
import { Metadata } from 'next';
import { business } from '@/config/business';
import { Award, ShieldCheck, Hammer, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roofing Projects & Case Studies | Maine Roofing Scapes & Repairs',
  description: 'Explore real commercial and residential roofing projects completed across Maine and New Hampshire. Real job-site photos, restoration case studies, and standing seam installations.',
  keywords: [
    'roofing projects maine',
    'commercial roofing case study maine',
    'doubletree hilton roof restoration',
    'standing seam metal roof projects maine',
    'shingle replacement gallery maine'
  ]
};

export default function ProjectsPage() {
  const projects = [
    {
      title: 'DoubleTree by Hilton — Multi-Tier Commercial Roof Restoration',
      type: 'Commercial Restoration',
      location: 'South Portland, ME Region',
      image: '/images/projects/doubletree-hilton-roof-restoration.jpg',
      problem: 'Recurrent seam failures and saturated insulation across multi-tiered circular flat roofs. Full tear-off quoted at over $180,000 with severe hotel guest disruption.',
      solution: 'Conducted core moisture scans, replaced localized damaged substrate, and applied high-solids fluid elastomeric silicone membrane across all decks, flashings, and parapet walls.',
      result: 'Saved 40%+ vs total replacement, zero guest disruption, 15-year renewed leak-free warranty.',
      materials: 'Commercial High-Solids Fluid Applied Silicone, Reinforcing Fabric'
    },
    {
      title: 'Coastal Residential Standing Seam Metal Roof Installation',
      type: 'Residential Metal Roofing',
      location: 'Mid-Coast Maine',
      image: '/images/projects/standing-seam-metal-01.jpg',
      problem: 'Severe winter ice dams and repetitive wind-driven shingle damage from coastal nor&apos;easters.',
      solution: 'Removed failed shingles down to decking, installed high-temperature underlayment, and roll-formed custom 24-gauge standing seam metal panels with concealed clip fasteners.',
      result: '100% snow-shedding efficiency, total elimination of ice dam leaks, lifetime 50+ year roof durability.',
      materials: '24-Gauge Kynar 500 Standing Seam Steel, High-Temp Ice Membrane'
    },
    {
      title: 'Complete Asphalt Shingle Tear-Off & Deck Replacement',
      type: 'Residential Replacement',
      location: 'Windham / Lewiston, ME',
      image: '/images/projects/residential-shingle-01.jpg',
      problem: '25-year-old shingle roof with extensive dry rot in the plywood sheathing and widespread leaking during spring thaws.',
      solution: 'Complete tear-off to rafters, replaced 8 sheets of rotted CDX plywood, applied 6 feet of self-adhering ice shield, and installed 130 mph architectural shingles.',
      result: 'Rebuilt structural roof strength with watertight lifetime protection.',
      materials: 'Architectural Heavyweight Shingles, Continuous Ridge Venting'
    },
    {
      title: 'Precision Masonry Chimney Counter-Flashing & Valley Repair',
      type: 'Roof Repair & Flashing',
      location: 'Augusta, ME',
      image: '/images/projects/chimney-flashing-01.jpg',
      problem: 'Persistent ceiling leak down fireplace wall caused by cracked mortar and detached aluminum flashing.',
      solution: 'Cut new reglet joints into brick chimney, installed custom copper step and counter-flashings, and resealed valley transitions.',
      result: 'Permanently resolved leak through harsh winter freeze-thaw cycles.',
      materials: 'Custom Bent Copper Counter-Flashing, Polyurethane Masonry Sealant'
    }
  ];

  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-crimson-100 text-crimson-800">
            <Award className="w-3.5 h-3.5" />
            <span>Proven Craftsmanship Since 2021</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Real Projects. Real Results.
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            Every project below represents actual work completed by Maine Roofing Scapes & Repairs crews across Maine and New Hampshire.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-72 sm:h-80 w-full">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                    {proj.type}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                    {proj.location}
                  </div>
                </div>

                <div className="p-8 space-y-5">
                  <h3 className="text-2xl font-black text-slate-900 leading-snug">
                    {proj.title}
                  </h3>

                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-slate-900 block font-bold">The Challenge:</strong>
                      <p className="text-slate-600 text-xs sm:text-sm mt-0.5">{proj.problem}</p>
                    </div>

                    <div>
                      <strong className="text-slate-900 block font-bold">Our Solution:</strong>
                      <p className="text-slate-600 text-xs sm:text-sm mt-0.5">{proj.solution}</p>
                    </div>

                    <div>
                      <strong className="text-emerald-700 block font-bold">The Outcome:</strong>
                      <p className="text-slate-700 text-xs sm:text-sm mt-0.5 font-medium">{proj.result}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Materials: <strong className="text-slate-800">{proj.materials}</strong></span>
                <a
                  href="/#quote"
                  className="font-bold text-crimson-600 hover:text-crimson-700 inline-flex items-center gap-1"
                >
                  <span>Request Similar Work</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="bg-slate-900 text-white rounded-3xl p-10 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black">
            Have a Commercial or Residential Project in Maine or NH?
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto text-sm">
            Speak with an experienced roofing specialist. We provide detailed photographic assessments, clear written proposals, and transparent pricing.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/#quote"
              className="px-8 py-3.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-sm shadow-md transition-colors"
            >
              Get Free Project Estimate
            </a>
            <a
              href={business.phoneTel}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-colors"
            >
              Call {business.displayPhone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
