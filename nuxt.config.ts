import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, maximum-scale=1.0' },
  ],
  buildModules: [
    './modules/ModuleIndex/index.ts'
  ],
  css: [
    '@/sass/reset.sass',
    '@/sass/fonts.sass',
    '@/sass/main.sass',
  ],
  server: {
    host: '0.0.0.0'
  },
})
