<template>
  <div>
    <div class="gongadze-content" v-if="category">
      <div class="gongadze-content--condensed" v-if="post">
        <div class="article-container">
          <div class="article__info">
            <nuxt-link :to="this.categoryLink" class="article-category">
              <div class="text-light-16"> {{ this.category.name }} </div>
            </nuxt-link>
            <div class="article-name">
              <div class="text-bold-40">{{ post.title }}</div>
            </div>
            <div class="share-icons">
              <a :href="facebookSharePath" class="menu-icon facebook"></a>
              <a :href="twitterSharePath" class="menu-icon twitter"></a>
              <a :href="telegramSharePath" class="menu-icon telegram"></a>
              <a :href="mailSharePath" class="menu-icon mail"></a>
            </div>
            <div class="article-date">
              <div class="text-regular-12"> Опубліковано <span class="date__calendar">{{ post.date }}</span></div>
            </div>
          </div>
          <div class="article__photo-container">
              <div v-if="post.youtube">
                <no-ssr>
                  <div
                    class="video-block"
                  >
                    <youtube
                      :video-id="videoID"
                      ref="youtube"
                      :fit-parent="true"
                    />
                  </div>
                </no-ssr>
              </div>
              <div v-else>
                <div class="article__photo" :style="{ backgroundImage: `url('${post.post_image}')` }"/>
                <div class="image-comment"><div class="text-bold-15">{{ post.image_comment }}</div>
              </div>
            </div>
          </div>
          <div class="article__text">
            <div class="text-regular-20" v-html="post.content"/>
          </div>
          <div class="share-container">
            <div class="text-bold-20">Поділитися матеріалом</div>
          </div>
          <div class="share-icons">
            <a :href="facebookSharePath" class="menu-icon facebook"></a>
            <a :href="twitterSharePath" class="menu-icon twitter"></a>
            <a :href="telegramSharePath" class="menu-icon telegram"></a>
            <a :href="mailSharePath" class="menu-icon mail"></a>
          </div>
          <recommended-articles
            v-if="recommendedPosts"
            :recommended-posts="recommendedPosts"
            :category-id="category.id"
            :update-post="updatePost"
            :color="postColor(category.slug)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import RecommendedArticles from '~/modules/article/recommendedPosts'
  import { colorsPalette } from '~/config/UI'
  import { getIdFromUrl } from 'vue-youtube'

  export default {
    layout: 'articleLayout',
    data() {
      return {
        category: null
      }
    },
    async asyncData ({ route, store, redirect, error }) {
      try {
        if (route.query.cat_id && route.query.title) {
          let category
          let post

          if (!store.state.data.allPosts) {
            const posts = await store.dispatch('data/getPosts')
            const categories = await store.dispatch('categories/getCategories')
          }

          category = store.state.categories.categories.filter(category => category.id === +route.query.cat_id)[0]
          post = store.state.data.postsByCategory[category.id].filter(post => route.query.title.includes(post.slug))[0]

          if (category && post) {
            return { category, postForMeta: post }
          } else {
            error({ statusCode: 404, message: `Матеріал не знайдено` })
          }
        } else {
          redirect('/')
          return null
        }
      } catch (e) {
        console.log(e)
      }
    },
    head () {
      if (this.postForMeta) {
        return {
          title: `${this.postForMeta.title}`,
          meta: [
            { property: 'og:url', content: `${process.env.baseUrl}/${this.$route.fullPath}` },
            { hid: 'og:title', name: 'og:title', content: `${this.postForMeta.title}` },
            { property: 'og:image', content: this.postForMeta.post_image },
            { property: 'og:image:type', content: 'image/jpeg' },
            { property: 'og:image:type', content: 'image/png' }
          ]
        }
      }
    },
    components: {
      RecommendedArticles
    },
    methods: {
      updatePost (post) {
        this.postForMeta = post
      },
      postColor (slug) {
        return colorsPalette[slug] ? colorsPalette[slug] : colorsPalette.other
      }
    },
    computed: {
      ...mapState({
                    postsByCategory: state => state.data.postsByCategory,
                    allCategories: state => state.categories.categories,
                  }),
      videoID () {
        return getIdFromUrl(this.post.youtube)
      },
      facebookSharePath() {
        return `https://www.facebook.com/sharer/sharer.php?u=#${encodeURIComponent(process.env.baseUrl + this.$route.fullPath)}`
      },
      telegramSharePath() {
        return `https://telegram.me/share/url?url=${encodeURIComponent(process.env.baseUrl + this.$route.fullPath)}`
      },
      twitterSharePath() {
        return `http://twitter.com/share?url=${encodeURIComponent(process.env.baseUrl + this.$route.fullPath)}`
      },
      mailSharePath() {
        return `mailto:?subject=${this.post.title}&body=${encodeURIComponent(process.env.baseUrl + this.$route.fullPath)}`
      },
      post() {
        const post = this.postsByCategory[this.category.id].filter(post => this.$route.query.title.includes(post.slug))[0]

        if (post) {
          return post
        } else {
          this.$router.push('/error')
        }
      },
      recommendedPosts () {
        const recommendedPosts = this.postsByCategory[this.category.id].filter(post => !this.$route.query.title.includes(post.slug))

        return recommendedPosts && recommendedPosts.length ? recommendedPosts.sort((a, b) => a.date_mls <= b.date_mls ? 1 : -1) : null
      },
      categoryLink () {
        if (this.category.slug === 'publications' || this.category.slug === 'news-feed') {
          return `/${this.category.slug}`
        } else {
          return `/projects/${this.category.slug}`
        }
      }
    }
  }
</script>

<style lang="scss">

  .wp-block-image {
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
  }

  figure {
    margin: 0;
  }

  .wp-block-image {
    margin: 40px auto 24px;

    img {
      max-width: 100%;
    }

    figcaption {
      text-align: center;
      margin-top: 0px;
      font-size: .8em;
      line-height: 1.6;
    }
  }

  .article-category {
    text-decoration: none;
    color: #4A4A49;

    &:hover {
      text-decoration: underline;
    }
  }

  .share-container {
    margin-top: 54px;
    text-align: center;
  }
  .share-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 12px 0 28px;

    .menu-icon {
      margin: 0 12px 0 12px;
      cursor: pointer;
      opacity: .8;
      height: 18px;
      width: 18px;

      &:hover {
        opacity: 1;
      }
    }
  }

  .video-block {
    width: 100%;
    height: 500px;
  }

  iframe {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 700px) {
    .video-block {
      height: 300px;
    }
  }

</style>
