webpackJsonp([23],{EzFo:function(e,t){},ndWP:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={data:function(){return{order_no:this.$route.query.order_no,order:{},package_list:[],IDCardList:[],dialogidcard:!1}},components:{OrderCommodity:r("MOsn").a},created:function(){this.getOrderDetail(),this.getIDCardList()},methods:{getOrderDetail:function(){var e=this;this.$axios({method:"get",url:"Order/OrderDetail",params:{order_no:this.order_no}}).then(function(t){"0"==t.data.res_status_code?(e.order=t.data.res_content.order,e.package_list=t.data.res_content.package_list):e.$message({showClose:!0,message:t.data.res_message,type:"error"})}).catch(function(e){console.log(e)})},getIDCardList:function(){var e=this;this.$axios({method:"get",url:"CustomerIDCard/IDCardList"}).then(function(t){"0"==t.data.res_status_code?e.IDCardList=t.data.res_content:e.$message({showClose:!0,message:t.data.res_message,type:"error"})}).catch(function(e){console.log(e)})},chooseIdcard:function(e){var t=this;this.order.id_card=e.id_card,this.order.real_name=e.real_name,this.$axios({method:"post",url:"Order/UpdateOrderCustInfo",data:{order_no:this.order_no,id_card:e.id_card,real_name:e.real_name}}).then(function(e){"0"==e.data.res_status_code?(t.dialogidcard=!1,t.$message({showClose:!0,message:"修改成功",type:"success"}),t.getOrderDetail()):(t.$message({showClose:!0,message:e.data.res_message,type:"error"}),t.getOrderDetail())}).catch(function(e){console.log(e)})},payOrder:function(e){this.$router.push({name:"ConfirmOrder",query:{orderid:e}})},cancelOrder:function(e){var t=this;this.$confirm("确定要取消订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$axios({method:"post",url:"Order/CancelOrder",data:{order_no:e}}).then(function(e){"0"==e.data.res_status_code?(t.$message({type:"success",message:"已取消订单!"}),t.getOrderDetail()):t.$message({showClose:!0,message:e.data.res_message,type:"error"})}).catch(function(e){console.log(e)})}).catch(function(){t.$message({type:"info",message:"已取消操作"})})},refundOrder:function(e){var t=this;this.$confirm("是否确认退款?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$axios({method:"post",url:"Refund/CreateRefundOrder",data:{order_no:e}}).then(function(e){"0"==e.data.res_status_code?(t.$message({type:"success",message:"已申请确认退款!"}),t.getOrderDetail()):t.$message({showClose:!0,message:e.data.res_message,type:"error"})}).catch(function(e){console.log(e)})}).catch(function(){t.$message({type:"info",message:"已取消操作"})})},checkLogistics:function(e){this.$router.push({name:"ConfirmOrder",query:{orderid:e}})},confirmOrder:function(e){var t=this;this.$confirm("是否确认收货?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$axios({method:"post",url:"Order/ConfirmOrder",data:{order_no:e}}).then(function(e){"0"==e.data.res_status_code?(t.$message({type:"success",message:"已确认收货!"}),t.getOrderDetail()):t.$message({showClose:!0,message:e.data.res_message,type:"error"})}).catch(function(e){console.log(e)})}).catch(function(){t.$message({type:"info",message:"已取消操作"})})},deleteOrder:function(e){var t=this;this.$confirm("是否删除订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$axios({method:"post",url:"Order/DeleteOrder",data:{order_no:e}}).then(function(e){"0"==e.data.res_status_code?(t.$message({type:"success",message:"删除成功!"}),t.$router.back()):t.$message({showClose:!0,message:e.data.res_message,type:"error"})}).catch(function(e){console.log(e)})}).catch(function(){t.$message({type:"info",message:"已取消操作"})})}}},o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-row",{attrs:{gutter:0}},[r("el-col",{attrs:{xs:0,sm:1,md:3,lg:5,xl:6}},[e._v("  ")]),e._v(" "),r("el-col",{attrs:{xs:24,sm:22,md:18,lg:14,xl:12}},[r("div",{staticClass:"order"},[r("div",{staticClass:"header flex_between_center pd10_20 font-size15 bold"},[r("span",[e._v(e._s(e.order.status_name))]),e._v(" "),r("span",[e._v("\n            订单号:"+e._s(e.order.order_no)+"\n          ")])]),e._v(" "),r("div",{staticClass:"order_body"},[e.order.city?r("div",{staticClass:"order_message  pd20"},[r("div",{staticClass:"title bold "},[e._v("收件地址：")]),e._v(" "),r("div",{staticClass:"font-size14 mg10_0"},[e._v(e._s(e.order.receiver_name)+"   "+e._s(e.order.receiver_phone))]),e._v(" "),r("div",{staticClass:"font-size14"},[e._v(e._s(e.order.city)+"   "+e._s(e.order.province)+"  "+e._s(e.order.district)+"  "+e._s(e.order.address))])]):e._e(),e._v(" "),e.order.real_name?r("div",{staticClass:"order_message s pd20"},[r("div",{staticClass:"title bold"},[e._v("身份信息：")]),e._v(" "),r("div",{staticClass:"font-size14 mg10_0 flex_between_center"},[r("p",[e._v("\n                "+e._s(e.order.real_name)+"     "+e._s(e.order.id_card)+"\n              ")]),e._v(" "),r("el-button",{attrs:{plain:!0},on:{click:function(t){e.dialogidcard=!0}}},[e._v("\n                修改信息\n              ")])],1)]):e._e(),e._v(" "),e._l(e.package_list,function(t,s){return r("div",{key:s,staticClass:"commodity_list"},e._l(t.detail_list,function(e,t){return r("OrderCommodity",{key:t,attrs:{a:e}})}))})],2),e._v(" "),r("div",{staticClass:"order_footer flex_between_center mg10_0"},[r("div",{staticClass:" font-size12"},[r("p",[e._v("共"+e._s(e.order.goods_count)+"件商品 合计:\n              "),r("span",{staticClass:"font-size14 commoncolor"},[e._v("￥"+e._s(e.order.pay_price))]),e._v("(含运费￥"+e._s(e.order.feight_price)+")")])]),e._v(" "),r("div",{staticClass:"order_button"},["00"==e.order.status?r("el-button",{attrs:{plain:!0},on:{click:function(t){e.payOrder(e.order.order_no)}}},[e._v("去付款")]):e._e(),e._v(" "),"00"==e.order.status?r("el-button",{attrs:{plain:!0},on:{click:function(t){e.cancelOrder(e.order.order_no)}}},[e._v("取消订单")]):e._e(),e._v(" "),"10"==e.order.status&&"00"==e.order.refund_status?r("el-button",{attrs:{plain:!0},on:{click:function(t){e.refundOrder(e.order.order_no)}}},[e._v("退款")]):e._e(),e._v(" "),"20"==e.order.status||"21"==e.order.status||"30"==e.order.status?r("el-button",{attrs:{plain:!0},on:{click:function(t){e.checkLogistics(e.order.order_no)}}},[e._v("查看物流")]):e._e(),e._v(" "),"20"==e.order.status?r("el-button",{attrs:{plain:!0},on:{click:function(t){e.confirmOrder(e.order.order_no)}}},[e._v("确认收货")]):e._e(),e._v(" "),"30"==e.order.status||"40"==e.order.status||"90"==e.order.status?r("el-button",{attrs:{plain:!0},on:{click:function(t){e.deleteOrder(e.order.order_no)}}},[e._v("删除订单")]):e._e()],1)])]),e._v(" "),r("el-dialog",{attrs:{title:"选择身份证",visible:e.dialogidcard,width:"60%"},on:{"update:visible":function(t){e.dialogidcard=t}}},[r("div",{staticStyle:{height:"500px","overflow-y":"auto",border:"1px solid #eee"}},[r("el-row",[r("router-link",{staticClass:"common_a commoncolor common_button left mg10 addbutton",attrs:{to:{path:"/AddIdcard"}}},[e._v("新增身份证信息")])],1),e._v(" "),e._l(e.IDCardList,function(t,s){return r("el-col",{key:s,staticClass:"address_item_box relative",attrs:{span:8}},[r("div",{staticClass:"address_item_bg flex_column  mg10  pd10",class:{address_item_active_bg:t.real_name==e.order.real_name&&t.id_card==e.order.id_card},on:{click:function(r){e.chooseIdcard(t)}}},[r("p",{staticClass:"font-size14 receiver_message pd10_0"},[r("span",[e._v(e._s(t.real_name))])]),e._v(" "),r("p",{staticClass:"font-size12 pd10_0"},[e._v(e._s(t.id_card))])]),e._v(" "),t.real_name==e.order.real_name&&t.id_card==e.order.id_card?r("i",{staticClass:"el-icon-comeyang-gouxuan icon commoncolor absolute"}):e._e()])})],2),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")])],1)])],1),e._v(" "),r("el-col",{attrs:{xs:0,sm:1,md:3,lg:5,xl:6}},[e._v(" ")])],1)],1)},staticRenderFns:[]};var a=r("VU/8")(s,o,!1,function(e){r("EzFo")},"data-v-603ba9f9",null);t.default=a.exports}});
//# sourceMappingURL=23.1bd02af467d9405d4d19.js.map