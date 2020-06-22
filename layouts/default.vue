
<template>
  <div>
    <div v-if="postsFetched && categoriesFetched">
      <nuxt-link to="/" class="header-logo"></nuxt-link>
      <div ref="menuToggle" class="menu-toggle__container">
        <menu-component />
      </div>
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
    created () {
      if (!this.allPosts) {
        this.$store.dispatch('data/getPosts')
        this.$store.dispatch('categories/getCategories')
      }
    },
    computed: {
      ...mapState({
                    allPosts: state => state.data.allPosts,
                    postsFetched: state => state.data.request.fetched,
                    categoriesFetched: state => state.categories.request.fetched,
                  })
    }
  }
</script>
<style lang="scss">
</style>
