<template>
  <div>
    <ul class="article-recommendations" v-if="recommendedPosts">
      <li v-for="(recommendedPost, index) in recommendedPosts.slice(0, 3)" :key="index">
        <nuxt-link :to="articleLink(recommendedPost.slug)" @click.native="changePost(recommendedPost)" class="article-recommendation">
          <div
            class="article-recommendation__photo"
            :style="{ backgroundImage: `url('${recommendedPost.post_image}')` }"/>
          <div class="article-recommendation__info" :style="{ background: `${postColor()}` }">
            <div class="info__date">
              <div class="text-regular-14">{{ recommendedPost.date }}</div>
            </div>
            <div class="info__name">
              <div class="text-bold-20">{{ recommendedPost.title }}</div>
            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      recommendedPosts: {
        type: Array,
        required: true,
        default: null
      },
      categoryId: {
        type: Number,
        required: true,
        default: null
      },
      updatePost: {
        type: Function,
        required: true,
        default: () => []
      },
      color: {
        type: String,
        default: '#D2F0F6',
        required: false
      }
    },
    methods: {
      articleLink (postSlug) {
        return `/article/?cat_id=${this.categoryId}&title=${postSlug}`
      },
      changePost (post) {
        window.scrollTo(0, 0)
        this.updatePost(post)
      },
      postColor () {
        return this.color
      }
    }
  }
</script>

<style lang="scss" scoped>
  .article-category {
    text-decoration: none;
    color: #4A4A49;

    &:hover {
      text-decoration: underline;
    }
  }

  .article-recommendations {
    list-style: none;
    margin: 100px 0 0;
    padding: 0;

    .article-recommendation {
      display: flex;
      position: relative;
      flex-flow: row nowrap;
      margin-bottom: 40px;
      height: 200px;
      text-decoration: none;
      color: #303030;
      cursor: pointer;

      &:hover {
        .info__name {
          text-decoration: underline;
        }
      }
    }

    .article-recommendation__photo {
      width: 40%;
      background: #E7E6FC;
      background-size: cover;
      background-position: center top;
    }

    .article-recommendation__info {
      background: #E7E6FC;
      flex: 1;
      padding: 40px 16px 12px 16px;
      display: flex;
      align-items: center;
      flex-flow: column nowrap;
      text-align: center;
      transition: all .200s ease-in;
    }

    .info__name {
      margin-top: 4px;
    }
  }

  @media screen and (max-width: 600px) {
    .article-recommendations {
      .article-recommendation {
        height: auto;
        flex-flow: column nowrap;
      }

      .article-recommendation__photo {
        width: 100%;
        height: 60vw;
      }

      .article-recommendation__info {
        padding: 20px 12px 32px;
      }

    }
  }

</style>
