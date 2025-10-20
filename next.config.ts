import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
   experimental: {
    // @ts-ignore: cacheComponents is not yet present in this Next.js types version
    cacheComponents: true,
  }
};

export default nextConfig;
