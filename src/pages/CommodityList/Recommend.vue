<template>
  <div>
    <el-row :gutter="0">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
        <div><img class="category_img" v-if="category.img_url" :src="category.img_url" alt=""></div>
        <Commodity v-for="(c,d) in category.category_goods_list" v-if="d<12" :size="4" :commodity='c' :key='"classify_body"+d'></Commodity>
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
      category_order: this.$route.query.category_order,
      home_id: this.$route.query.home_id,
      category: {}
    };
  },
  created() {
    this.GetSingleRecommendList();
  },
  components: {
    Commodity
  },
  methods: {
    GetSingleRecommendList() {
      this.$axios({
        method: "get",
        url: "HomePage/GetSingleRecommendList",
        params: {
          category_order: this.category_order,
          home_id: this.home_id
        }
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            this.category = res.data.res_content;
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
.category_img{
  width: 100%;
}
</style>