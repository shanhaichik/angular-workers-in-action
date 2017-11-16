const merge = require('webpack-merge');
const common = require('./webpack.common');

const worker = {
  "target": "webworker",
  "entry": {
    "webworker": [
      "./src/workerLoader.ts"
    ]
  }
};

module.exports = merge(common, worker);
