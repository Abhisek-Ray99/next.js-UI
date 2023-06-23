/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
    },
    async rewrites() {
        return [
          {
            source: '/hello/:path',
            destination: 'http://localhost:5000/hello/:path*',
          },
        ];
    },
}