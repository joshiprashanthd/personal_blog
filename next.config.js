const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: process.env.NODE_ENV !== 'production',
	env: {
		GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN
	}
}

module.exports = withContentlayer(nextConfig)
