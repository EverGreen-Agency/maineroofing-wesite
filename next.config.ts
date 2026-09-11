import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maineroofingscapesrepairs.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn-hoobp.nitrocdn.com',
      }
    ]
  },
  async redirects() {
    return [
      // Legacy contact & review routes
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/contact-us/',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/our-reviews',
        destination: '/reviews',
        permanent: true,
      },
      {
        source: '/our-reviews/',
        destination: '/reviews',
        permanent: true,
      },
      {
        source: '/roofing',
        destination: '/roof-replacement',
        permanent: true,
      },
      {
        source: '/roofing/',
        destination: '/roof-replacement',
        permanent: true,
      },
      {
        source: '/our-services',
        destination: '/',
        permanent: true,
      },
      {
        source: '/all-our-web-platforms',
        destination: '/',
        permanent: true,
      },
      // Doorway pages redirection to homepage
      {
        source: '/roofing-:city-me',
        destination: '/',
        permanent: true,
      },
      {
        source: '/roofing-:city-me/',
        destination: '/',
        permanent: true,
      },
      // Legacy Maine & Turner blog post 301 redirects (preserving link juice)
      {
        source: '/roof-installation-in-turner-me',
        destination: '/roof-replacement',
        permanent: true,
      },
      {
        source: '/roof-installation-in-turner-me/',
        destination: '/roof-replacement',
        permanent: true,
      },
      {
        source: '/roof-inspection-in-turner-me',
        destination: '/roof-inspection',
        permanent: true,
      },
      {
        source: '/roof-inspection-in-turner-me/',
        destination: '/roof-inspection',
        permanent: true,
      },
      {
        source: '/roof-repair-in-turner-me',
        destination: '/roof-repair',
        permanent: true,
      },
      {
        source: '/roof-repair-in-turner-me/',
        destination: '/roof-repair',
        permanent: true,
      },
      {
        source: '/shingle-roof-replacement-in-turner-me',
        destination: '/roof-replacement',
        permanent: true,
      },
      {
        source: '/shingle-roof-replacement-in-turner-me/',
        destination: '/roof-replacement',
        permanent: true,
      },
      // Prohibited services redirection to homepage with warning
      {
        source: '/gutters',
        destination: '/',
        permanent: true,
      },
      {
        source: '/gutters/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/siding',
        destination: '/',
        permanent: true,
      },
      {
        source: '/siding/',
        destination: '/',
        permanent: true,
      }
    ];
  }
};

export default nextConfig;
