<script setup lang="ts">
import { postDate, postTags } from '~/utils/posts'

const route = useRoute()
const { data: post } = await useAsyncData(() => `post:${route.path}`, () => queryCollection('posts').path(route.path).first())
if (!post.value) throw createError({ statusCode: 404, statusMessage: 'Post not found' })

useSeoMeta({
  title: () => `${post.value?.title} — Alex's Blog`,
  description: () => post.value?.description || post.value?.preview || "A post from Alex's Blog.",
  ogTitle: () => `${post.value?.title} — Alex's Blog`,
  ogDescription: () => post.value?.description || post.value?.preview || "A post from Alex's Blog.",
  ogImage: () => post.value?.thumb,
  ogType: 'article',
})
</script>

<template>
  <main v-if="post" id="top" class="wrap article-page">
    <div class="article-topline">
      <NuxtLink to="/" class="back-link">← Posts</NuxtLink>
    </div>

    <header class="article-header">
      <div class="article-meta">
        <time :datetime="post.date">{{ postDate(post.date) }}</time>
        <template v-if="post.tags"><span>·</span>{{ postTags(post.tags)[0] }}</template>
      </div>
      <h1>{{ post.title }}</h1>
      <p v-if="post.description" class="article-deck">{{ post.description }}</p>
    </header>

    <article class="article-body prose">
      <ContentRenderer :value="post" />
    </article>
    <div class="article-end"><NuxtLink to="/">← Posts</NuxtLink></div>
  </main>
</template>
