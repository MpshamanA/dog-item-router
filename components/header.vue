<template>
  <div class="header">
    <div class="title head-parts">
      <img
        src="../assets/img/骨のフリーアイコン.png"
        alt="骨"
        class="bone title-parts"
      />
      <p class="title-parts">Pet Items</p>
    </div>
    <div class="search-box head-parts">
      <input type="text" placeholder="キーワードを入力" />
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.bone {
  padding: 0 5px;
  width: 13px;
  height: 13px;
}

.title-parts {
  display: inline-block;
}
.head-parts {
  display: inline-block;
}
.search-box {
  margin-left: 90px;
}
</style>
