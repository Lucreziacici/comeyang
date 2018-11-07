<template>
  <div>
    <el-row :gutter="0">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
        <div class="">
          <el-col :span="6">
            <Menu></Menu>
          </el-col>
          <el-col :span="18" class="">
            <div class="member_item_box bd">
              <div class="member_item_title flex_between_center pd10_20 font-size15 bold bgf2">
                <span>订单</span>
                <router-link class="color333 font-size12 common_a" :to="{path:'/OrderList'}">查看全部
                  <i class="el-icon-comeyang-jiantou font-size12"></i>
                </router-link>
              </div>
              <div class="member_item_content flex_around_center bd pd10_0">
                <div class="order_type flex_center_center ">
                  <router-link class="font-size12 color333 common_a" :to="{path:'/OrderList',query:{status:'00'}}">
                    <span>待付款</span>
                    <span class="commoncolor" v-if="order_count_new>0">{{order_count_new}}</span>
                  </router-link>
                </div>
                <div class="order_type flex_center_center ">
                  <router-link class="font-size12 color333 common_a" :to="{path:'/OrderList',query:{status:'10'}}">
                    <span>待发货</span>
                    <span class="commoncolor" v-if="order_count_pay>0">{{order_count_pay}}</span>
                  </router-link>
                </div>
                <div class="order_type flex_center_center ">
                  <router-link class="font-size12 color333 common_a" :to="{path:'/OrderList',query:{status:'20'}}">
                    <span>已发货</span>
                    <span class="commoncolor" v-if="order_count_delivery>0">{{order_count_delivery}}</span>
                  </router-link>
                </div>
                <div class="order_type flex_center_center ">
                  <router-link class="font-size12 color333 common_a" :to="{path:'/OrderList',query:{status:'30'}}">
                    <span>已完成</span>
                    <span class="commoncolor" v-if="order_count_complete>0">{{order_count_complete}}</span>
                  </router-link>
                </div>
                <div class="order_type flex_center_center ">
                  <router-link class="font-size12 color333 common_a" :to="{path:'/OrderList',query:{type:'refund'}}">
                    <span>退款</span>
                    <span class="commoncolor" v-if="order_count_refund>0">{{order_count_refund}}</span>
                  </router-link>
                </div>

              </div>
            </div>
            <div v-if="history_list.length>0" class="member_item_box bd">
              <div class="member_item_title flex_between_center pd10_20 font-size15 bold bgf2">
                <span>最近浏览</span>
                <router-link class="color333 font-size12 common_a" :to="{path:'/CommodityList'}">查看更多
                  <i class="el-icon-comeyang-jiantou font-size12"></i>
                </router-link>
              </div>
              <div>
                  <Commodity v-for="(item,index) in history_list" :size='6' :commodity='item' :key='index'></Commodity>
              </div>
            </div>

          </el-col>

        </div>
      </el-col>
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp;</el-col>
    </el-row>
  </div>
</template>

<script>
import Menu from "../../components/Menu";
import Commodity from "../../components/Commodity";
export default {
  data() {
    return {
      order_count_new:"",//待付款
      order_count_pay:"",//待发货
      order_count_delivery:"",//已发货
      order_count_complete:"",//已完成
      order_count_refund:"",//退款
      history_list:[]
    };
  },
  components: {
    Menu,
    Commodity
  },
  created() {
    this.OrderCountByStatusGroup();
    this.ViewHistoryList();
  },
  methods: {
    // 获取各种状态订单
    OrderCountByStatusGroup() {
      this.$axios({
        method: "get",
        url: "Order/OrderCountByStatusGroup"
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            this.order_count_new=res.data.res_content.order_count_new;
            this.order_count_pay=res.data.res_content.order_count_pay;
            this.order_count_delivery=res.data.res_content.order_count_delivery;
            this.order_count_complete=res.data.res_content.order_count_complete;
            this.order_count_refund=res.data.res_content.order_count_refund;
          } else {
            this.$message({
              showClose: true,
              message: res.data.res_message,
              type: "error"
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 查看近期浏览
    ViewHistoryList(){
      this.$axios({
        method: "get",
        url: "ShopGoods/ViewHistoryList",
        params:{
          page_index:1,
          page_size:8,

        }
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            this.history_list=res.data.res_content.data_list;

          } else {
            this.$message({
              showClose: true,
              message: res.data.res_message,
              type: "error"
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }

  }
};
</script>
<style lang="less" >
.member_item_box {
  margin: 0 0 20px 0;
  .order_type {
    border-right: 1px solid #eee;
    width: 18%;
    padding: 20px 0;
  }
  .order_type:last-child {
    border-right: 0px;
  }
}
</style>