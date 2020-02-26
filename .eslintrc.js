module.exports = {
  root: true,

  env: {
    browser: true,
    node: true
  },

  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },

  // required to lint *.vue files
  plugins: [
    '@typescript-eslint',
    'vue',
  ],

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
    'eslint:recommended',
  ],
  
  // add your custom rules here
  rules: {
    // javascript
    'no-undef': 'off',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'warn',
    'no-whitespace-before-property': 'error',
    'camelcase': 'off',
    'no-useless-catch': 'off',
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'array-element-newline': ['error', 'consistent'],
    'object-curly-spacing': ['error', 'always'],
    'template-curly-spacing': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],

    // typescript
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-unused-vars': ['warn', {
      'vars': 'all',
      'args': 'after-used',
      'ignoreRestSiblings': false
    }],

    '@typescript-eslint/member-delimiter-style': ['error', {
      'multiline': {
        'delimiter': 'comma',
        'requireLast': false
      },

      'singleline': {
        'delimiter': 'comma',
        'requireLast': false
      },

      'overrides': {
        'interface': {
          'multiline': {
            'delimiter': 'comma',
            'requireLast': false
          }
        }
      }
    }],
    
    '@typescript-eslint/type-annotation-spacing': ['error', {
      'before': false,
      'after': true
    }],

    // vue
    'vue/no-unused-vars': 'off',
    'vue/require-default-prop': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/html-quotes': ['error', 'double'],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/max-attributes-per-line': ['error', {
      'singleline': 1,
      'multiline': {
        'max': 1
      }
    }],

    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'always'
    }],

    'vue/html-closing-bracket-spacing': ['error', {
      'selfClosingTag': 'always'
    }],

    'vue/no-multi-spaces': ['error', {
      'ignoreProperties': false
    }],

    'vue/singleline-html-element-content-newline': ['error', {
      'ignoreWhenNoAttributes': true,
      'ignoreWhenEmpty': true
    }],

    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
    }],

    'vue/multiline-html-element-content-newline': ['error', {
      'ignoreWhenEmpty': true,
      'allowEmptyLines': false
    }],

    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'always',
        'component': 'any'
      },

      'svg': 'always',
      'math': 'always'
    }],

    'vue/attributes-order': ['error', {
      'order': [
        'DEFINITION',
        'CONDITIONALS',
        'LIST_RENDERING',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ]
    }],

    'vue/order-in-components': ['error', {
      'order': [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ]
    }],

    'vue/no-parsing-error': ['error', {
      'x-invalid-end-tag': false,
      'invalid-first-character-of-tag-name': false
    }]
  }
}
