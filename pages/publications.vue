<template>
  <div>
    <div class="gongadze-content big-preview">
      <div v-if="publicationCategory">
        <div class="project-preview publications-preview">
          <div class="project-preview__overlay"/>
          <div class="project-preview__description">
            <div class="description__name">
              <h1 class="headline-h1">Публікації</h1>
            </div>
            <div class="description__about">
              <div class="text-regular-20">{{ publicationCategory.description }}</div>
            </div>
          </div>
          <div class="navdown-container" v-scroll-to="'#materials'">
            <div class="arrow-down arrow-down__first"></div>
            <div class="arrow-down arrow-down__second"></div>
          </div>
        </div>
        <div id="materials" class="gongadze-content--condensed project-container">
          <div class="w-layout-grid publications-grid" v-if="publicationCategory && publicationPosts">
            <div v-for="(post, index) in publicationPosts" :key="index">
              <project :post="post" :redirect-to="redirectTo" :color="postColor"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import project from '~/modules/projects/project';
  import { colorsPalette } from '~/config/UI';

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
      postColor() {
        return colorsPalette['publications']
      }
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
