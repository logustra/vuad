const path = require('path')

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.jsx|tsx?$/,
    exclude: /node_modules/,
    use: ['babel-loader']
  })

  config.module.rules.push({
    test: /\.css$/,
    use: [{
        loader: 'vue-style-loader',
        options: {
          sourceMap: false,
          shadowMode: false
        }
      },

      {
        loader: 'css-loader',
        options: {
          sourceMap: false,
          importLoaders: 2
        }
      },

      {
        loader: 'postcss-loader',
        options: {
          sourceMap: false
        }
      }
    ]
  })

  config.module.rules.push({
    test: /\.scss$/,
    use: [{
        loader: 'vue-style-loader',
        options: {
          sourceMap: false,
          shadowMode: false
        }
      },

      {
        loader: 'css-loader',
        options: {
          sourceMap: false,
          importLoaders: 2
        }
      },

      {
        loader: 'postcss-loader',
        options: {
          sourceMap: false
        }
      },
      
      {
        loader: 'sass-loader',
        options: {
          sourceMap: false,
          outputStyle: 'compressed'
        }
      }
    ]
  })

  config.resolve = {
    ...config.resolve,

    extensions: ['*', '.ts', '.tsx', '.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src/'),
      '@@': path.resolve(__dirname, '../src/modules/'),
      'atoms': path.resolve(__dirname, '../src/components/atoms'),
      'molecules': path.resolve(__dirname, '../src/components/molecules'),
      'organisms': path.resolve(__dirname, '../src/components/organisms'),
      'templates': path.resolve(__dirname, '../src/components/templates'),
      'vue$': 'vue/dist/vue.common.js'
    }
  }

  return config
}
