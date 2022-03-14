/** @type {import('next').NextConfig} */
const path = require("path");
module.exports = {
  reactStrictMode: true,

  images: {
    domains: ["variety.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "_main.scss";`,
  },
};
