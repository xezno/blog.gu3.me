<template>
  <footer>
    <div class="footer-inner">
      <h4>&copy; 2021 Alex Guthrie</h4>
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
  background: $accent;

  color: $accent-text;

  z-index: 1000;
  margin: 0;

  .footer-inner {
    width: 100%;
    padding: 10px 20px;
    max-width: 800px;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;

    margin-bottom: -20px;
  }
}
</style>