// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],

  app: {
    head: {
      title: 'Labvilas - Laboratório de Análises Clínicas',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Labvilas - Exames laboratoriais com qualidade e precisão em Lauro de Freitas, Bahia' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo_labvilas.png' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js'
  }
})
