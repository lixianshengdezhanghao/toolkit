<template>
  <div class="dataSet">
    <div class="content">
      <div class="title">
        <img class="logo" src="../../assets/icon/logo.png" alt>
        <div class="user-name">lixianshengdezhanghao</div>
      </div>
      <div class="nav">
        <div class="line"></div>
        <div class="tabs">
          <!-- <ul>
            <li>Data set</li>
            <li>Processing data</li>
            <li>Compare</li>
            <li>Analysis</li>
            <li>Your team</li>
          </ul>-->
          <button v-bind:class="{ active: isActive }" v-for="tab of tabs" @click="toggleTab(tab)" :key="tab">{{ tab }}</button>
          <component :is="currentTab" keep-alive></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataSet from "./components/DataSet";
import ProcessingData from "./components/ProcessingData";
import Compare from "./components/Compare";
import Analysis from "./components/Analysis";
import YourTeam from "./components/YourTeam";

export default {
  name: "dataSet",
  data() {
    return {
      // tabs: ["Home", "User", "News"],
      tabs: ["DataSet", "ProcessingData", "Compare", "Analysis", "YourTeam"],
      currentTab: "DataSet",
      isActive:true,
    };
  },
  // computed: {
  //   currentTab() {
  //     return "tabs-" + this.currentTab.toLowerCase();
  //   }
  // },
  components: {
    DataSet,
    ProcessingData,
    Compare,
    Analysis,
    YourTeam
  },
  methods: {
    toggleTab(tab) {
      this.currentTab = tab;
      console.log(this.currentTab)
      this.isActive = false
    }
  }
};
</script>

<style lang="scss" scoped>
.dataSet {
  background: rgb(0, 134, 123);
  .content {
    margin: 0 200px 0 200px;
    .title {
      padding: 30px 0 20px 0;
      display: flex;
      align-items: center;
      .logo {
        height: 45px;
        width: 45px;
        margin-right: 40px;
      }
      .user-name {
        color: #ffffff;
        font-size: 30px;
        font-weight: 600;
      }
    }
    .nav {
      padding: 10px 0 10px 0;
      height: 300px;
      .line {
        background-image: linear-gradient(
          -90deg,
          rgba(255, 255, 255, 0) 0,
          #fff 5%,
          #fff 90%,
          rgba(255, 255, 255, 0) 100%
        );
        height: 2px;
        opacity: 0.3;
        width: 100%;
      }
      .tabs {
        margin-top: 20px;
        button {
          border: none;
          background: none;
          outline: none;
          font-size: 18px;
          font-weight: 500;
          margin-right: 30px;
          cursor: pointer;
        }
        .active{
          color: #c2c2c2;
        }
        .isActive{
          color: #fff;
        }
      }
    }
  }
}
</style>

