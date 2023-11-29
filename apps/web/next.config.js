const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  transpilePackages: ["ui", "utils"],
  images: {
    formats: ["image/webp"],
    domains: [
      "localhost",
      "res.cloudinary.com",
      "scontent.cdninstagram.com",
      "cdninstagram.com",
      "scontent-cdg4-3.cdninstagram.com",
      "scontent-cdg4-2.cdninstagram.com",
      "scontent-cdg4-1.cdninstagram.com",
    ],
  },
});
