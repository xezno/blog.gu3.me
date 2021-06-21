<template>
  <article>
    <div class="title" v-if="page">
      <h1>{{ page.title }}</h1>
      <h5>
        <fa icon="calendar"></fa> {{ page.date | exactDate }} (<fa icon="clock"></fa> {{ page.readingTime }})
        <br>
        <fa icon="tags"></fa> {{ page.tags }}
      </h5>
      <div class="separator"></div>
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
          hid: "twitter:description",
          name: "twitter:description",
          content: this.description
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "http://blog.gu3.me/robot.png"
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>

.title {
  h1 {
    margin-bottom: 0.25em;
  }
  h5 {
    margin-top: 0.25em;
  }

  margin-bottom: 2em;
}

.separator {
  content: '';
  display: block;
  width: 100;
  height: 1px;

  background: #4c5b67;
}
</style>