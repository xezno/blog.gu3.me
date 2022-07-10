<template>
  <div id="layout">
    <Header></Header>
    <main>
      <Nuxt />
    </main>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
@import "~/assets/colors.scss";
@import "~/assets/normalize.css";

html {
  font-family: -apple-system, BlinkMacSystemFont, "Source Sans Pro", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  :not(pre) > code[class*="language-"], pre[class*="language-"], code {
    font-family: monospace !important;
  }

  background: $main-900;
  color: #ffffff;
  font-weight: 350;

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
  font-family: "Inter", sans-serif;
}

video, img {
  width: 100%;
}

main {
  padding: 60px 20px;
  max-width: 800px;
  width: 100%;
  margin: auto;
  min-height: calc( 100vh - 70px ); // This is a bit of a hack and needs changing

  & h1 {
    font-size: 2em !important;
  }

  & h2 {
    font-size: 1.5em !important;
  }
}

.svg-inline--fa {
  margin-bottom: 0px;
}

::-webkit-scrollbar {
  width: 8px;
  height: 3px;
}

::-webkit-scrollbar-thumb {
  height: 50px;
  background-color: $main-700;
}

::-webkit-scrollbar-track {
  background-color: $main-700;
}

::-webkit-scrollbar-track-piece {
  background-color: #333;
}
</style>
