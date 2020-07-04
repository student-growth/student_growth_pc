import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo:{
      username:'',

    }
  },
  mutations: {
    updateUserInfo(state,payload){
      state.userinfo.username = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
