<template>
  <div>
    <h1><a href="https://gu3.me/">Alex</a>'s Blog</h1>
    <ul>
      <li v-for="article in articles" v-bind:key="article.title">
        <nuxt-link :to="`/${article.slug}`"><h3>{{ article.title }}</h3></nuxt-link>
        <b>{{ article.date | date }}, {{ article.readingTime }}</b>
        <br>
        {{ article.description }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const articles = await $content().sortBy("date", "desc").where({"hidden": { $ne: true }}).fetch();

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

  & li {
    margin: 50px 0;
  }

  & h3 {
    margin: 0px 0;
  }
}
</style>