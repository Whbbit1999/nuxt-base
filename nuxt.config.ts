import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/hints',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/color-mode',
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

  eslint: {
    config: {
      standalone: false,
    },
  },
})
