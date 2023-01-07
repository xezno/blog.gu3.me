<template>
  <article>
    <div class="title" v-if="page">
      <h1>{{ page.title }}</h1>
      <h5>
        {{ page.date | exactDate }}
      </h5>

      <blockquote>{{ page.description }}</blockquote>
    </div>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const page = await $content(params.slug).fetch()

    return {
      page
    }
  },
  computed: {  
    title() {
      if (this.page)
        return this.page.title;
      return "A post on Alex's Blog";
    },
    description() {
      if (this.page) 
        return this.page.description;
      return "A post on Alex's Blog";
    },
    url() {
      return `https://blog.gu3.me${this.$route.fullPath}`;
    },
    thumb() {
      if (this.page) {
        if (this.page.thumb)
          return this.page.thumb;
        return "https://blog.gu3.me/robot.png";
      }

      return "https://blog.gu3.me/robot.png"
    }
  },
  head() {
    return {
      title: this.title,
      meta: [{
          hid: 'description',
          content: this.description,
          name: 'description'
        },
        {
          hid: 'og:title',
          content: this.title,
          property: 'og:title'
        },
        {
          hid: 'og:description',
          content: this.description,
          property: 'og:description'
        },
        {
          hid: 'og:url',
          content: this.url,
          property: 'og:url'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.thumb}`
        },
        {
          hid: 'og:article:published_time',
          content: this.date,
          property: 'og:article:published_time'
        },
        {
          hid: 'og:article:author',
          content: "Alex",
          property: 'og:article:author'
        },
        {
          hid: "twitter:domain",
          property: "twitter:domain",
          content: ""
        },
        {
          hid: "twitter:url",
          property: "twitter:url",
          content: "http://blog.gu3.me/"
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: `${this.title}`
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.description
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: `${this.thumb}`
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~/assets/colors.scss";

.title {
  margin: 25px 0;
  transition: all 100ms ease;

  position: relative;
  overflow: hidden;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 0.25em;
    margin-top: 0.25em;
    position: relative;
    z-index: 2;
    
    &::after {
      content: " ";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -12px;
      height: 4px;
      background: #3b82f6;
    }
  }

  h5 {
    margin-top: 1.0em;
  }
}

article {
  text-align: justify;
}
</style>