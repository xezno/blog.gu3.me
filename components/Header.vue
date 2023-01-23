<template>
  <header>
    <div class="header-inner">
      <nuxt-link to="/"><h2>Alex's Blog</h2></nuxt-link>
      Games 'n' Stuff
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

  z-index: 1000;

  .svg-inline--fa {
    margin-top: -4px;
  }

  .header-inner {
    width: 100%;
    margin: auto;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: nowrap;
    flex-direction: column;

    a {
      text-decoration: none !important;
    }

    h2 {
      padding: 0;
      margin: 0;
    }

    padding: 0px 40px;

    @media screen and (max-width: 768px) { 
      padding: 0px 20px;
    }
  }
}
</style>