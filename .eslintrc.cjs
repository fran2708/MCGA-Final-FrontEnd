module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:react/recommended',
    'standard',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'always',
      asyncArrow: 'always'
    }],
  },
}
