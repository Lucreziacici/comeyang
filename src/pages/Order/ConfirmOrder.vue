<template>
  <div>
    <el-row :gutter="0">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
        <div class="header pd10_20 font-size15 bold">
          <span>确认订单</span>
        </div>
        <!-- 选择地址 -->
        <div class="mg20_0">
          <div class="choose_box bd ">
            <div class="title pd10_20 flex_between_center">
              <span class="font-size15 bold">选择地址</span>
              <span v-if="addresslist.length>0" class="font-size12 bold " @click="dialogVisible=true">更换地址
                <i class="el-icon-comeyang-jiantou"></i>
              </span>
            </div>
            <div class="address_list flex_between_center fw pd10_20">
              <el-col v-if="order.province" class="address_item_box relative" :span="16">
                <div class="address_item flex_column  mg10  pd10">
                  <p class="font-size14 receiver_message pd10_0">
                    <span class="bold">收件人：{{order.receiver_name}}</span>
                  </p>
                  <p class="font-size12 pd10_0">
                    <span class="bold">收件人手机号：{{order.receiver_phone}}</span>
                  </p>
                  <p class="font-size12 ">
                    <span class="bold">收件地址：{{order.province}}</span>
                    <span class="bold">{{order.city}}</span>
                    <span class="bold">{{order.district}}</span>
                    <span>{{order.address}}</span>
                  </p>
                </div>
              </el-col>
              <el-col v-if="addresslist.length>0" class="address_item_box bd relative " :span="4">
                <div class="address_item flex_center_center commoncolor bold">
                  <span @click="dialogVisible=true">更换地址</span>
                </div>
              </el-col>
              <el-col v-if="addresslist.length==0" class="address_item_box bd relative " :span="4">
                <div class="address_item flex_center_center commoncolor bold">
                  <router-link class="common_a commoncolor" :to='{path:"/EditAddress",query:{type:type}}'>新增地址</router-link>
                </div>
              </el-col>
            </div>
          </div>
        </div>
        <!-- 选择身份证 -->
        <div class="mg20_0">
          <div class="choose_box bd ">
            <div class="title pd10_20 flex_between_center font-size15 bold">
              <span class="font-size15 bold">选择身份证</span>
              <span v-if="IDCardList.length>0" class="font-size12 bold " @click="dialogidcard=true">更换身份证
                <i class="el-icon-comeyang-jiantou"></i>
              </span>
            </div>
            <div class="address_list flex_between_center fw pd10_20">
              <el-col v-if="order.real_name" class="address_item_box relative" :span="16">
                <div class="address_item flex_column  mg10  pd10">
                  <p class="font-size14 receiver_message pd10_0">
                    <span class="bold">实名信息：{{order.real_name}}</span>
                  </p>
                  <p class="font-size12 pd10_0">
                    <span class="bold">身份证号码：{{order.id_card}}</span>
                  </p>
                </div>
              </el-col>
              <el-col v-if="IDCardList.length>0" class="address_item_box bd relative " :span="4">
                <div class="address_item flex_center_center commoncolor bold">
                  <span @click="dialogidcard=true">更换身份证</span>
                </div>
              </el-col>
              <el-col v-if="IDCardList.length==0" class="address_item_box bd relative " :span="4">
                <div class="address_item flex_center_center commoncolor bold">
                  <router-link class="common_a commoncolor " :to='{path:"/AddIdcard"}'>新增身份证信息</router-link>
                </div>
              </el-col>
            </div>
          </div>
        </div>
        <!-- 订单信息 -->
        <div class="mg20_0">
          <div class="choose_box bd ">
            <div class="title pd10_20 font-size15 bold">确认订单信息</div>
            <div class="pd10">
              <el-row class="orderlist_title font-size14">
                <el-col :span="4" class='orderlist_titlename tc pd10_0'>商品图片</el-col>
                <el-col :span="7" class='orderlist_titlename tc pd10_0'>商品名称</el-col>
                <el-col :span="4" class='orderlist_titlename tc pd10_0'>规格</el-col>
                <el-col :span="4" class='orderlist_titlename tc pd10_0'>价格</el-col>
                <el-col :span="5" class='orderlist_titlename tc pd10_0'>购买数量</el-col>
              </el-row>
              <div v-for="(a,b) in orderdetail_list" :key="'orderdetail1'+b">
                <el-row class='orderlist_ul  flex_stretch font-size12 ' v-for="(item,index) in a.detail_list" :key="'orderdetail'+index">
                  <el-col :span="4" class='orderlist_item flex_center_center tc pd10_0'>
                    <img :src="item.main_image">
                  </el-col>
                  <el-col :span="7" class='orderlist_item flex_start_center tc pd10_0'>
                    <router-link class="common_a color333" :to='{path:"/Commodity",query:{id:item.goods_id}}'>
                      {{item.goods_name}}
                    </router-link>
                  </el-col>
                  <el-col :span="4" class='orderlist_item flex_center_center tc pd10_0'>
                    {{item.spec_name}}
                  </el-col>
                  <el-col v-if="item.intax==1&&item.inbond==1" :span="4" class='orderlist_item flex_center_center tc pd10_0'>￥{{item.goods_price}}</el-col>
                  <el-col v-if="item.intax==0&&item.inbond==1" :span="4" class='orderlist_item flex_center_center tc pd10_0'>￥{{item.goods_per_price}}+税费:￥{{item.goods_per_tax}}</el-col>
                  <el-col v-if="item.inbond==0" :span="4" class='orderlist_item flex_center_center tc pd10_0'>￥{{item.goods_price}}</el-col>
                  <el-col :span="5" class='orderlist_item flex_center_center tc pd10_0'>
                    {{item.goods_count}}
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </div>
        <div class="mg20_0">
          <div class="right paybox ">
            <div class="paybox_shadow pd20 flex_column_center_end relative">
              <p>
                <span class="font-size12 bold">实付款：</span>
                <span class="commoncolor font-size30 bold">￥{{order.pay_price}}</span>
                <span class="color333 font-size12">(包含邮费{{order.feight_price}}元)</span>
              </p>
              <p v-if="order.province">
                <span class="font-size12 bold">寄送至：</span>
                <span class="color333 font-size12">{{order.province}}{{order.city}}{{order.district}}{{order.address}}</span>
              </p>
              <p v-if="order.province">
                <span class="font-size12 bold">收货人：</span>
                <span class="color333 font-size12">{{order.receiver_name}}{{order.receiver_phone}}</span>
              </p>
              <p v-else>
                <span class="font-size12 bold">您还未选择地址</span>
              </p>
              <el-button class="common_button" style="margin:20px 0 10px 0" @click="pay()">{{paylist[paytype].name}}结算</el-button>
              <p class="font-size12 color333" @click="dialogidpaytype=true">您还可以选择
                <span class="commoncolor underline">其他支付</span>方式</p>

            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp;</el-col>
    </el-row>

    <el-dialog title="选择地址" :visible.sync="dialogVisible" width="60%">
      <div style="height: 500px; overflow-y: auto;border:1px solid #eee">
        <el-row>
          <router-link class="common_a commoncolor common_button left mg10 addbutton"  :to='{path:"/EditAddress",query:{type:type}}'>新增地址</router-link>
        </el-row>
        <el-col class="address_item_box relative" :span="8" v-for="(item,index) in addresslist" :key="index">
          <div class="address_item_bg flex_column  mg10  pd10" :class="{'address_item_active_bg':item.id==order.address_id}" @click="chooseAddress(item)">
            <p class="font-size14 receiver_message pd10_0">
              <span>{{item.province}}</span>
              <span class="bold">{{item.city}}</span>
              <span class="bold">{{item.district}}</span>
              <span>({{item.receiver_name}}) &nbsp;&nbsp;收</span>
            </p>
            <p class="font-size12 pd10_0">{{item.address}}</p>
            <p class="font-size12 ">({{item.receiver_name}}) {{item.receiver_phone}}&nbsp;&nbsp;收</p>
          </div>
          <i v-if="item.id==order.address_id" class="el-icon-comeyang-gouxuan icon commoncolor absolute"></i>
        </el-col>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
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
    <el-dialog title="选择支付方式" :visible.sync="dialogidpaytype" width="50%">
      <div class="flex_between_center">
        <el-col v-for="(item,index) in paylist" :key="'pay'+index" :span="7">
          <div class="paytypeitem bd relative tc" @click="changepaytype(item)">
            <p class="pd30_0 flex_center_center">
              <svg class="icon mg0_10" aria-hidden="true">
                <use :xlink:href="'#'+item.icon"></use>
              </svg>
              <span>{{item.name}}支付</span>
            </p>
            <i v-if="paytype==item.type" class="el-icon-comeyang-gouxuan icon commoncolor absolute"></i>
          </div>

        </el-col>

      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogidpaytype = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderid: this.$route.query.orderid,
      addresslist: [],
      IDCardList: [],
      order: {},
      orderdetail_list: [],
      dialogVisible: false,
      dialogidcard: false,
      dialogidpaytype: false,
      type: "add",
      paylist: [
        {
          type: "0",
          name: "支付宝",
          icon: "el-icon-comeyang-zhifubao"
        },
        {
          type: "1",
          name: "微信",
          icon: "el-icon-comeyang-weixin"
        },
        {
          type: "2",
          name: "银联",
          icon: "el-icon-comeyang-yinlianzhifu"
        }
      ],
      paytype: "0" //0为支付宝支付，1为微信支付，2为银联支付
    };
  },
  created() {
    this.getAddressList();
    this.getIDCardList();
    this.getOrderDetail();
  },
  methods: {
    //获取订单详情
    getOrderDetail() {
      this.$axios({
        method: "get",
        url: "Order/OrderDetail",
        params: {
          order_no: this.$route.query.orderid
        }
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            console.log(res.data.res_content);
            this.order = res.data.res_content.order;
            this.orderdetail_list = res.data.res_content.package_list;
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
    //获取地址列表
    getAddressList() {
      this.$axios({
        method: "get",
        url: "CustomerAddress/AddressList"
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            this.addresslist = res.data.res_content;
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
    // 更新地址
    chooseAddress(e) {
      this.order.address_id = e.id;
      this.$axios({
        method: "post",
        url: "Order/UpdateOrderAddress",
        data: {
          order_no: this.orderid,
          address_id: e.id
        }
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            this.dialogVisible = false;
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
    },
    // 更新身份证
    chooseIdcard(e) {
      this.order.id_card = e.id_card;
      this.order.real_name = e.real_name;
      this.$axios({
        method: "post",
        url: "Order/UpdateOrderCustInfo",
        data: {
          order_no: this.orderid,
          id_card: e.id_card,
          real_name: e.real_name
        }
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            this.dialogidcard = false;
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
    },
    // 更换支付方式
    changepaytype(e) {
      this.paytype = e.type;
      this.dialogidpaytype = false;
    },
    // 支付
    pay(){
      if(this.paytype=='0'){
         this.$notify({
          title: '支付宝支付',
          message:'支付宝支付'
        });
      }else if(this.paytype=='1'){
        this.$notify({
          title: '微信支付',
          message: '微信支付'
        });

      }else if(this.paytype=='2'){
        this.$notify({
          title: '银联支付',
          message: '银联支付'
        });

      }
    }
  }
};
</script>
<style lang="less" >
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
.orderlist_title {
  border-bottom: 1px solid #e6e6e6;
  margin: 20px 0 0 0;
  .orderlist_titlename {
    border-left: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
  }
  .orderlist_titlename:last-child {
    border-right: 1px solid #e6e6e6;
  }
}
.orderlist_ul {
  border-bottom: 1px solid #e6e6e6;

  .orderlist_item {
    border-left: 1px solid #e6e6e6;
    img {
      width: 90%;
    }
  }
  .orderlist_item:last-child {
    border-right: 1px solid #e6e6e6;
  }
}
.paybox {
  border: 1px solid #ff69b4;
  .paybox_shadow {
    border: 3px solid #ffe9f4;
  }
}
.addbutton {
  padding: 10px 20px;
  border-radius: 5px;
}

.paytypeitem {
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  svg {
    width: 30px;
    height: 30px;
  }
  i {
    font-size: 40px;
    bottom: -5px;
    right: -6px;
  }
}
</style>