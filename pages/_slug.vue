<template>
  <article>
    <div class="title">
      <h1>{{ page.title }}</h1>
      <h5>{{ page.date }}</h5>
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
  }
}
</script>

<style lang="scss" scoped>
.title {
  h1 {
    margin-bottom: 0.25em;
  }
  h5 {
    margin-top: 0.25em;
  }

  margin-bottom: 2em;
}
</style>