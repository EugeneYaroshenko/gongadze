import * as types from '@/store/mutationTypes'
import { pidrubriki } from '@/config/UI'

const initialPosts = {
  by_categories: null,
  by_first_page_priority: {
    first_post: null,
    other_posts: []
  }
}

const state = () => ({
  posts: null,
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
    state.posts = null
    state.request = { ...state.request, fetched: false, loading: true }
  },
  [types.GET_POSTS_SUCCESS] (state, response) {
    const postsByCategories = {}
    const postsByFirstPagePriority = { first_post: null, other_posts: [] }

    response.data.forEach(postItem => {
      if (postsByCategories[postItem.category[0].name]) {
        postsByCategories[postItem.category[0].name] = [ ...postsByCategories[postItem.category[0].name], ...[ postItem ] ]
      } else {
        postsByCategories[postItem.category[0].name] = [postItem]
      }

      if (postItem.acf.on_title_page) {
        if (postItem.acf.prime_material) {
          postsByFirstPagePriority.first_post = postItem
        } else {
          postsByFirstPagePriority.other_posts = [ ...postsByFirstPagePriority.other_posts, ... [postItem] ]
        }
      }
    })

    state.posts = {
      by_categories: postsByCategories,
      by_first_page_priority: postsByFirstPagePriority
    }

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
