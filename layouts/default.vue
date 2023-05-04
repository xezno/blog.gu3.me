<template>
  <main class="page">

    <section class="panel left">
      <ContentList v-slot="{ list }">
        <div v-for="article in list" :key="article._path">
          <NuxtLink :to="article._path">
            <h2>{{ article.title }}</h2>
          </NuxtLink>
          <h3>{{ article.date }}</h3>
          <p>{{ article.description }}</p>
        </div>
      </ContentList>
    </section>

    <section class="panel right">
      <slot />
    </section>

  </main>
</template>

<style lang="scss">

* {
  box-sizing: border-box;
}

main.page {
  display: flex;
  section.panel {
    padding: 10px;
  }

  section.left {
    flex-basis: 400px;
    flex-shrink: 0;

    border-right: 4px solid #ccc;
  }

  section.right {
    flex-grow: 1;
  }
}

</style>
  