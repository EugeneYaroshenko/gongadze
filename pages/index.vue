<template>
  <div>
    <div class="gongadze-content first-page">
      <div class="title-screen__cover">
        <div class="column-art">
          <div class="art"/>
        </div>
        <div class="column">
          <h1 class="title-screen__heading">Премія <br>Імені<br>Георгія <br>Ґонґадзе</h1>
          <title-material
            v-if="firstPageMaterials && firstPageMaterials.length"
            :post="titleMaterial"
            :redirect-to="redirectTo"
          />
          <div class="scroll-down__container" v-scroll-to="'#other-materials'">
            <div class="scroll-down--additional"></div>
            <div class="scroll-down__icon"></div>
          </div>
        </div>
      </div>
      <div class="title-screen__materials" id="other-materials" v-if="otherMaterials">
        <div
          v-for="(post, index) in otherMaterials"
          :key="index"
        >
          <other-material
            :post="post"
            :postIndex="index"
            :redirect-to="redirectTo"
          />
        </div>
      </div>
      <h1 class="headline-h4 first-page-headline">Партнери</h1>
      <div class="partners-block">
        <div class="w-layout-grid partners-grid">
          <a href="https://pen.org.ua" target="_blank" class="partner-icon__container w-inline-block">
            <div class="partner-icon pen-ukraine"></div>
          </a>
          <a href="https://www.pravda.com.ua" target="_blank" class="partner-icon__container w-inline-block">
            <div class="partner-icon ukrainska-pravda"></div>
          </a>
          <a href="https://www.facebook.com/kmbsalumni/" target="_blank" class="partner-icon__container w-inline-block">
            <div class="partner-icon kmbs-alumni"></div>
          </a>
        </div>
      </div>
      <div class="partner-subheading">
        <div class="text-semibold-20">Генеральний медіапартнер</div>
      </div>
      <div class="partners-block">
        <div class="partner">
          <a href="https://culture.suspilne.media" target="_blank" class="partner-icon__container w-inline-block">
            <div class="partner-icon ua-kultura"></div>
          </a>
        </div>
      </div>
      <div class="partner-subheading">
        <div class="text-semibold-20">Інформаційні партнери</div>
      </div>
      <div class="partners-block">
        <div class="w-layout-grid partners-grid">
          <a href="https://www.radiosvoboda.org" target="_blank" class="partner-icon__container w-inline-block">
            <div class="partner-icon radio-svoboda"></div>
          </a>
          <a href="https://detector.media/" target="_blank" class="partner-icon__container w-inline-block">
            <div class="partner-icon detector-media"></div>
          </a>
          <a href="https://internews.ua" target="_blank" class="partner-icon__container w-inline-block">
            <div class="partner-icon internews-ukraine"></div>
          </a>
          <a href="https://imi.org.ua" target="_blank" class="partner-icon__container w-inline-block">
            <div class="partner-icon imi-logo"></div>
          </a>
          <a href="https://nachasi.com" target="_blank" class="partner-icon__container w-inline-block">
            <div class="partner-icon na-chasi"></div>
          </a>
          <a href="https://mind.ua" target="_blank" class="partner-icon__container w-inline-block">
            <div class="partner-icon mind-logo"></div>
          </a>
          <a href="https://hromadske.ua" class="partner-icon__container w-inline-block">
            <div class="partner-icon hromadske-logo"></div>
          </a>
        </div>
      </div>
      <div class="partner-subheading">
        <div class="text-semibold-20"> Організаційні партнери</div>
      </div>
      <div class="partners-block">
        <div class="w-layout-grid partners-grid organizational-partners-grid">
          <a href="http://twiga.com.ua/" target="_blank" class="partner-icon__container w-inline-block">
            <div class="partner-icon twiga"></div>
          </a>
          <a href="https://kmbs.ua/" target="_blank" class="partner-icon__container w-inline-block">
            <div class="partner-icon kmbs-logo"></div>
          </a>
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
      otherMaterial
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

  @media screen and (max-width: 350px) {
    .column-art {
      bottom: 140px;
      height: 80vw;
      right: 20px;
    }
  }

</style>
