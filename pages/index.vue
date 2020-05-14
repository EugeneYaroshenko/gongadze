<template>
  <div>
    <div v-if="postsFetched">
      <div v-html="posts.data[0].post_content"></div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    created () {
      this.$store.dispatch('data/getPosts')
    },
    computed: {
      ...mapState({
                    posts: state => state.data.posts,
                    postsFetched: state => state.data.request.fetched,
                  })
    }
  }
</script>

<style lang="scss" scoped>
</style>
