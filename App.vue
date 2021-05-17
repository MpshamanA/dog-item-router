<template>
  <div id="app">
    <div class="container">
      <Side />
      <Test />
    </div>
  </div>
</template>

<script>
import Side from "./components/side.vue";
import Test from "./views/foods.vue";
export default {
  name: "App",
  components: {
    Side,
    Test,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container {
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: 50px 1fr 50px;
}
</style>
