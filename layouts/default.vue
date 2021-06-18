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
@import url("~/assets/normalize.css");

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
  color: #202020;

  :not(pre) > code[class*="language-"], pre[class*="language-"], code {
    font-family: "IBM Plex Mono", "Comic Sans MS", monospace !important;
  }

  @media screen and (prefers-color-scheme: dark) {
    /* Dark mode */
    background: rgba(33, 39, 44);
    color: #ffffff;
    font-weight: 350; // Thinner font; easier to read on dark background
  }

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

h1, h2, h3, h4 {
  font-style: italic;
}

h1, h2, h3, h4, h5, h6 {  
  margin: 1.5em 0;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;  

  font-weight: 900;

  @media screen and (prefers-color-scheme: dark) {
    font-weight: 800;
  }
}

h1 {
  font-weight: 800;

  @media screen and (prefers-color-scheme: dark) {
    font-weight: 700;
  }
}

video, img {
  width: 100%;
}

main {
  padding: 50px 20px;
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

.svg-inline--fa {
  margin-bottom: 0px;
}
</style>
