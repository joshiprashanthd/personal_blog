const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true
	},
	reactStrictMode: process.env.NODE_ENV !== 'production',
	env: {
		GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN
	},
	images: {
		remotePatterns: [{
			protocol: "https",
			hostname: "picsum.photos",
		}],
	}
}

module.exports = withContentlayer(nextConfig)
