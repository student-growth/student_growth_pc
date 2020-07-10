<!-- 权限管理 -->
<template>
  <div>
    <h4>权限管理</h4>
    <el-card>
      <el-tabs v-model="activeName" type="card" >
        <el-tab-pane label="角色管理" name="first">
          <el-button plain type="primary"> 新增角色</el-button>
        </el-tab-pane>
        <el-tab-pane label="成员管理" name="second">
          <el-button plain type="primary">新增成员</el-button>  
        </el-tab-pane> 
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Authority",
  data() {
    return {
      activeName:'first'
    }
  },

  components: {},

  computed: {},

  methods: {}
}
</script>
<style lang='less' scoped>
</style>