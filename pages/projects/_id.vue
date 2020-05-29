<template>
  <div>
      <div class="gongadze-content">
        <div v-if="projectCategory" class="projects-layout">
          <h4 class="headline-h4 headline-with-subtext">{{ projectCategory.name }}</h4>
          <div class="gongadze-content--condensed">
            <div class="projects-decription">
              <div class="text-regular-20">{{ projectCategory.description }}</div>
            </div>
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
