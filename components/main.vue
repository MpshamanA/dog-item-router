<template>
  <main id="main">
    <div id="items" v-for="item in select" :key="item.id">
      <img :src="item.path" alt="画像" />
      <p>¥:{{ item.value }}</p>
      <button>
        <a :href="item.link" target="_blank" rel="noopener noreferrer"
          >購入先</a
        >
      </button>
    </div>
  </main>
</template>

<script>
import items from "../assets/items.json";
export default {
  name: "side",
  props: {
    type: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      items: items,
      selectItems: items,
      sort: false,
    };
  },
  computed: {
    select() {
      //HOME画面では全体の表示 データが増えたら件数指定して表示
      //親コンポーネントでタイプを指定して呼び出す
      if (this.type == "") {
        return this.items;
      } else {
        let tests = this.selectItems;
        let testlist = tests.filter((x) => x.type == this.type); //ここのtypeはpropsで指定している
        return testlist;
      }
    },
  },
};
</script>

<style scoped>
#main {
  background-color: #fdfbf6;
  margin-top: 70px;
}
#items {
  display: inline-block;
  padding-top: 20px;
  padding-left: 20px;
}
#items img {
  width: 250px;
  height: 250px;
}
</style>
