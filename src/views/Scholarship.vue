<!-- 奖学金管理界面 -->
<template>
  <div>
    <h4>奖学金管理</h4>
    <el-card>
      <el-tabs v-model="activeName" >
        <el-tab-pane label="综测查询" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="候选奖学金名单" name="second">
          <el-button type="primary">导出名单</el-button>
        </el-tab-pane>
        <el-tab-pane label="奖学金审核" name="third">
          
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "Scholarship",
  data() {
    return {
      activeName:"first"
    }
  },

  components: {},

  computed: {},

  methods: {}
}
</script>
<style lang='less' scoped>
</style>