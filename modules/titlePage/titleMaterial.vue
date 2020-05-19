<template>
  <div v-if="post">
    <div class="title-screen__material" @click="redirectTo(postCategory, post.slug)">
      <div class="material__topic">
        <div class="text-light-14">{{ postCategory.name }}</div>
      </div>
      <div class="material__name-container">
        <div class="material-name">
          <div class="text-semibold-20">{{ post.title }}</div>
        </div>
        <div class="material-go">
          <div class="material-go__icon"></div>
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
