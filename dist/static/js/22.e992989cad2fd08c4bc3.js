webpackJsonp([22],{qtd8:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{id_card:"",real_name:""}},created:function(){},methods:{Save:function(){var t=this;return this.real_name?this.id_card?/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.id_card)?void this.$axios({method:"post",url:"CustomerIDCard/AddNewIDCard",data:{real_name:this.real_name,id_card:this.id_card}}).then(function(e){"0"==e.data.res_status_code?t.$router.back():t.$message({showClose:!0,message:e.data.res_message,type:"error"})}).catch(function(t){console.log(t)}):(this.$message("身份证格式不对"),!1):(this.$message("请填写身份证号"),!1):(this.$message("请填写姓名"),!1)},goback:function(){this.$router.back()}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-row",{attrs:{gutter:0}},[s("el-col",{attrs:{xs:0,sm:1,md:3,lg:5,xl:6}},[t._v("  ")]),t._v(" "),s("el-col",{attrs:{xs:24,sm:22,md:18,lg:14,xl:12}},[s("div",{staticClass:"header pd10_20 font-size15 bold"},[s("span",[t._v("新增身份证")])])]),t._v(" "),s("el-col",{attrs:{xs:0,sm:1,md:3,lg:5,xl:6}},[t._v(" ")])],1),t._v(" "),s("el-row",{staticClass:"mg20_0 ",attrs:{gutter:0}},[s("el-col",{attrs:{xs:0,sm:1,md:3,lg:5,xl:6}},[t._v("  ")]),t._v(" "),s("el-col",{staticClass:"bd",attrs:{xs:24,sm:22,md:18,lg:14,xl:12}},[s("el-form",{ref:"form",staticClass:"mg20_0",staticStyle:{width:"500px"},attrs:{"label-width":"120px"}},[s("el-form-item",{attrs:{label:"姓名",required:!0}},[s("el-input",{model:{value:t.real_name,callback:function(e){t.real_name=e},expression:"real_name"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"身份证号",required:!0}},[s("el-input",{model:{value:t.id_card,callback:function(e){t.id_card=e},expression:"id_card"}})],1),t._v(" "),s("el-form-item",[s("el-button",{staticClass:"common_button",on:{click:function(e){t.Save()}}},[t._v("保存")]),t._v(" "),s("el-button",{on:{click:function(e){t.goback()}}},[t._v("取消")])],1)],1)],1),t._v(" "),s("el-col",{attrs:{xs:0,sm:1,md:3,lg:5,xl:6}},[t._v(" ")])],1)],1)},staticRenderFns:[]};var r=s("VU/8")(a,l,!1,function(t){s("s9Xy")},null,null);e.default=r.exports},s9Xy:function(t,e){}});
//# sourceMappingURL=22.e992989cad2fd08c4bc3.js.map