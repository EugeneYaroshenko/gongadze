<template>
  <div>
    <div class="gongadze-content">
      <div class="gongadze-content--condensed news-container">
        <div class="w-layout-grid news-grid" v-if="newsPosts">
          <main-news :post="newsPosts[0]" :redirect-to="redirectTo" :color="postColor" />
          <div v-for="(post, index) in newsPosts.slice(1)" :key="index">
            <project :post="post" :redirect-to="redirectTo" :color="postColor"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Project from '~/modules/projects/project'
  import MainNews from '~/modules/newsFeed/mainNews'
  import { colorsPalette } from '~/config/UI'

  export default {
    layout: 'default',
    head () {
      return {
        title: 'Премія Георгія Ґонґадзе',
        meta: [
          { hid: 'description', name: 'description', content: 'Новини' }
        ]
      }
    },
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
      postColor() {
        return colorsPalette['news-feed']
      }
    },
    components: {
      Project,
      MainNews
    },
    methods: {
      redirectTo(postSlug) {
        return this.$router.push(`/article/?cat_id=${this.newsCategory.id}&title=${postSlug}`)
      },
    }
  }
</script>

<style lang="scss" scoped>
  .news-container {
    padding: 120px 24px 32px;
  }
</style>
