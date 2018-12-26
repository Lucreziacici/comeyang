<template>
  <div>
    <el-row :gutter="0">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
        <el-row class="cart_title font-size14 " v-if="carts.length>0">
          <el-col :span="2" class='cart_titlename tc pd10_0'>选择</el-col>
          <el-col :span="3" class='cart_titlename tc pd10_0'>商品图片</el-col>
          <el-col :span="6" class='cart_titlename tc pd10_0'>商品名称</el-col>
          <el-col :span="3" class='cart_titlename tc pd10_0'>属性</el-col>
          <el-col :span="3" class='cart_titlename tc pd10_0'>价格</el-col>
          <el-col :span="4" class='cart_titlename tc pd10_0'>购买数量</el-col>
          <el-col :span="3" class='cart_titlename tc pd10_0'>操作</el-col>
        </el-row>
        <div class="flex_column_center_center" v-else>
          <i class="el-icon-comeyang-gouwuchekongzhuangtai mg30_0 colorc5" style="font-size: 300px;"></i>
          <span class="colorc5 bold">购物车为空</span>
        </div>

        <el-checkbox-group v-model="cart_ids" @change="changecartitem(cart_ids)">
          <el-row class='cart_ul flex_stretch font-size12' v-for="(item,index) in carts" :key="index">
            <el-col :span="2" class='cart_item flex_center_center tc pd10_0'>
              <el-checkbox v-model="item.checked" :label="item.id"></el-checkbox>
            </el-col>
            <el-col :span="3" class='cart_item flex_center_center tc pd10_0'>
              <img :src="item.main_image">
            </el-col>
            <el-col :span="6" class='cart_item flex_start_center  pd10_0'>
              <router-link class="common_a color333" :to='{path:"/Commodity",query:{id:item.goods_id}}'>
                {{item.goods_name}}
              </router-link>

            </el-col>
            <el-col :span="3" class='cart_item flex_center_center tc pd10_0'>
              {{item.spec_name}}
            </el-col>
            <el-col :span="3" class='cart_item flex_center_center tc pd10_0 commoncolor'>￥{{item.discount_price}}</el-col>
            <el-col :span="4" class='cart_item flex_center_center tc pd10_0'>
              <el-input-number size="mini" :min='1' :max="item.stock_count" v-model="item.count" @change="Changenum(item)"></el-input-number>

            </el-col>
            <el-col :span="3" class='cart_item flex_center_center tc pd10_0'>
              <i class="el-icon-delete common_a bold" size="mini" @click="deletecart(item)">
                <span class="mg0_10 ">删除</span>
              </i>
            </el-col>

          </el-row>
        </el-checkbox-group>
        <el-row v-if="invalid_list.length>0" class="cart_title font-size14 bgf6">
          <el-col :span="2" class='cart_titlename tc pd10_0'>状态</el-col>
          <el-col :span="3" class='cart_titlename tc pd10_0'>商品图片</el-col>
          <el-col :span="6" class='cart_titlename tc pd10_0'>商品名称</el-col>
          <el-col :span="3" class='cart_titlename tc pd10_0'>规格</el-col>
          <el-col :span="3" class='cart_titlename tc pd10_0'>价格</el-col>
          <el-col :span="4" class='cart_titlename tc pd10_0'>购买数量</el-col>
          <el-col :span="3" class='cart_titlename tc pd10_0'>操作</el-col>
        </el-row>
        <el-row class='cart_ul  flex_stretch font-size12 bgf6' v-for="(item,index) in invalid_list" :key="'invalid'+index">
          <el-col :span="2" class='cart_item flex_center_center tc pd10_0'>
            <div>失效</div>
          </el-col>
          <el-col :span="3" class='cart_item flex_center_center tc pd10_0'>
            <img :src="item.main_image">
          </el-col>
          <el-col :span="6" class='cart_item flex_start_center tc pd10_0'>
            <router-link class="common_a color333" :to='{path:"/Commodity",query:{id:item.goods_id}}'>
              {{item.goods_name}}
            </router-link>

          </el-col>
          <el-col :span="3" class='cart_item flex_center_center tc pd10_0'>
            {{item.spec_name}}
          </el-col>
          <el-col v-if="item.intax==1&&item.inbond==1" :span="3" class='cart_item flex_center_center tc pd10_0'>￥{{item.discount_price}}</el-col>
          <el-col v-if="item.intax==0&&item.inbond==1" :span="3" class='cart_item flex_center_center tc pd10_0'>￥{{item.goods_per_price}}+税费:￥{{item.goods_per_tax}}</el-col>
          <el-col v-if="item.inbond==0" :span="3" class='cart_item flex_center_center tc pd10_0'>￥{{item.discount_price}}</el-col>
          <el-col :span="4" class='cart_item flex_center_center tc pd10_0'>
            <el-input-number size="mini" :min='1' :max="item.stock_count" v-model="item.count" :disabled="true"></el-input-number>
          </el-col>
          <el-col :span="3" class='cart_item flex_center_center tc pd10_0'>
            <i class="el-icon-delete common_a bold" size="mini" @click="deletecart(item)">
              <span class="mg0_10 ">删除</span>
            </i>
          </el-col>

        </el-row>
      </el-col>

      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6"></el-col>
    </el-row>
    <el-row class="cart_total" :gutter="0">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
        <el-row class=" font-size15 bgf6  flex_between_center bd">
          <el-col :span="2" class='cart_titlename tc pd10_0'>
            <el-checkbox v-model="checkAllStatus" @change='checkAll()'></el-checkbox>
            <span>全选</span>

          </el-col>
          <el-col :span="4" class='cart_titlename tc pd10_0'>&nbsp; </el-col>
          <el-col :span="6" class='cart_titlename font-size12 tc pd10_0'>
            已选商品
            <span class="commoncolor font-size22 bold">{{cart_ids.length}}</span>件 &nbsp;
          </el-col>
          <el-col :span="9" class='cart_titlename font-size12 tc pd10_0'>
            合计（不含运费）：
            <span class="commoncolor font-size22 bold">￥{{total_price}}</span>
          </el-col>
          <el-col :span="3" class='cart_titlename tc pd10_0'>
            <el-button class="white" :class="{'commonbg':cart_ids.length>0,'bgb0':cart_ids.length<=0}" @click="confirmAccount()">结算</el-button>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6"></el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  data() {
    return {
      carts: [], //购物车列表
      invalid_list: [], //失效商品
      cart_ids: [], //选中的购物车商品
      checkAllStatus: true, //全选状态
      total_price: "", //总价
      loading: false //loading标志
    };
  },
  created() {
    this.getMyCartList();
  },
  methods: {
    //获取购物车列表
    getMyCartList() {
      this.$axios({
        method: "get",
        url: "ShoppingCart/MyCartList"
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            console.log(res.data.res_content);
            var cart_ids = [];
            for (var i = 0; i < res.data.res_content.cart_list.length; i++) {
              res.data.res_content.cart_list[i].checked = true;
              cart_ids.push(res.data.res_content.cart_list[i].id);
            }
            this.carts = res.data.res_content.cart_list;
            this.invalid_list = res.data.res_content.invalid_list;
            this.cart_ids = cart_ids;
            this.checkAllStatus = true;
            this.GetMyCartTotalPrice();
          } else {
           this.$message({                 showClose: true,                 message: res.data.res_message,                 type: "error"               });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //获取总价
    GetMyCartTotalPrice() {
      this.$axios({
        method: "get",
        url: "ShoppingCart/GetMyCartTotalPrice",
        params: {
          cart_ids: this.cart_ids.join(",")
        }
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            console.log(res.data.res_content);
            this.total_price = res.data.res_content.total_price;
          } else {
           this.$message({                 showClose: true,                 message: res.data.res_message,                 type: "error"               });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },

    //删除购物车
    deletecart(e) {
      console.log(e);
      this.$confirm("确认要删除该宝贝吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            method: "post",
            url: "ShoppingCart/RemoveFromCart",
            data: {
              id: e.id
            }
          })
            .then(res => {
              if (res.data.res_status_code == "0") {
                // todo应该还要删掉cart_ids的项
                var carts = [];
                for (
                  var i = 0;
                  i < res.data.res_content.cart_list.length;
                  i++
                ) {
                  for (var j = 0; j < this.cart_ids.length; j++) {
                    if (
                      res.data.res_content.cart_list[i].id == this.cart_ids[j]
                    ) {
                      res.data.res_content.cart_list[i].checked = true;
                      break;
                    }
                  }
                }
                this.carts = res.data.res_content.cart_list;
                this.invalid_list = res.data.res_content.invalid_list;
                this.GetMyCartTotalPrice();
                this.$message({
                  type: "success",
                  message: "删除成功!"
                });
              } else {
               this.$message({                 showClose: true,                 message: res.data.res_message,                 type: "error"               });
              }
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(() => {});
    },
    //新增数量
    Changenum(e) {
      console.log(e);
      if (e.count <= 0) {
        this.$message({
          showClose: true,
          message: "不能再少啦~QAQ",
          type: "error"
        });
      } else if (e.count > e.stock_count) {
        this.$message({
          showClose: true,
          message: "商品数量已经达到库存量哦~♪(^∇^*)",
          type: "error"
        });
      }
      this.$axios({
        method: "post",
        url: "ShoppingCart/CartReviseNumber",
        data: {
          id: e.id,
          count: e.count
        }
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            var carts = [];
            for (var i = 0; i < res.data.res_content.cart_list.length; i++) {
              for (var j = 0; j < this.cart_ids.length; j++) {
                if (res.data.res_content.cart_list[i].id == this.cart_ids[j]) {
                  res.data.res_content.cart_list[i].checked = true;
                  break;
                }
              }
            }
            this.carts = res.data.res_content.cart_list;
            this.GetMyCartTotalPrice();
          } else {
           this.$message({                 showClose: true,                 message: res.data.res_message,                 type: "error"               });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 选择
    changecartitem(e) {
      console.log(e);
      var carts = this.carts;
      var values = e;
      var xuanzhong = true;
      this.cart_ids = values;
      for (var i = 0; i < carts.length; ++i) {
        carts[i].checked = false;
        for (var j = 0; j < values.length; ++j) {
          if (carts[i].id == values[j]) {
            carts[i].checked = true;
            break;
          }
        }
      }
      for (var i = 0; i < carts.length; i++) {
        if (!this.carts[i].checked) {
          xuanzhong = false;
        }
      }
      if (xuanzhong) {
        (this.checkAllStatus = true), (this.carts = carts);
      } else {
        (this.checkAllStatus = false), (this.carts = carts);
      }
      this.GetMyCartTotalPrice();
    },
    // 多选
    checkAll() {
      var checkAllStatus = this.checkAllStatus;
      var cart_ids = this.cart_ids;
      var carts = this.carts;
      if (checkAllStatus) {
        for (var i = 0; i < carts.length; i++) {
          carts[i].checked = true;
          cart_ids.push(carts[i].id);
        }
      } else {
        for (var i = 0; i < carts.length; i++) {
          carts[i].checked = false;
          cart_ids = [];
        }
      }
      this.carts = carts;
      this.checkAllStatus = checkAllStatus;
      this.cart_ids = cart_ids;
      this.GetMyCartTotalPrice();
    },
    //结算
    confirmAccount() {
      if (this.cart_ids.length) {
        var data = {};
        data.cart_ids = this.cart_ids.join(",");
        const loading = this.$loading({
          lock: true,
          text: "生成订单中…",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.3)"
        });
        this.loading = true;
        this.$axios({
          method: "post",
          url: "Order/CreateOrderFromCart",
          data: data
        })
          .then(res => {
            loading.close();
            if (res.data.res_status_code == "0") {
              //下单跳转
              this.$router.push({
                name: "ConfirmOrder",
                query: { orderid: res.data.res_content.order.order_no }
              });
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
      } else {
        this.$message({
          message: "请选择商品",
          type: "warning"
        });
      }
    }
  }
};
</script>
<style lang="less" >
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #ff69b4;
  border-color: #ff69b4;
}
.el-checkbox__input.is-focus .el-checkbox__inner {
  border-color: #ff69b4;
}
.el-checkbox__inner:hover,
.el-checkbox__inner:active {
  border-color: #ff69b4;
}
.el-input-number--mini {
  width: 100px;
}
.el-checkbox__label {
  display: none;
}
.cart_title {
  border-bottom: 1px solid #e6e6e6;
  margin: 20px 0 0 0;
  .cart_titlename {
    border-left: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
  }
  .cart_titlename:last-child {
    border-right: 1px solid #e6e6e6;
  }
}
.cart_ul {
  border-bottom: 1px solid #e6e6e6;

  .cart_item {
    border-left: 1px solid #e6e6e6;
    img {
      width: 90%;
    }
  }
  .cart_item:last-child {
    border-right: 1px solid #e6e6e6;
  }
}
.cart_total {
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100%;
  min-width: 1300px;
  .commonbg {
    border: 1px solid #ff69b4;
  }
  .commonbg:hover,
  .commonbg:active,
  .commonbg:focus {
    background-color: #ff69b4;
    color: white;
    border: 1px solid #ff69b4;
  }
  .bgb0 {
    border: 1px solid #b0b0b0;
  }
  .bgb0:hover,
  .bgb0:active,
  .bgb0:focus {
    background-color: #b0b0b0;
    color: white;
    border: 1px solid #b0b0b0;
  }
}
</style>

