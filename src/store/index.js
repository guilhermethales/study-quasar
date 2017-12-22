import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Expenses: {
      list: []
    }
  },

  mutations: {
    UpdateListExpense (state, obj) {
      state.Expenses.list.unshift(obj)
    },

    getList (state) {
      return state.Expenses.list
    }
  }
})
