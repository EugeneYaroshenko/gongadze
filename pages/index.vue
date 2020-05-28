<template>
  <div>
    <div class="gongadze-content first-page">
      <div class="title-screen__cover">
        <div class="column-art" ref="columnArt">
          <div class="art"/>
        </div>
        <div class="column">
          <h1 class="title-screen__heading" ref="websiteHeading">Премія <br>Імені<br>Георгія <br>Ґонґадзе</h1>
          <title-material
            v-if="firstPageMaterials && firstPageMaterials.length"
            :post="titleMaterial"
            :redirect-to="redirectTo"
          />
          <div class="scroll-down__container" v-scroll-to="'#other-materials'" ref="scrollMain">
            <div class="scroll-down--additional" ref="scrollAdditional"></div>
            <div class="scroll-down__icon"></div>
          </div>
        </div>
      </div>
      <div class="title-screen__materials" id="other-materials" v-if="otherMaterials">
        <div class="w-layout-grid grid__articles">
          <material
            v-for="(post, index) in otherMaterials"
            :redirect-to="redirectTo"
            :post="post"
            :key="index"
          />
        </div>
        <!--<div-->
          <!--v-for="(post, index) in otherMaterials"-->
          <!--:key="index"-->
        <!--&gt;-->
          <!--<other-material-->
            <!--:post="post"-->
            <!--:postIndex="index"-->
            <!--:redirect-to="redirectTo"-->
          <!--/>-->
        <!--</div>-->
      </div>
    </div>
    <partners />
  </div>
</template>

<script>
  import titleMaterial from '~/modules/titlePage/titleMaterial'
  import Material from '~/modules/titlePage/material'
  import Partners from '~/modules/titlePage/partners'
  import TimelineMax from 'gsap/umd/TimelineMax'
  import TweenMax from 'gsap/umd/TweenMax'
  import EasePack from 'gsap/umd/EasePack'
  import { mapState } from 'vuex'

  export default {
    layout: 'titleLayout',
    mounted () {
      const t = new TimelineMax()

      t.add(TweenMax.to(
        this.$refs.websiteHeading,
        1,
        {
          transform: 'translate3d(0, 0, 0)',
          opacity: 1,
          ease: EasePack.Sine.easeOut,
          delay: .2,
        }
      ), "first")

      t.add(TweenMax.to(
        this.$refs.columnArt,
        1,
        {
          transform: 'translate3d(0, 0, 0)',
          opacity: 1,
          ease: EasePack.Sine.easeOut,
        }
      ), "first")

      t.add(TweenMax.to(
        this.$refs.scrollMain,
        .3,
        {
          transform: 'translate3d(0, 0, 0)',
          opacity: 1,
          ease: EasePack.Sine.easeOut,
        }
      ), "second")

      t.add(TweenMax.to(
        this.$refs.scrollAdditional,
        .45,
        {
          transform: 'translate3d(0, 0, 0)',
          opacity: 1,
          ease: EasePack.Back.easeOut.config(2.7),
          delay: .2
        }
      ), "second")

    },
    computed: {
      ...mapState({
                    postsByCategory: state => state.data.postsByCategory,
                    allCategories: state => state.categories.categories
                  }),
      titleMaterial () {
        const titleMaterial = this.firstPageMaterials.filter(material => material.order === 1)

        if (titleMaterial.length > 1) {
          return titleMaterial.sort((a, b) => a.date > b.date ? 1 : -1)[0]
        } else {
          return titleMaterial[0]
        }
      },
      otherMaterials () {
        const otherMaterials = this.firstPageMaterials.filter(material => material.order !== 1)

        if (otherMaterials.length) {
          return otherMaterials.sort((a, b) => a.order <= b.order ? 1 : -1)
        } else {
          return null
        }
      },
      firstPageMaterials () {
        if (this.firstPageCategory) {
          return this.postsByCategory[this.firstPageCategory.id]
        }
      },
      firstPageCategory () {
        return this.allCategories.filter(category => category.slug === 'first-page')[0]
      }
    },
    methods: {
      redirectTo(postCategory, postSlug) {
        if (postCategory.slug === 'news') {
          this.$router.push(`/news/?cat_id=${postCategory.cat_ID}&title=${postSlug}`)
        } else {
          this.$router.push(`/article/?cat_id=${postCategory.cat_ID}&title=${postSlug}`)
        }
      }
    },
    components: {
      titleMaterial,
      Partners,
      Material
    }
  }
</script>

<style lang="scss" scoped>
  .column-art {
    padding: 12px 8px 0;
    background: #fcfcfa;
  }

  .art {
    background-image: url('../assets/images/image-cover.png');
    background-size: contain;
    background-position: center bottom;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
  }

  .grid__articles {
    padding-right: 0px;
    padding-left: 0px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    grid-column-gap: 54px;
    grid-row-gap: 32px;
  }

  @media screen and (max-width: 991px) {
    .column-art {
      position: absolute;
      right: 0;
      left: 0;
      margin: 0 auto;
      bottom: 150px;
      height: 800px;
      width: 100%;
      max-width: 380px;
      display: block;
      background: transparent;
      box-shadow: none;
    }

    .grid__articles {
      padding-right: 40px;
      padding-left: 40px;
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 500px) {
    .column-art {
      bottom: 150px;
      height: 350px;
    }

    .title-screen__heading {
      font-size: 1.8em;
    }

    .title-screen__cover {
      padding-top: 16px;
    }
  }

  @media screen and (max-width: 767px) {
    .grid__articles {
      grid-row-gap: 54px;
    }
  }

  @media screen and (max-width: 479px) {
    .grid__articles {
      padding-right: 0px;
      padding-left: 0px;
    }
  }

  @media screen and (max-width: 350px) {
    .column-art {
      bottom: 140px;
      height: 80vw;
      right: 20px;
    }
  }

</style>
