import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
  alert('页面异常')
}

export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  actions: {
    changeCity (xcv, city) {
      xcv.commit('changeCity', city)
    }
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {
        alert('页面异常')
      }
    }
  }
})