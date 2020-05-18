<template>
  <div>
    <div class="gongadze-content" v-if="category">
      <div class="gongadze-content__headline">
        <h3 class="headline-h3">{{ category.name }}</h3>
      </div>
      <div class="gongadze-content--condensed" v-if="post">
        <div class="article__photo" :style="{ backgroundImage: `url('${post.post_image}')` }"/>
        <div class="article-container">
          <div class="article__info">
            <div class="article-date">
              <div class="text-light-14 lowercase"> {{ post.date }}</div>
            </div>
            <div class="article-name">
              <div class="text-bold-32">{{ post.title }}</div>
            </div>
          </div>
          <div class="article__text">
            <div class="text-regular-20" v-html="post.content"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    layout: 'default',
    data() {
      return {
        category: null,
      }
    },
    created () {
      if (this.$route.query.cat_id && this.$route.query.title) {
        this.category = this.allCategories.filter(category => category.id === +this.$route.query.cat_id)[0]
      } else {
        this.$router.push('/error')
      }
    },
    computed: {
      ...mapState({
                    postsByCategory: state => state.data.postsByCategory,
                    allCategories: state => state.categories.categories,
                  }),
      post() {
        const post = this.postsByCategory[this.category.id].filter(post => this.$route.query.title.includes(post.slug))[0]

        console.log(post)

        if (post) {
          return post
        } else {
          this.$router.push('/error')
        }
      }
    }
  }
</script>

<style lang="scss">

  .wp-block-image {
    display: flex;
    align-items: center;
  }

  .wp-block-image img {
    max-width: 100%;
    max-height: 600px;
    margin: 24px auto;
  }

  h3 {
    margin: 64px 0;
  }
</style>
