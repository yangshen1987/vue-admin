<template>
  <div class="page-body">
    <div class="page-header">
      <h1 class="page-title">Table表格数据</h1>
      <el-breadcrumb>
        <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
        <el-breadcrumb-item>Table表格数据</el-breadcrumb-item>
      </el-breadcrumb>
      
    </div>

    <div class="box">
<el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm" :inline="true">
  <el-form-item
    label="id"
    prop="id"
    :rules="[
      { required: true, message: 'id不能为空'},
      { type: 'number', message: 'id必须为数字值'}
    ]"
  >
    <el-input type="id" v-model.number="numberValidateForm.id" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit()">提交</el-button>
    <el-button @click="resetForm('numberValidateForm')">重置</el-button>
  </el-form-item>
  <div style="float:right;">
    <router-link to="/addgonggao">
        <el-button class="filter-item" type="primary" icon="el-icon-edit">新增</el-button>
      </router-link>
      </div>
</el-form>
      <el-table :data="tableData"
                @sort-change="sortChange"
                :default-sort="{prop: 'StartTime', order: 'descending'}">
        <el-table-column label="ID"
                         prop="Id"
                         sortable="custom"
                         width="80"></el-table-column>
        <el-table-column label="开始时间"
                         sortable="custom"
                         prop="StartTime"></el-table-column>
        <el-table-column label="结束时间"
                         sortable="custom"
                         prop="EndTime"></el-table-column>
        <el-table-column label="状态"
                         prop="Status"
                         width="80">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.Status"
                       :inactive-value="0"
                       :active-value="1"
                       @change="feng(scope.row.Id)">

            </el-switch>
          </template>
        </el-table-column>
                <el-table-column label="操作"
                         sortable="custom"
                         prop="Id">
                         <template slot-scope="scope">
                          <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">编辑</el-button>/
                          <el-button type="primary" size="mini" @click="handleDel(scope.row)">删除</el-button>
                         </template>
                         </el-table-column>
      </el-table>
      <el-pagination v-show="this.total>5"
                     @current-change="getuserList"
                     :current-page="Page"
                     :page-size="PageSize"
                     :total="total"
                     background
                     layout="total, prev, pager, next"
                     style="float:right;padding:20px 0">
      </el-pagination>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      numberValidateForm: {
        id: '',
        region: ''
      },
      tableData: [],
      state: false,
      Page: 1,
      total: 1,
      PageSize: 0,
      status: 1
    }
  },
  methods: {
    sortChange (column, prop, order) {
      console.log(column + '-' + column.prop + '-' + column.order)
      // eslint-disable-next-line no-unused-vars
      let col = 0
      switch (column.prop) {
        case 'Id':
          col = 1
          break
        case 'StartTime':
          col = 3
          break
        case 'EndTime':
          col = 5
          break
      }
      if (column.order === 'ascending') {
        col += 1
      }

      var that = this
      that.status = col
      that.getuserList(that.page, col)
    },
    getuserList (a) {
      console.log(a)
      var that = this
      that.Page = a
      that.$http.get(
        'http://49.234.59.40:18081/v1/object/getgonggao?page=' + that.Page + '&status=' + that.status
      ).then(function (response) {
        if (response.code === 200) {
          that.tableData = response.data.List
          that.total = response.data.TotalCount
          that.PageSize = response.data.PageSize
        }
      })
    },
    getFirstList () {
      var that = this
      that.$http.get(
        'http://49.234.59.40:18081/v1/object/getgonggao?page=1&status=1'
      ).then(function (response) {
        if (response.code === 200) {
          that.tableData = response.data.List
          that.total = response.data.TotalCount
          that.PageSize = response.data.PageSize
        }
      })
    },
    handleUpdate (row) {
      var that = this
      window.sessionStorage.setItem('tag_id', row.Id)
      that.$router.push({
        name: `updategonggao`
      })
    },
    handleDel (row) {
      var that = this
      that.$http.post(
        'http://49.234.59.40:18081/v1/object/delgonggao?id=' + row.Id
      ).then(function (response) {
        if (response.code === 200) {
          that.$message({
            message: '操作成功',
            type: 'success'
          })
          that.getFirstList()
        } else {
          that.$message({
            message: '操作失败',
            type: 'warning'
          })
        }
      })
    },
    handleAdd (row) {
      var that = this
      that.$router.push({
        name: `addgonggao`
      })
    },
    feng (id) {
      var that = this
      that.$http.get(
        'http://49.234.59.40:18081/v1/object/updateStatus?id=' + id
      ).then(function (response) {
        if (response.code === 200) {
          that.$message({
            message: '操作成功',
            type: 'success'
          })
        } else {
          that.$message({
            message: '操作失败',
            type: 'warning'
          })
        }
      })
    },
    onSubmit () {
      var that = this
      that.$http.get(
        'http://49.234.59.40:18081/v1/user/getgonggaoone?id=' + that.numberValidateForm.id
      ).then(function (response) {
        if (response.code === 200) {
          that.$message({
            message: '操作成功',
            type: 'success'
          })
          that.tableData = response.data.List
          that.total = response.data.TotalCount
          that.PageSize = response.data.PageSize
        } else {
          that.$message({
            message: '操作失败',
            type: 'warning'
          })
        }
      })
    },
    resetForm (formName) {
      var that = this
      that.$refs[formName].resetFields()
    }
  },
  created () {
    this.getFirstList()
  }

}
</script>
<style>
.box-body {
  width: 100%;
  overflow: auto;
}
</style>
