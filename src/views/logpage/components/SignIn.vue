<template>
  <div class="SignIn">
    <div class="left">
      
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
  name: "SignIn",
};

</script>

<style lang="scss" scoped>
.SignIn {
  display: flex;
  justify-content: center;
  .left {
    background: #ffffff;
    padding: 30px;
    border-radius: 5px;
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
      height: 262px;
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
