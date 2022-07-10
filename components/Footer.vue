<template>
  <footer>
    <div class="footer-inner">
      &copy; Alex Guthrie 2022
    </div>
  </footer>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import "~/assets/colors.scss";
footer {
  width: 100%;
  text-transform: uppercase;

  background: $main-1000;

  z-index: 1000;
  margin: 0;

  font-weight: 700;
  text-transform: uppercase;

  .footer-inner {
    width: 100%;
    padding: 10px 20px;
    max-width: 800px;
    min-height: 50px;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;

    margin-bottom: -20px;
  }
}
</style>