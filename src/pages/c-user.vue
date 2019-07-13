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
    label="用户id"
    prop="user_id"
    :rules="[
      { required: true, message: '用户id不能为空'},
      { type: 'number', message: '用户id必须为数字值'}
    ]"
  >
    <el-input type="user_id" v-model.number="numberValidateForm.user_id" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="游戏服务器"  prop="region">
    <el-select v-model="numberValidateForm.region" placeholder="游戏服务器">
      <el-option label="至尊仙界" value="game001"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit()">提交</el-button>
    <el-button @click="resetForm('numberValidateForm')">重置</el-button>
  </el-form-item>
</el-form>
      <el-table :data="tableData"
                @sort-change="sortChange"
                :default-sort="{prop: 'UserState', order: 'descending'}">
        <el-table-column label="ID"
                         prop="UserId"
                         sortable="custom"
                         width="80"></el-table-column>
        <el-table-column label="用户名字"
                         sortable="custom"
                         prop="UserName"></el-table-column>
        <el-table-column label="账户"
                         sortable="custom"
                         prop="Username"></el-table-column>
        <el-table-column label="境界等级"
                         sortable="custom"
                         prop="UserState"></el-table-column>
        <el-table-column label="肉身等级"
                         sortable="custom"
                         prop="UserRefining"></el-table-column>
        <el-table-column label="充值额度"
                         sortable="custom"
                         prop="Chongzhinum"></el-table-column>
        <el-table-column label="VIP等级"
                         sortable="custom"
                         prop="VipLevel"></el-table-column>
        <el-table-column label="灵玉等级"
                         sortable="custom"
                         prop="Lingyunum"></el-table-column>
        <el-table-column label="元宝数量"
                         sortable="custom"
                         prop="Yuanbaonum"></el-table-column>
        <el-table-column label="银两数量"
                         sortable="custom"
                         prop="Yinliangnum"></el-table-column>
        <el-table-column label="食物数量"
                         sortable="custom"
                         prop="Shiwunum"></el-table-column>
        <el-table-column label="木材数量"
                         sortable="custom"
                         prop="Mucainum"></el-table-column>
        <el-table-column label="药草数量"
                         sortable="custom"
                         prop="Caoyaonum"></el-table-column>
        <el-table-column label="精铁数量"
                         sortable="custom"
                         prop="Jingtienum"></el-table-column>
        <el-table-column label="封妖塔层"
                         sortable="custom"
                         prop="Fengyaota"></el-table-column>
        <el-table-column label="注册时间"
                         sortable="custom"
                         prop="CreatedTime"></el-table-column>

        <el-table-column label="状态"
                         prop="Status"
                         width="80">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.Status"
                       :inactive-value="1"
                       :active-value="2"
                       @change="feng(scope.row.UserId)">

            </el-switch>
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
        user_id: '',
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
        case 'UserState':
          col = 1
          break
        case 'UserRefining':
          col = 3
          break
        case 'Chongzhinum':
          col = 5
          break
        case 'VipLevel':
          col = 7
          break
        case 'Lingyunum':
          col = 9
          break
        case 'Yuanbaonum':
          col = 11
          break
        case 'Yinliangnum':
          col = 13
          break
        case 'Shiwunum':
          col = 15
          break
        case 'Mucainum':
          col = 17
          break
        case 'Caoyaonum':
          col = 19
          break
        case 'Jingtienum':
          col = 21
          break
        case 'Fengyaota':
          col = 23
          break
        case 'UserId':
          col = 25
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
        'http://49.234.59.40:18081/v1/user/user/list?page=' + that.Page + '&status=' + that.status
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
        'http://49.234.59.40:18081/v1/user/user/list?page=1&status=1'
      ).then(function (response) {
        if (response.code === 200) {
          that.tableData = response.data.List
          that.total = response.data.TotalCount
          that.PageSize = response.data.PageSize
        }
      })
    },
    feng (id) {
      var that = this
      that.$http.get(
        'http://49.234.59.40:18081/v1/user/user/feng?id=' + id
      ).then(function (response) {
        if (response.code === 200) {
          that.$message({
            message: '操作成功',
            type: 'success'
          })
        } else {
          that.$message({
            message: response.msg,
            type: 'warning'
          })
        }
      })
    },
    onSubmit () {
      var that = this
      that.$http.post(
        'http://49.234.59.40:18081/v1/user/getuser?user_id=' + that.numberValidateForm.user_id
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
            message: response.msg,
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
