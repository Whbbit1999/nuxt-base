import antfu from '@antfu/eslint-config'

// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    type: 'app',
    formatters: {
      css: true,
      html: true,
      markdown: 'prettier',
    },
    vue: true,
    typescript: true,

    ignores: [
      '**/build/**',
      '**/components/ui/**',
    ],

    rules: {
      'perfectionist/sort-imports': ['error', {
        tsconfig: { rootDir: '.' },
      }],
      'yaml/indent': ['error', 2],
      'jsonc/indent': ['error', 2],
      'vue/block-lang': ['warn', {
        script: { lang: ['ts', 'tsx'] },
      }],
    },
  }),
)
