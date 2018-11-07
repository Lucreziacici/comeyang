<template>
  <div class="menulist  flex_column_center_start  pd0_20">
    <div class="menutitle white tc">全部功能</div>
    <router-link class="menuitem color333 flex_between_center common_a font-size14 bold" :to="{name:'Userinfo'}">
      <span>用户信息</span>
      <i class="el-icon-comeyang-jiantou"></i>
    </router-link>
    <router-link class="menuitem color333 flex_between_center common_a font-size14 bold" :to="{name:'Collect'}">
      <span>我的收藏</span>
      <i class="el-icon-comeyang-jiantou"></i>
    </router-link>
    <router-link class="menuitem color333 flex_between_center common_a font-size14 bold" :to="{name:'Address'}">
      <span>地址管理</span>
      <i class="el-icon-comeyang-jiantou"></i>
    </router-link>
    <router-link class="menuitem color333 flex_between_center common_a font-size14 bold" :to="{name:'IdcardList'}">
      <span>身份证管理</span>
      <i class="el-icon-comeyang-jiantou"></i>
    </router-link>
    <router-link class="menuitem color333 flex_between_center common_a font-size14 bold" :to="{name:'ChangePassword'}">
      <span>更换密码</span>
      <i class="el-icon-comeyang-jiantou"></i>
    </router-link>
        <router-link class="menuitem color333 flex_between_center common_a font-size14 bold" :to="{name:'Help'}">
      <span>服务帮助</span>
      <i class="el-icon-comeyang-jiantou"></i>
    </router-link>

  </div>

</template>

<script>
export default {
  data() {
    return {};
  },
  props: {}
};
</script>
<style lang="less" >
.menutitle {
  background: #333;
  width: 100%;
  padding: 10px 0;
  border-left: 1px solid #333;
  border-right: 1px solid #333;
}
.menuitem {
  border-bottom: 1px solid #eee;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  padding: 10px 0;
  width: 100%;
  i{
    color: #777;
    font-size: 12px;
    padding: 0 30px 0 0 ;
  }
  span {
    padding: 0 0 0 30px;
  }
}
</style>

