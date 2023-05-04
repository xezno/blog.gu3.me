<template>
  <article>
    <ContentDoc v-slot="{ doc }">
      <h1>{{ doc.title }}</h1>
      <time>{{ doc.date }}</time>
      <blockquote>{{ doc.description }}</blockquote>
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </article>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "~/assets/colors.scss";

.title {
  margin: 25px 0;
  transition: all 100ms ease;

  position: relative;
  overflow: hidden;
  display: flex;

  flex-direction: column;

  h1 {
    margin-bottom: 0.25em;
    margin-top: 0.25em;
    position: relative;
    z-index: 2;
  }

  h5 {
    margin-top: 1.0em;
  }
}
</style>

<style lang="scss">
.nuxt-content {
  p {
    text-align: justify;
  }
}
</style>