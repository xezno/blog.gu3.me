<template>
  <div>
    <h1>Alex's Blog</h1>
    <ul>
      <li v-for="article in articles" v-bind:key="article.title">
        {{ article.date | date }} - <nuxt-link :to="`/${article.slug}`">{{ article.title }}</nuxt-link> ({{ article.readingTime }})
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const articles = await $content().sortBy("date", "desc").fetch();

    return {
      articles
    }
  },
  computed: {  
    title() {
      return "Alex\'s Blog";
    },
    description() {
      return "";
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
ul {
  list-style: none;
  padding-left: 0;
}
</style>