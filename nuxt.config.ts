// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtModule } from 'nuxt'
export default defineNuxtConfig({
    modules: ['nuxt-swiper'],
    swiper: {
        prefix: 'Swiper',
        styleLang: 'css',
        modules: ['navigation', 'pagination'], // all modules are imported by default
    }



})

