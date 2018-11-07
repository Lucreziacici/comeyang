<template>
  <div>
    <el-row :gutter="0">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
        <div class="order">
          <div class="header flex_between_center pd10_20 font-size15 bold">
            <span>{{order.status_name}}</span>
            <span>
              订单号:{{order.order_no}}
            </span>
          </div>

          <div class="order_body">
            <div v-if="order.city" class="order_message  pd20">
              <div class="title bold ">收件地址：</div>
              <div class="font-size14 mg10_0">{{order.receiver_name}} &nbsp;&nbsp;{{order.receiver_phone}}</div>
              <div class="font-size14">{{order.city}} &nbsp;&nbsp;{{order.province}}&nbsp;&nbsp;{{order.district}}&nbsp;&nbsp;{{order.address}}</div>

            </div>
            <div  v-if="order.real_name" class="order_message s pd20">
              <div class="title bold">身份信息：</div>
              <div class="font-size14 mg10_0 flex_between_center">
                <p>
                  {{order.real_name}} &nbsp;&nbsp;&nbsp;&nbsp;{{order.id_card}}
                </p>
                <el-button :plain="true" @click="dialogidcard=true">
                  修改信息
                </el-button>

              </div>

            </div>

            <div v-for="(item,index) in package_list" :key="index" class="commodity_list">
              <OrderCommodity v-for="(a,b) in item.detail_list" :key="b" :a="a"></OrderCommodity>
            </div>

          </div>
          <div class="order_footer flex_between_center mg10_0">
            <div class=" font-size12">
              <p>共{{order.goods_count}}件商品 合计:
                <span class="font-size14 commoncolor">￥{{order.pay_price}}</span>(含运费￥{{order.feight_price}})</p>
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
        <el-dialog title="选择身份证" :visible.sync="dialogidcard" width="60%">
          <div style="height: 500px; overflow-y: auto;border:1px solid #eee">
            <el-row>
              <router-link class="common_a commoncolor common_button left mg10 addbutton" :to='{path:"/AddIdcard"}'>新增身份证信息</router-link>
            </el-row>
            <el-col class="address_item_box relative" :span="8" v-for="(item,index) in IDCardList" :key="index">
              <div class="address_item_bg flex_column  mg10  pd10" :class="{'address_item_active_bg':item.real_name==order.real_name&&item.id_card==order.id_card}" @click="chooseIdcard(item)">
                <p class="font-size14 receiver_message pd10_0">
                  <span>{{item.real_name}}</span>
                </p>
                <p class="font-size12 pd10_0">{{item.id_card}}</p>
              </div>
              <i v-if="item.real_name==order.real_name&&item.id_card==order.id_card" class="el-icon-comeyang-gouxuan icon commoncolor absolute"></i>
            </el-col>
          </div>

          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
          </span>
        </el-dialog>

      </el-col>
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp;</el-col>
    </el-row>
  </div>
</template>

<script>
import OrderCommodity from "../../components/OrderCommodity";
export default {
  data() {
    return {
      order_no: this.$route.query.order_no,
      order: {},
      package_list: [],
      IDCardList: [],
      dialogidcard: false
    };
  },
  components: {
    OrderCommodity
  },
  created() {
    this.getOrderDetail();
    this.getIDCardList();
  },
  methods: {
    // 获取订单详情
    getOrderDetail() {
      this.$axios({
        method: "get",
        url: "Order/OrderDetail",
        params: {
          order_no: this.order_no
        }
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            this.order = res.data.res_content.order;
            this.package_list = res.data.res_content.package_list;
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
    //获取身份证列表
    getIDCardList() {
      this.$axios({
        method: "get",
        url: "CustomerIDCard/IDCardList"
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            this.IDCardList = res.data.res_content;
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
      // 更新身份证
    chooseIdcard(e) {
      this.order.id_card = e.id_card;
      this.order.real_name = e.real_name;
      this.$axios({
        method: "post",
        url: "Order/UpdateOrderCustInfo",
        data: {
          order_no: this.order_no,
          id_card: e.id_card,
          real_name: e.real_name
        }
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            this.dialogidcard = false;
            this.$message({
              showClose: true,
              message: "修改成功",
              type: "success"
            });
            this.getOrderDetail();
          } else {
            this.$message({
              showClose: true,
              message: res.data.res_message,
              type: "error"
            });
            this.getOrderDetail();
          }
        })
        .catch(err => {
          console.log(err);
        });
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
                this.getOrderDetail();
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
                this.getOrderDetail();
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
        name: "ConfirmOrder",
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
                this.getOrderDetail();
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
                this.$router.back();
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
  }
};
</script>
<style lang="less" scoped >
.address_item_box {
  .icon {
    right: 6px;
    bottom: 6px;
    font-size: 40px;
  }
}
.address_item {
  height: 100px;

  .receiver_message {
    border-bottom: 1px solid #eee;
    width: 100%;
  }
}
.addbutton {
  padding: 10px 20px;
  border-radius: 5px;
}
.address_item_bg {
  height: 100px;
  background: url(../../assets/choose_bd.png) no-repeat;
  background-size: 100% 100%;
  padding: 20px;
}
.address_item_active_bg {
  background: url(../../assets/choose_bd_active.png) no-repeat;
  background-size: 100% 100%;
}
.address_item_bg:active,
.address_item_bg:focus,
.address_item_bg:hover {
  background: url(../../assets/choose_bd_active.png) no-repeat;
  background-size: 100% 100%;
}
.order_message {
  border-bottom: 1px solid #f2f2f2;
}
</style>