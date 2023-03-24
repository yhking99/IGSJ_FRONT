import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    isLogOn: false,
    urlAddress: 'location'
  },
  getters: {
  },
  mutations: {
    setUrl(state, payload){
      state.urlAddress = payload
      if(state.urlAddress.includes('login')) state.isLogOn=true
      else state.isLogOn=false
    }
  },
  actions: {
  },
  modules: {
  }
})
