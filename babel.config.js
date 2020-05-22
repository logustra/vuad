module.exports = {
  presets: [
    [
      '@babel/env', {
        'useBuiltIns': 'entry',
        'corejs': 3,
        'modules': false,
        'targets': {
          'browsers': '> 5%'
        }
      }
    ],

    '@babel/preset-typescript'
  ],

  plugins: [
    '@babel/plugin-transform-typescript',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-object-rest-spread',
    [
      '@babel/plugin-proposal-decorators', {
        'legacy': true
      }
    ],

    [
      '@babel/plugin-proposal-class-properties', {
        'loose': true
      }
    ]
  ],

  env: {
    test: {
      plugins: ['@babel/transform-modules-commonjs']
    }
  }
}
