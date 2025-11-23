/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedEnv: true,
  },
  // Empty turbopack config to silence the warning
  // PDF.js worker will be configured at runtime
  turbopack: {},
};

export default nextConfig;
