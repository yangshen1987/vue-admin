webpackJsonp([14],{SJN3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("woOf"),s=a.n(o),i={data:function(){return{form:{end_time:null,start_time:null,desc:"",id:""}}},methods:{onSubmit:function(){var t=this;console.log(t.form.start_time);var e={start_time:t.form.start_time,end_time:t.form.end_time,desc:t.form.desc,id:t.form.id};e.start_time=new Date(e.start_time).getTime(),e.end_time=new Date(e.end_time).getTime(),t.$http.post("http://admin.yiyougugame.com:8080/v1/object/updategonggaoone",e).then(function(e){200===e.code?(t.$message({message:"操作成功",type:"success"}),t.$router.push({path:"/sysgonggao"})):t.$message({message:"操作失败",type:"warning"})})},fetchData:function(){var t=window.sessionStorage.getItem("tag_id"),e=this;e.$http.get("http://admin.yiyougugame.com:8080/v1/object/getgonggaoone?id="+t).then(function(t){201===t.code?(e.loading=!1,e.$message({message:t.msg,type:"error"}),e.$router.push({path:"/sysgonggao"})):200===t.code&&(e.form.start_time=t.data.StartTime,e.form.end_time=t.data.EndTime,e.form.desc=t.data.Des,e.form.id=t.data.Id,console.log(e.form))}).catch(function(t){console.log(t)})},setTagsViewTitle:function(){var t="zh"===this.lang?"编辑文章":"Edit Article",e=s()({},this.tempRoute,{title:t+"-"+this.postForm.id});this.$store.dispatch("updateVisitedView",e)}},created:function(){this.fetchData()}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body"},[a("div",{staticClass:"page-header"},[a("h1",{staticClass:"page-title"},[t._v("Alert 提示")]),t._v(" "),a("el-breadcrumb",[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",[t._v("系统公告")])],1)],1),t._v(" "),a("m-box",[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"公告内容"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"公告时间"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",placeholder:"选择开始时间",format:"yyyy 年 MM 月 dd 日"},model:{value:t.form.start_time,callback:function(e){t.$set(t.form,"start_time",e)},expression:"form.start_time"}})],1),t._v(" "),a("el-col",{staticClass:"line",attrs:{span:2}},[t._v("-----------------")]),t._v(" "),a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",placeholder:"选择结束时间",format:"yyyy 年 MM 月 dd 日"},model:{value:t.form.end_time,callback:function(e){t.$set(t.form,"end_time",e)},expression:"form.end_time"}})],1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.onSubmit()}}},[t._v("修改")]),t._v(" "),a("el-button",[t._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]},m=a("VU/8")(i,r,!1,null,null,null);e.default=m.exports}});
//# sourceMappingURL=14.dcdf547fbbcd191b70c1.js.map