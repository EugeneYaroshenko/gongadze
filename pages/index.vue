<template>
  <div>
    <div class="gongadze-content first-page">
      <div class="title-screen__cover">
        <div class="column-art"></div>
        <div class="column">
          <h1 class="title-screen__heading">Премія <br>Імені<br>Георгія <br>Ґонґадзе</h1>
          <!--<title-material-->
            <!--:post="allPosts.by_first_page_priority.first_post"-->
          <!--/>-->
          <div class="scroll-down__container">
            <div class="scroll-down--additional"></div>
            <div class="scroll-down__icon"></div>
          </div>
        </div>
      </div>
      <!--<div class="title-screen__materials">-->
        <!--<div-->
          <!--v-for="(post, index) in allPosts.by_first_page_priority.other_posts"-->
          <!--:key="index"-->
        <!--&gt;-->
          <!--<other-material-->
            <!--:post="post"-->
            <!--:postIndex="index"-->
          <!--/>-->
        <!--</div>-->
      <!--</div>-->
      <h1 class="headline-h4">Партнери</h1>
      <div class="partners-block">
        <div class="w-layout-grid grid-3">
          <div class="partner-icon"></div>
          <div class="partner-icon"></div>
          <div class="partner-icon"></div>
          <div class="partner-icon"></div>
          <div class="partner-icon"></div>
          <div class="partner-icon"></div>
          <div class="partner-icon"></div>
          <div class="partner-icon"></div>
          <div class="partner-icon"></div>
          <div class="partner-icon"></div>
          <div class="partner-icon"></div>
          <div class="partner-icon"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import titleMaterial from '~/modules/titlePage/titleMaterial'
  import otherMaterial from '~/modules/titlePage/otherMaterial'
  import { mapState } from 'vuex'

  export default {
    layout: 'default',
    computed: {
      ...mapState({
                    allPosts: state => state.data.posts,
                  })
    },
    components: {
      titleMaterial,
      otherMaterial
    }
  }
</script>

<style lang="scss" scoped>

</style>
