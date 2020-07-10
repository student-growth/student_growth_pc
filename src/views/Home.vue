<template>
  <el-container class="home">
    <!-- header -->
    <el-header>
      <div>
        <span>学生成长后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="collapse?'56px':'300px'">
        <div class="toggle-btn" @click="toggleClick">|||</div> 
        <el-menu
          :collapse="collapse"
          :collapse-transition="false"
          background-color="#353b48"
          text-color="#fff"
          active-text-color="#00a8ff"
          router
        >
          <el-menu-item v-for="item in menuList" :key="item.id" :index="item.path">
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import path from "@/path.js"
export default {
  name: "Home",
  created() {
    //生命周期函数
  },
  data() {
    
    return {
      menuList: path,
      collapse: false,
      active: 0
    }
  },
  components: {},
  methods: {
    logout() {
      window.sessionStorage.removeItem("token")
      this.$router.replace("/login")
    },
    menuItemClick(e) {},
    toggleClick() {
      this.collapse = !this.collapse
    }
  }
}
</script>
<style lang="less" >
.home {
  height: 100%;
  .el-header {
    padding: 10px 20px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    background-color: #353b48;
    font-size: 1.2em;
    letter-spacing: 0.1em;
  }
  .el-aside {
    overflow: hidden;
     background-color: #353b48;
    .toggle-btn {
      background-color: #718093;
      font-size: 0.8em;
      padding: 5px 0;
      line-height: 2em;
      text-align: center;
      letter-spacing: 0.2em;
      cursor: pointer;
      color: white;
    } 
    .el-menu {
      border: none;
     
     .el-menu-item{
       font-size: 1.1em;
       padding: 2px;
     }
    }
  }
  .el-main {
    background-color:rgba(223, 230, 233,0.5);
  }
}
</style>
