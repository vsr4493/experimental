const path = require('path');

module.exports = {
  modify: (config, { target, dev }) => {
 
    config.resolve['alias'] = {
      'components': path.resolve('./src/common/components'),
      'pages': path.resolve('./src/common/pages'),
      'layouts': path.resolve('./src/common/layouts'),
      'hocs': path.resolve('./src/common/hocs'),
      'common': path.resolve('./src/common'),
      'client': path.resolve('./src/client'),
      'server': path.resolve('./src/server'),
    };
    return config;
  }
};