<template>
  <div class="foods">
    <Main type="フード" />
  </div>
</template>

<script>
import Main from "../components/main.vue";
export default {
  name: "foods",
  components: {
    Main,
  },
};
</script>

<style scoped>
.foods {
  grid-column-start: 2;
  grid-column-start: auto;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: #fffaf0;
}
</style>
