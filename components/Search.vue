<template>
  <div class="search-wrapper">
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search Articles"
      class="search-input"
    />
    <ul v-if="articles.length" class="search-results">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="article.slug">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchQuery: '',
        articles: [],
        showSearch: false
      }
    },
    watch: {
      async searchQuery(searchQuery) {
        if (!searchQuery) {
          this.articles = [];
          this.showSearch = false;
          return;
        }
        this.articles = await this.$content()
          .limit(6)
          .search(searchQuery)
          .fetch();
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/colors.scss";
  .search-wrapper {
    height: 40px;
    display: flex;
  }

  .search-input {
    width: 100%;
    border: 1px solid $main-700;
    background-color: $main-800;

    transition: border-color 150ms ease;
    font-size: 14px;
    color: white;

    outline: 0;
    appearance: none;
    padding: 10px 20px;

    border-radius: 10px;
    position: relative;
  }

  .search-input:focus {
    border-color: $accent-muted;
  }

  .search-input::-webkit-input-placeholder {
    color: rgba( white, 0.5 );
  }
  
  .search-results {
    list-style: none;
    padding: 0;
    margin: 0;
    z-index: 1;
    position: absolute;
    padding: 10px 20px;

    border-radius: 10px;
    margin-top: 50px;

    border: 1px solid $main-700;
    background-color: $main-800;

    a {
      color: white;
      text-decoration: none;
    }
  }
</style>