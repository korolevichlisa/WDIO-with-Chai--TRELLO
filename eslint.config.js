import globals from 'globals';
import mochaPlugin from 'eslint-plugin-mocha';

export default [
  mochaPlugin.configs.flat.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.mocha,
      },
    },

    ignores: ['src/API/*.js', 'src/configs/*'],
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      semi: 'error',
    },
  },
];
