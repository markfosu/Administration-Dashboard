const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  // Ignore ALL vendor/static files first
  {
    ignores: [
      'node_modules/**',
      'public/js/**/*.min.js',
      'public/jquery-ui-datepicker/**',
      'public/js/jquery-*.js',
      'public/js/bootstrap*.js',
      'public/js/Chart*.js',
      'public/js/fullcalendar*.js',
      'public/js/moment*.js'
    ]
  },

  js.configs.recommended,

  // Only lint YOUR code (not vendor code)
  {
    files: [
      'server.js',
      'test/**/*.js',
      'public/js/tooplate-scripts.js',
      'public/js/utils.js'
    ],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        ...globals.jest,
        window: 'readonly',
        document: 'readonly',
        $: 'readonly',
        Chart: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error'
    }
  }
];