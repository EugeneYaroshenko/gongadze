<template>
  <div class="title-screen__material">
    <div class="material__topic">
      <div class="text-light-14">{{ post.category[0].name }}</div>
    </div>
    <div class="material__name-container">
      <div class="material-name">
        <div class="text-semibold-20">{{ post.post_title }}</div>
      </div>
      <div class="material-go">
        <div class="material-go__icon"></div>
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
    }
  }
</script>

<style lang="scss" scoped>
</style>
