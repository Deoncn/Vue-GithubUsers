<script>
import axios from "axios";

export default {
  name: "MySearch",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      // 请求前更新 List的数据
      this.$bus.$emit("updataListData", {isFirst:false,isLoading: true,errMsg: "",users:[]});
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          console.log("请求成功了");
          this.$bus.$emit("updataListData", {isLoading:false,errMsg: "",users:response.data.items});
        },
        (error) => {
          console.log("请求失败了", error.message);
          this.$bus.$emit("updataListData", {isLoading:false,errMsg:error.message,users:[]});
        }
      );
    },
  },
};
</script>

<template>
  <div class="p-5 mb-4 bg-dark text-white rounded-3">
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">Search Github Users</h1>
      <!-- <p class="col-md-8 fs-4">
        Using a series of utilities, you can create this jumbotron, just like
        the one in previous versions of Bootstrap. Check out the examples below
        for how you can remix and restyle it to your liking.
      </p> -->
      <div class="input-group">
        <input
          v-model="keyWord"
          type="text"
          class="form-control"
          placeholder="enter the name you search"
        />
        <button @click="searchUsers" type="button" class="btn btn-primary">
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
