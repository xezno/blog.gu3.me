<script setup lang="ts">
import { postDate } from '~/utils/posts'

const { data: posts } = await useAsyncData('posts', () => queryCollection('posts').order('date', 'DESC').all())
const published = computed(() => posts.value?.filter(post => !post.hidden) ?? [])
const featured = computed(() => published.value[0])
const archive = computed(() => published.value.slice(1))

useSeoMeta({
  title: "Alex's Blog",
  description: 'Alex writes about games, code, music, and life.',
})
</script>

<template>
  <main id="top" class="home-page">
    <section class="intro">
      <h1>Hi, I'm Alex.</h1>
      <p>I work on <a href="https://sbox.game/" target="_blank" rel="noopener noreferrer">s&box</a> at Facepunch, build game engines for fun, and spend too much time on synths. Sometimes I write about it.</p>
    </section>

    <NuxtLink v-if="featured" :to="featured.path" class="featured-story" :class="{ 'has-image': featured.cover }">
      <img v-if="featured.cover" :src="featured.cover" alt="" fetchpriority="high">
      <div class="featured-copy">
        <time :datetime="featured.date">{{ postDate(featured.date) }}</time>
        <h2>{{ featured.title }}</h2>
        <p v-if="featured.preview || featured.description">{{ featured.preview || featured.description }}</p>
      </div>
      <span class="featured-arrow" aria-hidden="true">↗</span>
    </NuxtLink>

    <section class="archive" aria-labelledby="archive-title">
      <h2 id="archive-title">Writing</h2>
      <div class="archive-list">
        <NuxtLink v-for="post in archive" :key="post.path" :to="post.path" class="archive-row" :class="{ 'has-image': post.cover }">
          <time :datetime="post.date">{{ postDate(post.date) }}</time>
          <div class="archive-copy">
            <h3>{{ post.title }}</h3>
            <p v-if="post.preview || post.description">{{ post.preview || post.description }}</p>
          </div>
          <img v-if="post.cover" :src="post.cover" alt="" loading="lazy">
          <span class="archive-arrow" aria-hidden="true">↗</span>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
