/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
  transpilePackages: ['ui', 'design-tokens'],
  output: "export",
  assetPrefix: "./",
};

export default nextConfig;
