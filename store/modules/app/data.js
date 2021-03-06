import * as types from '@/store/mutationTypes'
import { transformStringIntoSlug } from '~/utilities/postUtilities';
import moment from 'moment';
import 'moment/locale/uk';

moment.locale('uk');

const simplifiedPost = function (post) {
  return {
    id: post.ID,
    content: post.post_content,
    title: post.post_title,
    slug: transformStringIntoSlug(post.post_title),
    date: moment(post.acf.date_published, 'YYYYMMDD').format('D MMMM, YYYY'),
    date_mls: moment(post.acf.date_published, 'YYYYMMDD').valueOf(),
    categories: post.category,
    post_image: post.featured_image,
    youtube: post.acf.youtube_video,
    image_comment: post.acf.image_comment ? post.acf.image_comment : null,
    excerpt: post.excerpt,
    order: post.acf.order_position ? +post.acf.order_position : 0
  }
}

const state = () => ({
  postsByCategory: null,
  allPosts: null,
  request: {
    loading: false,
    fetched: false,
    error: null
  }
})

const getters = {
}

const mutations = {
  [types.GET_POSTS_REQUEST] (state) {
    state.postsByCategory = null
    state.allPosts = null
    state.request = { ...state.request, fetched: false, loading: true }
  },
  [types.GET_POSTS_SUCCESS] (state, response) {
    let postsByCategory = {}
    let allPosts = []

    response.forEach(postItem => {
      const post = simplifiedPost(postItem)

      post.categories.forEach(category => {
        if (postsByCategory[category.cat_ID]) {
          postsByCategory[category.cat_ID] = [ ...postsByCategory[category.cat_ID], ...[ post ] ]
        } else {
          postsByCategory[category.cat_ID] = [post]
        }
      })

      allPosts = [...allPosts, ...[ post]]
    })

    state.postsByCategory = postsByCategory
    state.allPosts = allPosts

    state.request = { ...state.request, fetched: true, loading: false }
  },
  [types.GET_POSTS_ERROR] (state, payload) {
    state.request = { ...state.request, fetched: false, loading: false, error: payload.error }
  }
}

const actions = {
  async getPosts ({ commit }) {
    commit(types.GET_POSTS_REQUEST)

    try {
      const data = await this.$axios.$get('/api/posts')
      const dataParsed = JSON.parse(data.data.replace(`<p style="overflow: auto; position: fixed; height: 0pt; width: 0pt"> </p>`, ''))

      commit(types.GET_POSTS_SUCCESS, dataParsed)
    } catch (error) {
      commit(types.GET_POSTS_ERROR, error)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
