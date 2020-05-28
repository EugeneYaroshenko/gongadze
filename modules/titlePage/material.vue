<template>
  <div class="title-article" @click="redirectTo(postCategory, post.slug)">
    <div class="title-article__name">
      <div class="article-name__category" :style="{ backgroundColor: `${postColor(postCategory.slug)}` }">
        <div class="text-regular-16">{{ postCategory.name }}</div>
      </div>
      <div class="article-name__title">
        <div class="text-bold-20">{{ post.title }}</div>
      </div>
    </div>
    <div class="title-article__head">
      <div class="article-head__photo" :style="{ backgroundImage: `url('${post.post_image}')` }"></div>
    </div>
  </div>
</template>

<script>
  import TimelineMax from 'gsap/umd/TimelineMax'
  import TweenMax from 'gsap/umd/TweenMax'
  import EasePack from 'gsap/umd/EasePack'
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
  .title-article {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    max-width: 500px;
    margin-right: auto;
    margin-left: auto;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    margin-top: 64px;
    cursor: pointer;
  }

  .title-article__head {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 300px;
    margin-top: 12px;
    background-color: transparent;
  }

  .article-head__photo {
    width: 100%;
    background-position: 0px 0px;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: scroll;
  }

  .title-article__name {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    min-height: 150px;
    padding: 0px;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
  }

  .article-name__category {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 16px;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: left;
    color: #7D7D7C;
  }

  .article-name__title {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 70%;
    padding-left: 12px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .text-light-16 {
    font-size: 1em;
    font-weight: 300;
  }

  .title-article:hover {
    .article-name__title {
      text-decoration: underline;
    }
  }


  @media screen and (max-width: 991px) {
    .title-article__head {
      height: 400px;
    }
  }

  @media screen and (max-width: 767px) {
    .title-article__head {
      height: 300px;
    }
  }

  @media screen and (max-width: 479px) {
    .title-article__head {
      height: 60vw;
      margin-top: 20px;
    }
    .title-article__name {
      min-height: 100px;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end;
    }
    .article-name__category {
      width: 60%;
      margin-right: auto;
      margin-left: auto;
      padding-top: 6px;
      padding-bottom: 6px;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: end;
      -webkit-align-items: flex-end;
      -ms-flex-align: end;
      align-items: flex-end;
      -webkit-box-ordinal-group: 0;
      -webkit-order: -1;
      -ms-flex-order: -1;
      order: -1;
      -webkit-box-flex: 0;
      -webkit-flex: 0 auto;
      -ms-flex: 0 auto;
      flex: 0 auto;
      text-align: center;
    }
    .article-name__title {
      width: 100%;
      margin-top: 12px;
      padding-top: 0px;
      padding-left: 0px;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      text-align: center;
    }
  }


</style>
