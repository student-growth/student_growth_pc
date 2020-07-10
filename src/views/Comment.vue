<!-- 辅导员评论 -->
<template>
  <div>
    <h4>辅导员评价</h4>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input type="text" placeholder="搜素关键字" clearable @clear="getComList">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">导出Excel</el-button>
        </el-col>
        <el-col :span="4">
          <el-button type="success">导入Excel</el-button>
        </el-col>
      </el-row>
      <el-table :data="datalist" stripe>
        <el-table-column label="学号" prop="id"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="班级" prop="grade"></el-table-column>
        <el-table-column label="品德素质">
          <template slot-scope="scope">
            <el-popover width="160" v-model="mortalvisible">
              <el-alert
                :closable="false"
                :title="'当前分数:'+scope.row.moral"
                type="success"
                center
                show-icon
              ></el-alert>
              <el-input
                @change="changeMoral(scope.row)"
                clearable
                v-model="moralscore"
                placeholder="评分范围:[1~100]"
              ></el-input>
              <div class="popover_btn">
                <el-button size="mini" plain type="info" @click="mortalvisible = false">取消</el-button>
                <el-button type="primary" plain size="mini" @click="visible = false">确定</el-button>
              </div>
              <el-button slot="reference" plain type="primary" size="mini">评分</el-button>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="心理素质">
          <template slot-scope="scope">
            <el-popover width="160" v-model="mentalvisible">
              <el-alert
                :closable="false"
                :title="'当前分数:'+scope.row.mental" 
                center
                show-icon
              ></el-alert>
              <el-input
                @change="changeMental(scope.row)"
                v-model="mentalscore"
                clearable
                placeholder="评分范围:[1~100]"
              ></el-input>
              <div class="popover_btn">
                <el-button size="mini" plain type="info" @click="mentalvisible=false">取消</el-button>
                <el-button size="mini" plain type="primary">确定</el-button>
              </div>
              <el-button slot="reference" plain size="mini" type="primary">评分</el-button>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination>
        <!-- todo -->
      </el-pagination>
    </el-card>
    
  </div>
</template>

<script>
export default {
  name:"Comment",
  data() {
    return {
      commentForm: {},
      mortalvisible: false,
      mentalvisible: false,
      moralscore: "",
      mentalscore: "",
      datalist: [
        { id: 0, name: "leesure", grade: "2015", moral: 80, mental: 90 }
      ]
    }
  },

  components: {},

  computed: {},

  methods: {
    getComList(e) {
      console.log(e)
    },
    //修改品德素质分数
    changeMoral(info) {
      console.log(info)
    },
    //修改心理素质分数
    changeMental(info) {
      console.log(info)
    }
  }
}
</script>
<style lang='less' scoped>
.popover_btn {
  text-align: right;
  margin-top: 10px;
}
</style>