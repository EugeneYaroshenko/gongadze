<template>
  <div>
    <div class="gongadze-content first-page">
      <div class="first-screen">
        <div class="div-block">
          <div data-poster-url="../assets/videos/clip-updated-poster-00001.jpg"
               data-video-urls="../assets/videos/clip-updated-transcode.mp4,videos/clip-updated-transcode.webm"
               data-autoplay="true" data-loop="true" data-wf-ignore="true"
               class="background-video-2 w-background-video w-background-video-atom">
            <video autoplay="" loop="" style="background-image:url('../assets/videos/clip-updated-poster-00001.jpg')"
                   muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover">
              <source src="../assets/videos/clip-updated-transcode.mp4" data-wf-ignore="true">
              <source src="../assets/videos/clip-updated-transcode.webm" data-wf-ignore="true">
            </video>
          </div>
        </div>
        <div class="first-screen__text">
          <div class="text-regular-16">Премія покликана формувати моральні орієнтири в журналістиці та сприяти пошуку
            інноваційних рішень донесення правди
          </div>
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
          <div class="w-layout-grid content-items__grid">
            <material
              v-for="(post, index) in newsMaterials"
              :redirect-to="redirectTo"
              :post="post"
              :key="index"
            />
          </div>
          <div class="link-container">
            <nuxt-link to="/news-feed" class="first-screen__link">Читати всі новини</nuxt-link>
          </div>
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
          <div class="link-container">
            <nuxt-link to="/publications" class="first-screen__link">Читати всі публікації</nuxt-link>
          </div>
        </div>
        <div class="separator-container"></div>
        <div>
          <h2 class="content-heading">проєкти премії</h2>
        </div>
        <div class="w-layout-grid content-grid__projects">
          <nuxt-link to="/projects/stories-social-entrepreneurship" class="project-link w-inline-block">
            <div class="project-link__overlay"></div>
            <div class="project-link__name">
              <div class="title-text__16">Історії соціального підприємництва</div>
            </div>
          </nuxt-link>
          <nuxt-link to="/projects/journalism-change" class="project-link journalism-change w-inline-block">
            <div class="project-link__overlay"></div>
            <div class="project-link__name">
              <div class="title-text__16">Журналістика змін</div>
            </div>
          </nuxt-link>
          <nuxt-link to="/projects/profession-stay" class="project-link profession-stay w-inline-block">
            <div class="project-link__overlay"></div>
            <div class="project-link__name">
              <div class="title-text__16">Лишаюсь у професії</div>
            </div>
          </nuxt-link>
          <nuxt-link to="/projects/journalism-sovereign-ukraine" class="project-link profession-stay w-inline-block">
            <div class="project-link__overlay"></div>
            <div class="project-link__name">
              <div class="title-text__16">Журналістика незалежної України: Історія від першої особи</div>
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
            <div>Контакти</div>
          </nuxt-link>
        </div>
        <div class="separator-container"></div>
        <div>
          <h2 class="content-heading">георгій ґонґадзе</h2>
        </div>
        <div class="w-layout-grid content-grid__projects content-grid__gongadze">
          <nuxt-link to="/georgiy-gongadze" class="gongadze-link w-inline-block">
            <div class="project-link__overlay"></div>
            <div class="project-link__name">
              <div class="title-text__20">Біографія</div>
            </div>
          </nuxt-link>
          <nuxt-link to="/georgiy-gongadze/memories" class="gongadze-link gongadze-link__memories w-inline-block">
            <div class="project-link__overlay"></div>
            <div class="project-link__name">
              <div class="title-text__20">Спогади</div>
            </div>
          </nuxt-link>
        </div>

      </div>
    </div>
    <subscription-form />
    <partners/>
  </div>
</template>

<script>
  import titleMaterial from '~/modules/titlePage/titleMaterial'
  import Material from '~/modules/titlePage/material'
  import Partners from '~/modules/titlePage/partners'
  import SubscriptionForm from '~/modules/common/subscriptionForm'
  import {mapState} from 'vuex'

  export default {
    layout: 'titleLayout',
    computed: {
      ...mapState({
                    postsByCategory: state => state.data.postsByCategory,
                    allCategories: state => state.categories.categories
                  }),
      newsMaterials() {
        const newsCategory = this.allCategories.filter(category => category.slug === 'news-feed')[0]
        const newsMaterials = this.postsByCategory[newsCategory.id]

        if (newsMaterials.length) {
          return [...newsMaterials].sort((a, b) => a.date_mls <= b.date_mls ? 1 : -1).slice(0, 4)
        } else {
          return null
        }
      },
      publicationsMaterials() {
        const publicationCategory = this.allCategories.filter(category => category.slug === 'publications')[0]
        const publicationMaterials = this.postsByCategory[publicationCategory.id]

        if (publicationMaterials.length) {
          return [...publicationMaterials].sort((a, b) => a.date_mls <= b.date_mls ? 1 : -1).slice(0, 4)
        } else {
          return null
        }
      },
      firstPageMaterials() {
        if (this.firstPageCategory) {
          return this.postsByCategory[this.firstPageCategory.id]
        }
      },
      firstPageCategory() {
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
      Material,
      SubscriptionForm
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

  .parent-element-to-video {
    overflow: hidden;
    height: 100vh;
    width: 100vw;
  }

  .first-screen__information {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding-top: 64px;
    background: rgba(#010002, 0.2);
  }

  .first-screen__logo {
    width: 200px;
    height: 200px;
    background-image: url('../assets/images/gongadze-full.svg');
    background-size: contain;
    background-position: center center;
  }

  @media screen and (max-width: 991px) {
    .parent-element-to-video {
      display: none;
    }

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
