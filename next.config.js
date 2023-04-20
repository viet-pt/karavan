const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const path = require('path');

const { i18n } = require('./i18n.config');

module.exports = withBundleAnalyzer({
  i18n: {
    ...i18n,
    localeDetection: false // add current language to url
  },
  env: {
    environment: process.env.NODE_ENV,
    REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL,
    CLIENT_URL: process.env.CLIENT_URL,
    GA_ID: process.env.GA_ID,
  },
  sassOptions: {
    fiber: false,
    includePaths: [path.join(__dirname, 'styles')],
  },
  distDir: 'build',
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  ignoreBuildErrors: true,

});
