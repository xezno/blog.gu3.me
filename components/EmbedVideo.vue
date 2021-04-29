<template>
  <div>
    <div class="streamable-embed" v-if="type == 'streamable'">
      <iframe :src="src"
        style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;"
        allowfullscreen
        scrolling="no"
        allow="encrypted-media">
      </iframe>
    </div>

    <div class="gif-embed" v-if="type == 'gif'" @click="toggle">
      <vue-freezeframe :options="{ overlay: true, trigger: false }" :src="src" ref="freeze" />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      src: String
    },
    computed: {
      type: function() {
        if (this.src.endsWith(".gif")) {
          return "gif";
        }
        else if (this.src.indexOf("streamable.com") > -1) {
          return "streamable";
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
  .streamable-embed {
    left: 0; 
    width: 100%; 
    height: 0; 
    position: relative; 
    padding-bottom: 103.2609%;
    margin: 0 0 2em 0;
  }

  .gif-embed {
    cursor: pointer;
  }
</style>