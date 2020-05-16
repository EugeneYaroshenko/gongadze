<template>
  <div @click="redirectTo(post.ID)" class="news-other">
    <div class="news-photo" :style="{ backgroundImage: `url('${post.featured_image}')` }"></div>
    <div class="news-text-container">
      <div class="news-text">
        <div class="news-date">
          <div class="text-light-12">{{ post.acf.date_published }}</div>
        </div>
        <div class="news-name">
          <div class="text-bold-15">{{ post.post_title }}</div>
        </div>
        <div class="publication-read">
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
</style>
