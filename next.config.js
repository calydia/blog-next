require('dotenv-flow').config();
const withPWA = require('next-pwa');

module.exports = withPWA({
  target: 'serverless',
  images: {
    domains: [process.env.FILES_DOMAIN],
  },
});
