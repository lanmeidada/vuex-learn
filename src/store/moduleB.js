const moduleA = {
  state: {
    count: 50
  },
  mutations: {
    addCount(state) {
      state.count++
    },
    delCount(state) {
      state.count--
    }
  },
  actions: {
    addCountAction(context) {
      setTimeout(function () {
        context.commit('addCount')
      })
    },
    delCountAction(context) {
      setTimeout(function () {
        context.commit('delCount')
      })
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * state.count
    }
  }
}

export default moduleA