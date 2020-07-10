<!-- 学生成绩界面 -->
<template>
  <div>
    <h4>学生成绩</h4>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable @clear="getStudentList">
            <el-button slot="append" icon="el-icon-search" @click="getStudentList"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="showDialog=true">添加学生</el-button>
        </el-col>
        <el-col :span="4">
          <el-button type="success" @click="outputExcel">导出为Excel表格</el-button>
        </el-col>
      </el-row>
      <el-table :data="stuList" border stripe>
        <el-table-column label="学号" prop="id"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="性别" prop="sex"></el-table-column>
        <el-table-column label="学院" prop="department"></el-table-column>
        <el-table-column label="专业" prop="major"></el-table-column>
        <el-table-column label="年级" prop="grade"></el-table-column>
        <el-table-column label="班级" prop="class"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini" @click="editStu(scope.row)"></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="removeStu(scope.row)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        @current-change="handleCurrentChange"
        :page-size="queryInfo.pagesize"
        :current-page="queryInfo.currentPage"
        :total="total"
      ></el-pagination>
    </el-card>

    <!-- dialog -->
    <el-dialog title="添加学生信息" :visible.sync="showDialog" width="50%">
      <el-form
        :model="addForm"
        label-position="right"
        :rules="addFormRules"
        ref="addForm"
        label-width="100px"
      >
        <el-form-item label="姓名:">
          <el-row :gutter="20">
            <el-col :span="16">
              <el-input v-model="addForm.name" placeholder="请输入学生姓名"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item prop="sex">
          <el-radio v-model="addForm.sex" label="male">男</el-radio>
          <el-radio v-model="addForm.sex" label="female">女</el-radio>
        </el-form-item>
        <el-form-item label="学院:" filterable>
          <el-col :span="11">
            <el-select v-model="addForm.department" placeholder="请选择院校" @change="choseDep">
              <el-option
                v-for="item in depInfo"
                :key="item.id"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </el-col>

          <el-col :span="11">
            <el-select v-model="addForm.major" placeholder="请选择专业">
              <el-option v-for="item in majorInfo" :key="item" :label="item" :value="item"></el-option>
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="年级:">
          <el-col :span="11">
            <el-select v-model="addForm.grade" placeholder="请选择年级"></el-select>
          </el-col> 
          <el-col :span="11">
            <el-select v-model="addForm.class" placeholder="请选择班级">

            </el-select>
          </el-col>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="showDialog=false">取消</el-button>
        <el-button type="primary" @click="submitForm(addForm)">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { get, put, del } from "../network/request.js"
export default {
  created() {
    this.getStudentList()
    //获取学院信息
    this.getDepInfo()
  },
  data() {
    return {
      queryInfo: {
        query: "",
        currentPage: 1,
        pagesize: 2
      },
      stuList: [],
      depInfo: [],
      majorInfo: [],
      total: 0,
      showDialog: false,
      addForm: {
        name: "",
        sex: "male",
        department: "",
        major: "",
        grade: ""
      },
      addFormRules: {
        name: [{ required: true, message: "请输入学生姓名", trigger: "blur" }],
        sex: [{ required: true, message: "请选择性别", trigger: "blur" }]
      }
    }
  },

  methods: {
    outputExcel(){
      console.log("导出为Excel")
    },
    getDepInfo() {
      get("/getDepInfo")
        .then(res => {
          this.depInfo = res.data.list
        })
        .catch(err => {
          // this.$message.error(err)
          console.log(err)
        })
    },
    choseDep(info) {
      const dep = this.depInfo.filter(item => item.name === info)
      this.majorInfo = dep[0].major
    },
    getStudentList() {
      get("/students", this.queryInfo)
        .then(res => {
          this.stuList = res.data.list
          this.total = res.data.total
        })
        .catch(err => {
          //this.$message.error(err)
          console.log(err)
        })
    },
    editStu(info) {
      console.log(info)
    },
    removeStu(info) {
      this.$confirm("确定删除" + info.name + "学生信息", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
          del("/remove", info.id)
            .then(res => this.$message.success(res.data.msg))
            .catch(err => this.$message.error(err))
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已经取消删除"
          })
        })
    },
    handleCurrentChange(newPage) {
      this.queryInfo.currentPage = newPage
      this.getStudentList()
    },
    submitForm(form){
      console.log(111)
      console.log(form)
    }
  }
}
</script>
<style lang='less' scoped>
.el-card {
  margin: 0 20px;
  .el-table {
    margin-top: 15px;
  }
  .el-pagination {
    margin-top: 15px;
  }
}
.el-form {
  width: 90%;
   
}
</style>