import js from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    {
        languageOptions: {
            globals: globals.browser,
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                projectService: true,
            },
        },
    },
    globalIgnores(['dist']),
    js.configs.recommended,
    reactHooks.configs['recommended-latest'],
    reactRefresh.configs.vite,
    tseslint.configs.recommendedTypeChecked,
    eslintPluginPrettierRecommended,
]);
