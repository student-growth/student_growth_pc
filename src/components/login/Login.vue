<!--  -->
<template>
  <div class="login_comp">
    <div class="login_box">
      <div class="avatar">
        <img src="@/assets/logo.png" />
      </div>
      <!-- 表单区域 -->
      <el-form ref="loginref" label-width="80px" class="login_form" :model="loginForm" :rules="loginRules"> 
        <el-form-item prop="username">
          <el-input placeholder="请输入工/学号" prefix-icon="el-icon-user" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input  placeholder="请输入密码"  type="password" prefix-icon="el-icon-lock" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item class="btn_group">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLogin">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {post,get} from '@/network/request.js'
export default {
  name: "Login",
  data() {
    return {
      loginForm:{
        username:'',
        password:''
      },
      loginRules:{
        username:[
          {required:true,message:"学/工号不能为空",trigger:'blur'}
        ],
        password:[
          {required:true,message:"密码不能位空",trigger:'blur'}
        ]
      }
    };
  },

  components: {},

  computed: {},

  methods: {
    resetLogin(){
      this.$refs.loginref.resetFields()
    },
    login(){
      this.$refs.loginref.validate(valid=>{
        if(!valid) return; 
        post('/login',this.loginForm).then(res=>{ 
           this.$message.success(res.data.msg)
           window.sessionStorage.setItem('token',res.data.token)
           this.$store.commit('updateUserInfo',this.loginForm.username)
           this.$router.push('/home')
        }).catch(err=>{
          this.$message.error(err)
        })
      })
    }
  }
};
</script>
<style lang='less' scoped>
.login_comp {
  background-color: #2d4d6d;
  height: 100vh;
  .login_box {
    width: 450px;
    height: 300px;
    background-color: white;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .avatar {
      height: 100px;
      width: 100px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      img {
        background-color: #eee;
        width: 100%;
        border-radius: 50%;
        height: 100%;
      }
    }
    .login_form {
      position: absolute;
      bottom: 0;
      width: 80%;
      bottom: 10px;
      box-sizing: content-box;
      .btn_group {
        display: flex;
        justify-content:space-evenly;
      }
    }
  }
}
</style>