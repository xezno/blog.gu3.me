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
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');
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
    font-family: "Jetbrains Mono", monospace !important;
    font-size: 12px;
    
    /* Wrap text */
    white-space: pre-wrap;
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

h2, h3, h4, h5, h6 {
  color: $accent;
}

video, div, img {
  $margin: 20px;

  @media screen and (min-width: 768px)
  {
    &.float-left, &.float-right {
      width: 50%;
    }
    
    &.float-left {
      float: left;
      margin-right: $margin;
    }

    &.float-right {
      float: right; 
      margin-left: $margin;
    }
  }
}

video, img {
  width: 100%;
}

main {
  padding: 20px;
  max-width: 800px;
  width: 100%;
  margin: auto;
  min-height: 100vh;

  & h1 {
    font-size: 2em !important;
  }

  & h2 {
    font-size: 1.5em !important;
  }
}

blockquote {
  opacity: 0.5;
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
