<template>
  <div>
    <el-row :gutter="0">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
        <div class="order_title_list flex_between_center pd10_0">
          <div class="order_title_item flex_center_center">
            <router-link class="bold color333 common_a center font-size14" :class="status==''&&type!=='refund'?'commoncolor':''" :to="{path:'/OrderList'}">
              所有订单
            </router-link>
          </div>
          <div class="order_title_item flex_center_center">
            <router-link class="bold color333 common_a center font-size14" :class="status=='00'?'commoncolor':''" :to="{path:'/OrderList',query:{status:'00'}}">
              待付款
            </router-link>
          </div>
          <div class="order_title_item flex_center_center">
            <router-link class="bold color333 common_a center font-size14" :class="status=='10'?'commoncolor':''" :to="{path:'/OrderList',query:{status:'10'}}">
              待发货
            </router-link>
          </div>
          <div class="order_title_item flex_center_center">
            <router-link class="bold color333 common_a center font-size14" :class="status=='20'?'commoncolor':''" :to="{path:'/OrderList',query:{status:'20'}}">
              已发货
            </router-link>
          </div>
          <div class="order_title_item flex_center_center">
            <router-link class="bold color333 common_a center font-size14" :class="status=='30'?'commoncolor':''" :to="{path:'/OrderList',query:{status:'30'}}">
              已完成
            </router-link>
          </div>
          <div class="order_title_item flex_center_center">
            <router-link class="bold color333 common_a center font-size14" :class="type=='refund'?'commoncolor':''" :to="{path:'/OrderList',query:{type:'refund'}}">
              退款
            </router-link>
          </div>
        </div>
        <div class="orderList">
          <Orderitem v-for="(item,index) in orderList" @payOrder="payOrder" @cancelOrder="cancelOrder" @refundOrder="refundOrder" @checkLogistics="checkLogistics" @confirmOrder="confirmOrder" @deleteOrder="deleteOrder" :type="type" :order="item" :key="index"></Orderitem>
        </div>

        <el-col v-if="orderList.length>0" :span="24">

          <el-pagination background layout="prev, pager, next" :currentPage="page_index" :total="total" :page-size="page_size" @current-change="changepage">
          </el-pagination>
        </el-col>
        <el-col class="flex_column_center_center mg20_0" v-else>
          <svg class="icon mg0_10" aria-hidden="true">
            <use xlink:href="#el-icon-comeyang-kongzhuangtai"></use>
          </svg>
          <p class="font-size12 color333 mg10_0 ">没有订单哦</p>
        </el-col>

      </el-col>
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp;</el-col>
    </el-row>
  </div>
</template>

<script>
import Orderitem from "../../components/Orderitem";
export default {
  data() {
    return {
      orderList: [],
      page_size: 3,
      page_index: 1,
      total: 1,
      type: this.$route.query.type ? this.$route.query.type : "",
      status: this.$route.query.status ? this.$route.query.status : ""
    };
  },
  components: {
    Orderitem
  },
  created() {
    if (this.type) {
      this.getRefundList();
    } else {
      this.getOrderList();
    }
  },
  methods: {
    // 根据状态获取订单
    getOrderList() {
      this.$axios({
        method: "get",
        url: "Order/OrderList",
        params: {
          status: this.status,
          page_index: this.page_index,
          page_size: this.page_size
        }
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            this.total = res.data.res_content.total_count;
            this.orderList = res.data.res_content.data_list;
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
    //退款单
    getRefundList(){
       this.$axios({
        method: "get",
        url: "Refund/RefundList",
        params: {
          status: this.status,
          page_index: this.page_index,
          page_size: this.page_size
        }
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            this.total = res.data.res_content.total_count;
            this.orderList = res.data.res_content.data_list;
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


    // 翻页
    changepage(e) {
      this.page_index = e;
      this.getOrderList();
    },
    // 去付款
    payOrder(e) {
      this.$router.push({
        name: "ConfirmOrder",
        query: { orderid: e }
      });
    },
    //取消订单
    cancelOrder(e) {
      this.$confirm("确定要取消订单?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            method: "post",
            url: "Order/CancelOrder",
            data: {
              order_no: e
            }
          })
            .then(res => {
              if (res.data.res_status_code == "0") {
                this.$message({
                  type: "success",
                  message: "已取消订单!"
                });
                this.getOrderList();
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
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作"
          });
        });
    },
    //退款
    refundOrder(e) {
      this.$confirm("是否确认退款?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            method: "post",
            url: "Refund/CreateRefundOrder",
            data: {
              order_no: e
            }
          })
            .then(res => {
              if (res.data.res_status_code == "0") {
                this.$message({
                  type: "success",
                  message: "已申请确认退款!"
                });
                this.getOrderList();
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
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作"
          });
        });
    },
    //查看物流
    checkLogistics(e) {
      // todo 查看物流
      this.$router.push({
        name: "Logistics",
        query: { orderid: e }
      });
    },
    //确认收货
    confirmOrder(e) {
      this.$confirm("是否确认收货?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            method: "post",
            url: "Order/ConfirmOrder",
            data: {
              order_no: e
            }
          })
            .then(res => {
              if (res.data.res_status_code == "0") {
                this.$message({
                  type: "success",
                  message: "已确认收货!"
                });
                this.getOrderList();
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
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作"
          });
        });
    },
    //删除订单
    deleteOrder(e) {
      this.$confirm("是否删除订单?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            method: "post",
            url: "Order/DeleteOrder",
            data: {
              order_no: e
            }
          })
            .then(res => {
              if (res.data.res_status_code == "0") {
                this.$message({
                  type: "success",
                  message: "删除成功!"
                });
                this.getOrderList();
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
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作"
          });
        });
    }
  },
  watch: {
    $route(to, from) {
      this.page_index = 1;
      this.type = this.$route.query.type ? this.$route.query.type : "";
      this.status = this.$route.query.status ? this.$route.query.status : "";
      if (this.type) {
        this.getRefundList();
      } else {
        this.getOrderList();
      }
    }
  }
};
</script>
<style lang="less" >
.order_title_list {
  border-bottom: 2px solid #eee;
  .order_title_item {
    width: 16.67%;
    border-right: 2px solid #eee;
  }
  .order_title_item:last-child {
    border: 0px;
  }
}
</style>