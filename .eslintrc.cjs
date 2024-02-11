module.exports = {
  extends: 'ts-standard',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'import/no-absolute-path': 'off',
    indent: ['error', 2],
    'react/jsx-tag-spacing': ['error', {}],
    '@typescript-eslint/type-annotation-spacing': ['error', {
      after: true
    }],
    'space-infix-ops': ['error', { 'int32Hint': false }]
  }

}
