<template>
	<div >
    <!-- 轮播 -->
	  <el-row :gutter="0">
      <el-carousel trigger="click" height="400px">
      <el-carousel-item v-for="(item,index) in carousel_img"  :key='index' >
       <img :src="item.img"/>
      </el-carousel-item>
    </el-carousel>
   </el-row>
   <el-row :gutter="0">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col class="flex_between_center minwidth1100 fw" :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
        <div class="recommend">
          <div class="recommend_title flex_between_center">
            <p>
              <span class="font-size16 bold">热门品牌  </span>
              <span class="font-size15 bold">HOT BRAND  </span>
              <span class="font-size12 ">热门大牌  </span>
            </p>
            <p class="font-size14 bold common_a"><router-link class="common_a color333"  :to="{name:'BrandList'}">查看更多<i class="el-icon-comeyang-jiantou"></i></router-link></p>
          </div>
          <div class="recommend_body flex_between_center bd fw">
            <el-col class="flex_between_center" v-for="(item,index) in brandList" :key='index' v-if='index<16' :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
              <div class="recommend_brand_item pd10 mg10 flex_center_center bd"  >
                  <router-link :to="{name:'BrandDetail',query:{id:item.brand_code}}">
                    <img v-if="item.brand_logo" :src="item.brand_logo" />
                    <img v-else src="../assets/error.png"/>
                  </router-link>
              </div>
            </el-col>
          </div>
        </div>
        <div class="recommend" v-for="(item,index) in homePage.recommend" :key='index'>
          <div class="recommend_title flex_between_center">
            <p>
              <span class="font-size16 bold">{{item.category}}  </span>
            </p>
            <p class="font-size14 bold common_a"><router-link class="common_a color333" :to="{name:'Recommend',query:{home_id:homePage.page.id,category:item.category,category_order:item.category_order}}">查看更多<i class="el-icon-comeyang-jiantou"></i></router-link></p>
          </div>
          <div class="recommend_body flex_start_center fw ">
            <Commodity v-for="(a,b) in item.category_goods_list" v-if="b<6" :size="4" :commodity='a' :key='"recommend_body"+b'></Commodity>
          </div>
        </div>
        <div v-for="(item,index) in BigCategoryList" :key="'classify'+index" class="classify  fw  ">
          <div class="classify_front flex_between_center">
            <div class="classify_front_title color333 pd10 bold">{{item.name}}</div>
            <div class="classify_front_body pd10 mg0_10">
              <div class="classify_front_ul flex_start_center fw"><span class="pd0_5">·</span>
                <div v-for="(a,b) in item.CategoryList" :key="'CategoryList'+b" class="classify_front_item">
                  <router-link class="common_a color333 font-size12" :to="{path: '/CommodityList',query:{category_id:a.id}}">{{a.name}}<span class="pd0_5">·</span></router-link>
                </div>
              </div>
            </div>
          </div>
          <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"></el-col>
          <el-col class="classify_body"  :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
             <Commodity v-for="(c,d) in item.CommodityList"  v-if="d<12" :size="4" :commodity='c' :key='"classify_body"+d'></Commodity>
          </el-col>

        </div>
     </el-col>  
     <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp;</el-col>
     
    
   </el-row>
	</div>

</template>

<script>
import Commodity from "../components/Commodity";
export default {
  data() {
    return {
      carousel_img: [
        { img: "http://comeyang.com/data/afficheimg/1510170019866812915.jpg" },
        { img: "http://comeyang.com/data/afficheimg/1510170346522787529.jpg" }
      ],
      brandList: [], //品牌列表
      homePage: {}, //首页
      BigCategoryList: [] //分类
    };
  },
  created() {
    this.GetBrandList();
    this.GetHomePage();
    this.GetBigCategoryList();
  },
  components: {
    Commodity
  },
  methods: {
    GetBrandList() {
      this.$axios({
        method: "get",
        url: "Brand/BrandList"
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            this.brandList = res.data.res_content;
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
    GetHomePage() {
      this.$axios({
        method: "get",
        url: "HomePage/RequestHomePage"
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            this.homePage = res.data.res_content;
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
    GetBigCategoryList() {
      this.$axios({
        method: "get",
        url: "Category/BigCategoryList"
      })
        .then(res => {
          console.log(res.data.res_content);
          if (res.data.res_status_code == "0") {
            for (var i = 0; i < res.data.res_content.length; i++) {
              if (res.data.res_content[i].name !== "品牌导航") {
                this.BigCategoryList.push(res.data.res_content[i]);
                this.GetCategoryList(res.data.res_content[i].id, i);
                this.GetCommodiy(res.data.res_content[i].id, i);
              }
            }
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
    GetCategoryList(e, i) {
      this.$axios({
        method: "get",
        url: "Category/CategoryList?id=" + e
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            this.BigCategoryList[i].CategoryList = res.data.res_content;
            vm.$set(this.BigCategoryList,i,this.BigCategoryList[i])
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
    GetCommodiy(e, i) {
      this.$axios({
        method: "get",
        url: "ShopGoods/ShopGoodsList",
        params: {
          big_category_id: e,
          page_index: "1",
          page_size: "12",
          order_column: "monthly_sales_volume",
          order_sord: "desc",
        }
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            this.BigCategoryList[i].CommodityList = res.data.res_content.data_list;
            vm.$set(this.BigCategoryList,i,this.BigCategoryList[i])
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
<style lang="less"  >
.el-carousel__container{
  img{
    width: 100%;
  }
}
.recommend_title {
  padding: 30px 0;
}

.recommend_brand_item {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
.classify_front_title{
  min-width: 60px;
}
.classify_front{
  padding: 30px 0;
}
</style>

