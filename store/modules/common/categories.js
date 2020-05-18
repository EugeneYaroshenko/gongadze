import * as types from '@/store/mutationTypes'

const simplifyCategories = function (categories) {
  return categories.map(category => {
    if (category.name !== 'Без категорії' || category.id !== 11 || category.parent !== 11) {
      return {
        id: category.id,
        name: category.name,
        slug: category.slug,
        parent: category.parent,
        description: category.description,

      }
    }
  })
}

const state = () => ({
  categories: null,
  request: {
    loading: false,
    fetched: false,
    error: null
  }
})

const getters = {
}

const mutations = {
  [types.GET_CATEGORIES_REQUEST] (state) {
    state.categories = null
    state.request = { ...state.request, fetched: false, loading: true }
  },
  [types.GET_CATEGORIES_SUCCESS] (state, data) {
    state.categories = simplifyCategories(data)
    state.request = { ...state.request, fetched: true, loading: false }
  },
  [types.GET_POSTS_ERROR] (state, payload) {
    state.request = { ...state.request, fetched: false, loading: false, error: payload.error }
  }
}

const actions = {
  async getCategories ({ commit }) {
    commit(types.GET_CATEGORIES_REQUEST)

    try {
      const response = await this.$axios.$get('/api/categories')

      commit(types.GET_CATEGORIES_SUCCESS, response.data)
    } catch (error) {
      commit(types.GET_CATEGORIES_ERROR, error)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
