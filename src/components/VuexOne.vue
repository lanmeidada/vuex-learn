<template>
  <div>
    <p>VuexOne组件:{{$store.state.count}}</p>
    <button @click="$store.commit('delCount')">减少</button>
    <button @click="$store.dispatch('delCountAction')">3秒后减少</button>
  </div>
</template>

<script>
  export default {
    name: "VuexOne"
  }
</script>

<style scoped>

</style>