<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <VuexOne></VuexOne>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import VuexOne from '@/components/VuexOne'

export default {
  name: 'Home',
  components: {
    VuexOne
  }
}
</script>
