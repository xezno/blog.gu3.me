<template>
  <div>
    <streamable :src="src" v-if="type == 'streamable'"></streamable>

    <youtube :src="src" v-if="type == 'youtube'"></youtube>

    <div class="gif-embed" v-if="type == 'gif'" @click="toggle">
      <vue-freezeframe :options="{ overlay: true, trigger: false }" :src="src" ref="freeze" />
    </div>
    
    <video controls v-if="type == 'html5'">
      <source :src="src">
    </video>
  </div>
</template>

<script>
  export default {
    props: {
      src: String,
    },
    computed: {
      type: function() {
        if (this.src.endsWith(".gif")) {
          return "gif";
        }
        else if (this.src.indexOf("streamable.com") > -1) {
          return "streamable";
        }
        else if (this.src.indexOf("youtube.com") > -1 || this.src.indexOf("youtu.be") > -1) {
          return "youtube";
        }
        else {
          return "html5";
        }
      }
    },
    methods: {
      toggle: function() {
        console.log("Toggle");
        this.$refs.freeze.toggle();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .gif-embed {
    cursor: pointer;
  }
</style>