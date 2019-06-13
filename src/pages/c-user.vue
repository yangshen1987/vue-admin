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
      <el-table :data="tableData">
        <el-table-column label="ID"
                         prop="Id"
                         width="80"></el-table-column>
        <el-table-column label="用户名字"
                         prop="UserName"></el-table-column>
        <el-table-column label="账户"
                         prop="Username"></el-table-column>
        <el-table-column label="状态"
                         prop="Status"
                         width="80">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.Status"
                       :inactive-value="1"
                       :active-value="2"
                       @change="feng(scope.row.Id)">

            </el-switch>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background
                     layout="prev, pager, next"
                     :page-count="totalPage"
                     :current-page="page"
                     @current-change="getuserList">
      </el-pagination>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      tableData: [],
      state: false,
      totalPage: 0,
      page: 1
    }
  },
  methods: {
    getuserList (page = 1) {
      var that = this
      that.$http.get(
        'http://admin.yiyougugame.com:8080/v1/user/user/list?page=' + page
      ).then(function (response) {
        if (response.code === 200) {
          that.tableData = response.data.List
          that.totalPage = response.data.TotalPage
        }
      })
    },
    feng (id) {
      var that = this
      that.$http.get(
        'http://admin.yiyougugame.com:8080/v1/user/user/feng?id=' + id
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
    }
  },
  created () {
    this.getuserList()
  }
}
</script>
<style>
.box-body {
  width: 100%;
  overflow: auto;
}
</style>
