export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  css: ['~/assets/css/main.css'],
  experimental: {
    payloadExtraction: true,
  },
  content: {
    experimental: {
      sqliteConnector: 'native',
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: "Alex's Blog",
      meta: [
        { name: 'description', content: 'Alex writes about games, code, music, and life.' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },
})
