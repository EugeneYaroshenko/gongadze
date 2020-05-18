<template>
  <div>
      <div class="gongadze-content">
        <div class="gongadze-content__headline">
          <h3 class="headline-h3">проєкти премії</h3>
        </div>
        <div v-if="projectCategory">
          <h4 class="headline-h4 headline-with-subtext">{{ projectCategory.name }}</h4>
          <div class="gongadze-content--condensed">
            <div class="projects-decription">
              <div class="text-regular-20">{{ projectCategory.description }}</div>
            </div>
          </div>
      </div>
        <div class="w-layout-grid publications-grid">
          <div v-for="(post, index) in categoryPosts" :key="index">
            <project :post="post" :redirect-to="redirectTo"/>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import project from '~/modules/projects/project';

  export default {
    components: {
      project
    },
    // watch: {
    //   '$route.path': function () {
    //     console.log('updating')
    //     this.selectCategory()
    //     this.$forceUpdate()
    //   }
    // },
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
</style>
