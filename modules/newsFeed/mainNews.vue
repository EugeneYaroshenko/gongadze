<template>
  <div id="w-node-fb8a0860ffac-a1c07547" @click="redirectTo(post.slug)"  class="main-news">
    <div class="main-news-image" :style="{ backgroundImage: `url('${post.post_image}')` }"></div>
    <div class="main-news-text-container">
      <a href="#" class="main-news-text w-inline-block">
        <div class="main-news-date">
          <div class="text-light-14">{{ post.date }}</div>
        </div>
        <div class="main-news-name">
          <div class="text-bold-18">{{ post.title }}</div>
        </div>
      </a>
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
</style>
