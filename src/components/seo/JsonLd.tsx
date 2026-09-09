import { business } from '@/config/business';

interface JsonLdProps {
  pageType?: 'website' | 'service' | 'article';
  serviceName?: string;
  serviceDescription?: string;
  breadcrumbs?: Array<{ name: string; item: string }>;
}

export function JsonLd({ pageType = 'website', serviceName, serviceDescription, breadcrumbs }: JsonLdProps) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': 'https://maineroofingscapesrepairs.com/#organization',
    name: business.name,
    legalName: business.legalName,
    url: 'https://maineroofingscapesrepairs.com',
    logo: 'https://maineroofingscapesrepairs.com/images/logo.png',
    image: 'https://maineroofingscapesrepairs.com/images/hero/hero-craftsman-sunset.png',
    telephone: business.canonicalPhone,
    email: business.email,
    foundingDate: `${business.foundingYear}`,
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Check, Insurance',
    description: "Maine's premier roofing contractor providing residential and commercial roof replacement, standing seam metal roofing, commercial roof restoration, and winter emergency ice dam removal.",
    areaServed: [
      {
        '@type': 'State',
        name: 'Maine',
        sameAs: 'https://en.wikipedia.org/wiki/Maine'
      },
      {
        '@type': 'State',
        name: 'New Hampshire',
        sameAs: 'https://en.wikipedia.org/wiki/New_Hampshire'
      }
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: business.hours.daysOpen,
        opens: business.hours.opens,
        closes: business.hours.closes
      }
    ],
    sameAs: [
      business.social.facebook
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Roofing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Roof Restoration',
            description: 'Silicone and elastomeric roof restoration systems extending commercial flat roof life without full teardown.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Asphalt Shingle Roof Replacement',
            description: 'Architectural asphalt shingle installations engineered for heavy snow and coastal Maine winds.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Standing Seam Metal Roofing',
            description: 'Durable, lifetime metal roof installations with maximum snow-shedding and ice-dam resistance.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Winter Ice Dam Removal & Emergency Roof Repair',
            description: 'Safe low-pressure steam ice dam removal and rapid winter leak repair for Maine properties.'
          }
        }
      ]
    }
  };

  const serviceSchema = serviceName ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    provider: {
      '@id': 'https://maineroofingscapesrepairs.com/#organization'
    },
    areaServed: {
      '@type': 'State',
      name: 'Maine'
    },
    description: serviceDescription || `Professional ${serviceName} in Maine by Maine Roofing Scapes & Repairs.`
  } : null;

  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((b, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: b.name,
      item: b.item.startsWith('http') ? b.item : `https://maineroofingscapesrepairs.com${b.item}`
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
    </>
  );
}
