require('dotenv-flow').config();

module.exports = {
  target: 'server',
  images: {
    domains: [process.env.FILES_DOMAIN],
  },
};
