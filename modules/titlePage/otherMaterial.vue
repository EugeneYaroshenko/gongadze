<template>
  <div>
    <div class="material-container" v-if="postIndex % 2 === 0">
      <a href="#" class="material-image__container w-inline-block">
        <div class="material-image" :style="{ backgroundImage: `url('${post.featured_image}')` }"></div>
      </a>
      <div class="material-about__container">
        <a href="#" class="material-about w-inline-block">
          <div class="material-about__category">
            <div class="text-light-12">{{ post.category[0].name }}</div>
          </div>
          <div class="material-about__name">
            <div class="text-bold-20">{{ post.post_title }}</div>
          </div>
        </a>
      </div>
    </div>
    <div class="material-container material-container--alternative" v-else>
      <div class="material-about__container">
        <a href="#" class="material-about material-about--alternative w-inline-block">
          <div class="material-about__category">
            <div class="text-light-12">{{ post.category[0].name }}</div>
          </div>
          <div class="material-about__name">
            <div class="text-bold-20">{{ post.post_title }}</div>
          </div>
        </a>
      </div>
      <a href="#" class="material-image__container w-inline-block">
        <div class="material-image" :style="{ backgroundImage: `url('${post.featured_image}')` }"></div>
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
      postIndex: {
        type: Number,
        default: 0,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
