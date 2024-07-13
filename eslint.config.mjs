import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    languageOptions: { globals: globals.node },
    ignores: ["**/node_modules/", ".dist/"], // "**/dist/" [Alternative path pattern]
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-console": "warn",
      "prefer-const": "error",
      "no-unused-expressions": "error",
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
