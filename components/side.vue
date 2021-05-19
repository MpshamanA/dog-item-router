<template>
  <div class="sidebar">
    <div class="sidebar-wrapper">
      <div class="sidebar-link-area">
        <!-- index.jsでインポートした物を呼び出せる -->
        <p class="hover-color">
          <router-link to="/" class="sidebar-link">home</router-link>
        </p>
        <p class="hover-color">
          <router-link to="/items" class="sidebar-link">アイテム</router-link>
        </p>
        <p class="hover-color">
          <router-link to="/foods" class="sidebar-link">フード</router-link>
        </p>
        <p class="hover-color">
          <router-link to="/fashion" class="sidebar-link">ペット服</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  top: 70px;
  background-color: #fff;
  height: 100%; /* サイドバーの高さ */
  width: 200px; /* サイドバーのwidthを指定 */
  max-width: 200px; /* widthの最大値 */
  opacity: 0.9.5; /* 透過する 0に近くほど透過する */
  position: fixed; /* 左上に要素を固定する(スクロールしても位置は固定される) */
  overflow-x: hidden; /* 横軸ではみ出た要素を非表示にする */
  box-sizing: border-box; /* paddingとborderを、widthとheightに含める */
  /* padding-left: 40px; */ /* サイドバー内のリンクの位置を右にずらす */
  text-align: center;
}

.sidebar-link-area {
  padding-top: 20px; /* サイドバーリンクの上部に空白を作る */
}

.sidebar-link {
  display: block;
  color: #333; /* リンクの文字色を白に */
  font-size: 15px;
  padding: 15px 0;
  width: 100%;
}
.sidebar-link:hover {
  background-color: #eee; /* マウスがリンクに乗った時に背景色を変更 */
}
</style>
