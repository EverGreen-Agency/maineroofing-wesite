'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { initializeAttribution } from '@/lib/tracking/attribution';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-TH5DS4QJ';
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || 'ygbhburnl0';
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-GRG6KCYJTR';

export function AnalyticsProviders() {
  const [isProduction, setIsProduction] = useState<boolean>(false);

  useEffect(() => {
    // Only track on the canonical production domain to keep preview/staging data 100% clean
    const hostname = window.location.hostname;
    const isProd = hostname === 'maineroofingscapesrepairs.com' || hostname === 'www.maineroofingscapesrepairs.com';
    setIsProduction(isProd);

    if (!isProd) {
      return;
    }

    // 1. Initialize persistent marketing attribution
    initializeAttribution();

    // 2. Setup Consent Mode v2 Defaults
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args as unknown as Record<string, unknown>);
    }
    
    gtag('consent', 'default', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      wait_for_update: 500
    });
  }, []);

  if (!isProduction) {
    return null;
  }

  return (
    <>
      {/* Google Tag Manager */}
      {GTM_ID && (
        <>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `
            }}
          />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </>
      )}

      {/* Google Analytics 4 Direct Stream */}
      {GA_ID && (
        <>
          <Script
            id="ga4-script"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script
            id="ga4-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: true
                });
              `
            }}
          />
        </>
      )}

      {/* Microsoft Clarity (Direct or via GTM) */}
      {CLARITY_ID && (
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_ID}");
            `
          }}
        />
      )}
    </>
  );
}
