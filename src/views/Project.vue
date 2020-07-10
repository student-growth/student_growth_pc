<!-- 成果申请项目管理 -->
<template>
  <div>
     <h4>事项管理</h4>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input @change="search">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
 

  methods: {
    search(){

    }
  }
}

</script>
<style lang='less' scoped>
</style>