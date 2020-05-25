<template>
  <div class="other-material" ref="other">
    <div class="material-container" ref="material" v-if="postIndex % 2 === 0">
      <div @click="redirectTo(postCategory, post.slug)" class="material-image__container w-inline-block">
        <div class="material-image" :style="{ backgroundImage: `url('${post.post_image}')` }"></div>
      </div>
      <div class="material-about__container">
        <div @click="redirectTo(postCategory, post.slug)" ref="about" class="material-about w-inline-block">
          <div class="material-about__category">
            <div class="text-light-12">{{ postCategory.name }}</div>
          </div>
          <div class="material-about__name">
            <div class="text-bold-20">{{ post.title }}</div>
          </div>
          <div class="read-material"> Читати </div>
        </div>
      </div>
    </div>
    <div class="material-container material-container--alternative" ref="material" v-else>
      <div class="material-about__container">
        <div @click="redirectTo(postCategory, post.slug)" ref="about" class="material-about material-about--alternative w-inline-block">
          <div class="read-material read-material--alternative"> Читати </div>
          <div class="material-about__category">
            <div class="text-light-12">{{ postCategory.name }}</div>
          </div>
          <div class="material-about__name">
            <div class="text-bold-20">{{ post.title }}</div>
          </div>
        </div>
      </div>
      <div @click="redirectTo(postCategory, post.slug)" class="material-image__container w-inline-block">
        <div class="material-image" :style="{ backgroundImage: `url('${post.post_image}')` }"></div>
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
      postIndex: {
        type: Number,
        default: 0,
        required: true
      },
      redirectTo: {
        type: Function,
        default: () => [],
        required: true
      }
    },
    mounted () {
      const t = new TimelineMax()

      t.add(TweenMax.to(
        this.$refs.material,
        0.450,
        {
          transform: 'translate3d(0, 0, 0)',
          opacity: 1,
          ease: EasePack.Sine.easeOut
        }
      ), "first")

      t.add(TweenMax.to(
        this.$refs.about,
        0.3,
        {
          transform: 'translate3d(0, 0, 0)',
          opacity: 1,
          ease: EasePack.Sine.easeOut
        }), "first")

      const scene2 = this.$scrollmagic
      .scene({ triggerElement: this.$refs.other, duration: 450, reverse: false })
      .setTween(t)

      this.$scrollmagic.addScene(scene2)
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
