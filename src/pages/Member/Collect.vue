<template>
  <div>
    <el-row :gutter="0">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
        <div class="header pd10_20 font-size15 bold">
          <span>我的收藏</span>
        </div>
        <el-row v-if="goods_list.data_list.length>0">
          <Commodity v-for="(item,index) in goods_list.data_list" :commodity='item' :key='index'></Commodity>
        </el-row>
        <div v-if="goods_list.data_list.length==0" class="flex_column_center_center pd30">
          <svg class="icon mg0_10" aria-hidden="true">
            <use xlink:href="#el-icon-comeyang-kongzhuangtai"></use>
          </svg>
          <p class="font-size12 color333 mg10_0 ">没有收藏商品哦</p>
          <p class="font-size12 color333 common_a flex_center_center" @click="back()">
            <i class="el-icon-comeyang-fanhui commoncolor"></i>
            <span>返回上级</span>
          </p>
        </div>
        <!-- <el-row v-if="goods_list.data_list.length>0">
          <el-pagination background layout="prev, pager, next" :currentPage="page_index" :total="total" :page-size="page_size" @current-change="changepage">
          </el-pagination>
        </el-row> -->
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
      goods_list: {
        data_list:[]
      },
      // page_index: 1, //页数
      // page_size: 12, //一页数量
      // total: 0
    };
  },
  created() {
    this.GetMyGoodsCollectionList();
    
  },
   components: {
    Commodity
  },
  methods: {
    // 获取收藏信息/ShopGoods/MyGoodsCollectionList
    GetMyGoodsCollectionList() {
      this.$axios({
        method: "get",
        url: "ShopGoods/MyGoodsCollectionList"
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            this.goods_list = res.data.res_content;
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
     // 回到上一页
    back() {
      this.$router.back();
    },
  }
};
</script>
<style lang="less" >
</style>