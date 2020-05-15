<template>
  <footer class="footer">
    <nuxt-link to="/" class="w-inline-block">
      <div class="footer-logo"></div>
    </nuxt-link>
    <ul role="list" class="footer-list">
      <li class="footer-list__item">
        <nuxt-link to="about">
          <div class="text-regular-14">Про Премію</div>
        </nuxt-link>
      </li>
      <li class="footer-list__item">
        <nuxt-link to="projects">
          <div class="text-regular-14">Проєкти Премії</div>
        </nuxt-link>
      </li>
      <li class="footer-list__item">
        <nuxt-link to="georgiy-gongadze">
          <div class="text-regular-14">Георгій Ґонґадзе</div>
        </nuxt-link>
      </li>
      <li class="footer-list__item">
        <nuxt-link to="news">
          <div class="text-regular-14">Новини</div>
        </nuxt-link>
      </li>
    </ul>
    <div class="footer-icons">
      <div class="footer-icon facebook"></div>
      <div class="footer-icon instagram"></div>
      <div class="footer-icon twitter"></div>
    </div>
  </footer>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
    color: #333333;
  }
</style>
