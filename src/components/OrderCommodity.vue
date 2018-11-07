<template>
  <div class="commodity_item">
    <el-row class="flex_between_center commodity_row">
      <el-col :span="3" class='font-size12 color333 tc pd10_0 tc pd10_0'><img :src="a.main_image" :alt="a.main_image"></el-col>
      <el-col :span="6" class='font-size12 color333 tc pd10_0'>
        <router-link class="flex_between_center common_a font-size12 color333 tc pd10_0" :to="{path:'/Commodity',query:{id:a.goods_id}}">
          <p>{{a.goods_name}}</p>
        </router-link>
      </el-col>
      <el-col :span="3" class='font-size12 color333 tc pd10_0'>规格：{{a.spec_name}}</el-col>
      <el-col :span="3" class='font-size12 color333 tc pd10_0'>单价：
        <span class="commoncolor">￥{{a.goods_price}}</span>
      </el-col>
      <el-col :span="4" class='font-size12 color333 tc pd10_0'>购买数量：{{a.goods_count}}</el-col>
    </el-row>
  </div>

</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    a: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: ""
    }
  },
  created() {}
};
</script>
<style lang="less" >
.commodity_item {
  border-bottom: 1px solid #f2f2f2;
  .commodity_row {
    el-col {
      border-left: 1px solid #f2f2f2;
    }
    img {
      width: 100px;
    }
  }
}
</style>