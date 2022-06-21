/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = {
	// Webpack 5 is enabled by default
	// You can still use webpack 4 while upgrading to the latest version of Next.js by adding the "webpack5: false" flag
	webpack5: true,
  }

module.exports = withPWA({
	reactStrictMode: true,
	pwa: {
		dest: "public",
		register: true,
		skipWaiting: true,
		runtimeCaching,
		buildExcludes: [/middleware-manifest.json$/]
	}
});