/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
	reactStrictMode: true,
	pwa: {
		dest: 'public',
	
    sw: '/sw.js',
	
	}
});