webpackJsonp([29],{KV2g:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{addresslist:[]}},created:function(){this.getAddressList()},methods:{getAddressList:function(){var t=this;this.$axios({method:"get",url:"CustomerAddress/AddressList"}).then(function(e){"0"==e.data.res_status_code?t.addresslist=e.data.res_content:t.$message({showClose:!0,message:e.data.res_message,type:"error"})}).catch(function(t){console.log(t)})},SetDefaultAddress:function(t){var e=this;this.$axios({method:"post",url:"CustomerAddress/SetDefaultAddress",data:{id:t.id}}).then(function(t){"0"==t.data.res_status_code?(e.getAddressList(),e.$message({showClose:!0,message:"设置成功",type:"success"})):e.$message({showClose:!0,message:t.data.res_message,type:"error"})}).catch(function(t){console.log(t)})},handleDelete:function(t){var e=this;this.$confirm("确认要删除该地址吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$axios({method:"post",url:"CustomerAddress/DeleteAddress",data:{id:t.id}}).then(function(t){"0"==t.data.res_status_code?(e.$message({showClose:!0,message:"删除成功",type:"success"}),e.getAddressList()):e.$message({showClose:!0,message:t.data.res_message,type:"error"})}).catch(function(t){console.log(t)})}).catch(function(){})},handleEdit:function(t){this.$router.push({name:"EditAddress",query:{id:t.id,type:"edit"}})},addaddress:function(){this.$router.push({name:"EditAddress",query:{type:"add"}})}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-row",{attrs:{gutter:0}},[s("el-col",{attrs:{xs:0,sm:1,md:3,lg:5,xl:6}},[t._v("  ")]),t._v(" "),s("el-col",{attrs:{xs:24,sm:22,md:18,lg:14,xl:12}},[s("div",{staticClass:"header pd10_20 font-size15 bold"},[s("span",[t._v("我的地址")]),t._v(" "),s("el-button",{staticClass:"right commonbg white addaddress pd10_20",attrs:{size:"mini"},on:{click:function(e){t.addaddress()}}},[t._v("新增地址")])],1)]),t._v(" "),s("el-col",{attrs:{xs:0,sm:1,md:3,lg:5,xl:6}},[t._v(" ")])],1),t._v(" "),s("el-row",{staticClass:"mg20_0",attrs:{gutter:0}},[s("el-col",{attrs:{xs:0,sm:1,md:3,lg:5,xl:6}},[t._v("  ")]),t._v(" "),s("el-col",{attrs:{xs:24,sm:22,md:18,lg:14,xl:12}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.addresslist,border:""}},[s("el-table-column",{attrs:{fixed:"left",label:"是否为默认",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.is_default?s("el-checkbox",{staticClass:"commoncolor",attrs:{checked:"",disabled:""}},[t._v("默认")]):s("el-button",{staticClass:"commoncolor defaultbtn",attrs:{type:"text"},on:{click:function(s){t.SetDefaultAddress(e.row)}}},[t._v("设为默认")])]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"receiver_name",label:"收件人",width:"100"}}),t._v(" "),s("el-table-column",{attrs:{prop:"province",label:"省份",width:"100"}}),t._v(" "),s("el-table-column",{attrs:{prop:"city",label:"市区",width:"100"}}),t._v(" "),s("el-table-column",{attrs:{prop:"district",label:"区域",width:"100"}}),t._v(" "),s("el-table-column",{attrs:{prop:"address",label:"详细地址",width:"180"}}),t._v(" "),s("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{size:"mini",icon:"el-icon-edit"},on:{click:function(s){t.handleEdit(e.row)}}},[t._v("编辑")]),t._v(" "),s("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(s){t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),s("el-col",{attrs:{xs:0,sm:1,md:3,lg:5,xl:6}},[t._v(" ")])],1)],1)},staticRenderFns:[]};var o=s("VU/8")(a,l,!1,function(t){s("zrUp")},null,null);e.default=o.exports},zrUp:function(t,e){}});
//# sourceMappingURL=29.3a703071276a53164b17.js.map