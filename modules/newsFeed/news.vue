<template>
  <div @click="redirectTo(post.slug)" class="news-other">
    <div class="news-photo" :style="{ backgroundImage: `url('${post.post_image}')` }"></div>
    <div class="news-text-container">
      <div class="news-text">
        <div class="news-date">
          <div class="text-light-12">{{ post.date }}</div>
        </div>
        <div class="news-name">
          <div class="text-bold-15">{{ post.title }}</div>
        </div>
        <div class="publication-read news-read">
          <div class="text-bold-15">Читати</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        default: null,
        required: true
      },
      redirectTo: {
        type: Function,
        default: () => {},
        required: true
      }
    },
  }
</script>

<style lang="scss" scoped>
  .news-read {
    opacity: 1;
  }

  .news-text-container {
    transform: translate3d(0, 0, 0);
    transition: all 300ms cubic-bezier(0.45,0.05,0.55,0.95);
    border-radius: 8px;

    .news-text {
      transition: all 300ms cubic-bezier(0.45,0.05,0.55,0.95);
      box-shadow: 0px 2.76726px 2.21381px rgba(194, 194, 194, 0.0196802), 0px 6.6501px 5.32008px rgba(194, 194, 194, 0.0282725), 0px 12.5216px 10.0172px rgba(194, 194, 194, 0.035), 0px 22.3363px 17.869px rgba(194, 194, 194, 0.0417275), 0px 41.7776px 33.4221px rgba(194, 194, 194, 0.0503198), 0px 100px 80px rgba(194, 194, 194, 0.07);
    }

  }

  .news-other:hover {
    .news-text-container {
      transform: translate3d(0, -20px, 0);
      .news-text {
        box-shadow: 0px 4.5288px 3.62304px rgba(0, 0, 0, 0.00958295), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.016762), 0px 30.1471px 24.1177px rgba(0, 0, 0, 0.0236991), 0px 100px 80px rgba(0, 0, 0, 0.04);
      }
    }
  }

</style>
