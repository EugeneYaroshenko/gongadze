<template>
  <div>
    <div v-if="postsFetched && categoriesFetched">
      <menu-component />
      <nuxt />
      <footer-component />
    </div>
    <div class="loading-container" v-else>
      <div class="loading-block">
        <div class="loading-container__icon">
          <img src="../assets/images/loader.gif" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MenuComponent from '~/components/menu'
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
                    allPosts: state => state.data.posts,
                    postsFetched: state => state.data.request.fetched,
                    categoriesFetched: state => state.categories.request.fetched,
                  })
    }
  }
</script>

<style lang="scss">
  .loading-container {
    height: 100vh;
    width: 100vw;
  }

  .loading-block {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(3, 3, 3);
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
  }

  .loading-container__icon {
    height: 100px;
    width: 100px;
    background-image: url('../assets/images/gong-icon.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

</style>
