<template>
  <footer>
    <div class="footer-inner">
      <div class="header-left">
        <h4>&copy; 2021 Alex Guthrie</h4>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  background: #364149;

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