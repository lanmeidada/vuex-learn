import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from "./moduleA"
import moduleB from "./moduleB"

Vue.use(Vuex)

export default new Vuex.Store({
  // 定义属性
  state: {
    count: 0,
  },
  // 同步修改属性，使用$store.commit('方法名')同步修改属性。
  mutations: {
    addCount(state) {
      state.count++
    },
    delCount(state) {
      state.count--
    }
  },
  // 异步修改属性，用$store.dispatch('方法名')异步修改属性
  actions: {
    addCountAction(context) {
      setTimeout(function () {
        console.log(context)
        context.commit('addCount')
      },3000)
    },
    delCountAction(context) {
      setTimeout(function () {
        context.commit('delCount')
      },3000)
    }
  },
  // 共享数据的计算属性，使用$store.getters.计算属性名访问vuex的计算属性
  getters: {
    doubleCount(state) {
      return state.count * state.count
    }
  },
  // 使用模块
  modules: {
    moduleA,
    moduleB
  }
})