import { createStore } from 'vuex'

export default createStore({
  state: {
    breadcrumbList: []
  },
  mutations: {
    breadcrumbChange (state, list) {
      state.breadcrumbList = list
    }
  },
  actions: {
    breadcrumbEvent ({ commit }: any, data: any) {
      commit('breadcrumbChange', data)
    }
  },
  modules: {
  }
})
