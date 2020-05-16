<template>
  <div>
    <nuxt-child :posts="projectsPosts" />
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    layout: 'default',
    computed: {
      ...mapState({
                    projectsPosts: state => state.data.posts.by_categories['Проєкти Премії'],
                  })
    }
  }
</script>

<style lang="scss" scoped>
</style>
