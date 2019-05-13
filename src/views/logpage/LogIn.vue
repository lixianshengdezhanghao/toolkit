<template>
  <div class="Login" ref="homePage">
    <div class="title">
      <img class="logo" src="../../assets/icon/logo.png" alt>
      <p class="title-text">Welcome To Firmiana Toolkit</p>
    </div>
    <div class="content">
      <LogIn v-if="$route.query.id"></LogIn>
      <SignIn v-else></SignIn>
    </div>
    <div class="footer">
      By signing up to Firmiana Toolkit, you agree to our
      <span>terms of service</span>.
    </div>
  </div>
</template>

<script>
import LogIn from "./components/LogIn";
import SignIn from "./components/SignIn";

export default {
  name: "Login",
  components: {
    LogIn,
    SignIn
  },
  data() {
    return {
      clientHeight: ""
    };
  },
  created() {
    // console.log(this.$route.query.id)
  },
  mounted() {
    // 获取浏览器可视区域高度
    this.clientHeight = `${document.documentElement.clientHeight}`; //document.body.clientWidth;
    //console.log(self.clientHeight);
    window.onresize = function temp() {
      this.clientHeight = `${document.documentElement.clientHeight}`;
    };
  },
  watch: {
    // 如果 `clientHeight` 发生改变，这个函数就会运行
    clientHeight: function() {
      this.changeFixed(this.clientHeight);
    }
  },
  methods: {
    changeFixed(clientHeight) {
      //动态修改样式
      // console.log(clientHeight);
      this.$refs.homePage.style.height = clientHeight + "px";
    }
  }
};
</script>

<style lang="scss" scoped>
.Login {
  background: url(../../assets/png/background-shuicai.jpg) no-repeat left top;
  background-size: 100% 100%;
  .title {
    text-align: center;
    .logo {
      width: 50px;
      height: 50px;
      margin: 60px 0 45px 0;
    }
    .title-text {
      color: #ffffff;
      font-size: 30px;
      font-weight: 550;
      line-height: 60px;
      text-shadow: 1px 1px 5px #808080;
    }
  }
  .footer {
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    color: #d1d1d1;
    font-size: 12px;
    span{
      text-decoration:underline;
    }
  }
}
</style>
