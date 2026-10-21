<script setup lang="ts">
const props = defineProps<{ src: string }>()

const youtubeId = computed(() => {
  try {
    const url = new URL(props.src)
    if (url.hostname === 'youtu.be') return url.pathname.slice(1).split('/')[0]
    if (['youtube.com', 'www.youtube.com', 'm.youtube.com'].includes(url.hostname)) {
      return url.pathname.startsWith('/shorts/') ? url.pathname.split('/')[2] : url.searchParams.get('v')
    }
  } catch { /* Local media paths are not absolute URLs. */ }
  return null
})

const isImage = computed(() => /\.(gif|png|jpe?g|webp)(?:[?#]|$)/i.test(props.src))
const mediaSrc = computed(() => encodeURI(props.src))
</script>

<template>
  <figure class="media-embed">
    <iframe
      v-if="youtubeId"
      :src="`https://www.youtube-nocookie.com/embed/${encodeURIComponent(youtubeId)}`"
      title="YouTube video"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    />
    <img v-else-if="isImage" :src="mediaSrc" alt="Embedded animation" loading="lazy" />
    <video v-else :src="mediaSrc" controls playsinline preload="metadata">Your browser does not support this video.</video>
  </figure>
</template>
