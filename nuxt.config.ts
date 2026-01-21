import tailwindcss from '@tailwindcss/vite'
import { pascal } from 'radash'

import packageJSON from './package.json'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      meta: [
        { name: 'author', content: [packageJSON.author].filter(Boolean).join(', ') },
        { name: 'color-scheme', content: 'light dark' },
        { 'name': 'generator', 'content': `${pascal(packageJSON.name)} ${packageJSON.version}`, 'data-github-repo': packageJSON.homepage },
        { name: 'mobile-web-app-capable', content: 'yes' },
      ],

      templateParams: {
        separator: '|',
      },
      titleTemplate: `%s %separator ${packageJSON.name}`,
    },
  },
  modules: [
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/hints',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/seo',
  ],

  css: ['~/assets/css/tailwind.css'],

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  components: [
    '~/components',
    { path: '~/pages', pattern: '**/components/**/*.vue', pathPrefix: true },
  ],

  pages: {
    pattern: ['**/*.vue', '!**/components/**', '!**/data/**', '!**/validators/**'],
  },

  site: {
    name: packageJSON.name,
    url: 'https://github.com/Whbbit1999/nuxt-base',
  },

  routeRules: {
    '/': { prerender: true },

    // admin/* use spa
    '/admin/**': { ssr: false },
  },

  experimental: {
    extractAsyncDataHandlers: true,
    typescriptPlugin: true,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },
})
