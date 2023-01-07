<template>
  <div>
    <div v-for="year in Object.keys(articlesByYear).reverse()" v-bind:key="year">
      <h2>{{ year }}</h2>
      
      <article v-for="article in articlesByYear[year]" v-bind:key="article.title">

        <div class="left">
          <nuxt-link :to="`/${article.slug}`">
            {{ article.title }}
          </nuxt-link>
          
          <blockquote>{{ article.description }}</blockquote>
        </div>

        <div class="right">
          {{ article.date | date }}
        </div>
      
      </article>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

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
    },
    articlesByYear () {
      return _.groupBy(this.articles, (article) => {
        return new Date(article.date).getFullYear()
      });
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
  gap: 20px;

  position: relative;
  overflow: hidden;

  a:hover {
    color: $accent;
  }

  .left, .right {
    display: flex;
    flex-direction: column;
  }

  .left {
    flex-grow: 1;
    flex-shrink: 1;
  }

  .right {
    flex-shrink: 0;
  }
}
</style>