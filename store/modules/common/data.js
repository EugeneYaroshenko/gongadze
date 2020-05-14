import * as types from '@/store/mutationTypes'

const state = () => ({
  posts: null,
  request: {
    loading: false,
    fetched: false,
    error: null
  }
})

const getters = {
  getAllCinemasForLocation: (state) => (city) => {
    const cinemas = state.cinemas.filter(cinemaItem => cinemaItem.location === city)[0].cinema_array
    return cinemas
  }
}

const mutations = {
  [types.GET_POSTS_REQUEST] (state) {
    state.posts = null
    state.request = { ...state.request, fetched: false, loading: true }
  },
  [types.GET_POSTS_SUCCESS] (state, data) {
    state.posts = data
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
