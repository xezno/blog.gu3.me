<template>
  <div>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<style lang="scss">
@import url("~/assets/normalize.css");
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');

html {
  font-family: -apple-system, BlinkMacSystemFont, "Inter", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #FFFFFF;
  color: #0E0E0E;
  line-height: 1.5;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 10px 0;
}

a {
  color: inherit;
}

h1, h2, h3, h4, h5, h6 {
  margin: 1.5em 0;
}

video {
  width: 100%;
}

main {
  padding: 50px;
  max-width: 800px;
  width: 100%;
  margin: auto;

  & h1 {
    font-size: 2em !important;
  }

  & h2 {
    font-size: 1.5em !important;
  }
}
</style>
