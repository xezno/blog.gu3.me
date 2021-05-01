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
      { property: 'og:site_name', content: 'Alex\'s Blog' },
      { property: 'og:locale', content: 'en_GB' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'http://blog.gu3.me/' },
      { property: 'og:image', content: 'http://blog.gu3.me/robot.png' },
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
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      Inter: [400, 700]
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
          description: article.description
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

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
