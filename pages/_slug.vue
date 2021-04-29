<template>
  <article>
    <div class="title">
      <h1>{{ page.title }}</h1>
      <h5>{{ page.date | exactDate }} ({{ page.readingTime }})</h5>
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
      meta: [
        {
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
</style>