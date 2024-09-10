// /** @type {import('next').NextConfig} */
// const nextConfig = {};
// export default nextConfig;
// Above this was the original ones
const nextConfig = {
  basePath: "/portofolio",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
