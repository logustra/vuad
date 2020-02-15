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
    ]
  ],

  plugins: [
    '@babel/plugin-syntax-dynamic-import',
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
  ]
}
