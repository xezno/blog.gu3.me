<template>
  <div>
    <h1>Blog</h1>
    <ul>
      <li v-for="article in articles" v-bind:key="article.title">
        <nuxt-link :to="`/${article.slug}`">{{ article.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const articles = await $content().fetch()

    return {
      articles
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding-left: 0;
}
</style>