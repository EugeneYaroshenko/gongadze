<template>
  <div class="content-item" @click="redirectTo(postCategory, post.slug)">
    <div class="content-item__photo" :style="{ backgroundImage: `url('${post.post_image}')` }">
      <div class="content-item__overlay"/>
    </div>
    <div class="content-item__description">
      <div>
        <div class="text-light-14">{{ post.date }}</div>
      </div>
      <div class="content-item__heading-container">
        <h1 class="text-bold-20">{{ post.title }}</h1>
      </div>
      <div class="content-item__text-preview">
        <div class="text-regular-14 material-text" v-html="post.excerpt"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { colorsPalette } from '~/config/UI'

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
    // mounted () {
    //   const t = new TimelineMax()
    //
    //   t.add(TweenMax.to(
    //     this.$refs.material,
    //     0.450,
    //     {
    //       transform: 'translate3d(0, 0, 0)',
    //       opacity: 1,
    //       ease: EasePack.Sine.easeOut
    //     }
    //   ), "first")
    //
    //   t.add(TweenMax.to(
    //     this.$refs.about,
    //     0.3,
    //     {
    //       transform: 'translate3d(0, 0, 0)',
    //       opacity: 1,
    //       ease: EasePack.Sine.easeOut
    //     }), "first")
    //
    //   const scene2 = this.$scrollmagic
    //   .scene({ triggerElement: this.$refs.other, duration: 450, reverse: false })
    //   .setTween(t)
    //
    //   this.$scrollmagic.addScene(scene2)
    // },
    computed: {
      postCategory () {
        return this.post.categories.filter(category => category.slug !== 'projects' && category.slug !== 'first-page' )[0]
      }
    },
    methods: {
      postColor (postSlug) {
        return colorsPalette[postSlug] ? colorsPalette[postSlug] : colorsPalette.other
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content-item:hover .content-item__heading-container {
    text-decoration: underline;
  }
</style>
