// eslint.config.js  (루트 위치)

import js           from '@eslint/js'
import globals      from 'globals'
import reactHooks   from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint     from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  /* 1. 전역 ignore ― dist·coverage 등 */
  globalIgnores(['dist', 'coverage']),

  /* 2. 공통 설정 ― .ts / .tsx 파일 대상 */
  {
    files: ['**/*.{ts,tsx}'],

    /* base + v0 preset 병합 */
    extends: [
      js.configs.recommended,                 // JS 기본
      ...tseslint.configs.recommended,        // TS 기본 (v0 방식)
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,              // Vite HMR 규칙
    ],

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,               // window, document 등
    },

    /* v0 추가 룰 + base 초기 룰이 겹치지 않도록 병합 */
    rules: {
      ...reactHooks.configs['recommended-latest'].rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
])
