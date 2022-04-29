<template>
  <div class="container">
    <MySearch />
    <MyList />
  </div>
</template>

<script>
import MyList from "./components/GithubList.vue";
import MySearch from "./components/GithubSearch.vue";
// 如果引入资源中有很多相对路径的资源无法使用，就可以在Pulic中引用，跳过严格的ES检查
// import "./assets/css/bootstrap.css"
export default {
  name: "App",
  components: {
    MySearch,
    MyList,
  },
};
</script>

<style>
.album {
  min-height: 50rem;
  padding: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
