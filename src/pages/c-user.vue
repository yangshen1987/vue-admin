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
        <el-table-column label="#"
                         type="index"></el-table-column>
        <el-table-column label="ID"
                         prop="id"
                         width="80"></el-table-column>
        <el-table-column label="等级"
                         prop="action"></el-table-column>
        <el-table-column label="用户名字"
                         prop="result"></el-table-column>
        <el-table-column label="用户创建时间"
                         prop="desctiption"></el-table-column>
        <el-table-column label="状态"
                         prop="state"
                         width="80">
          <template slot-scope="scope">
            <m-switch v-model="state"
                      type="primary"></m-switch>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background
                     layout="prev, pager, next"
                     :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      tableData: [{
        id: 1,
        action: 'dasdasd',
        result: 'dasdasd',
        desctiption: '1111111'
      }],
      state: false
    }
  },
  methods: {
    getuserList () {
      this.http.get(
        '/ihy/api/userlist'
      ).then(function (response) {
        this.tableData = response.data
        if (response.code === 200) {
          this.$message({
            messgae: response.msg,
            type: 'error'
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
