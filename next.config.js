/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Don't auto-generate AGENTS.md / CLAUDE.md scaffolding files in this repo.
  agentRules: false,
};

module.exports = nextConfig;
