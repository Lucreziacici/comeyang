<template>
  <div>
    <el-row :gutter="0">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
        <div class="header pd10_20  flex_between_center">
          <span class="font-size15 bold">商品列表</span>
          <!-- todo 排序 -->
          <div class="sortlist flex_between_center font-size12">
            <div class="sortitem bd flex_center_center mg0_10 whitebg" :class="activesort=='1'?'sort_active_item':''" data-rank="desc" data-column="monthly_sales_volume" @click.stop="orderby($event,1)">
              <p data-rank="desc" data-column="monthly_sales_volume" @click="orderby($event,1)">综合</p>
            </div>
            <div class="sortitem bd flex_center_center mg0_10 whitebg" :class="activesort=='2'?'sort_active_item':''" data-rank="asc" data-column="show_price" @click.stop="orderby($event,2)">
              <p data-rank="asc" data-column="show_price">价格</p>
              <i data-rank="asc" data-column="show_price" :class="order_column=='show_price'&&order_sord=='asc'?'el-icon-arrow-up':'el-icon-arrow-down'"></i>
            </div>
            <div class="sortitem bd flex_center_center mg0_10 whitebg" :class="activesort=='3'?'sort_active_item':''" data-rank="desc" data-column="monthly_sales_volume" @click.stop="orderby($event,3)">
              <p data-rank="desc" data-column="monthly_sales_volume" @click="orderby($event,3)">销量</p>
            </div>

          </div>
        </div>
        <el-row v-if="goods_list.data_list.length>0">
          <Commodity v-for="(item,index) in goods_list.data_list" :commodity='item' :key='index'></Commodity>
        </el-row>
        <div v-if="goods_list.data_list.length==0" class="flex_column_center_center pd30">
          <svg class="icon mg0_10" aria-hidden="true">
            <use xlink:href="#el-icon-comeyang-kongzhuangtai"></use>
          </svg>
          <p class="font-size12 color333 mg10_0 ">没有找到商品哦</p>
          <p class="font-size12 color333 common_a flex_center_center" @click="back()">
            <i class="el-icon-comeyang-fanhui commoncolor"></i>
            <span>返回上级</span>
          </p>
        </div>
        <el-row v-if="goods_list.data_list.length>0">
          <el-pagination background layout="prev, pager, next" :currentPage="page_index" :total="total" :page-size="page_size" @current-change="changepage">
          </el-pagination>
        </el-row>
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
      key_word: this.$route.query.keyword ? this.$route.query.keyword : "", //关键词
      brand_code: this.$route.query.brand_code
        ? this.$route.query.brand_code
        : "", //品牌code
      category_id: this.$route.query.category_id
        ? this.$route.query.category_id
        : "", //类别
      big_category_id: this.$route.query.big_category_id
        ? this.$route.query.big_category_id
        : "", //大类别
      page_index: 1, //页数
      page_size: 12, //一页数量
      order_column: "monthly_sales_volume", //排序规则
      order_sord: "desc", //顺序or倒序
      goods_list: {
        data_list: []
      },
      total: 0,
      activesort: 1,
      background: true
    };
  },
  components: {
    Commodity
  },
  created() {
    this.GetShopGoodsList();
  },
  methods: {
    // 获取商品列表
    GetShopGoodsList() {
      this.$axios({
        method: "get",
        url: "ShopGoods/ShopGoodsList",
        params: {
          key_word: this.key_word,
          brand_code: this.brand_code,
          category_id: this.category_id,
          big_category_id: this.big_category_id,
          page_index: this.page_index,
          page_size: this.page_size,

          order_column: this.order_column,
          order_sord: this.order_sord
        }
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            this.goods_list = res.data.res_content;
            this.total = res.data.res_content.total_count;
            // this.currentPage=res.data.res_content.page_index;
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
    // 翻页
    changepage(e) {
      console.log(e);
      this.page_index = e;
      this.GetShopGoodsList();
    },
    // 回到上一页
    back() {
      this.$router.back();
    },
    //排序
    orderby(e, i) {
      console.log(e, i);
      this.order_column = e.target.getAttribute("data-column");
      if (i == 2) {
        if (
          e.target.getAttribute("data-column") == "show_price" &&
          this.order_sord == "asc"
        ) {
          this.order_sord = "desc";
        } else {
          this.order_sord = "asc";
        }
      } else {
        this.order_sord = e.target.getAttribute("data-rank");
      }

      this.activesort = i;
      this.GetShopGoodsList();
    }
  },
  watch: {
    $route(to, from) {
      this.page_index = 1;
      this.key_word = this.$route.query.keyword
        ? this.$route.query.keyword
        : "";
      this.brand_code = this.$route.query.brand_code
        ? this.$route.query.brand_code
        : "";
      this.category_id = this.$route.query.category_id
        ? this.$route.query.category_id
        : "";
      this.big_category_id = this.$route.query.big_category_id
        ? this.$route.query.big_category_id
        : "";
      this.GetShopGoodsList();
    }
  }
};
</script>
<style lang="less" >
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background: #ff69b4;
}
.el-pager li:hover {
  color: #ff69b4;
}
.number:hover,
.number:focus,
.number:hover {
  color: #ff69b4;
}
.sortitem {
  width: 80px;
}
.sort_active_item {
  background: #ff69b4;
  color: white;
}
</style>