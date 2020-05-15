<template>
  <div>
    <menu-component />
    <nuxt />
    <footer-component />
  </div>
</template>

<script>
  import MenuComponent from '~/components/menu'
  import FooterComponent from '~/components/footer'
  export default {
    components: {
      MenuComponent,
      FooterComponent
    }
  }
</script>

<style>

</style>
