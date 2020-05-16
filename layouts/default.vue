<template>
  <div>
    <menu-component />
    <div v-if="postsFetched">
      <nuxt />
    </div>
    <div class="loading-container" v-else>
      <div class="loading-container__icon"/>
    </div>
    <footer-component />
  </div>
</template>

<script>
  import MenuComponent from '~/components/menu'
  import FooterComponent from '~/components/footer'
  import { mapState } from 'vuex'

  export default {
    components: {
      MenuComponent,
      FooterComponent
    },
    created () {
      if (!this.allPosts) {
        this.$store.dispatch('data/getPosts')
      }
    },
    computed: {
      ...mapState({
                    allPosts: state => state.data.posts,
                    postsFetched: state => state.data.request.fetched,
                  })
    }
  }
</script>

<style lang="scss">
  .loading-container {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loading-container__icon {
    height: 100px;
    width: 100px;
    background-image: url('../assets/images/gong-icon.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    animation: 3s loading ease infinite;
  }

  @keyframes loading {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 50%;
    }
    100% {
      opacity: 1;
    }
  }

</style>
