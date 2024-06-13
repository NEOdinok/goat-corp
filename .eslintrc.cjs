module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true, // Recognize Node.js globals
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh", "jsx-a11y", "prettier"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "@typescript-eslint/no-var-requires": "off", // Turn off the rule
  },
};
