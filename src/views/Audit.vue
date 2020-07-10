<!-- 成果审核界面 -->
<template>
  <div>
    <h4>成果审核</h4>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入关键字" v-model="queryInfo.query">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">导出Excel</el-button>
        </el-col>
      </el-row>

      <el-table :data="auditlist" stripe>
        <el-table-column fixed label="学号" prop="id"></el-table-column>
        <el-table-column fixed label="姓名" prop="name"></el-table-column>
        <el-table-column fixed label="详情">
          <template slot-scope="scope">
             <el-button type="text" @click="showDetail(scope.row)">查看详细</el-button>
          </template>
        </el-table-column>
        <el-table-column label="班级" prop="grade"></el-table-column>
        <el-table-column label="类别" prop="category"></el-table-column>
        <el-table-column label="事项" prop="event"></el-table-column>
        <el-table-column label="名称" prop="eventName"></el-table-column>
        <el-table-column label="级别" prop="level"></el-table-column>
        <el-table-column label="日期" prop="date"></el-table-column>
        <el-table-column label="图片" prop="img">

        </el-table-column>
        <el-table-column label="说明" prop="explain"></el-table-column>
        <el-table-column fixed="right" label="审核" prop="state">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.state===0" type="info" effect="dark">未审核</el-tag>
            <el-tag v-else-if="scope.row.state===1" type="success" effect="dark">通过</el-tag>
            <el-tag v-else-if="scope.row.state===2" type="danger" effect="dark">未通过</el-tag>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="分数" prop="score"></el-table-column>
        <el-table-column fixed="right" label="备注" prop="comment"></el-table-column>
      </el-table>
      <el-pagination></el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Audit",
  data() {
    return {
      queryInfo: {
        query: "",
        pageSize:10,
        pageNum:1,
        currentPage:1
      },
      auditlist:[
        {id:"001",name:"Leesure",grade:"2015级3班",category:"研究创新",event:"学科竞赛",eventName:"物理竞赛",level:"省级一级",date:"2020-07-06",img:"a.png",explain:"这是测试",state:1,score:90,comment:"未通过"}
      ]
    }
  },

  components: {},

  computed: {},

  methods: {
    showDetail(info){
      console.log(info)
    }
  }
}
</script>
<style lang='less' scoped>
</style>