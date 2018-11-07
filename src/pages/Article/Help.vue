<template>
  <div>
    <el-row :gutter="0">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
        <div class="header pd10_20 font-size15 bold">
          <span>服务帮助</span>
        </div>
        <el-row class="flex_around_center fw">
          <el-col  :span="6" v-for="(item,index) in Linklist" :key="index">
            <div  class="pd20 bgf2 color333 mg10 bd">
              <router-link class="color333 font-size14 tc" :to="{name:item.link}">
                <p>
                  {{item.name}}
                </p>
                <p class="font-size12 color999 common_a">点击查看——></p>
              </router-link>
            </div>

          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp;</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Linklist: [
        { name: "消费者告知书", link: "Customer" },
        { name: "跨境电商综合税说明", link: "Tax" },
        { name: "购物流程", link: "Shopline" },
        { name: "支付方式", link: "Paytype" },
        { name: "通关关税", link: "Tariff" },
        { name: "退货政策", link: "Returnspolicy" },
        { name: "退货流程", link: "ReturnProcess" },
        { name: "联系客服", link: "Service" }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>
<style lang="less" >
</style>