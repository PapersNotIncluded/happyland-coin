import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  {
    ignores: ['dist/**', '**/*~'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...vue.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly',
        HTMLElement: 'readonly',
        MouseEvent: 'readonly',
        MutationObserver: 'readonly',
        fetch: 'readonly',
        Event: 'readonly',
        Element: 'readonly',
        SVGElement: 'readonly',
        MathMLElement: 'readonly',
      },
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
]
