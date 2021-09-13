<template>
  <header>
    <div class="header-inner">
      <div class="header-left">
        <nuxt-link to="/"><h3>Alex's Blog</h3></nuxt-link>
      </div>
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
  background: $accent;
  color: $accent-text;
  
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;

  box-shadow: 0 0 12px rgba( black, 0.2 );

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

    & > * {
      // width: 33%;
    }

    h3 {
      padding: 0;
      margin: 0;
    }
  }
}
</style>