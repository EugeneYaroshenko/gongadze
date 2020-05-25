<template>
  <div v-if="post">
    <div class="title-screen__material" ref="titleMaterial" @click="redirectTo(postCategory, post.slug)">
      <div class="material__topic">
        <div class="text-light-14">{{ postCategory.name }}</div>
      </div>
      <div class="material__name-container">
        <div class="material-name">
          <div class="text-semibold-20">{{ post.title }}</div>
        </div>
        <div class="material-go">
          <div class="material-go__icon"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TimelineMax from 'gsap/umd/TimelineMax'
  import TweenMax from 'gsap/umd/TweenMax'
  import EasePack from 'gsap/umd/EasePack'

  export default {
    props: {
      post: {
        type: Object,
        default: null,
        required: true
      },
      redirectTo: {
        type: Function,
        default: () => [],
        required: true
      }
    },
    mounted() {
      const t = new TimelineMax()

      t.add(TweenMax.to(
        this.$refs.titleMaterial,
        .5,
        {
          transform: 'translate3d(0, 0, 0)',
          opacity: 1,
          delay: .8
        }
      ))

    },
    computed: {
      postCategory () {
        return this.post.categories.filter(category => category.slug !== 'projects' && category.slug !== 'first-page' )[0]
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
