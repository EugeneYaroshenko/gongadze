<template>
  <div>
    <nuxt-child :posts="postsByCategory" :categories="allCategories" />
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    layout: 'default',
    computed: {
      ...mapState({
                    postsByCategory: state => state.data.postsByCategory,
                    allCategories: state => state.categories.categories,
                  })
    }
  }
</script>

<style lang="scss" scoped>
</style>
