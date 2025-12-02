<template>
  <article>
    <div class="title" v-if="page">
      <time :datetime="page.date">
        {{ page.date | exactDate }}
      </time>
      <h1>{{ page.title }}</h1>

      <blockquote>{{ page.description }}</blockquote>
    </div>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const page = await $content(params.slug).fetch()

    return {
      page
    }
  },
  computed: {  
    title() {
      if (this.page)
        return this.page.title;
      return "A post on Alex's Blog";
    },
    description() {
      if (this.page) 
        return this.page.description;
      return "A post on Alex's Blog";
    },
    url() {
      return `https://blog.xez.no${this.$route.fullPath}`;
    },
    thumb() {
      if (this.page) {
        if (this.page.thumb)
          return this.page.thumb;
        return "https://blog.xez.no/robot.png";
      }

      return "https://blog.xez.no/robot.png"
    },
    video() {
      if (!this.page || !this.page.video) return null;

      // make sure we have an absolute url for og / discord
      if (this.page.video.startsWith('http')) {
        return this.page.video;
      }

      return `https://blog.xez.no${this.page.video}`;
    },
    hasVideo() {
      return !!this.video;
    },
    hasThumb() {
      return !!(this.page && this.page.thumb);
    }
  },
  head() {
    const meta = [
      {
        hid: 'description',
        content: this.description,
        name: 'description'
      },
      {
        hid: 'og:title',
        content: this.title,
        property: 'og:title'
      },
      {
        hid: 'og:description',
        content: this.description,
        property: 'og:description'
      },
      {
        hid: 'og:url',
        content: this.url,
        property: 'og:url'
      },
      {
        hid: 'og:article:published_time',
        content: this.date,
        property: 'og:article:published_time'
      },
      {
        hid: 'og:article:author',
        content: "Alex",
        property: 'og:article:author'
      },
      {
        hid: "twitter:domain",
        property: "twitter:domain",
        content: ""
      },
      {
        hid: "twitter:url",
        property: "twitter:url",
        content: this.url
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: `${this.title}`
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: this.description
      }
    ];

    if (this.hasVideo) {
      // video opengraph for discord etc
      meta.push(
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'video.other'
        },
        {
          hid: 'og:video',
          property: 'og:video',
          content: this.video
        },
        {
          hid: 'og:video:url',
          property: 'og:video:url',
          content: this.video
        },
        {
          hid: 'og:video:secure_url',
          property: 'og:video:secure_url',
          content: this.video
        },
        // twitter player card
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "player"
        },
        {
          hid: "twitter:player",
          name: "twitter:player",
          content: this.video
        }
      );
    } else if (this.hasThumb) {
      // image-only preview
      meta.push(
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.thumb}`
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: `${this.thumb}`
        }
      );
    } else {
      // text-only
      meta.push(
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary"
        }
      );
    }

    return {
      title: this.title,
      meta
    }
  },
}
</script>


<style lang="scss" scoped>
@import "~/assets/colors.scss";

.title {
  margin: 25px 0;
  transition: all 100ms ease;

  position: relative;
  overflow: hidden;
  display: flex;

  flex-direction: column;

  h1 {
    margin-bottom: 0.25em;
    margin-top: 0.25em;
    position: relative;
    z-index: 2;
  }

  h5 {
    margin-top: 1.0em;
  }
}
</style>

<style lang="scss">
.nuxt-content {
  p {
    text-align: justify;
  }
}
</style>