<template>
  <div>
    <el-row :gutter="0">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
        <div class="header flex_between_center pd10_20 font-size15 bold">
          <span>物流详情</span>
          <span>
            订单号:{{order_no}}
          </span>
        </div>
        <div v-for="(item,index) in package_list" :key="index" class="commodity_list bd mg10_0">
          <div class="Logistics_title pd20 bold">包裹{{index+1}}</div>
          <OrderCommodity v-for="(a,b) in item.detail_list" :key="b" :a="a"></OrderCommodity>
          <div v-if="item.delivery_name" class="logistics_message bold pd20">
            <p class="font-size14 mg10_0">物流信息:{{item.delivery_name}}</p>
            <p class="font-size14 mg10_0">物流单号:{{item.logistics_no}}</p>
            <div class="line"></div>
          </div>
          <div v-else>
            <p class="font-size14 mg10_0">暂无物流信息</p>
            <div class="line"></div>
          </div>
          <div>
            <div class="order_detaillist_ul" v-for="(c,d) in item.express_info.list" :key="d">
              <div class='order_detaillist_li pd0_20'>
                <div class="order_main_message pd10_0 flex_start_center">
                  <div>
                    <span class="timeline_dot"></span>
                  </div>
                  <div class="order_detail_message font-size12 color333">
                    <span>{{c.status}} | {{c.time}}</span>
                  </div>
                </div>
                <div class="line"></div>
              </div>
            </div>
          </div>
        </div>
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
      order_no: this.$route.query.orderid,
      package_list: {
        detail_list: [],
        express_info: {
          list: []
        }
      }
    };
  },
  created() {
    this.GetLogisticsInfo();
  },
  components: {
    OrderCommodity
  },
  methods: {
    // 获取物流信息
    GetLogisticsInfo() {
      this.$axios({
        method: "get",
        url: "Logistics/LogisticsInfo",
        params: {
          order_no: this.order_no
        }
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
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
    }
  }
};
</script>
<style lang="less" >
.Logistics_title {
  border: 1px solid #f2f2f2;
}

.line {
  height: 1px;
  background: #f2f2f2;
}
</style>