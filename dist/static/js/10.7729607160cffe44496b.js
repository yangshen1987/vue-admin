webpackJsonp([10],{"5cWz":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={data:function(){return{numberValidateForm:{id:"",region:""},tableData:[],state:!1,Page:1,total:1,PageSize:0,status:1}},methods:{sortChange:function(t,e,a){console.log(t+"-"+t.prop+"-"+t.order);var o=0;switch(t.prop){case"Id":o=1;break;case"StartTime":o=3;break;case"EndTime":o=5}"ascending"===t.order&&(o+=1);this.status=o,this.getuserList(this.page,o)},getuserList:function(t){console.log(t);var e=this;e.Page=t,e.$http.get("http://admin.yiyougugame.com:8080/v1/object/getgonggao?page="+e.Page+"&status="+e.status).then(function(t){200===t.code&&(e.tableData=t.data.List,e.total=t.data.TotalCount,e.PageSize=t.data.PageSize)})},getFirstList:function(){var t=this;t.$http.get("http://admin.yiyougugame.com:8080/v1/object/getgonggao?page=1&status=1").then(function(e){200===e.code&&(t.tableData=e.data.List,t.total=e.data.TotalCount,t.PageSize=e.data.PageSize)})},handleUpdate:function(t){window.sessionStorage.setItem("tag_id",t.Id),this.$router.push({name:"updategonggao"})},handleDel:function(t){var e=this;e.$http.post("http://admin.yiyougugame.com:8080/v1/object/delgonggao?id="+t.Id).then(function(t){200===t.code?(e.$message({message:"操作成功",type:"success"}),e.getFirstList()):e.$message({message:"操作失败",type:"warning"})})},handleAdd:function(t){this.$router.push({name:"addgonggao"})},feng:function(t){var e=this;e.$http.get("http://admin.yiyougugame.com:8080/v1/object/updateStatus?id="+t).then(function(t){200===t.code?e.$message({message:"操作成功",type:"success"}):e.$message({message:"操作失败",type:"warning"})})},onSubmit:function(){var t=this;t.$http.get("http://admin.yiyougugame.com:8080/v1/user/getgonggaoone?id="+t.numberValidateForm.id).then(function(e){200===e.code?(t.$message({message:"操作成功",type:"success"}),t.tableData=e.data.List,t.total=e.data.TotalCount,t.PageSize=e.data.PageSize):t.$message({message:"操作失败",type:"warning"})})},resetForm:function(t){this.$refs[t].resetFields()}},created:function(){this.getFirstList()}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body"},[a("div",{staticClass:"page-header"},[a("h1",{staticClass:"page-title"},[t._v("Table表格数据")]),t._v(" "),a("el-breadcrumb",[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",[t._v("Table表格数据")])],1)],1),t._v(" "),a("div",{staticClass:"box"},[a("el-form",{ref:"numberValidateForm",staticClass:"demo-ruleForm",attrs:{model:t.numberValidateForm,"label-width":"100px",inline:!0}},[a("el-form-item",{attrs:{label:"id",prop:"id",rules:[{required:!0,message:"id不能为空"},{type:"number",message:"id必须为数字值"}]}},[a("el-input",{attrs:{type:"id",autocomplete:"off"},model:{value:t.numberValidateForm.id,callback:function(e){t.$set(t.numberValidateForm,"id",t._n(e))},expression:"numberValidateForm.id"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.onSubmit()}}},[t._v("提交")]),t._v(" "),a("el-button",{on:{click:function(e){t.resetForm("numberValidateForm")}}},[t._v("重置")])],1),t._v(" "),a("div",{staticStyle:{float:"right"}},[a("router-link",{attrs:{to:"/addgonggao"}},[a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"}},[t._v("新增")])],1)],1)],1),t._v(" "),a("el-table",{attrs:{data:t.tableData,"default-sort":{prop:"StartTime",order:"descending"}},on:{"sort-change":t.sortChange}},[a("el-table-column",{attrs:{label:"ID",prop:"Id",sortable:"custom",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{label:"开始时间",sortable:"custom",prop:"StartTime"}}),t._v(" "),a("el-table-column",{attrs:{label:"结束时间",sortable:"custom",prop:"EndTime"}}),t._v(" "),a("el-table-column",{attrs:{label:"状态",prop:"Status",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"inactive-value":0,"active-value":1},on:{change:function(a){t.feng(e.row.Id)}},model:{value:e.row.Status,callback:function(a){t.$set(e.row,"Status",a)},expression:"scope.row.Status"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",sortable:"custom",prop:"Id"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleUpdate(e.row)}}},[t._v("编辑")]),t._v("/\n                          "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleDel(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:this.total>5,expression:"this.total>5"}],staticStyle:{float:"right",padding:"20px 0"},attrs:{"current-page":t.Page,"page-size":t.PageSize,total:t.total,background:"",layout:"total, prev, pager, next"},on:{"current-change":t.getuserList}})],1)])},staticRenderFns:[]};var i=a("VU/8")(o,s,!1,function(t){a("jB/S")},null,null);e.default=i.exports},"jB/S":function(t,e){}});
//# sourceMappingURL=10.7729607160cffe44496b.js.map