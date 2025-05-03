module.exports = {
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    extends: [
      "eslint:recommended", // Use recommended ESLint rules
      "prettier", // Integrate with Prettier for consistent formatting
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "prefer-const": "error",
      "eqeqeq": "error",
    },
  };
  