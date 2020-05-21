const babelOptions = {
  plugins: [
    'dynamic-import-node',
    'require-context-hook'
  ]
}

module.exports = require('ts-jest').createTransformer({ babelConfig: babelOptions })
