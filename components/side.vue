<template>
  <div class="side sticky">
    <h2>TYPE</h2>
    <ul>
      <!-- index.jsでインポートした物を呼び出せる -->
      <li class="type"><router-link to="/">Home</router-link></li>
      <li class="type"><router-link to="/items">アイテム</router-link></li>
      <li class="type"><router-link to="/foods">フード</router-link></li>
      <li class="type"><router-link to="/fashion">ペット服</router-link></li>
    </ul>
    <!-- index.jsでインポートした物を呼び出せる -->
    <router-view />
  </div>
</template>

<style scoped>
.side {
  box-sizing: border-box;
  padding: 0 10px;
  background-color: #fff;
  grid-column-start: 1; /* columnが横 rowが縦 */
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 80px;
}
.type {
  list-style: none;
  padding: 10px;

  margin: 10px 0;
}
ul {
  margin: 0;
  padding: 0;
}
</style>
