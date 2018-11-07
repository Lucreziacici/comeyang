<template>
  <div>
    <el-row :gutter="0">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
        <div class="header pd10_20 font-size15 bold">
          <span>品牌详情</span>
        </div>
        <div class="brand_img bd pd20 mg10_0">
          <div>
            <img v-if="brand.brand_image" class="brand_image" :src="brand.brand_image">
            <div class="brand_message flex_start_center mg10">
              <img v-if="brand.brand_logo" :src="brand.brand_logo">
              <div class="mg30">
                <p>{{brand.brand_name}}</p>
                <p>在售商品{{brand.sales_goods_count}}个</p>
              </div>
            </div>
            <div>
              {{brand.brand_intro}}
            </div>
            <el-row>
              <Commodity v-for="(c,d) in brand.sales_goods_list" :size="6" :commodity='c' :key='"classify_body"+d'></Commodity>
            </el-row>

          </div>

        </div>
      </el-col>
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp;</el-col>
    </el-row>
  </div>
</template>

<script>
import Commodity from "../../components/Commodity";
export default {
  data() {
    return {
      brand_code: this.$route.query.id,
      brand: {},
      bgImg: {}
    };
  },
  components: {
    Commodity
  },
  created() {
    this.GetBrandDetail();
  },
  methods: {
    GetBrandDetail() {
      this.$axios({
        method: "get",
        url: "Brand/BrandDetail",
        params: {
          brand_code: this.brand_code
        }
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            this.brand = res.data.res_content;
            this.bgImg = {
              backgroundImage: "url(" + res.data.res_content.brand_image + ")"
            };
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
.brand_img {
  .brand_image {
    width: 100%;
    height: 290px;
    border: 1px solid #f2f2f2;
  }

  .brand_message {
    img {
      border: 2px solid #f2f2f2;
      border-radius: 100%;
    }
  }
}
</style>