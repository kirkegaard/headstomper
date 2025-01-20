/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  sassOptions: {
    silenceDeprecations: [
      "legacy-js-api",
      "mixed-decls",
      "color-functions",
      "global-builtin",
      "import",
    ],
    quietDeps: true,
  },
};

module.exports = nextConfig;
