<script>
export default {
  name: "MyList",
  data() {
    return {
      info: {
        isFirst: true,
        isLoading: false,
        errMsg: "",
        users: [],
      },
    };
  },
  mounted() {
    this.$bus.$on("updataListData", (dataObj) => {
      this.info = { ...this.info, ...dataObj };
      // console.log(this);
      // this.isFirst = isFirst;
      // this.isLoading = isLoading;
      // this.errMsg = errMsg;
      // this.users = users;
    });
  },
};
</script>

<template>
  <div class="row">
    <div
      class="card border-dark"
      v-show="info.users.length"
      v-for="user in info.users"
      :key="user.login"
    >
      <a :href="user.html_url" target="_blank">
        <!-- <img :src="" style="width: 100px" /> -->
        <img :src="user.avatar_url" class="card-img-top" style="width: 100px" alt="..." />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">欢迎使用！</h1>
    <!-- 展示加载中 -->
    <h1 v-show="info.isLoading">加载中......</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
  </div>
</template>

<style scoped>
</style>
