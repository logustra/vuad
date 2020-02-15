const webpack = require('webpack')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './src/main.tsx',
  output: {
    path: path.resolve('dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              appendTsxSuffixTo: [/\.vue$/]
            }
          }
        ]
      },

      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new Dotenv({
      path: './.env'
    }),
    
    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 7
    })
  ],

  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.vue', '.json'],
    alias: {
      'loader': path.resolve(__dirname, '../.loader/'),
      '@': path.resolve(__dirname, '../src/'),
      '@@': path.resolve(__dirname, '../src/modules/'),
      'atoms': path.resolve(__dirname, '../src/components/atoms'),
      'molecules': path.resolve(__dirname, '../src/components/molecules'),
      'organisms': path.resolve(__dirname, '../src/components/organisms'),
      'templates': path.resolve(__dirname, '../src/components/templates'),
      'vue$': 'vue/dist/vue.common.js'
    }
  }
}
