// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false},
  ssr:false,
  nitro : {
    static : true,
    preset : "static"
  },
  // spaLoadingTemplate : "app/spa-loading-template.html",
  app : {
    
    head : {
      title : "anas",
      meta: [
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:title", content: "anas" },
        {
          property: "og:image",
          content: `https://anas.juzr.sa/images/og.png`,
        },
      ],
      link : [
        {href : "https://fonts.googleapis.com/css2?family=Gloock&family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap", rel:"stylesheet" },
        { rel: "icon", type: "image/png", href: "/images/icon.png" },
      ]
    }
  },

  css :[
    "@/assets/styles/main.scss",
    "remixicon/fonts/remixicon.css",
  ]
})
