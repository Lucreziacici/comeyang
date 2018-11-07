
<template>
	<div class="manage_page fillcontain">
	  <el-container>
       <el-header><Header></Header></el-header>
       <el-main><router-view v-wechat-title="$route.meta.title"></router-view></el-main>
       <el-footer><Footer></Footer></el-footer>
    </el-container>
	</div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  data() {
    return {
      
    };
  },
  computed: {
    defaultActive: function() {
      // console.log(this.$route.path)
      // return this.$route.path.replace("/", "");
    }
  },
  created(){
     console.log(this.$route.name)
     this.routename=this.$route.name;
  },
	components: {
    Header,
    Footer
  },
   watch: {
    $route(to, from) {
      document.body.scrollTop = 0; document.documentElement.scrollTop = 0;
    }
  }
};
</script>
<style lang="less">
@import "../style/common";
body,html{
    min-width: 1300px;
}
.el-main{
  padding: 10px 0;
  min-height: 500px;
}
</style>



