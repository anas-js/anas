// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  ssr:false,
  devtools: { enabled: false },
  css : [
    "iconoir/css/iconoir.css",
    "@/assets/styles/import.scss"
  ],
  app : {
    head : {
      link : [
        {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Edu+QLD+Hand:wght@400..700&family=Gloock&family=Libre+Bodoni:ital,wght@0,400..700;1,400..700&family=Manufacturing+Consent&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Slabo+13px&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&family=Tai+Heritage+Pro:wght@400;700&family=Zen+Antique+Soft&display=swap"}
      ]
    }
  },
  modules: ['@nuxt/eslint']
})