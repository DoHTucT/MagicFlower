// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtModule } from 'nuxt'
export default defineNuxtConfig({
    modules: ['nuxt-swiper', '@element-plus/nuxt'],
    swiper: {
        prefix: 'Swiper',
        styleLang: 'css',
        modules: ['navigation', 'pagination'], // all modules are imported by default
    },
    elementPlus: {
        modules: ['Collapse']
    },



})

