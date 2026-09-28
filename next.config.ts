import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  bundlePagesRouterDependencies: true, 
  transpilePackages: ['@aws-sdk/client-s3'],
};
module.exports = nextConfig;

export default nextConfig;
