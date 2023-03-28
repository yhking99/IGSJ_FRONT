import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    signInPage: false,
    urlAddress: 'location'
  },
  getters: {
  },
  mutations: {
    setUrl(state, payload){
      state.urlAddress = payload
      console.log(state.urlAddress)
      console.log(state.signInPage)
      if(state.urlAddress.includes('login')) state.signInPage=true
      else state.signInPage=false
    }
  },
  actions: {
  },
  modules: {
  }
})
