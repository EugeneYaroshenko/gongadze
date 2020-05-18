<template>
  <div>
    <div class="gongadze-content">
      <div class="gongadze-content__headline">
        <h3 class="headline-h3">новини</h3>
      </div>
      <div class="gongadze-content--condensed">
        <div class="w-layout-grid news-grid" v-if="newsPosts">
          <main-news :post="newsPosts[0]" :redirect-to="redirectTo" />
          <div v-for="(post, index) in newsPosts.slice(1)" :key="index">
            <news :post="post" :redirect-to="redirectTo"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import News from '~/modules/newsFeed/news'
  import MainNews from '~/modules/newsFeed/mainNews'

  export default {
    layout: 'default',
    computed: {
      ...mapState({
                    postsByCategory: state => state.data.postsByCategory,
                    allCategories: state => state.categories.categories,
                  }),
      newsCategory() {
        return this.allCategories.filter(category => category.slug === 'news-feed')[0]
      },
      newsPosts() {
        if (this.newsCategory) {
          return [...this.postsByCategory[this.newsCategory.id]].sort((a, b) => a.date_mls < b.date_mls ? 1 : -1)
        } else {
          return null
        }
      },
    },
    components: {
      News,
      MainNews
    },
    methods: {
      redirectTo(postSlug) {
        return this.$router.push(`/news/?cat_id=${this.newsCategory.id}&title=${postSlug}`)
      },
    }
  }
</script>

<style lang="scss" scoped>
</style>
