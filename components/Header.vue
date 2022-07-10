<template>
  <header>
    <div class="header-inner">
      <nuxt-link to="/"><h4>Alex's Blog</h4></nuxt-link>
    </div>
  </header>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import "~/assets/colors.scss";

header {
  width: 100%;
  
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;

  background: $main-1000;

  text-transform: uppercase;
  z-index: 1000;

  .svg-inline--fa {
    margin-top: -4px;
  }

  .header-inner {
    width: 100%;
    padding: 10px 20px;
    max-width: 800px;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;

    a {
      text-decoration: none !important;
    }

    h4 {
      padding: 0;
      margin: 0;
    }
  }
}
</style>