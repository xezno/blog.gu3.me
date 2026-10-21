<script setup lang="ts">
const theme = ref<'dark' | 'light'>('dark')
useHead({
  meta: [{ name: 'theme-color', content: () => theme.value === 'dark' ? '#000000' : '#ffffff' }],
})

onMounted(() => {
  theme.value = localStorage.getItem('alex-blog-theme') === 'light' ? 'light' : 'dark'
  document.documentElement.dataset.theme = theme.value
})

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.dataset.theme = theme.value
  localStorage.setItem('alex-blog-theme', theme.value)
}
</script>

<template>
  <div class="site-frame">
    <header class="site-header">
      <NuxtLink to="/" class="brand">Alex's Blog</NuxtLink>
      <nav class="header-nav" aria-label="Main navigation">
        <a href="https://github.com/xezno" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        <button
          type="button"
          class="theme-toggle"
          :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          :aria-pressed="theme === 'light'"
          @click="toggleTheme"
        >
          <span class="theme-icon" aria-hidden="true" />
        </button>
      </nav>
    </header>
    <NuxtPage />
  </div>
</template>
