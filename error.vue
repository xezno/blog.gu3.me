<script setup lang="ts">
defineProps<{ error: { statusCode: number } }>()
</script>

<template>
  <main id="top" class="error-page wrap">
    <p class="error-code">{{ error.statusCode }} / {{ error.statusCode === 404 ? 'PAGE NOT FOUND' : 'SOMETHING WENT WRONG' }}</p>
    <h1 v-if="error.statusCode === 404">Nothing <em>here.</em></h1>
    <h1 v-else>Something <em>broke.</em></h1>
    <p>{{ error.statusCode === 404 ? "Looks like this page isn't around anymore." : "This page couldn't load. Try again in a moment." }}</p>
    <NuxtLink to="/">← Back to the blog</NuxtLink>
  </main>
</template>
