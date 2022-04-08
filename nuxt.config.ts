import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  typescript: {
    strict: true
  }, 
  css: ["@/assets/main.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    }
  },
})
