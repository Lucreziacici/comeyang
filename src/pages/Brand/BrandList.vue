<template>
  <div>
    <el-row :gutter="0">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
        <div class="header pd10_20 font-size15 bold">
          <span>品牌钜惠</span>
        </div>
        <div class="brand_List flex_start_center fw">
          <el-col :span="4" v-for="(item,index) in brandList" :key="index" class="brand_item pd10">
            <router-link :to="{name:'BrandDetail',query:{id:item.brand_code}}">
              <p class="pd10 bgf2 font-size12 color333 flex_between_center">
                <span class="brand_title">{{item.brand_name}}</span>
                <span>({{item.sales_goods_count}})</span>
              </p>
              <div class="brand_img ">
                <img v-if="item.brand_logo" :src="item.brand_logo" />
                <img v-else src="../../assets/error.png" />
              </div>
              <div class="font-size12 more  tc pd10_0 color333">查看更多<i class="el-icon-comeyang-jiantou font-size12"></i></div>

            </router-link>
          </el-col>

        </div>
      </el-col>
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp;</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brandList: []
    };
  },
  created() {
    this.GetBrandList();
  },
  methods: {
    // 获取品牌列表
    GetBrandList() {
      this.$axios({
        method: "get",
        url: "Brand/BrandList"
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            this.brandList = res.data.res_content;
          } else {
            this.$message(res.data.res_message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.brand_item {
  .brand_title {
    display: block;
    line-height: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    height: 20px;
    max-width: 90%;
    overflow: hidden;
  }
  .brand_img {
    border: 1px solid #f2f2f2;
    width: 98%;
    height: 0px;
    padding-bottom: 100%;
    position: relative;
  }
  img {
    width: 85%;
    height: 85%;
    position: absolute;
    margin: 8%;
  }
  .more{
    border: 1px solid #f2f2f2;
  }
}
</style>