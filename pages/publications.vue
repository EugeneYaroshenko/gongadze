<template>
  <div>
    <div class="gongadze-content">
      <div class="gongadze-content__headline">
        <h3 class="headline-h3">публікації</h3>
      </div>
      <div v-if="publicationCategory">
        <div class="gongadze-content--condensed">
          <div class="projects-decription">
            <div class="text-regular-20">{{ publicationCategory.description }}</div>
          </div>
          <div class="w-layout-grid publications-grid" v-if="publicationCategory && publicationPosts">
            <div v-for="(post, index) in publicationPosts" :key="index">
              <project :post="post" :redirect-to="redirectTo"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import project from '~/modules/projects/project';

  export default {
    layout: 'default',
    computed: {
      ...mapState({
                    postsByCategory: state => state.data.postsByCategory,
                    allCategories: state => state.categories.categories,
                  }),
      publicationCategory() {
        return this.allCategories.filter(category => category.slug === 'publications')[0]
      },
      publicationPosts () {
        if (this.publicationCategory) {
          return [...this.postsByCategory[this.publicationCategory.id]].sort((a, b) => a.date_mls < b.date_mls ? 1 : -1)
        } else {
          return null
        }
      },
    },
    components: {
      project
    },
    methods: {
      redirectTo(postSlug) {
        return this.$router.push(`/article/?cat_id=${this.publicationCategory.id}&title=${postSlug}`)
      },
    }
  }
</script>

<style lang="scss" scoped>
</style>
