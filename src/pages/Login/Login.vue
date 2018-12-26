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
              <el-input class="mg5_0" placeholder="用户名" v-model="name"></el-input>
              <el-input class="mg5_0" type="password" placeholder="密码" v-model="password"></el-input>
              <el-button class="common_button mg5_0" style="width:100%" @click="Login">登陆</el-button>
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
import { mapState } from "vuex";
import * as types from "../../vuex/mutation-types";
export default {
  data() {
    return {
      name: "",
      password: ""
      // token: this.$store.state.token
    };
  },
  created() {
    console.log(this.$route.query.redirect)
  },
  computed: mapState([
    // 映射 this.count 为 store.state.count
    "token","user"
  ]),
  methods: {
    Register() {
      this.$router.push({ name: "Register" });
    },
    Reset() {
      this.$router.push({ name: "Reset" });
    },
    Login() {
      this.$axios({
        method: "post",
        url: "ComeYangHome/Login",
        data: {
          nick_name: this.name,
          password: this.password
        }
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            localStorage.setItem(
              "token",
              JSON.stringify(res.data.res_content.open_id)
            );
            localStorage.setItem(
              "user",
             JSON.stringify(res.data.res_content)
            )
            this.$store.commit(types.LOGIN, res.data.res_content.open_id);
            this.$store.commit(types.USER,JSON.stringify(res.data.res_content));
            if(this.$route.query.redirect){
              this.$router.push({path:this.$route.query.redirect});
            }else{
              this.$router.push("/");
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
body,
html {
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