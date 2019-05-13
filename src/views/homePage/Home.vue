<template>
  <div class="home">
    <div class="header">
      <div class="nav">
        <ul class="pubilc">
          <li class="h1">Firmiana Toolkit</li>
          <li/>
          <li>Home</li>
          <li>Public</li>
          <li>Show</li>
          <li>Contact us</li>
        </ul>
        <ul class="log">
          <router-link tag="li" class="log-in" to="/Login?id=0">Log in</router-link>
          <li class="line"></li>
          <router-link tag="li" class="sign-up" to="/LogIn?id=">Sign up</router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return { 
      // LogNumber: 0, 
      // SignNumber: 1 
    };
  }
};
</script>

<style lang="scss" scoped>
body {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.home {
  margin: 0 300px 0 300px;
}
.header {
  .nav {
    color: #808080;
    display: flex;
    justify-content: space-between;
    .pubilc {
      width: 700px;
      display: flex;
      list-style: none;
      padding: 0;
      justify-content: space-evenly;
      .h1 {
        color: #808080;
        font-size: 30px;
        font-weight: 650;
        line-height: 60px;
      }
      li {
        font-weight: 500;
        font-size: 18px;
        line-height: 60px;
      }
    }
    .log {
      display: flex;
      list-style: none;
      justify-content: space-evenly;
      font-weight: 600;
      font-size: 20px;
      line-height: 60px;
      li {
        text-shadow: 1px 1px 5px #808080;
        cursor: pointer;
      }
      .line {
        width: 2px;
        height: 25px;
        background: #808080;
        margin: 20px 15px 0 15px;
      }
    }
  }
}
</style>




