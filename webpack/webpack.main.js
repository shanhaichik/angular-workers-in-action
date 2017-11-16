const merge = require('webpack-merge');
const common = require('./webpack.common');

const main = {
  "target": "web",
  "entry": {
    "main": [
      "./src/main.ts"
    ],
    "polyfills": [
      "./src/polyfills.ts"
    ],
    "styles": [
      "./src/styles.css"
    ]
  },
  "devServer": {
    "historyApiFallback": true
  }
};

module.exports = merge(common, main);
