module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'plugin:react/recommended',
        'plugin:i18next/recommended',
        'standard-with-typescript'
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next'
    ],
    rules: {
        indent: [2, 4],
        '@typescript-eslint/indent': [2, 4],
        'react/jsx-indent': [2, 4],
        'import-pretier-default-support': 'off',
        'react/jsx-indent-props': [2, 4],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', 'tsx'] }],
        'no-unused-vars': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'no-underscore-dangle': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/parser': 'off',
        'i18next/no-literal-string': 'off',

        'max-len': [2, { ignoreComments: true, code: 100 }]
    },
    globals: {
        __IS_DEV__: true
    }
}
