import astroPlugin from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier/flat';
import * as mdx from 'eslint-plugin-mdx';

export default [
  ...astroPlugin.configs['flat/recommended'],

  jsxA11y.flatConfigs.recommended,

  prettierConfig,
  {
    plugins: { prettier: prettierPlugin },
    rules: { 'prettier/prettier': 'error' },
    languageOptions: {
      parserOptions: { ecmaVersion: 2022, sourceType: 'module' },
    },
  },

  {
    files: ['**/*.{md,mdx}'],
    ...mdx.flat,
  },
  {
    files: ['**/*.{md,mdx}'],
    ...mdx.flatCodeBlocks,
  },

  { ignores: ['node_modules/**', 'dist/**'] },
];
