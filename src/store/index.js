import { createStore, createLogger } from 'vuex'

export default createStore({
  state: {
    lang: 0
  },
  mutations: {
    setLang(state,payload){
      state.lang = payload
    }
  },
  actions: {
    langAction({commit}, data){
      commit('setLang',data)
    }
  },
  modules: {
  },
  plugins: process.env.NODE_ENV !== 'production'
  ? [createLogger()]
  : []
})
