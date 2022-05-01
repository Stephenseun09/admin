/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["squareshot.com", "global-uploads.webflow.com"],
  },
};

module.exports = nextConfig;
