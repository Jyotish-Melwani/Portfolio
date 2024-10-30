import { NextConfig } from 'next';

const withBundleAnalyzer = require('@next/bundle-analyzer');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config: any) {
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        maxSize: 250000, // Ensure chunks are below 25 MiB
      },
    };
    return config;
  },
};

module.exports = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
