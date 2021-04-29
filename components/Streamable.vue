<template>
  <div class="streamable-embed" :style="`padding-bottom: ${aspectRatio}%;`">
    <iframe 
      :src="streamableEmbedUrl" 
      style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" 
      allowfullscreen 
      scrolling="no" 
      allow="encrypted-media">
    </iframe>
  </div>
</template>

<script>
  export default {
    props: {
      src: String
    },
    computed: {
      streamableEmbedUrl: function() {
        var srcReplace = this.src.replace("https://streamable.com/", "https://streamable.com/o/");
        return srcReplace.replace("https://www.streamable.com/", "https://streamable.com/o/");
      }
    },
    async created() {
      let info = await this.$axios.$get(`https://api.streamable.com/oembed.json?url=${this.src}`);
      let aspectRatio = (info.height / info.width) * 100;

      console.log(`Calculated aspect ratio: ${aspectRatio}`)
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
  .streamable-embed {
    left: 0; 
    width: 100%; 
    height: 0; 
    position: relative; 
    margin-bottom: 2em;
  }
</style>