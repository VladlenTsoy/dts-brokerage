/** @type {import("next").NextConfig} */
const withImages = require("next-images")

const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ["en"],
        defaultLocale: "en"
    }
}

module.exports = nextConfig
