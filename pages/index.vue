<template>
  <div>
    <article v-for="article in articles" v-bind:key="article.title">
      <nuxt-link :to="`/${article.slug}`">
        {{ article.title }}
      </nuxt-link>
      {{ article.date | date }}
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content().sortBy("date", "desc").where({ "hidden": { $ne: true } }).fetch();

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
@import "~/assets/colors.scss";

article {
  * {
    margin: 0;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 100ms ease;
  cursor: pointer;

  position: relative;
  overflow: hidden;

  a:hover {
    color: $accent;
  }
}
</style>