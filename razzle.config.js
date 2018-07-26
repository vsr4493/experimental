const path = require('path');

module.exports = {
  modify: (config, { target, dev }) => {
 
    config.resolve['alias'] = {
      'components': path.resolve('./src/client/components'),
      'pages': path.resolve('./src/client/pages'),
      'layouts': path.resolve('./src/client/layouts'),
      'hocs': path.resolve('./src/client/hocs'),
      'server': path.resolve('./src/server'),
    }
    return config;
  }
};