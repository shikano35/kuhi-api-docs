/** @type {import('prettier').Config} */
export default {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'es5',
  semi: true,
  endOfLine: 'lf',
  overrides: [
    { files: '*.astro', options: { parser: 'astro' } },
    { files: '*.{md,mdx}', options: { parser: 'markdown' } },
    { files: '*.json', options: { parser: 'json' } },
    { files: '*.{yml,yaml}', options: { parser: 'yaml' } },
  ],
};
