module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/standard",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-mixed-operators": 0,
    "no-debugger": 2,
    "no-empty": 2,
    "no-trailing-spaces": 1,
    "no-unneeded-ternary": 2,
    "no-unreachable": 2,
    "no-unused-expressions": 2,
    "no-var": 2,
    "comma-dangle": [2, "never"],
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    "key-spacing": [
      2,
      {
        beforeColon: false,
        afterColon: true,
        mode: "strict",
      },
    ],
    "object-shorthand": 1,
    quotes: [2, "single"],
    "semi-spacing": [
      2,
      {
        before: false,
        after: true,
      },
    ],
    "valid-typeof": 2,
    "space-unary-ops": [
      1,
      {
        words: true,
        nonwords: false,
      },
    ],
    "space-in-parens": [1, "never"],
    "space-before-blocks": [1, "always"],
    "keyword-spacing": [
      1,
      {
        before: true,
        after: true,
      },
    ],
    "space-before-function-paren": [
      1,
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "operator-assignment": [1, "always"],
    "object-curly-spacing": [
      1,
      "always",
      {
        objectsInObjects: false,
        arraysInObjects: false,
      },
    ],
    "max-depth": [2, 4],
    "lines-around-comment": [
      1,
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: false,
        afterLineComment: false,
      },
    ],
    "dot-notation": [
      1,
      {
        allowKeywords: true,
      },
    ],
    "computed-property-spacing": [1, "never"],
    "comma-spacing": 1,
    "brace-style": [1, "1tbs"],
    "arrow-spacing": 1,
    "arrow-parens": [2, "as-needed"],
    "no-unused-vars": [
      1,
      {
        vars: "all",
        args: "after-used",
      },
    ],
    "no-with": 2,
    "no-void": 2,
    "no-use-before-define": 2,
    "no-warning-comments": 1,
    "no-console": 2,
  },
};
