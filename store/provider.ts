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
    _state.providers = payload
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

      const url = `http://localhost:5000/api/providers`
      const { data } = await $axios.get(url)

      commit('fetchAllSuccess', data)

      return data

  },
  async fetchOne({ state: _state, commit  }, { id }) {
    commit('fetchOneTrigger')
    const url = 'http://localhost:5000/api/providers'
    const { data } = await $axios.get(`${url}/${id}`)
    const provider = new Provider(data)

    commit('fetchOneSuccess', provider)
  },
}
