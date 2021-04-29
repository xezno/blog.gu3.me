<template>
  <div>
  <div class="youtube-embed" :style="`padding-bottom: ${aspectRatio}%;`">
    <iframe 
      :src="youtubeEmbedUrl" 
      style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" 
      allowfullscreen 
      scrolling="no" 
      allow="encrypted-media">
    </iframe>
  </div>
  </div>
</template>

<script>
  export default {
    props: {
      src: String
    },
    computed: {
      youtubeEmbedUrl: function() {
        var srcReplace = this.src.replace("https://youtube.com/watch?v=", "https://youtube.com/embed/");
        srcReplace = srcReplace.replace("https://www.youtube.com/watch?v=", "https://youtube.com/embed/");
        return srcReplace.replace("https://youtu.be/", "https://youtube.com/embed/");
      }
    },
    async mounted() {
      let info = await this.$axios.$get(`https://www.youtube.com/oembed?url=${this.src}`);
      let aspectRatio = (info.height / info.width) * 100;
      this.aspectRatio = aspectRatio;
    },
    data: function() {
      return {
        aspectRatio: 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  .youtube-embed {
    left: 0; width: 100%; height: 0; position: relative; 
  }
</style>