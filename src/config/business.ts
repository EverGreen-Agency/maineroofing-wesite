export const business = {
  name: "Maine Roofing Scapes & Repairs",
  legalName: "Maine Roofing Scapes & Repairs",
  tagline: "Maine's Commercial & Residential Roofing Specialists",
  foundingYear: 2021,
  
  // Single Source of Truth for Phone (as instructed by operator)
  canonicalPhone: "+1 (207) 383-1646",
  displayPhone: "(207) 383-1646",
  trackingPhone: "+1 (207) 383-1646",
  phoneTel: "tel:+12073831646",
  smsTel: "sms:+12073831646",
  
  email: "contact@maineroofingscapesrepairs.com",
  
  // Service Area Business (SAB) — Do not expose misleading physical storefronts
  isServiceAreaBusiness: true,
  primaryState: "Maine",
  stateCode: "ME",
  
  hours: {
    display: "Monday – Saturday: 7:00 AM – 6:00 PM",
    emergency: "24/7 Rapid Response for Storm Damage & Winter Freeze-Thaw Emergencies",
    daysOpen: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:00",
    closes: "18:00"
  },
  
  // Service coverage
  residentialCoverage: [
    "Portland, ME",
    "Lewiston, ME",
    "Bangor, ME",
    "South Portland, ME",
    "Auburn, ME",
    "Biddeford, ME",
    "Sanford, ME",
    "Brunswick, ME",
    "Scarborough, ME",
    "Saco, ME",
    "Windham, ME",
    "Augusta, ME",
    "Kennebunk, ME",
    "Manchester, NH",
    "Portsmouth, NH"
  ],
  
  commercialCoverage: "Statewide Maine, New Hampshire, and commercial roof restoration across New England (ME, NH, MA, VT, RI)",
  
  services: {
    commercial: [
      {
        id: "roof-restoration",
        name: "Commercial Roof Restoration",
        slug: "roof-restoration",
        shortDesc: "High-ROI fluid-applied coating and membrane restoration that extends commercial roof life by 15–20 years at a fraction of full replacement cost.",
        highlight: "Featured Project: DoubleTree by Hilton Hotel Complex"
      },
      {
        id: "commercial-roofing",
        name: "Commercial Flat Roofing",
        slug: "commercial-roofing",
        shortDesc: "Engineered TPO, EPDM, and modified bitumen installations engineered for extreme snow loads and winter freeze-thaw cycles.",
        highlight: "Certified commercial membrane systems with manufacturer warranties"
      },
      {
        id: "commercial-repair",
        name: "Commercial Leak & Freeze-Thaw Repair",
        slug: "roof-repair",
        shortDesc: "Emergency patching, drain flashing, seam re-welding, and thermal inspection for active commercial leaks.",
        highlight: "Same-day diagnostic response for facility managers"
      }
    ],
    residential: [
      {
        id: "roof-replacement",
        name: "Asphalt Shingle Roof Replacement",
        slug: "roof-replacement",
        shortDesc: "Architectural and heavy-duty asphalt shingle replacements designed to withstand 130 mph coastal Maine winds and heavy winter snowpacks.",
        highlight: "Architectural shingles with 50-year warranty options"
      },
      {
        id: "metal-roofing",
        name: "Standing Seam Metal Roofing",
        slug: "metal-roofing",
        shortDesc: "Lifetime standing seam metal roofs that shed snow effortlessly and eliminate ice dam risks permanently.",
        highlight: "Unmatched thermal efficiency and 50+ year lifespan"
      },
      {
        id: "roof-repair",
        name: "Roof Leak & Storm Damage Repair",
        slug: "roof-repair",
        shortDesc: "Rapid diagnostic repairs for missing shingles, blown flashings, skylight leaks, and winter storm damages.",
        highlight: "No job too small, transparent quotes"
      },
      {
        id: "ice-dam-removal",
        name: "Winter Ice Dam Removal & Prevention",
        slug: "ice-dam-removal",
        shortDesc: "Safe low-pressure steam ice dam removal, heavy roof snow clearing, snow guard installation, and self-regulating heating cables.",
        highlight: "Zero shingle damage guaranteed using steam technology"
      },
      {
        id: "roof-inspection",
        name: "Comprehensive Roof Inspections",
        slug: "roof-inspection",
        shortDesc: "Multi-point drone and manual roof evaluations, pre-winter structural assessments, and insurance claim documentation.",
        highlight: "Detailed photo reports within 24 hours"
      }
    ]
  },
  
  social: {
    facebook: "https://www.facebook.com/Maine-Roofing-Scapes-Repairs-108819268747154"
  }
};
