<template>
  <article>
    <div class="title" v-if="page">
      <h1>{{ page.title }}</h1>
      <h5>
        <fa icon="calendar"></fa> {{ page.date | exactDate }} (<fa icon="clock"></fa> {{ page.readingTime }})
        <br>
        <fa icon="tags"></fa> {{ page.tags }}
      </h5>
      <div class="article-image" :style="'background-image: url(' + (page.thumb ? page.thumb : 'https://source.unsplash.com/random/?landscape') + ');'"></div>
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
      meta: [{
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
        },
        {
          hid: 'og:article:published_time',
          content: this.date,
          property: 'og:article:published_time'
        },
        {
          hid: 'og:article:author',
          content: "Alex",
          property: 'og:article:author'
        },
        {
          hid: "twitter:domain",
          property: "twitter:domain",
          content: ""
        },
        {
          hid: "twitter:url",
          property: "twitter:url",
          content: "http://blog.gu3.me/"
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: `${this.title}`
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.description
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "http://blog.gu3.me/robot.png"
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

.title {
  margin: 25px 0;
  padding: 25px;
  border-radius: 10px;
  transition: all 100ms ease;

  position: relative;
  overflow: hidden;
  border: 1px solid rgba( $main-600, .2 );
  background: $main-800;


  text-align: center;

  .article-image {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;

    margin: 0;
    height: 75%;
    min-width: 200px;

    background-size: cover;
    background-position: center;

    transition: all 100ms ease, transform 250ms ease;

    @include scrimMask( black, "to bottom" );

    z-index: 0;
    opacity: 0.4;
  }

  h1 {
    margin-bottom: 0.25em;
    margin-top: 0.25em;
    z-index: 2;
    position: relative;
  }
  h5 {
    margin-top: 0.25em;
  }

  margin-bottom: 2em;
}

.separator {
  content: '';
  display: block;
  width: 100;
  height: 1px;

  background: #4c5b67;
}
</style>