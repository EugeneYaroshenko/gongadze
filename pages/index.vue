<template>
  <div>
    <div class="gongadze-content first-page">
      <div class="first-screen">
        <div class="div-block">
          <div data-poster-url="https://uploads-ssl.webflow.com/5ebff748d6a8b31a18057139/5ee7db8a12fa324745ec0d98_Comp 1 (1)-poster-00001.jpg" data-video-urls="https://uploads-ssl.webflow.com/5ebff748d6a8b31a18057139/5ee7db8a12fa324745ec0d98_Comp 1 (1)-transcode.mp4,https://uploads-ssl.webflow.com/5ebff748d6a8b31a18057139/5ee7db8a12fa324745ec0d98_Comp 1 (1)-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" data-w-id="2b659ddf-6b28-0725-0093-49a016635f46" data-wf-id="[&quot;2b659ddf-6b28-0725-0093-49a016635f46&quot;]" class="background-video-2 w-background-video w-background-video-atom"><video autoplay="autoplay" loop="loop" data-wf-ignore=""><source src="https://uploads-ssl.webflow.com/5ebff748d6a8b31a18057139/5ee7db8a12fa324745ec0d98_Comp 1 (1)-transcode.webm" data-wf-ignore=""><source src="https://uploads-ssl.webflow.com/5ebff748d6a8b31a18057139/5ee7db8a12fa324745ec0d98_Comp 1 (1)-transcode.mp4" data-wf-ignore=""></video></div>
        </div>
        <div class="first-screen__text">
          <div class="text-regular-16">Премія покликана формувати моральні орієнтири в журналістиці та сприяти пошуку інноваційних рішень донесення правди</div>
        </div>
        <div class="navdown-container" v-scroll-to="'#materials'">
          <div class="arrow-down arrow-down__first"></div>
          <div class="arrow-down arrow-down__second"></div>
        </div>
      </div>
      <div id="materials" class="content-screen">
        <div v-if="newsMaterials">
          <nuxt-link to="/news-feed" class="content-headline-link">
            <h2 class="content-heading">Новини</h2>
          </nuxt-link>
          <div class="w-layout-grid content-items__grid" >
            <material
              v-for="(post, index) in newsMaterials"
              :redirect-to="redirectTo"
              :post="post"
              :key="index"
            />
          </div>
          <div class="link-container"><nuxt-link to="/news-feed" class="first-screen__link">Читати всі новини</nuxt-link></div>
        </div>
        <div class="separator-container"></div>
        <div v-if="publicationsMaterials">
          <div>
            <nuxt-link to="/publications" class="content-headline-link">
              <h2 class="content-heading">публікації</h2>
            </nuxt-link>
            <div class="content-item__subtext">
              <div>Історії про тих, хто творить незалежну журналістику</div>
            </div>
          </div>
          <div class="w-layout-grid content-items__grid">
            <material
              v-for="(post, index) in publicationsMaterials"
              :redirect-to="redirectTo"
              :post="post"
              :key="index"
            />
          </div>
          <div class="link-container"><nuxt-link to="/publications" class="first-screen__link">Читати всі публікації</nuxt-link></div>
        </div>
        <div class="separator-container"></div>
        <div>
          <h2 class="content-heading">проєкти премії</h2>
        </div>
        <div class="w-layout-grid content-grid__projects">
          <nuxt-link to="/projects/social-enterprize" class="project-link w-inline-block">
            <div class="project-link__overlay"></div>
            <div class="project-link__name">
              <div class="title-text__16">Історії соціального підприємництва</div>
            </div>
          </nuxt-link>
          <nuxt-link to="/projects/journalism-change" class="project-link project-link--journalism w-inline-block">
            <div class="project-link__overlay"></div>
            <div class="project-link__name">
              <div class="title-text__16">Журналістика змін</div>
            </div>
          </nuxt-link>
          <nuxt-link to="/projects/profession-stay" class="project-link project-link__profession w-inline-block">
            <div class="project-link__overlay"></div>
            <div class="project-link__name">
              <div class="title-text__16">Лишаюсь у професії</div>
            </div>
          </nuxt-link>
        </div>
        <div class="separator-container"></div>
        <div>
          <h2 class="content-heading">про премію</h2>
        </div>
        <div class="w-layout-grid content-grid__about">
          <nuxt-link to="/about" class="about-link w-inline-block">
            <div>Засновники</div>
          </nuxt-link>
          <nuxt-link to="/about/concept" class="about-link w-inline-block">
            <div>Концепція Премії</div>
          </nuxt-link>
          <nuxt-link to="/about/kapitula" class="about-link w-inline-block">
            <div>Капітула Премії</div>
          </nuxt-link>
          <nuxt-link to="/about/laureates" class="about-link w-inline-block">
            <div>Лауреати Премії</div>
          </nuxt-link>
          <nuxt-link to="/about/maecenas" class="about-link w-inline-block">
            <div>Меценати Премії</div>
          </nuxt-link>
          <nuxt-link to="/about/team" class="about-link w-inline-block">
            <div>Команда Премії</div>
          </nuxt-link>
        </div>
        <div class="separator-container"></div>
        <div>
          <h2 class="content-heading">георгій ґонґадзе</h2>
        </div>
      </div>
      <div class="gongadze-block">
        <div class="gongadze-navigation">
          <nuxt-link to="/georgiy-gongadze" class="gongadze-navigation__link w-inline-block">
            <h3 class="gongadze-heading">Біографія</h3>
          </nuxt-link>
          <nuxt-link to="/georgiy-gongadze/memories" class="gongadze-navigation__link right-link w-inline-block">
            <h3 class="gongadze-heading">Спогади</h3>
          </nuxt-link>
        </div>
        <div data-poster-url="https://uploads-ssl.webflow.com/5ebff748d6a8b31a18057139/5ee7a4a03ba5abeb674f7a12_composition (1)-poster-00001.jpg" data-video-urls="https://uploads-ssl.webflow.com/5ebff748d6a8b31a18057139/5ee7a4a03ba5abeb674f7a12_composition (1)-transcode.mp4,https://uploads-ssl.webflow.com/5ebff748d6a8b31a18057139/5ee7a4a03ba5abeb674f7a12_composition (1)-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" class="background-video w-background-video w-background-video-atom"><video autoplay="" loop="" style="background-image:url(&quot;https://uploads-ssl.webflow.com/5ebff748d6a8b31a18057139/5ee7a4a03ba5abeb674f7a12_composition (1)-poster-00001.jpg&quot;)" muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover"><source src="https://uploads-ssl.webflow.com/5ebff748d6a8b31a18057139/5ee7a4a03ba5abeb674f7a12_composition (1)-transcode.mp4" data-wf-ignore="true"><source src="https://uploads-ssl.webflow.com/5ebff748d6a8b31a18057139/5ee7a4a03ba5abeb674f7a12_composition (1)-transcode.webm" data-wf-ignore="true"></video></div>
      </div>
      <!--<div class="title-screen__materials" id="other-materials" v-if="otherMaterials">-->
        <!--<div class="w-layout-grid grid__articles">-->
          <!--<material-->
            <!--v-for="(post, index) in otherMaterials"-->
            <!--:redirect-to="redirectTo"-->
            <!--:post="post"-->
            <!--:key="index"-->
          <!--/>-->
        <!--</div>-->
      <!--</div>-->
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
    // mounted () {
    //   const t = new TimelineMax()
    //
    //   t.add(TweenMax.to(
    //     this.$refs.websiteHeading,
    //     1,
    //     {
    //       transform: 'translate3d(0, 0, 0)',
    //       opacity: 1,
    //       ease: EasePack.Sine.easeOut,
    //       delay: .2,
    //     }
    //   ), "first")
    //
    //   t.add(TweenMax.to(
    //     this.$refs.columnArt,
    //     1,
    //     {
    //       transform: 'translate3d(0, 0, 0)',
    //       opacity: 1,
    //       ease: EasePack.Sine.easeOut,
    //     }
    //   ), "first")
    //
    //   t.add(TweenMax.to(
    //     this.$refs.scrollMain,
    //     .3,
    //     {
    //       transform: 'translate3d(0, 0, 0)',
    //       opacity: 1,
    //       ease: EasePack.Sine.easeOut,
    //     }
    //   ), "second")
    //
    //   t.add(TweenMax.to(
    //     this.$refs.scrollAdditional,
    //     .45,
    //     {
    //       transform: 'translate3d(0, 0, 0)',
    //       opacity: 1,
    //       ease: EasePack.Back.easeOut.config(2.7),
    //       delay: .2
    //     }
    //   ), "second")
    //
    // },
    computed: {
      ...mapState({
                    postsByCategory: state => state.data.postsByCategory,
                    allCategories: state => state.categories.categories
                  }),
      newsMaterials () {
        const newsCategory = this.allCategories.filter(category => category.slug === 'news-feed')[0]
        const newsMaterials = this.postsByCategory[newsCategory.id]

        if (newsMaterials.length) {
          return [...newsMaterials].sort((a, b) => a.date_mls <= b.date_mls ? 1 : -1).slice(0, 4)
        } else {
          return null
        }
      },
      publicationsMaterials () {
        const publicationCategory = this.allCategories.filter(category => category.slug === 'publications')[0]
        const publicationMaterials = this.postsByCategory[publicationCategory.id]

        if (publicationMaterials.length) {
          return [...publicationMaterials].sort((a, b) => a.date_mls <= b.date_mls ? 1 : -1).slice(0, 4)
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
  video {
    width: 100%;
    max-height: 100%;
  }
  .column-art {
    padding: 70px 32px 32px;
  }

  .gongadze-block {
    overflow: hidden;
  }

  .content-headline-link {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  .art {
    background-image: url('../assets/images/logo.svg');
    background-size: contain;
    background-position: center top;
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

  .project-link:hover .project-link__overlay {
    background-color: rgba(84, 78, 217, 1);
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
      background: transparent;
      box-shadow: none;
      display: none;
    }

    .title-screen__cover {
      background-image: url('../assets/images/logo-background.svg');
      background-size: cover;
      background-position: left top;
      padding: 16px 12px 0;
    }

    .art {
      background-size: contain;
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

    .background-video {
      display: none;
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
