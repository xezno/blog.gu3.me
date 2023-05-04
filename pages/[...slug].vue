<template>
  <article class="blog-article">
    <ContentDoc v-slot="{ doc }">
      <h1>{{ doc.title }}</h1>
      <time :datetime="doc.date">{{ friendlyDate( doc.date )}}</time>
      
      <hr />

      <ContentRenderer :value="doc" />
    </ContentDoc>
  </article>
</template>

<script>
import moment from "moment"
export default {
  methods: {
    friendlyDate(date) {
      return moment(date).fromNow()
    },
  },
}
</script>

<style lang="scss">
article.blog-article {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;

  p {
    text-align: justify;
    margin: 10px 0;
    line-height: 2.0;
  }

  h1 {
    font-size: 2em;
    font-weight: 900;
    margin: 0.5em 0;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1.5em;
    font-weight: 700;
    margin: 0.5em 0;
  }

  img, div {
    max-width: 100%;
    $margin: 20px;
    
    @media screen and (min-width: 768px)
    {
      &.float-left, &.float-right {
        width: calc(50% - #{$margin});
      }
      
      &.float-left {
        float: left;
        margin-right: $margin;
      }

      &.float-right {
        float: right; 
        margin-left: $margin;
      }
    }
  }

  hr {
    border-top: 0;
  }
}
</style>