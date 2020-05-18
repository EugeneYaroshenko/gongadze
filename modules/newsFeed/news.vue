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
</style>
