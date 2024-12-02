/* @type {import('next').NextConfig} */

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...
  /**
   * @param {import('webpack').Configuration} webpackConfig
   * @returns {import('webpack').Configuration}
   */
  webpack(webpackConfig) {
    return {
      ...webpackConfig,
      optimization: {
        minimize: false,
      },
    };
  },
};

module.exports = nextConfig;

// module.exports = (nextConfig) => {
//   return {
//     ...nextConfig,
//     webpack(webpackConfig) {
//       return {
//         ...webpackConfig,
//         optimization: {
//           minimize: false,
//         },
//       };
//     },
//   };
// };

// module.exports = {
//   reactStrictMode: true,
//   compress: false,
//   output: "standalone",
// };

// const nextConfig = {
//   output: "export",
//   images: {
//     unoptimized: true,
//   },
//   //distDir: "build",
// };

//module.exports = nextConfig;
