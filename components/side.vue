<template>
  <div class="sidebar">
    <div class="sidebar-wrapper">
      <div class="sidebar-link-area">
        <!-- index.jsでインポートした物を呼び出せる -->
        <p>
          <router-link to="/items" class="sidebar-link">アイテム</router-link>
        </p>
        <p>
          <router-link to="/foods" class="sidebar-link">フード</router-link>
        </p>
        <p>
          <router-link to="/fashion" class="sidebar-link">ペット服</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  top: 50px;
  background-color: #191970;
  height: 100%; /* サイドバーの高さ */
  width: 150px; /* サイドバーのwidthを指定 */
  max-width: 150px; /* widthの最大値 */
  opacity: 0.9.5; /* 透過する 0に近くほど透過する */
  position: fixed; /* 左上に要素を固定する(スクロールしても位置は固定される) */
  overflow-x: hidden; /* 横軸ではみ出た要素を非表示にする */
  box-sizing: border-box; /* paddingとborderを、widthとheightに含める */
  padding-left: 40px; /* サイドバー内のリンクの位置を右にずらす */
}

.sidebar-link-area {
  padding-top: 20px; /* サイドバーリンクの上部に空白を作る */
}

.sidebar-link {
  color: #ffffff; /* リンクの文字色を白に */
  font-size: 15px;
}

.sidebar-link:hover {
  color: #ffffff; /* マウスがリンクに乗った時も文字色を白に */
}
</style>
