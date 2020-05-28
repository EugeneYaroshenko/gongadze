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
            <div class="article-date">
              <div class="text-regular-12"> Опубліковано <span class="date__calendar">{{ post.date }}</span></div>
            </div>
          </div>
          <div class="article__photo" :style="{ backgroundImage: `url('${post.post_image}')` }"/>
          <div class="article__text">
            <div class="text-regular-20" v-html="post.content"/>
          </div>
          <recommended-articles
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
  import { mapState } from 'vuex';
  import RecommendedArticles from '~/modules/article/recommendedPosts';
  import { colorsPalette } from '~/config/UI';

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

  .wp-block-image {
    margin: 40px auto 24px;
    max-width: 600px;

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

</style>
