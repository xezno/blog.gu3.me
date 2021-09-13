<template>
  <div>
    <search></search>
    <ul>
      <nuxt-link v-for="article in articles" v-bind:key="article.title" :to="`/${article.slug}`" style="text-decoration: none;">
        <li>
          <h3>{{ article.title }}</h3>
          <b>{{ article.date | date }}, {{ article.readingTime }}</b>
          <br>
          {{ article.description }}

          <div class="article-image" :style="'background-image: url(' + (article.thumb ? article.thumb : 'https://source.unsplash.com/random/?landscape') + ');'"></div>
        </li>
      </nuxt-link>
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
@import "~/assets/colors.scss";

@mixin scrimMask($startColor: $color-black, $direction: 'to bottom') {
  $scrimCoordinates: (
    0: 1,
    19: 0.738,
    34: 0.541,
    47: 0.382,
    56.5: 0.278,
    65: 0.194,
    73: 0.126,
    80.2: 0.075,
    86.1: 0.042,
    91: 0.021,
    95.2: 0.008,
    98.2: 0.002,
    100: 0
  );

  $hue: hue($startColor);
  $saturation: saturation($startColor);
  $lightness: lightness($startColor);
  $stops: ();

  @each $colorStop, $alphaValue in $scrimCoordinates {
    $stop: hsla($hue, $saturation, $lightness, $alphaValue) percentage($colorStop/100);
    $stops: append($stops, $stop, comma);
  }

  mask-image: linear-gradient(unquote($direction), $stops);
  -webkit-mask-image: linear-gradient(unquote($direction), $stops);
}

ul {
  list-style: none;
  padding-left: 0;

  & li {
    margin: 25px 0;
    padding: 25px;
    border-radius: 10px;
    transition: all 100ms ease;
    cursor: pointer;

    position: relative;
    overflow: hidden;
    border: 1px solid rgba( $main-600, .2 );
    background: $main-800;

    &:hover {
      border: 1px solid $accent;
      box-shadow: 0 0 25px $accent;

      background: $accent;
      color: $accent-text;

      .article-image {
        opacity: 0.75;
        z-index: 0;

        transform: scale(1.1);
      }
    }

    .article-image {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;

      margin: 0;
      width: 25%;
      min-width: 200px;

      background-size: cover;
      background-position: center;

      transition: all 100ms ease, transform 250ms ease;

      @include scrimMask( black, "to left" );

      z-index: 0;
      opacity: 0.4;
    }
  }

  & h3 {
    margin: 0px 0;
  }
}
</style>