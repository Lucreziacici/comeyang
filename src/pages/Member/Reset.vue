<template>
  <div class="flex_column_center_center">
    <!-- <div class="logo flex_center_center"><img src="../../assets/logo.jpg"></div> -->
    <div>
      <div class="mask tc pd30_0 flex_center_center bd mg30_0">
        <div class="whitebg logobg pd10_0">
          <div class="title font-size30 bold color333">重&nbsp;&nbsp;置&nbsp;&nbsp;密&nbsp;&nbsp;码</div>
          <el-row>
            <el-col :span="4">&nbsp;

            </el-col>
            <el-col :span="16">&nbsp;
              <el-input class="mg5_0" placeholder="手机号"></el-input>
              <el-col :span="14">
                <el-input class="mg5_0" placeholder="验证码"></el-input>
              </el-col>
              <el-col :span="10">
                <button class="mg5_0 button">获取验证码</button>
              </el-col>
              
              <el-button class="common_button mg5_0" style="width:100%">重置</el-button>
              <i class="font-size12" >重置后密码为123456，为了安全起见，请登陆后自行修改密码</i>
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
.button {
  background: white;
  color: #333;
  border: 1px solid #dcdfe6;
  padding:0 11px;
  height: 40px;
  line-height: 40px;
  border-radius: 4px;
}
</style>