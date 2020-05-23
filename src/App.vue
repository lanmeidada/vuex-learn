<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
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
