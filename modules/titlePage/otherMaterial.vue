<template>
  <div>
    <div class="material-container" v-if="postIndex % 2 === 0">
      <div @click="redirectTo(postCategory, post.slug)" class="material-image__container w-inline-block">
        <div class="material-image" :style="{ backgroundImage: `url('${post.post_image}')` }"></div>
      </div>
      <div class="material-about__container">
        <div @click="redirectTo(postCategory, post.slug)" class="material-about w-inline-block">
          <div class="material-about__category">
            <div class="text-light-12">{{ postCategory.name }}</div>
          </div>
          <div class="material-about__name">
            <div class="text-bold-20">{{ post.title }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="material-container material-container--alternative" v-else>
      <div class="material-about__container">
        <div @click="redirectTo(postCategory, post.slug)" class="material-about material-about--alternative w-inline-block">
          <div class="material-about__category">
            <div class="text-light-12">{{ postCategory.name }}</div>
          </div>
          <div class="material-about__name">
            <div class="text-bold-20">{{ post.title }}</div>
          </div>
        </div>
      </div>
      <div @click="redirectTo(postCategory, post.slug)" class="material-image__container w-inline-block">
        <div class="material-image" :style="{ backgroundImage: `url('${post.post_image}')` }"></div>
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
      postIndex: {
        type: Number,
        default: 0,
        required: true
      },
      redirectTo: {
        type: Function,
        default: () => [],
        required: true
      }
    },
    computed: {
      postCategory () {
        return this.post.categories.filter(category => category.slug !== 'projects' && category.slug !== 'first-page' )[0]
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
