<template>
  <div id="app">
    <Header class="header" />
    <Side class="sidebar-area" />
    <div class="scafold-wrapper text-center">
      <router-view />
    </div>
  </div>
  <!-- <img src="./assets/img/アイテム1.jpeg" alt="" />
  <img src="./assets/img/アイテム2.jpeg" alt="" />
  <img src="./assets/img/アイテム3.jpeg" alt="" />
  <img src="./assets/img/アイテム4.jpeg" alt="" />
  <img src="./assets/img/アイテム5.jpeg" alt="" />
  <img src="./assets/img/アイテム6.jpeg" alt="" />
  <img src="./assets/img/アイテム7.jpeg" alt="" />
  <img src="./assets/img/アイテム8.jpeg" alt="" />
  <img src="./assets/img/アイテム9.jpeg" alt="" />
  <img src="./assets/img/フード1.jpeg" alt="" />
  <img src="./assets/img/フード2.jpeg" alt="" />
  <img src="./assets/img/フード3.jpeg" alt="" />
  <img src="./assets/img/フード4.jpeg" alt="" />
  <img src="./assets/img/服1.jpeg" alt="" />
  <img src="./assets/img/服2.jpeg" alt="" />
  <img src="./assets/img/服3.jpeg" alt="" />
  <img src="./assets/img/服4.jpeg" alt="" />
  <img src="./assets/img/服5.jpeg" alt="" />
  <img src="./assets/img/服6.jpeg" alt="" />
  <img src="./assets/img/服7.jpeg" alt="" />
  <img src="./assets/img/服8.jpeg" alt="" />
  <img src="./assets/img/服9.jpeg" alt="" /> -->
</template>

<script>
import Header from "./components/header";
import Side from "./components/side";
export default {
  name: "App",
  components: {
    Header,
    Side,
  },
};
</script>

<style>
.header {
  position: fixed; /*要素を固定*/
  padding: 0 40px;
  width: 100%;
  height: 70px;
  top: 0;
  background-color: #fff;
  z-index: 1;
}
.sidebar-area {
  /* 左側に固定 */
  float: left;
}

.footer-area {
  margin-top: 40px;
}

.scafold-wrapper {
  /* display: flex; 要素を横並びにする */
  flex-direction: column; /* 要素の並び順の主軸を指定 上 => 下 */
  min-height: 100vh; /* 要素の高さの最小値を指定 vhはviewport(表示領域) heightの略 */

  /* サイドバーのwidth分だけ範囲を削除 */
  width: calc(100% - 100px);

  /* サイドバーで隠れるので右に寄せる */
  margin: 0 0 0 210px;
}
</style>
