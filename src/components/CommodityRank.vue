<template>
  <div class="commodityrank pd10 bd ">
    <router-link class="flex_between_center" :to='{path:"/Commodity",query:{id:commodity.goods_id}}'>
      <div class="commodity_img "><img class="bd" :src="commodity.main_image" /></div>
      <div class="commodity_message pd0_10">
        <p class="common_a commodity_name font-size12 color333 mg5_0">{{commodity.goods_name}}</p>
        <div class="flex_between_center mg5_0">
          <p class="colorC00">
            <span class="font-size12"></span>
            <span class="font-size14">￥{{commodity.discount_price}}</span>
            <span v-if="commodity.discount_type!=='0'" class="font-size12 through colorc5">￥{{commodity.show_price}}</span>
          </p>
        </div>
        <p class="font-size12 color333">已售出
          <span class="bold monthly_sales_volume">{{commodity.monthly_sales_volume}}</span>笔</p>
      </div>
    </router-link>
  </div>

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
    }
  }
};
</script>
<style lang="less" >
.commodityrank {
  // width: 100%;
  a {
    // width: 100%;
    .commodity_name {
      line-height: 20px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      height: 40px;
      overflow: hidden;
    }
  }
  .commodity_img {
    width: 30%;
  }
  .commodity_message {
    width: 70%;
  }
  img {
    width: 100%;
  }
  .monthly_sales_volume {
    color: #c97;
  }

  .tag {
    border-radius: 5px;
  }
}
.commodityrank:hover {
  background-color: #f7f7f7;
}
</style>

