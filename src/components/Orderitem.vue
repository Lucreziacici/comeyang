<template>
  <el-col :span="24" class="mg10_0">
    <div class="order">
      <div class="order_header">
        <router-link class="color333 flex_between_center font-size14 bgf2 pd10_20" :to="{path:'/OrderDetail',query:{order_no:order.order_no}}">
          <p v-if="type==''" class="bold">{{order.status_name}}</p>
          <p v-if="type==''" class="common_a">订单号:{{order.order_no}}<i class="el-icon-comeyang-jiantou font-size12"></i></p>
          <p v-if="type=='refund'" class="bold">{{order.refund_status_name}}</p>
          <p v-if="type=='refund'" class="common_a">退款单号：{{order.refund_no}}<i class="el-icon-comeyang-jiantou font-size12"></i></p>
        </router-link>
      </div>
      <div class="order_body">
        <div v-for="(item,index) in order.package_list" :key="index" class="commodity_list">
          <OrderCommodity v-for="(a,b) in item.detail_list" :key="b" :a="a" ></OrderCommodity>
        </div>
      </div>
      <div class="order_footer flex_between_center mg10_0">
        <div v-if="type==''" class="order_message font-size12">
          <p>共{{order.goods_count}}件商品 合计:<span class="font-size14 commoncolor">￥{{order.pay_price}}</span>(含运费￥{{order.feight_price}})</p>
        </div>
        <div v-if="type=='refund'" class="order_message font-size12">
          <p>申请退款金额：￥{{order.apply_amount}} <span v-if="order.refund_amount">实际退款金额:￥{{order.refund_amount}}</span></p>
        </div>
        <div class="order_button">
          <el-button v-if="order.status=='00'" :plain="true" @click="payOrder(order.order_no)">去付款</el-button>
          <el-button v-if="order.status=='00'" :plain="true" @click="cancelOrder(order.order_no)">取消订单</el-button>
          <el-button v-if="order.status=='10'&&order.refund_status=='00'" :plain="true" @click="refundOrder(order.order_no)">退款</el-button>
          <el-button v-if="order.status=='20'||order.status=='21'||order.status=='30'" :plain="true" @click="checkLogistics(order.order_no)">查看物流</el-button>
          <el-button v-if="order.status=='20'" :plain="true" @click="confirmOrder(order.order_no)">确认收货</el-button>
          <el-button v-if="order.status=='30'||order.status=='40'||order.status=='90'" :plain="true" @click="deleteOrder(order.order_no)">删除订单</el-button>
        </div>
        
 
      </div>
    </div>
  </el-col>
</template>

<script>
import OrderCommodity from "./OrderCommodity";
export default {
  data() {
    return {};
  },
   components: {
   OrderCommodity
  },
  props: {
    order: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: "",
    }
  },
  created() {
    console.log(this.order);
  },
  methods: {
    //去付款
    payOrder(e) {
      this.$emit("payOrder", e);
    },
    //取消订单
    cancelOrder(e) {
      this.$emit("cancelOrder", e);
    },
    //退款
    refundOrder(e) {
      this.$emit("refundOrder", e);
    },
    //查看物流
    checkLogistics(e) {
      this.$emit("checkLogistics", e);
    },
    //确认收货
    confirmOrder(e) {
      this.$emit("confirmOrder", e);
    },
    //删除订单
    deleteOrder(e) {
      this.$emit("deleteOrder", e);
    }
  }
};
</script>
<style lang="less" >
.bdf2 {
  border-bottom: 1px solid #f2f2f2;
}
.order_body {
  border-left: 1px solid #f2f2f2;
  border-right: 1px solid #f2f2f2;
}

</style>

