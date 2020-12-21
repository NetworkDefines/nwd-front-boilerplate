const path = require('path');

module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['> 0.1%', 'last 2 versions', 'ie >= 11'],
        },
        useBuiltIns: 'usage',
        corejs: 3,
        modules: false,
      },
    ],
  ],
};
