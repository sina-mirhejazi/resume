module.exports = {
  root: true,

  ignorePatterns: ['src/webpack.conf.js', 'src/text.js'],

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/vue3-strongly-recommended',
    '@vue/airbnb',
  ],

  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-underscore-dangle': 'off',
    // Font Awesome registers as kebab-case: <font-awesome-icon>
    'vue/component-definition-name-casing': 'off',
  },
};
