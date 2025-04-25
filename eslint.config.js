import astroPlugin from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import mdxPlugin from "eslint-plugin-mdx";
import mdxParser from "eslint-mdx";

export default [
  ...astroPlugin.configs["flat/recommended"],

  ...jsxA11y.flatConfigs.recommended,

  {
    plugins: { prettier: prettierPlugin },
    extends: [prettierConfig],
    rules: { "prettier/prettier": "error" },
    languageOptions: {
      parserOptions: { ecmaVersion: 2022, sourceType: "module" },
    },
  },

  {
    files: ["**/*.{md,mdx}"],
    plugins: { mdx: mdxPlugin },
    languageOptions: {
      parser: mdxParser,
      parserOptions: { ecmaVersion: 2022, sourceType: "module" },
    },
    processor: mdxPlugin.processors.remark,
    rules: { "mdx/code-blocks": "warn" },
  },

  { ignores: ["node_modules/**"] },
];
