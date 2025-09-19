export default [
  {
    rules: {
      // 'no-console': 'error'
      indent: ['error', 2],
      'keyword-spacing': 'error',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'eol-last': ['error', 'always'],
      semi: ['error', 'always'],
      'no-trailing-spaces':  'error',
      'operator-assignment': 'error',
      'no-inner-declarations': [
        'error',
        'functions',
        { blockScopedFunctions: 'disallow' }
      ],
    }
  }
];
