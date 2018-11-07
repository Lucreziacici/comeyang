<template>
  <div class="flex_column_center_center">
    <!-- <div class="logo flex_center_center"><img src="../../assets/logo.jpg"></div> -->
    <div>
      <div class="mask tc pd30_0 flex_center_center bd mg30_0">
        <div class="whitebg logobg pd10_0">
          <div class="title font-size30 bold color333">登&nbsp;&nbsp;&nbsp;&nbsp;陆</div>
          <el-row>
            <el-col :span="4">&nbsp;

            </el-col>
            <el-col :span="16">&nbsp;
              <el-input class="mg5_0" placeholder="用户名"></el-input>
              <el-input class="mg5_0" type="password" placeholder="密码"></el-input>
              <el-button class="common_button mg5_0" style="width:100%">登陆</el-button>
              <p class="font-size12 common_a mg5_0" @click="Register()">没有账号，先去注册吧~</p>
              <p class="font-size12 common_a mg5_0" @click="Reset()">忘记密码？</p>
            </el-col>
            <el-col :span="4">&nbsp;

            </el-col>
          </el-row>
        </div>
      </div>
    </div>


  </div>

</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    Register(){
      this.$router.push({name:'Register'})
    },
    Reset(){
      this.$router.push({name:'Reset'})
    }
  }
};
</script>
<style lang="less" scoped>
.logo {
  height: 200px;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
}
body,html{
  background: #e2e2e2;
}
</style>

<style lang="less" >
@import "../../style/common";

.background {
  background: url("../../assets/bg.jpg") no-repeat;
  height: 100%;
  position: absolute;
  width: 100%;
  background-size: 100% 100%;
}
.mask {
    width: 100%;
    height: auto;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    -webkit-box-shadow: 10px 10px 5px #888888;
    box-shadow: 5px 5px 5px #88888857;
}
.logobg {
  width: 330px;
  border-radius: 20px;
}

</style>