/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/2048-in-react",
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './my-loader.ts',
  },
  reactStrictMode: true,
}

module.exports = nextConfig