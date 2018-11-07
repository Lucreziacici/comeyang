<template>
	<div >
	  <el-row  :gutter="0">
     <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
     <el-col class="flex_between_start minwidth1100" :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
        <div class="bottom_link pd0_20">
          <div>
            <img src="../assets/logo.jpg">
          </div>
          <div class="flex_between_center  pd20_0">
            <span class="font-size12">关注我们</span>
            <a href="https://weibo.com/"><img src="../assets/sina-ico.png" alt=""></a>
            <a href="#"><img src="../assets/weixin-ico.png" alt=""></a>
            <a href="#"><img src="../assets/yixin-ico.png" alt=""></a>
          </div>
        </div>
        <div v-for="(item,index) in bottomlink" v-bind:key="index">
            <div class="font-size14 bold pd10_0">{{item.title}}</div>
            <div v-for="(a,b) in item.link" v-bind:key="b"><router-link class="common_a color333 font-size12 " :to="{name:a.router}">{{a.name}}</router-link></div>
        </div>
     </el-col>  
     <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp;</el-col>
   </el-row>
   <el-row  :gutter="0" class="copyright flex_column_center_center bg333 pd20_0">
        <el-col :xs="0" :sm="1" :md="3" :lg="3" :xl="4">&nbsp; </el-col>
        <el-col class="minwidth1100 tc" :xs="24" :sm="22" :md="18" :lg="18" :xl="16">
            <p class="white font-size12 pd5_0">© 2005-2018 洋来了跨境商城 版权所有，并保留所有权利。</p>
            <p class="white font-size12 pd5_0">ICP备案证书号:<a  class="white font-size12" href="http://www.miibeian.gov.cn/"> 沪ICP备17045703号-1</a></p>
        </el-col>
        <el-col :xs="0" :sm="1" :md="3" :lg="3" :xl="4">&nbsp; </el-col>
    </el-row>
	</div>

</template>

<script>
export default {
  data() {
    return {
      bottomlink: [
        {
          title: "消费者告知书",
          link: [{ name: "消费者告知书", router: "Customer" }]
        },
        {
          title: "跨境电商综合税说明",
          link: [{ name: "跨境电商综合税说明", router: "Tax" }]
        },
        {
          title: "公司保障",
          link: [
            { name: "自营正品", router: "" },
            { name: "海外直邮", router: "" },
            { name: "无忧退货", router: "" }
          ]
        },
        {
          title: "新手指南",
          link: [
            { name: "购物流程", router: "Shopline" },
            { name: "支付方式", router: "Paytype" },
            { name: "通关关税", router: "Tariff" }
          ]
        },
        {
          title: "售后服务",
          link: [
            { name: "退货政策", router: "Returnspolicy" },
            { name: "退货流程", router: "ReturnProcess" },
            { name: "联系客服", router: "Service" }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="less" >
.el-footer {
  padding: 0;
}
</style>

