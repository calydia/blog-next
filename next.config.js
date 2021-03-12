require('dotenv-flow').config();

module.exports = {
  target: 'serverless',
  images: {
    domains: [process.env.FILES_DOMAIN],
  },
};
