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
    image_comment: post.acf.image_comment ? post.acf.image_comment : null,
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

    response.data.forEach(postItem => {
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

      commit(types.GET_POSTS_SUCCESS, data)
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
