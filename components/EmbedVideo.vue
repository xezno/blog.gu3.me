<template>
  <div>
    <youtube :src="src" v-if="type == 'youtube'"></youtube>

    <div class="gif-embed" v-if="type == 'gif'" @click="toggle">
      <vue-freezeframe :options="{ overlay: true, trigger: false }" :src="src" ref="freeze" />
    </div>

    <video v-if="type == 'html5' && autoplay" autoplay muted playsinline>
      <source :src="src">
    </video>

    <video v-if="type == 'html5' && !autoplay" controls>
      <source :src="src">
    </video>
  </div>
</template>

<script>
  export default {
    props: {
      src: String,
      autoplay: Boolean
    },
    computed: {
      type: function() {
        if (this.src.endsWith(".gif")) {
          return "gif";
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