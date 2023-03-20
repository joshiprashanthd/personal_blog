/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: process.env.NODE_ENV !== 'production',
	env: {
		GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN
	}
}
