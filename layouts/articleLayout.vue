<template>
  <div>
    <div v-if="postsFetched && categoriesFetched">
      <nuxt-link to="/" class="header-logo"></nuxt-link>
      <menu-component />
      <nuxt />
      <footer-component />
    </div>
    <div class="loading-container" v-else>
      <div class="loading-block">
        <div class="loading-container__icon">
          <img src="../assets/images/white-icon.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MenuComponent from '~/modules/common/menu'
  import FooterComponent from '~/components/footer'
  import { mapState } from 'vuex'

  export default {
    scrollToTop: true,
    components: {
      MenuComponent,
      FooterComponent
    },
    computed: {
      ...mapState({
                    allPosts: state => state.data.posts,
                    postsFetched: state => state.data.request.fetched,
                    categoriesFetched: state => state.categories.request.fetched,
                  })
    }
  }
</script>
<style lang="scss">

</style>
