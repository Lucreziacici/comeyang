<template>
  <div>
    <el-row class="header" :gutter="1">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col class="minwidth550" :xs="12" :sm="11" :md="9" :lg="7" :xl="6">
        <div class="pd0_10">
          <span class="font-size12 color333">洋来了购物欢迎你</span>
          <router-link class="common_a font-size12 color333 pd0_10" :to="{name:'Login'}">登录</router-link>∣
          <router-link class="common_a font-size12 color333 pd0_5" :to="{name:'Register'}">免费注册</router-link>
        </div>
      </el-col>
      <el-col class="minwidth550" :xs="12" :sm="11" :md="9" :lg="7" :xl="6">
        <div class="right">
          <router-link class="common_a font-size12 color333 pd0_10" :to="{name:'OrderList'}">我的订单</router-link>∣
          <router-link class="common_a font-size12 color333 pd0_5" :to="{name:'Member'}">个人中心</router-link>∣
          <router-link class="common_a font-size12 color333 pd0_5" :to="{name:'Help'}">服务帮助</router-link>
        </div>
      </el-col>
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6"></el-col>
    </el-row>
    <el-row :gutter="0">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col class="minwidth1100" :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
        <div class="pd20_0 flex_between_center">
          <div><img src="../assets/logo.jpg"></div>
          <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
            <el-input placeholder="请输入内容" class="header_input" @keyup.enter.native="loginSubmit" v-model="keyword" prefix-icon="el-icon-search">
              <template slot="append">
                <p @click="loginSubmit()">
                  搜索
                </p>

              </template>
            </el-input>
            <div>
              <router-link v-for="(item,index) in searchword" v-bind:key='index' class="common_a font-size12 color333 pd0_5" :to="{path: '/CommodityList',query:{keyword:item.search_word}}">{{item.search_word}}</router-link>
            </div>
          </el-col>
          <div><img src="../assets/top_right.jpg"></div>
        </div>
      </el-col>
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp;</el-col>
    </el-row>
    <el-row class="commonbg navigation " :gutter="1">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col class="flex_between_center minwidth1100" :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
        <div class="pd10 mg0_5 font-size15 white a" v-on:mouseenter="Showcommodity()" v-on:mouseleave="leave()" >
          <i class="pd0_10 el-icon-comeyang-category" ></i >所有商品</div>
        <router-link class="pd10 mg0_5 font-size15 white a" :class="routename=='Main'?'router_active':''" :to="{ path: '/' }">首页</router-link>
        <router-link class="pd10 mg0_5 font-size15 white a" :class="routename=='Customer'?'router_active':''" :to="{name:'Customer'}">消费者告知书</router-link>
        <router-link class="pd10 mg0_5 font-size15 white a" :class="routename=='BrandList'?'router_active':''" :to="{name:'BrandList'}">品牌钜惠</router-link>
        <router-link class="pd10 mg0_5 font-size15 white a" :class="routename=='Tax'?'router_active':''" :to="{path:'/Tax'}">跨境电商综合税说明</router-link>
        <router-link class="pd10 mg0_5 font-size15 white a" :class="routename=='CommodityList'?'router_active':''" :to="{path:'/CommodityList'}">新品推荐</router-link>
        <router-link class="pd10 mg0_5 font-size15 white a" :class="routename=='Cart'?'router_active':''" :to="{ path: '/Cart' }">购物车</router-link>
      </el-col>
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp;</el-col>
    </el-row>
    <div v-show="isShow" class="absolute" style="z-index:1000;width:100%"  >
      <el-row :gutter="1">
        <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
        <el-col :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
          <div class="bd pd20 whitebg  floatbox" v-on:mouseenter="Showcommodity()" v-on:mouseleave="leave()">
            <div class="pd20" v-for="(item,index) in BigCategoryList" :key="index">
              <div class="floattitle ">
                <router-link class="color333 font-size14 bold flex_between_center" :to="{path: '/CommodityList',query:{big_category_id:item.id}}">
                  <span>{{item.name}}:</span>
                  <span class="common_a">查看更多</span>

                </router-link>

              </div>
              <div class="floatbody mg10">
                <router-link class="font-size12 commoncolor  common_a" v-for="(a,b) in item.CategoryList" :key="b" :to="{path: '/CommodityList',query:{category_id:a.id}}">{{a.name}}&nbsp;&nbsp;&nbsp;&nbsp;

                </router-link>

              </div>

            </div>
          </div>

        </el-col>
        <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchword: [],
      routename: "",
      keyword: "",
      BigCategoryList: [],
      isShow:false
    };
  },
  created() {
    // console.log(this.$route.name);
    this.SearchWordList();
    this.GetBigCategoryList();
  },
  methods: {
    // 获取搜索关键词
    SearchWordList() {
      this.$axios({
        method: "get",
        url: "HotSearch/SearchWordList"
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            this.searchword = res.data.res_content;
          } else {
            this.$message(res.data.res_message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 搜索
    loginSubmit() {
      this.$router.push({
        name: "CommodityList",
        query: { keyword: this.keyword }
      });
    },
    // 获取列表
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
                // this.GetCommodiy(res.data.res_content[i].id, i);
              }
            }
          } else {
            this.$message(res.data.res_message);
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
            vm.$set(this.BigCategoryList, i, this.BigCategoryList[i]);
          } else {
            this.$message(res.data.res_message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    Showcommodity(){
      console.log("移入")
      this.isShow=true;
    },
    leave(){
      this.isShow=false;
    }
  },
  watch: {
    $route(to, from) {
      console.log(this.$route.name);
      this.routename = this.$route.name;
      this.isShow=false;
    }
  },
  beforeUpdate: function() {
    // this.activeIndex = this.$route.matched[1].path;
  }
};
</script>
<style lang="less" >
.el-header {
  padding: 0;
  height: auto !important;
}
.header {
  height: 30px;
  line-height: 30px;
  background: #f2f2f2;
  border-bottom: 1px solid #eee;
}

.navigation .a:hover {
  background: #f43594;
}
.header_input {
  height: 26px;
  .el-input__inner {
    border: 1px solid #ff69b4;
    height: 26px;
    line-height: 26px;
  }
  .el-input-group__append {
    background: #ff69b4;
    border: 1px solid #ff69b4;
    color: white;
  }
  .el-input__icon {
    line-height: 26px;
  }
  .el-input-group__append,
  .el-input-group__prepend {
    padding: 0;
    p {
      padding: 0 20px;
    }
  }
}
.router_active {
  background: #f43594;
}
.floatbox {
    width: 60%;
    z-index: 100;
}
</style>

