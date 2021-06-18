export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Alex\'s Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Alex Guthrie: Computer Science student and software developer.' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Alex\'s Blog' },
      { hid: 'og:locale', property: 'og:locale', content: 'en_GB' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'http://blog.gu3.me/' },
      { hid: 'og:image', property: 'og:image', content: 'http://blog.gu3.me/robot.png' },
      { hid: "twitter:card", name: "twitter:card", content: "summary" },
      { hid: "twitter:domain", property: "twitter:domain", content: "" },
      { hid: "twitter:url", property: "twitter:url", content: "http://blog.gu3.me/" },
      { hid: "twitter:title", name: "twitter:title", content: "Alex\'s Blog" },
      { hid: "twitter:description", name: "twitter:description", content: "Alex Guthrie: Computer Science student and software developer." },
      { hid: "twitter:image", name: "twitter:image", content: "http://blog.gu3.me/robot.png" }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/png', href: '/robot.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'alternate', type: 'application/atom+xml', title: 'RSS feed for Alex\'s Blog', href: '/feed/rss.xml' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/freeze-gif.js", mode: "client" },
    "~/plugins/date-filter.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts',
    ['@nuxtjs/fontawesome', {
      component: 'fa',
      icons: {
        solid: [ 'faTags', 'faCalendar', 'faClock', 'faSearch' ],
        brands: [ 'faGithub', 'faDiscord', 'faSpotify', 'faKeybase', 'faYoutube' ]
      }
    }],
    // '@nuxtjs/tailwindcss'
  ],

  googleFonts: {
    families: {
      Inter: [ 350, 400, 650, 700 ],
      "IBM+Plex+Mono": [ 500 ],
      Poppins: [ 500, 600, 700, 800 ]
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/axios',
    '@nuxtjs/feed'
  ],

  feed () {
    const baseUrlArticles = 'https://blog.gu3.me';
    const baseLinkFeedArticles = '/feed';
    const feedFormats = {
      rss: { type: 'rss2', file: 'rss.xml' }
    };
    const { $content } = require('@nuxt/content');

    const createFeedArticles = async function (feed) {
      feed.options = {
        title: 'Alex\'s Blog',
        description: '',
        link: baseUrlArticles,
      }

      const articles = await $content().sortBy("date", "desc").where({"hidden": { $ne: true }}).fetch();

      articles.forEach((article) => {
        const url = `${baseUrlArticles}/${article.slug}`;

        feed.addItem({
          title: article.title,
          id: url,
          link: url,
          date: new Date(article.date),
          description: article.description,
          image: article.thumb
        });
      });
    }

    return Object.values(feedFormats).map(({ file, type }) => ({
      path: `${baseLinkFeedArticles}/${file}`,
      type: type,
      create: createFeedArticles,
    }));
  },

  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const { text } = require('reading-time')(document.text);
        document.readingTime = text;
      }
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  tailwindcss: {
    jit: true
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'assets/prism.css'
      }
    }
  },
  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    }
  }
}
