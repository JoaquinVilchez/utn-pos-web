import Provider from '~/models/provider'
import { $axios } from '~/util/api'

interface ProviderStore {
  provider: Provider | null,
  providers: Provider[],
  fetchLoading: boolean,
}

const initialState: ProviderStore = {
  provider: null,
  providers: [],
  fetchLoading: false
}

export const state = (): ProviderStore => initialState

export const mutations = {
  fetchOneSuccess(_state, payload) {
    _state.provider = payload
  },
  fetchOneTrigger(_state) {
    _state.provider = null
  },
  fetchAllSuccess(_state, payload) {
    _state.providers = payload.rows
  },
  setFetchLoading(_state, payload) {
    _state.fetchLoading = payload
  },
  setFetchOneLoading(_state, payload) {
    _state.fetchLoading = payload
  },
}

export const actions = {
  async fetchAll({ state: _state, commit }){
    commit('setFetchLoading', true)
    try {
      const url = `http://localhost:3000/api/providers`
      const { data } = await $axios.get(url)

      console.log(data)

      return data
    } finally {
      commit('setFetchLoading', false)
    }
  },
  async fetchOne({ state: _state, commit  }, { id }) {
    commit(mutations.setFetchOneLoading, true)

    commit(mutations.fetchOneTrigger)

    try {
      const url = `${process.env.API_URL}/providers`
      console.log(url)
      const { data } = await $axios.get(`${url}/${id}`)
      const provider = new Provider(data.data)

      commit(mutations.fetchOneSuccess, provider)

      return provider
    } finally {
      commit(mutations.setFetchOneLoading, false)
    }
  },
}
