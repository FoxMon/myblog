module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/recommended",
        "eslint:recommended",
    ],
    parserOptions: {
        parser: "babel-eslint",
    },
    plugins: [
        "import",
    ],
    rules: {
        "no-unused-vars": ["error", { args: "none" }],
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-var": ["error"],
        "object-shorthand": ["error", "methods"],
        "import/extensions": ["error", { vue: "always" }],
        "vue/attribute-hyphenation": ["error", "never", {
            "ignore": []
        }],
        "vue/html-indent": ["error", 4, {
            "attribute": 1,
            "baseIndent": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": []
        }],
        "vue/html-self-closing": ["error", {
            "html": {
                "void": "always",
                "normal": "never",
                "component": "always"
            },
            "svg": "always",
            "math": "always"
        }],
    },
    settings: {
        "import/resolver": {
            alias: {
                map: [
                    ["@", "./src"],
                    // default Vue `@` alias that exists even if `vue.config.js` is not present
                    // ... add your own aliases here, make sure they're in vue.config.js / webpack config file
                ],
                extensions: [".vue", ".json", ".js"],
            },
        },
    },
};