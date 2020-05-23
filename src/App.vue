<template>
  <div id="app">
    App: {{$store.state.count}}
    <button @click="$store.commit('addCount')">增加</button>
    <button @click="$store.dispatch('addCountAction')">3秒后增加</button>
    <router-view/>
    <hr/>
    <div>{{ $store.getters.reverseAndToUpper }}</div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
