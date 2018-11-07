<template>
  <el-col class="flex_between_center mg10_0 bd" :xs="size" :sm="size" :md="size" :lg="size" :xl="size">
    <div class="commodity mg10_0 flex_center_center ">
      <router-link :to='{path:"/Commodity",query:{id:commodity.goods_id}}'>
        <div class="tc flex_center_center commodity_img"><img :src="commodity.main_image" /></div>
        <p class="common_a commodity_name font-size14 color333 relative mg10">{{commodity.goods_name}}</p>
        <div class="flex_between_center mg10">
          <p class="colorC00">
            <span class="font-size12">售价</span>
            <span class="font-size18">￥{{commodity.discount_price}}</span>
            
          </p>
        </div>
        <p class="mg10  through" v-if="commodity.discount_type!=='0'"><span class="font-size12 colorc5">原价:￥{{commodity.show_price}}</span></p>
        <span v-if="commodity.alias_name" class="tag pd3 mg10  font-size12 colorC00 bdC00">{{commodity.alias_name}}</span>
      </router-link>
    </div>
  </el-col>

</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    commodity: {
      type: Object,
      required: true
    },
    size: {
      type: Number,
      required: false,
      default: 4
    }
  }
};
</script>
<style lang="less" >
.commodity {
  width: 100%;
  a {
    width: 100%;
    position: relative;
    .commodity_name {
      line-height: 20px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      height: 40px;
      max-width: 90%;
      overflow: hidden;
    }
  }
  .commodity_img {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 100%;
  }
  img {
    position: absolute;
    top: 0;
    width: 90%;
    height: 90%;
    -webkit-transition: -webkit-transform 0.3s;
    transition: -webkit-transform 0.3s;
    -moz-transition: transform 0.3s, -moz-transform 0.3s;
    transition: transform 0.3s;
    transition: transform 0.3s, -webkit-transform 0.3s, -moz-transform 0.3s;
  }
  img:hover {
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
  }
  .tag {
    border-radius: 5px;
  }
}
</style>

