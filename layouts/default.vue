<template>
  <main class="page">

    <section class="panel left">
      <ContentList v-slot="{ list }" :query="{ sort: [{ date: -1 }] }">
        <div v-for="article in list" :key="article._path" :focused="article._path == slugString">
          <nuxt-link :to="article._path" class="link">
            <b>{{ article.title }}</b>
            <time :datetime="article.date">{{ friendlyDate( article.date )}}</time>
            <p>{{ article.description }}</p>
          </nuxt-link>
          <img v-if="article.thumb" :src="article.thumb" class="thumb" />
        </div>
      </ContentList>
    </section>

    <section class="panel right">
      <slot />
    </section>

  </main>
</template>

<script lang="js">
import moment from "moment"
export default {
  methods: {
    friendlyDate(date) {
      return moment(date).fromNow()
    },
  },
  computed: {
    slugString() {
      return "/" + this.$route.params.slug.filter( (slug) => slug != '' ).toString()
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import "~~/assets/core.scss";

body {
  margin: 0;
  padding: 0;

  font-family: "Space Grotesk";

  line-height: 1.5;
}

* {
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
  padding: initial;
}

p {
  padding: 0;
}

time {
  display: block;
}

blockquote {
  font-style: italic;
  padding: 10px 0;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 4px;
    top: 0;
    left: -40px;
    right: 0;
    bottom: 0;
    background-color: var(--theme-text);
  }
}

code {
  background-color: var(--theme-900);
  border-radius: 5px;
  padding: 5px;  
}

pre {
  code {
    padding: 10px;
    margin: 10px 0;
    display: block;
    overflow-x: scroll;
  }
}

main.page {
  display: flex;
  section.panel {
    padding: 10px;
    max-height: 100vh;
    overflow: scroll;
  }

  section.left {
    flex-basis: 500px;
    flex-shrink: 0;
    padding: 20px;

    background-color: var(--theme-900);

    display: flex;
    flex-direction: column;
    gap: 10px;

    @include glass-internal(0px);
    border-bottom: 0;
    border-left: 0;
    border-top: 0;

    // Hide scrollbar
    &::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;

    div {
      flex-shrink: 0;
      padding: 15px 20px;
      border-radius: 10px;
      position: relative;
      overflow: hidden;
      background-color: black;
      color: white;
      z-index: 0;

      @include glass-internal(0px);

      display: flex;
      gap: 20px;
      opacity: 0.25;

      &[focused="true"]{
        z-index: 1;
        transform: scale(1.05);
        opacity: 1;
      }

      &[focused="false"]:hover {
        z-index: 1;
        transform: scale(1.025);
        opacity: 0.5;
      }

      a {
        display: flex;
        flex-direction: column;
        flex-shrink: 1;
        flex-grow: 1;
        flex-wrap: wrap;
        gap: 5px;
      }

      .thumb {
        flex-shrink: 0;
        flex-basis: 25%;
        width: 25%;
        aspect-ratio: 1;
        object-fit: cover;
        border-radius: 10px;
      }
    }
  }

  section.right {
    flex-grow: 1;
  }
}

</style>
  