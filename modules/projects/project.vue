<template>
  <div @click="redirectTo(post.slug)" class="publication-container w-inline-block">
    <div class="publication-image journalism-change" :style="{ backgroundImage: `url('${post.post_image}')` }"></div>
    <div class="publication-info__container">
      <div class="publication-info">
        <div class="publication-description">
          <div class="publication-date">{{ post.date }}</div>
          <div class="publication-name">
            <div class="text-bold-18"><strong>{{ post.title }}</strong></div>
          </div>
          <div class="publication-text">
            <div class="text-regular-14" v-html="post.excerpt"/>
          </div>
        </div>
        <!--<div class="publication-read">-->
          <!--<div class="text-bold-18">Читати</div>-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script>
  import { colorsPalette } from '~/config/UI'

  export default {
    props: {
      post: {
        type: Object,
        default: null,
        required: true
      },
      redirectTo: {
        type: Function,
        default: () => {},
        required: true
      },
      color: {
        type: String,
        default: '#D2F0F6',
        required: false
      }
    },
    data() {
      return {
        postColor: this.color
      }
    },
  }
</script>

<style lang="scss" scoped>
  .publication-text {
    margin-top: 12px;
  }
</style>
