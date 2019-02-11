<template>
  <div>
    <el-row :gutter="0">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col :xs="10" :sm="9" :md="8" :lg="6" :xl="5">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div class="swiper-container gallery-top mg10_0" style="width:98%">
            <div class="swiper-wrapper">
              <div v-for="(item,index) in Goodsdetail.banner_list" :key='index' class="swiper-slide ">
                <img-zoom class="bd" :src="item.url" :bigsrc="item.url" :configs="configs"></img-zoom>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div class="swiper-container gallery-thumbs" style="width:98%">
            <div class="swiper-wrapper">
              <div v-for="(item,index) in Goodsdetail.banner_list" :key='index' class="swiper-slide">
                <img class="bd" :src="item.url">
              </div>
            </div>
          </div>
        </el-col>
      </el-col>
      <el-col :xs="14" :sm="13" :md="10" :lg="8" :xl="7" class="relative">
        <div class="pd0_20 commodity_message  ">
          <div class="mg10_0">
            <router-link class="color999 common_a font-size12 " :to='{name:"BrandDetail",query:{id:Goodsdetail.brand_code}}'>{{Goodsdetail.brand_name}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;更多品牌商品
              <i class="el-icon-comeyang-jiantou"></i>
            </router-link>
          </div>
          <div class="font-size18 bold mg20_0">{{Goodsdetail.goods_name}}</div>
          <div class="pd30_0 commodity_price">
            <span v-if="discount_type==0" class="font-size14 bold width40 title">售价:</span>
            <span v-if="discount_type==1" class="font-size14 bold width40 title">vip价:</span>
            <span v-if="discount_type==2" class="font-size14 bold width40 title">上新价:</span>
            <span v-if="discount_type==3" class="font-size14 bold width40 title">活动价:</span>
            <span class="commoncolor font-size18 bold">￥{{discount_price}}</span>
            <span class="through font-size12 colorc5" v-if="discount_type!==0">原价:￥{{original}}</span>
          </div>
          <div class="flex_start_center mg20_0">
            <span class="font-size14 bold width40 title">运费:</span>
            <span class="font-size14 pd0_10">由买家承担</span>
          </div>
          <div v-if="Goodsdetail.inbond=='1'" class="flex_start_center mg20_0">
            <span class="font-size14 bold width40 title">关税:</span>
            <span v-if="Goodsdetail.intax=='1'&&Goodsdetail.inbond=='1'" class="font-size14 pd0_10">包税</span>
            <span v-else-if="Goodsdetail.intax=='0'&&Goodsdetail.inbond=='1'">{{Goodsdetail.tax}}</span>
          </div>
          <div class="flex_start_start mg20_0">
            <span class="font-size14 bold width40 title">规格:</span>
            <div class="pd0_10 commodity_sort">
              <ul>
                <li v-for='(a,b) in Goodsdetail.spec_list' :class="{'nocount':a.stock_count<=0,'actived':currentTab==a.spec_no}" :key="b" @click="a.stock_count>0?rudioChoose(a):soldout()">
                  <span class="font-size12">{{a.spec_name}}</span>
                  <i v-if="currentTab==a.spec_no" class="el-icon-comeyang-gouxuan commoncolor"></i>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex_start_center mg20_0">
            <span class="font-size14 bold width40 title">数量:</span>
            <div class="font-size14 pd0_10">
              <el-input-number size="mini" controls-position="right" v-model="quantity" :min="1" :max="repertory"></el-input-number>
              <span class="font-size12 color999">（库存{{repertory?repertory:'0'}}）</span>
            </div>
          </div>
          <div class="mg20_0">
            <div v-if="Goodsdetail.del_flag=='1'||Goodsdetail.put_on_type=='1'">
              <button class="shopping_button color333 font-size16  bd">已下架</button>
              <i class="font-size12 pd0_20" @click="collect" :class="{'el-icon-star-on':Goodsdetail.is_collected==1,'commoncolor':Goodsdetail.is_collected==1,'el-icon-star-off':Goodsdetail.is_collected==0}">
                {{Goodsdetail.is_collected==1?"已收藏":"收藏"}}
              </i>
            </div>
            <div v-else-if="!Buystate">
              <button class="shopping_button  color333 font-size16  bd">已售罄</button>
              <i class="font-size12 pd0_20" @click="collect" :class="{'el-icon-star-on':Goodsdetail.is_collected==1,'commoncolor':Goodsdetail.is_collected==1,'el-icon-star-off':Goodsdetail.is_collected==0}">
                {{Goodsdetail.is_collected==1?"已收藏":"收藏"}}
              </i>
            </div>
            <div v-else>
              <button class="shopping_button commoncolor font-size16 buy commonbd" @click="addorder">立即购买</button>
              <button class="shopping_button white font-size16 cart commonbg commonbd" @click="addcart">
                <i class="el-icon-comeyang-gouwuche mg0_5"></i>加入购物车</button>
              <i class="font-size12 pd0_20" @click="collect" :class="{'el-icon-star-on':Goodsdetail.is_collected==1,'commoncolor':Goodsdetail.is_collected==1,'el-icon-star-off':Goodsdetail.is_collected==0}">
                {{Goodsdetail.is_collected==1?"已收藏":"收藏"}}
              </i>
            </div>

          </div>

        </div>
      </el-col>
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp;</el-col>

    </el-row>
    <el-row class="mg30_0">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="4">
        <div class="bd rank">
          <div class="pd20 bg333 white bold">销量排行</div>
          <div>
            <CommodityRank v-for="(c,d) in Commodityranklist" :commodity='c' :key='"classify_body"+d'></CommodityRank>
          </div>
          <div class="pd20 white bold tc">
            <router-link class="white pd3  more" :to="{path:'/CommodityList'}">查看更多
              <i class="el-icon-comeyang-jiantou"></i>
            </router-link>
          </div>
        </div>

      </el-col>
      <el-col class="bd" :xs="19" :sm="17" :md="13" :lg="10" :xl="8">
        <div class="commodity_tab bgf6">
          <ul class="flex_start_center ">
            <li class="pd20_30 whitebg bold active">商品详情</li>
            <!-- <li class="pd20_30">评论</li> -->
          </ul>
        </div>
        <div class="commodity_html" v-html="Goodsdetail.rich_text"></div>
      </el-col>
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
    </el-row>
  </div>

</template>

<script>
import Commodity from "../../components/Commodity";
import CommodityRank from "../../components/CommodityRank";
import Swiper from "swiper";
import imgZoom from "vue2.0-zoom";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      Goodsdetail: {},
      quantity: "1",
      activeprice: "", //价格
      repertoryMax: 0, //库存
      specificationId: "",
      currentTab: "", //选中的规格
      repertory: 1, //选中规格的库存
      active: "", //选中的规格
      Buystate: false, //是否能购买
      discount_type: "0", //团购类型
      discount_price: 0, //团购价格
      original: 0, //原始价格
      Commodityranklist: [], //销量列表
      configs: {
        width: 400,
        height: 400,
        maskWidth: 100,
        maskHeight: 100,
        maskColor: "black",
        maskOpacity: 0.2
      }
    };
  },
  created() {
    this.GetShopGoodsDetail();
    this.GetCommodityranklist();
  },
  mounted() {
    var galleryThumbs = new Swiper(".gallery-thumbs", {
      spaceBetween: 10,
      slidesPerView: 5,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      observer: true,
      observeParents: true
    });
    var galleryTop = new Swiper(".gallery-top", {
      spaceBetween: 10,
      effect: "fade",
      thumbs: {
        swiper: galleryThumbs
      },
      observer: true,
      observeParents: true
    });
  },
  components: {
    Commodity,
    CommodityRank,
    imgZoom
  },
  methods: {
    // 获取商品详情
    GetShopGoodsDetail() {
      this.repertoryMax = 0;
      this.repertory = 0;
      this.Buystate = false;
      this.quantity = 1;
      this.$axios({
        method: "get",
        url: "ShopGoods/ShopGoodsDetail?goods_id=" + this.$route.query.id
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            console.log(res.data.res_content);
            this.Goodsdetail = res.data.res_content;
            for (var i = 0; i < res.data.res_content.spec_list.length; ++i) {
              if (res.data.res_content.spec_list[i].stock_count > 0) {
                this.repertoryMax = Number(
                  res.data.res_content.spec_list[i].stock_count
                );
                this.specificationId =
                  res.data.res_content.spec_list[i].spec_no;
                this.currentTab = res.data.res_content.spec_list[i].spec_no;
                this.repertory = Number(
                  res.data.res_content.spec_list[i].stock_count
                );
                this.active = res.data.res_content.spec_list[i];
                this.Buystate = true;
                this.discount_type =
                  res.data.res_content.spec_list[i].discount_type;
                if (
                  res.data.res_content.intax == "0" &&
                  res.data.res_content.inbond == "1"
                ) {
                  // this.activeprice = res.data.res_content.spec_list[i].price;
                  this.discount_price =
                    res.data.res_content.spec_list[i].discount_price;
                  this.original = res.data.res_content.spec_list[i].total_price;
                  this.tax = res.data.res_content.spec_list[i].tax;
                } else {
                  this.discount_price =
                    res.data.res_content.spec_list[i].discount_price;
                  this.original = res.data.res_content.spec_list[i].total_price;
                }
                break;
              } else {
                if (
                  res.data.res_content.intax == "0" &&
                  res.data.res_content.inbond == "1"
                ) {
                  // this.activeprice = res.data.res_content.spec_list[i].price;
                  this.discount_price =
                    res.data.res_content.spec_list[i].discount_price;
                  this.original = res.data.res_content.spec_list[i].total_price;
                  this.tax = res.data.res_content.spec_list[i].tax;
                } else {
                  this.discount_price =
                    res.data.res_content.spec_list[i].discount_price;
                  this.original = res.data.res_content.spec_list[i].total_price;
                }
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
    // 已售空
    soldout() {
      this.$message({
        showClose: true,
        message: "此规格已售空",
        type: "error"
      });
    },
    rudioChoose(e) {
      //设置当前样式
      this.specificationId = e.spec_no;
      this.repertory = Number(e.stock_count);
      this.repertoryMax = Number(e.stock_count);
      this.currentTab = e.spec_no;
      this.specificationId = e.id;
      this.quantity = "1";
      this.discount_price = e.discount_price;
      this.original = e.total_price;
      if (this.Goodsdetail.intax == "0") {
        this.tax = e.tax;
      }
    },
    // 收藏
    collect() {
      if (this.Goodsdetail.is_collected == 0) {
        this.$axios({
          method: "post",
          url: "ShopGoods/AddMyGoodsCollection",
          data: {
            goods_id: this.Goodsdetail.goods_id
          }
        })
          .then(res => {
            console.log(res);
            if (res.data.res_status_code == "0") {
              this.$message({
                showClose: true,
                message: "收藏成功~",
                type: "success"
              });
              this.GetShopGoodsDetail();
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
      } else {
        this.$axios({
          method: "post",
          url: "ShopGoods/RemoveMyGoodsCollection",
          data: {
            goods_id: this.Goodsdetail.goods_id
          }
        })
          .then(res => {
            console.log(res);
            if (res.data.res_status_code == "0") {
              this.$message({
                showClose: true,
                message: "取消收藏~",
                type: "success"
              });
              this.GetShopGoodsDetail();
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
    },
    //加入购物车
    addcart() {
      if (this.repertory == "0") {
        this.$message({
          showClose: true,
          message: "此规格已售空",
          type: "error"
        });
      } else {
        var cartdata = {};
        cartdata.goods_id = this.Goodsdetail.goods_id;
        cartdata.spec_no = this.currentTab;
        cartdata.count = this.quantity;
        this.$axios({
          method: "post",
          url: "ShoppingCart/AddToCart",
          data: cartdata
        })
          .then(res => {
            console.log(res);
            if (res.data.res_status_code == "0") {
              this.$message({
                showClose: true,
                message: "成功加入购物车~",
                type: "success"
              });
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
    },
    // todo立即下单
    addorder() {
      if (this.repertory == "0") {
        this.$message({
          showClose: true,
          message: "此规格已售空",
          type: "error"
        });
      } else {
        var cartdata = {};
        cartdata.goods_id = this.Goodsdetail.goods_id;
        cartdata.spec_no = this.currentTab;
        cartdata.count = this.quantity;
        this.$axios({
          method: "post",
          url: "Order/CreateOrderFromGoods",
          data: cartdata
        })
          .then(res => {
            console.log(res);
            if (res.data.res_status_code == "0") {
              this.$router.push({
                name: "ConfirmOrder",
                query: { orderid: res.data.res_content.order.order_no }
              });
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
    },
    // 获取热销榜
    GetCommodityranklist() {
      this.$axios({
        method: "get",
        url: "ShopGoods/ShopGoodsList",
        params: {
          page_index: "1",
          page_size: "20",
          order_column: "monthly_sales_volume",
          order_sord: "desc"
        }
      })
        .then(res => {
          console.log(res);
          if (res.data.res_status_code == "0") {
            this.Commodityranklist = res.data.res_content.data_list;
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
  },
  watch: {
    $route(to, from) {
      this.GetShopGoodsDetail();
    }
  }
};
</script>
<style lang="less"  >
.swiper-slide img {
  width: 100%;
}

.gallery-thumbs {
  width: 100%;
  .bd {
    border: 2px solid #e6e6e6;
  }
  .swiper-slide-thumb-active img {
    border: 2px solid #f43594;
  }
  img {
    width: 90%;
  }
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-thumb-active {
  opacity: 1;
}
.commodity_message {
  height: 100%;
  width: 100%;
}
.commodity_price {
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
}
.shopping_button {
  padding: 10px 30px;
}
.buy {
  background: #fff3f9;
}
.title {
  flex-shrink: 0;
}
.commodity_sort {
  ul {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: -10px 0 0 0;
  }
  li {
    margin: 5px;
    padding: 5px 10px;
    border: 2px solid #ddd;
    position: relative;
    i {
      position: absolute;
      bottom: -3px;
      right: -3px;
    }
  }
  li:hover {
    border: 2px solid #ff69b4;
  }
  .nocount {
    color: #ccc;
  }
  .nocount:hover {
    border: 2px solid #ddd;
  }
  .actived {
    border: 2px solid #ff69b4;
  }
}
.rank {
  margin: 0 5%;
  .more {
    border-radius: 10px;
    padding: 5px 10px;
    background: #666;
  }
}
.commodity_tab {
  li:nth-child(1) {
    border-right: 1px solid #ccc;
  }
  .active {
    border-top: 3px solid #ff69b4;
  }
}
.commodity_html {
  img,
  p,
  div {
    margin: 0;
    padding: 0;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  img {
    width: 100%;
    height: 100%;
    vertical-align: top;
    outline-width: 0px;
  }
}
</style>

