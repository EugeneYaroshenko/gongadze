import * as types from '@/store/mutationTypes'

const state = () => ({
  email: null,
  request: {
    loading: false,
    fetched: false,
    error: null
  }
})

const getters = {
}

const mutations = {
  [types.SAVE_EMAIL_REQUEST] (state, data) {
    state.email = data.email
    state.request = { ...state.request, fetched: false, loading: true }
  },
  [types.SAVE_EMAIL_SUCCESS] (state) {
    state.request = { ...state.request, fetched: true, loading: false }
  },
  [types.SAVE_EMAIL_ERROR] (state, payload) {
    state.request = { ...state.request, fetched: false, loading: false, error: payload.error }
  }
}

const actions = {
  async saveSubscriptionEmail ({ commit }, email) {
    commit(types.SAVE_EMAIL_REQUEST, { data: email })

    try {
      const data = await this.$axios.$post('/api/email', { email })

      commit(types.SAVE_EMAIL_SUCCESS)
    } catch (error) {
      commit(types.SAVE_EMAIL_ERROR, error)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
