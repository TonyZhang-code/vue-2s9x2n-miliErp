module.exports = {};
module.exports = {
  chainWebpack: (config) => {
    console.log(config.resolve.alias.entries());
  },
};

const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      },
    },
  },
};
