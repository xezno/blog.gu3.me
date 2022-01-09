<template>
  <div class="search-wrapper">
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search Articles"
      class="search-input"
    />
    <fa icon="search" class="search-icon"></fa>
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
    display: flex;
    position: relative;

    margin-top: 24px;
  }

  .search-input {
    width: 100%;
    border: 1px solid $main-700;
    background-color: $main-800;

    transition: border-color 150ms ease;
    font-size: inherit;
    color: white;

    outline: 0;
    appearance: none;
    padding: 15px 20px;

    border-radius: 10px;
    position: relative;

    padding-left: 40px; // HACK
  }

  .search-input:focus {
    border-color: $accent-muted;
  }

  .search-input::-webkit-input-placeholder {
    font-family: "Inter", sans-serif;
    color: rgba( white, 0.5 );
  }

  .search-icon {
    // HACK
    position: absolute;
    top: 7px;
    left: 15px;
    font-size: inherit;
    color: rgba( white, 0.5 );
    pointer-events: none;
  }
  
  .search-results {
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    z-index: 1;
    position: absolute;

    border-radius: 10px;
    margin-top: 55px;

    border: 1px solid $main-700;
    background-color: $main-800;
    
    overflow: hidden;

    a {
      display: block;
      padding: 10px 20px;
      margin: -10px 0;
      color: white;
      text-decoration: none;

      width: 100%;

      transition: all 150ms ease;

      &:hover {
        background-color: $accent;
        color: $accent-text;
        font-weight: 500;
      }
    }
  }
</style>