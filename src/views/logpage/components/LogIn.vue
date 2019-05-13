<template>
  <div class="LogIn">
    <div class="left">
      <p class="left-title">Sign up with one of the following:</p>
      <button class="firmiana">
        <img src="../../../assets/icon/logo.png" alt>Firmiana
      </button>
      <button class="wechat">
        <img src="../../../assets/icon/logo.png" alt>Wechat
      </button>
      <router-link tag="button" to="/dataSet" class="password">
        <img src="../../../assets/icon/logo.png" alt>Account Number
      </router-link>
    </div>
    <div class="right">
      <div class="right-bg"></div>
      <div class="content">
        <p class="content-title">Tips</p>
        <br>If you log in using firmiana, you can easily process the data.
        <br>If you log in using Wechat, you must make sure that your Wechat account is bound to keyanjun.
        <br>If you use visitor login, then we will not provide more complete services.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogIn"
};
</script>


<style lang="scss" scoped>
.LogIn {
  display: flex;
  justify-content: center;
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #ffffff;
    padding: 30px;
    border-radius: 5px;
    .left-title {
      width: 300px;
      text-align: start;
      margin-bottom: 30px;
    }
    button {
      height: 45px;
      width: 300px;
      outline: none;
      border: none;
      border-radius: 5px;
      margin-bottom: 15px;
      text-align: center;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      img {
        height: 25px;
        width: 25px;
      }
    }
    .firmiana {
      background: #bc2f1a;
    }
    .wechat {
      background: #00ad19;
    }
  }
  .right {
    height: 200px;
    border-radius: 5px;
    width: 300px;
    margin-top: 12px;
    .right-bg {
      overflow: hidden;
      z-index: 1;
      background: #385b83;
      opacity: 0.6;
      padding: 20px;
      z-index: 8;
      position: absolute;
      width: 300px;
      height: 240px;
    }
    .content {
      .content-title {
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        margin: 10px 0 0 0;
      }
      color: #d1d1d1;
      position: absolute;
      z-index: 9;
      width: 300px;
      padding: 20px;
    }
  }
}
</style>

