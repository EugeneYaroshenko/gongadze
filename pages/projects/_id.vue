<template>
  <div>
      <div class="gongadze-content big-preview">
        <div v-if="projectCategory">
          <div class="project-preview" :class="projectCategory.slug">
            <div class="project-preview__overlay"/>
            <div class="project-preview__description">
              <div class="description__name">
                <h1 class="headline-h1">{{ projectCategory.name }}</h1>
              </div>
              <div class="description__about">
                <div class="text-regular-20">{{ projectCategory.description }}</div>
              </div>
            </div>
            <div class="navdown-container" v-scroll-to="'#materials'">
              <div class="arrow-down arrow-down__first"></div>
              <div class="arrow-down arrow-down__second"></div>
            </div>
          </div>
          <div id="materials" class="gongadze-content--condensed project-container">
            <div class="w-layout-grid publications-grid">
              <div v-for="(post, index) in categoryPosts" :key="index">
                <project :post="post" :redirect-to="redirectTo" :color="postColor"/>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import project from '~/modules/projects/project';
  import { colorsPalette } from '~/config/UI';

  export default {
    scrollToTop: true,
    components: {
      project
    },
    props: {
      posts: {
        type: Object,
        default: null,
        required: true
      },
      categories: {
        type: Array,
        default: null,
        required: false
      }
    },
    head () {
      return {
        title: this.projectCategory.name,
        meta: [
          { hid: 'description', name: 'description', content: this.projectCategory.description }
        ]
      }
    },
    methods: {
      redirectTo(postSlug) {
        return this.$router.push(`/article/?cat_id=${this.projectCategory.id}&title=${postSlug}`)
      },
      routeSlugIsProjectCategory (slug) {
        const category = this.categories.filter( category => slug.includes(category.slug))[0]
        const projectsParentCategory = this.categories.filter( category => category.slug === 'projects')[0]

        if (category && category.parent === projectsParentCategory.id) {
          return category
        } else {
          return null
        }
      }
    },
    computed: {
      projectCategory () {
        const category = this.routeSlugIsProjectCategory(this.$route.path.replace('/projects/', ''))

        if (category) {
          return category
        } else {
          return this.$router.push(`/error`)
        }
      },
      postColor() {
        return colorsPalette['other']
      },
      categoryPosts () {
        if (this.projectCategory) {
          return [...this.posts[this.projectCategory.id]].sort((a, b) => a.date_mls < b.date_mls ? 1 : -1)
        } else {
          return []
        }

      }
    }
  }
</script>

<style lang="scss" scoped>
  .projects-layout {
    padding-top: 120px;
  }
</style>
