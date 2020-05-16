<template>
  <div>
    <div class="gongadze-content">
      <div class="gongadze-content__headline">
        <h3 class="headline-h3">проєкти премії</h3>
      </div>
      <div class="headline-container">
        <h4 class="headline-h4 headline-with-subtext">Журналістика незалежної України: Історія від першої особи</h4>
      </div>
      <div class="gongadze-content--condensed">
        <div class="projects-decription">
          <div class="text-regular-20">Відеолекторій створений у партнерстві з каналом “Еспресо”. У його межах провідні медійники розповідають про поворотні точки в розвитку української журналістики, а також ті зміни, творцями яких їм випало бути</div>
        </div>
        <div class="w-layout-grid publications-grid" v-if="posts && posts.length">
          <div v-for="(post, index) in filteredProjects" :key="index">
            <project :post="post" :redirect-to="redirectTo"/>
          </div>
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
    props: {
      posts: {
        type: Array,
        default: null,
        required: true
      },
    },
    methods: {
      redirectTo(postID) {
        return this.$router.push(`/project/${postID}`)
      }
    },
    computed: {
      filteredProjects () {
        return this.posts.filter(post => post.acf.pidrubrika === 'journalism-sovereign-ukraine')
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
