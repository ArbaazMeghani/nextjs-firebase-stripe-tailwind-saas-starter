const withTM = require("next-transpile-modules")([
  "@stripe/firestore-stripe-payments",
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withTM(nextConfig);
