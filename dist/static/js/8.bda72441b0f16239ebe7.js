webpackJsonp([8],{"4F9U":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{}},components:{OrderCommodity:s("MOsn").a},props:{order:{type:Object,required:!0},type:{type:String,required:!1,default:""}},created:function(){console.log(this.order)},methods:{payOrder:function(e){this.$emit("payOrder",e)},cancelOrder:function(e){this.$emit("cancelOrder",e)},refundOrder:function(e){this.$emit("refundOrder",e)},checkLogistics:function(e){this.$emit("checkLogistics",e)},confirmOrder:function(e){this.$emit("confirmOrder",e)},deleteOrder:function(e){this.$emit("deleteOrder",e)}}},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-col",{staticClass:"mg10_0",attrs:{span:24}},[s("div",{staticClass:"order"},[s("div",{staticClass:"order_header"},[s("router-link",{staticClass:"color333 flex_between_center font-size14 bgf2 pd10_20",attrs:{to:{path:"/OrderDetail",query:{order_no:e.order.order_no}}}},[""==e.type?s("p",{staticClass:"bold"},[e._v(e._s(e.order.status_name))]):e._e(),e._v(" "),""==e.type?s("p",{staticClass:"common_a"},[e._v("订单号:"+e._s(e.order.order_no)),s("i",{staticClass:"el-icon-comeyang-jiantou font-size12"})]):e._e(),e._v(" "),"refund"==e.type?s("p",{staticClass:"bold"},[e._v(e._s(e.order.refund_status_name))]):e._e(),e._v(" "),"refund"==e.type?s("p",{staticClass:"common_a"},[e._v("退款单号："+e._s(e.order.refund_no)),s("i",{staticClass:"el-icon-comeyang-jiantou font-size12"})]):e._e()])],1),e._v(" "),s("div",{staticClass:"order_body"},e._l(e.order.package_list,function(t,r){return s("div",{key:r,staticClass:"commodity_list"},e._l(t.detail_list,function(e,t){return s("OrderCommodity",{key:t,attrs:{a:e}})}))})),e._v(" "),s("div",{staticClass:"order_footer flex_between_center mg10_0"},[""==e.type?s("div",{staticClass:"order_message font-size12"},[s("p",[e._v("共"+e._s(e.order.goods_count)+"件商品 合计:"),s("span",{staticClass:"font-size14 commoncolor"},[e._v("￥"+e._s(e.order.pay_price))]),e._v("(含运费￥"+e._s(e.order.feight_price)+")")])]):e._e(),e._v(" "),"refund"==e.type?s("div",{staticClass:"order_message font-size12"},[s("p",[e._v("申请退款金额：￥"+e._s(e.order.apply_amount)+" "),e.order.refund_amount?s("span",[e._v("实际退款金额:￥"+e._s(e.order.refund_amount))]):e._e()])]):e._e(),e._v(" "),s("div",{staticClass:"order_button"},["00"==e.order.status?s("el-button",{attrs:{plain:!0},on:{click:function(t){e.payOrder(e.order.order_no)}}},[e._v("去付款")]):e._e(),e._v(" "),"00"==e.order.status?s("el-button",{attrs:{plain:!0},on:{click:function(t){e.cancelOrder(e.order.order_no)}}},[e._v("取消订单")]):e._e(),e._v(" "),"10"==e.order.status&&"00"==e.order.refund_status?s("el-button",{attrs:{plain:!0},on:{click:function(t){e.refundOrder(e.order.order_no)}}},[e._v("退款")]):e._e(),e._v(" "),"20"==e.order.status||"21"==e.order.status||"30"==e.order.status?s("el-button",{attrs:{plain:!0},on:{click:function(t){e.checkLogistics(e.order.order_no)}}},[e._v("查看物流")]):e._e(),e._v(" "),"20"==e.order.status?s("el-button",{attrs:{plain:!0},on:{click:function(t){e.confirmOrder(e.order.order_no)}}},[e._v("确认收货")]):e._e(),e._v(" "),"30"==e.order.status||"40"==e.order.status||"90"==e.order.status?s("el-button",{attrs:{plain:!0},on:{click:function(t){e.deleteOrder(e.order.order_no)}}},[e._v("删除订单")]):e._e()],1)])])])},staticRenderFns:[]};var n={data:function(){return{orderList:[],page_size:3,page_index:1,total:1,type:this.$route.query.type?this.$route.query.type:"",status:this.$route.query.status?this.$route.query.status:""}},components:{Orderitem:s("VU/8")(r,o,!1,function(e){s("kgTu")},null,null).exports},created:function(){this.type?this.getRefundList():this.getOrderList()},methods:{getOrderList:function(){var e=this;this.$axios({method:"get",url:"Order/OrderList",params:{status:this.status,page_index:this.page_index,page_size:this.page_size}}).then(function(t){"0"==t.data.res_status_code?(e.total=t.data.res_content.total_count,e.orderList=t.data.res_content.data_list):e.$message({showClose:!0,message:t.data.res_message,type:"error"})}).catch(function(e){console.log(e)})},getRefundList:function(){var e=this;this.$axios({method:"get",url:"Refund/RefundList",params:{status:this.status,page_index:this.page_index,page_size:this.page_size}}).then(function(t){"0"==t.data.res_status_code?(e.total=t.data.res_content.total_count,e.orderList=t.data.res_content.data_list):e.$message({showClose:!0,message:t.data.res_message,type:"error"})}).catch(function(e){console.log(e)})},changepage:function(e){this.page_index=e,this.getOrderList()},payOrder:function(e){this.$router.push({name:"ConfirmOrder",query:{orderid:e}})},cancelOrder:function(e){var t=this;this.$confirm("确定要取消订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$axios({method:"post",url:"Order/CancelOrder",data:{order_no:e}}).then(function(e){"0"==e.data.res_status_code?(t.$message({type:"success",message:"已取消订单!"}),t.getOrderList()):t.$message({showClose:!0,message:e.data.res_message,type:"error"})}).catch(function(e){console.log(e)})}).catch(function(){t.$message({type:"info",message:"已取消操作"})})},refundOrder:function(e){var t=this;this.$confirm("是否确认退款?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$axios({method:"post",url:"Refund/CreateRefundOrder",data:{order_no:e}}).then(function(e){"0"==e.data.res_status_code?(t.$message({type:"success",message:"已申请确认退款!"}),t.getOrderList()):t.$message({showClose:!0,message:e.data.res_message,type:"error"})}).catch(function(e){console.log(e)})}).catch(function(){t.$message({type:"info",message:"已取消操作"})})},checkLogistics:function(e){this.$router.push({name:"Logistics",query:{orderid:e}})},confirmOrder:function(e){var t=this;this.$confirm("是否确认收货?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$axios({method:"post",url:"Order/ConfirmOrder",data:{order_no:e}}).then(function(e){"0"==e.data.res_status_code?(t.$message({type:"success",message:"已确认收货!"}),t.getOrderList()):t.$message({showClose:!0,message:e.data.res_message,type:"error"})}).catch(function(e){console.log(e)})}).catch(function(){t.$message({type:"info",message:"已取消操作"})})},deleteOrder:function(e){var t=this;this.$confirm("是否删除订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$axios({method:"post",url:"Order/DeleteOrder",data:{order_no:e}}).then(function(e){"0"==e.data.res_status_code?(t.$message({type:"success",message:"删除成功!"}),t.getOrderList()):t.$message({showClose:!0,message:e.data.res_message,type:"error"})}).catch(function(e){console.log(e)})}).catch(function(){t.$message({type:"info",message:"已取消操作"})})}},watch:{$route:function(e,t){this.page_index=1,this.type=this.$route.query.type?this.$route.query.type:"",this.status=this.$route.query.status?this.$route.query.status:"",this.type?this.getRefundList():this.getOrderList()}}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("el-row",{attrs:{gutter:0}},[s("el-col",{attrs:{xs:0,sm:1,md:3,lg:5,xl:6}},[e._v("  ")]),e._v(" "),s("el-col",{attrs:{xs:24,sm:22,md:18,lg:14,xl:12}},[s("div",{staticClass:"order_title_list flex_between_center pd10_0"},[s("div",{staticClass:"order_title_item flex_center_center"},[s("router-link",{staticClass:"bold color333 common_a center font-size14",class:""==e.status&&"refund"!==e.type?"commoncolor":"",attrs:{to:{path:"/OrderList"}}},[e._v("\n            所有订单\n          ")])],1),e._v(" "),s("div",{staticClass:"order_title_item flex_center_center"},[s("router-link",{staticClass:"bold color333 common_a center font-size14",class:"00"==e.status?"commoncolor":"",attrs:{to:{path:"/OrderList",query:{status:"00"}}}},[e._v("\n            待付款\n          ")])],1),e._v(" "),s("div",{staticClass:"order_title_item flex_center_center"},[s("router-link",{staticClass:"bold color333 common_a center font-size14",class:"10"==e.status?"commoncolor":"",attrs:{to:{path:"/OrderList",query:{status:"10"}}}},[e._v("\n            待发货\n          ")])],1),e._v(" "),s("div",{staticClass:"order_title_item flex_center_center"},[s("router-link",{staticClass:"bold color333 common_a center font-size14",class:"20"==e.status?"commoncolor":"",attrs:{to:{path:"/OrderList",query:{status:"20"}}}},[e._v("\n            已发货\n          ")])],1),e._v(" "),s("div",{staticClass:"order_title_item flex_center_center"},[s("router-link",{staticClass:"bold color333 common_a center font-size14",class:"30"==e.status?"commoncolor":"",attrs:{to:{path:"/OrderList",query:{status:"30"}}}},[e._v("\n            已完成\n          ")])],1),e._v(" "),s("div",{staticClass:"order_title_item flex_center_center"},[s("router-link",{staticClass:"bold color333 common_a center font-size14",class:"refund"==e.type?"commoncolor":"",attrs:{to:{path:"/OrderList",query:{type:"refund"}}}},[e._v("\n            退款\n          ")])],1)]),e._v(" "),s("div",{staticClass:"orderList"},e._l(e.orderList,function(t,r){return s("Orderitem",{key:r,attrs:{type:e.type,order:t},on:{payOrder:e.payOrder,cancelOrder:e.cancelOrder,refundOrder:e.refundOrder,checkLogistics:e.checkLogistics,confirmOrder:e.confirmOrder,deleteOrder:e.deleteOrder}})})),e._v(" "),e.orderList.length>0?s("el-col",{attrs:{span:24}},[s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",currentPage:e.page_index,total:e.total,"page-size":e.page_size},on:{"current-change":e.changepage}})],1):s("el-col",{staticClass:"flex_column_center_center mg20_0"},[s("svg",{staticClass:"icon mg0_10",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#el-icon-comeyang-kongzhuangtai"}})]),e._v(" "),s("p",{staticClass:"font-size12 color333 mg10_0 "},[e._v("没有订单哦")])])],1),e._v(" "),s("el-col",{attrs:{xs:0,sm:1,md:3,lg:5,xl:6}},[e._v(" ")])],1)],1)},staticRenderFns:[]};var i=s("VU/8")(n,a,!1,function(e){s("ptlu")},null,null);t.default=i.exports},kgTu:function(e,t){},ptlu:function(e,t){}});
//# sourceMappingURL=8.bda72441b0f16239ebe7.js.map