import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    response_data: {}
  },
  mutations: {
    change_data (state, data) {
      state.response_data = data
    }
  }
})

export default store
