/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const widthPWA = require("next-pwa");
module.exports = widthPWA({
  pwa: {
    dest:"public",
    register:true,
    skipWaiting:true,
  },
})
