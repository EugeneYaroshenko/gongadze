<template>
  <div class="container">
    <div class="error-main">
      <h3>Сторінка недоступна. Перезавантажте, будь ласка, сторінку, або перевірте правильність посилання</h3>
      <nuxt-link to="/" class="link-home">На головну</nuxt-link>
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

  .link-home {
    display: block;
    width: 200px;
    border: 1px solid #000;
    margin: 32px auto 0;
    padding: 16px 24px;
    text-decoration: none;

  }

  .error-main {
    padding-top: 160px;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    min-height: 800px;
  }
</style>
