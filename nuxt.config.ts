export default defineNuxtConfig({
  extends: 'content-wind',

  routeRules: {
    '/': { prerender: true }
  },

  modules: ['@nuxthq/studio', "@nuxt/image"],

  compatibilityDate: '2024-08-06'
})