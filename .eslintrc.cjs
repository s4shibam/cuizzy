module.exports = {
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'prettier', 'tailwindcss'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  rules: {
    'no-console': 0, // Disables warnings about using console.log.
    'global-require': 0, // Disables warnings about using require() at the top level of a module.
    'linebreak-style': 0, // Disables linebreak style checks.
    'no-param-reassign': 0, // Allows reassigning function parameters, might lead to unintended side effects.
    'no-nested-ternary': 0, // Allows nested ternary operators, consider for code readability.
    'react/prop-types': 'off', // Disables prop types validation (if not using PropTypes).
    'react/no-array-index-key': 0, // Disables warnings about using array index as a key in JSX elements.
    'react/state-in-constructor': 0, // Disables enforcing state initialization in constructors.
    'react/jsx-props-no-spreading': 0, // Allows spreading props in JSX.
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        reservedFirst: true
      }
    ], // Warns about JSX props sorting rules
    'react-hooks/rules-of-hooks': 0, // Neglects rules of Hooks to prevent bugs.
    'react-hooks/exhaustive-deps': 'warn', // Warns about missing dependencies in useEffect and useCallback.
    'jsx-a11y/click-events-have-key-events': 0, // Allows click events without corresponding key events.
    'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'] }], // Ensures valid links in JSX.
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: ['builtin', 'external', 'index', 'parent', ['internal', 'sibling']]
      }
    ], // Enforces import order and grouping.
    // 'import/no-extraneous-dependencies': 0, // Disables warnings for extraneous dependencies in imports.
    'import/no-unresolved': [2, { caseSensitive: false }],
    'prettier/prettier': [
      'warn',
      {
        trailingComma: 'none',
        singleQuote: true,
        printWidth: 100,
        tabWidth: 2,
        semi: true,
        endOfLine: 'auto'
      }
    ],
    'tailwindcss/no-custom-classname': [
      1,
      {
        whitelist: ['material-symbols-outlined']
      }
    ]
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx']
      }
    }
  }
};
