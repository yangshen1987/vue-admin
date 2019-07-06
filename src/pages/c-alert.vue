<template>
<div class="page-body">
  <div class="page-header">
    <h1 class="page-title">Alert 提示</h1>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item >系统公告</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  
  <m-box>
   <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="公告内容">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
    <el-form-item label="公告时间">
    <el-col :span="11">
      <el-date-picker type="datetime" placeholder="选择开始时间" v-model="form.start_time" style="width: 100%;" default-time="00:00:00"></el-date-picker>
    </el-col>
     <el-col class="line" :span="2">-----------------</el-col>
    <el-col :span="11">
      <el-date-picker type="datetime" placeholder="选择结束时间" v-model="form.end_time" style="width: 100%;" default-time="00:00:00"></el-date-picker>
    </el-col>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit()">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
  </m-box>

</div>
</template>
<script>
  export default {
    data () {
      return {
        form: {
          end_time: '',
          start_time: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit () {
        var that = this
        let data = {
          'start_time': that.form.start_time,
          'end_time': that.form.end_time,
          'desc': that.form.desc
        }
        data.start_time = new Date(data.start_time).getTime()
        data.end_time = new Date(data.end_time).getTime()
        that.$http.post(
          'http://admin.yiyougugame.com:8080/v1/object/setgonggao', data
        ).then(function (response) {
          if (response.code === 200) {
            that.$message({
              message: '操作成功',
              type: 'success'
            })
            that.$router.push({ path: '/sysgonggao' })
          } else {
            that.$message({
              message: '操作失败',
              type: 'warning'
            })
          }
        })
      }
    }
  }
</script>