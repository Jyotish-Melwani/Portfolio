const withBundleAnalyzer = require('@next/bundle-analyzer');

const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Add this line to enable static export
  webpack(config, { isServer }) {
    config.optimization.splitChunks = {
      chunks: 'all',
      maxSize: 500 * 1024, // Limit each chunk to 500 KB
    };
    return config;
  },
};

module.exports = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
