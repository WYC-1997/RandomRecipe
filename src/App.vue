<template>
  <div>
    <topVue />
    <div class="app_body">
      <leftVue />
      <rightVue />
    </div>
  </div>
</template>

<script> 
import leftVue from './components/left.vue';
import rightVue from './components/right.vue';
import topVue from './components/top.vue';
export default {
  name: 'App',
  components: {
    leftVue,
    rightVue,
    topVue
  }
}
</script>

<style>
#app {
  width: 100%;
  /* height: 98vh; */
  background-image: url("./assets/images/infinity-5967745.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: black;
  background-position: center center;
}
.app_body {
  display: flex;
  justify-content: space-between;
}
</style>
