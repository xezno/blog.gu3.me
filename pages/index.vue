<template>
  <div>
    <h1>Alex's Blog</h1>
    <h1>:D</h1>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "~/assets/colors.scss";

article {
  * {
    margin: 0;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 100ms ease;
  gap: 20px;

  position: relative;
  overflow: hidden;

  a:hover {
    color: $accent;
  }

  .left,
  .right {
    display: flex;
    flex-direction: column;
  }

  .left {
    flex-grow: 1;
    flex-shrink: 1;
  }

  .right {
    flex-shrink: 0;
  }
}

.year-header {
  position: relative;
  background: linear-gradient(137.42deg, $accent, $accent-muted);
  background-size: 300% 300%;
  animation: gradient 5s ease infinite;

  // Text cut-out
  color: $main-900;
  padding: 0 10px;

  border-radius: 5px;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>