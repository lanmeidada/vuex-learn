const moduleA = {
  /**
   * namespaced 命名空间
   * 因为 mutations、actions、getters 没有绑定到模块上，
   * 所以当每个模块存在相同的 mutations、actions、getters 的属性时，会一起改变
   * 但是加入命名空间后，可以解决这个问题
   * 实例：
   * $store.commit('a/addCount')
   *
   */
  namespaced: a,
  state: {
    count: 100
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