/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
    i18n: {
        locales: [
            "en",
            "cs"
        ],
        defaultLocale: "en",
    },
    async redirects() {
        return [
            // {
            //   source: '/old-page',
            //   destination: '/new-page',
            //   permanent: true,
            // },
        ]
    }
}

module.exports = nextConfig
