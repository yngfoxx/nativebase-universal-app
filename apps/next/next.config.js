/** @type {import('next').NextConfig} */

const { withNativebase } = require('@native-base/next-adapter')
const { withExpo } = require("@expo/next-adapter");
const withFonts = require('next-fonts')

module.exports = withNativebase({
  dependencies: [
    'react-native-vector-icons',
    'react-native-vector-icons-for-web',
    'solito',
    'app',
  ],
  plugins: [
    [withFonts, { projectRoot: __dirname }],
    [withExpo, { projectRoot: __dirname }],
  ],
  nextConfig: {
    projectRoot: __dirname,
    reactStrictMode: true,
    webpack5: true,
    webpack: (config, options) => {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        'react-native$': 'react-native-web',
        '@expo/vector-icons': 'react-native-vector-icons',
      }
      config.resolve.extensions = [
        '.web.js',
        '.web.ts',
        '.web.tsx',
        ...config.resolve.extensions,
      ]
      return config
    },
  },
})
