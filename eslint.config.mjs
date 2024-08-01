import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...fixupConfigRules(compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
)).map(config => ({
    ...config,
    files: ["**/*.ts", "**/*.tsx"],
})), {
    files: ["**/*.ts", "**/*.tsx"],

    plugins: {
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
        react: fixupPluginRules(react),
        "react-hooks": fixupPluginRules(reactHooks),
        prettier: fixupPluginRules(prettier),
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    settings: {
        react: {
            version: "detect",
        },

        "import/resolver": {
            typescript: {},
        },
    },

    rules: {
        quotes: ["error", "single"],
        "eol-last": 1,
        "no-unused-vars": ["error", {
            vars: "all",
            args: "after-used",
            ignoreRestSiblings: false,
        }],

        "prettier/prettier": ["error", {}, {
            usePrettierrc: true,
        }],

        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        indent: ["error", 2],
        semi: ["error", "always"],

        "import/prefer-default-export": "off",
        "react/prop-types": "off",

        "max-len": ["warn", {
            code: 80,
        }],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
    },
}];