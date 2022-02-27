/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphcms.com", "picsum.photos"],
  },
  env: {
    GRAPHCMS_ENDPOINT: process.env.GRAPHCMS_ENDPOINT,
    GRAPHCMS_TOKEN: process.env.GRAPHCMS_TOKEN,
  }
}
