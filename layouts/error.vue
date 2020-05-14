<template>
  <div class="container">
    <div class="error-main">
      <h2 v-if="error.statusCode === 404">{{ error.message }}</h2>
      <h2 v-else>Сталася якась халепа!</h2>
      <nuxt-link to="/home">На головну</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      error: {
        type: Object,
        required: true,
        default: () => {}
      }
    }
  }
</script>

<style lang="scss" scoped>
  nav {
    position: absolute;
    top: 12px;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 100px;
    z-index: 1000;
  }

  .error-main {
    padding-top: 100px;
    text-align: center;
  }
</style>
