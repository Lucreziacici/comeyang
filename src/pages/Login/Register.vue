<template>
  <div class="flex_column_center_center">
    <!-- <div class="logo flex_center_center"><img src="../../assets/logo.jpg"></div> -->
    <div>
      <div class="mask tc pd30_0 flex_center_center bd mg30_0">
        <div class="whitebg logobg pd10_0">
          <div class="title font-size30 bold color333">注&nbsp;&nbsp;&nbsp;&nbsp;册</div>
          <el-row>
            <el-col :span="4">&nbsp;

            </el-col>
            <el-col :span="16">&nbsp;
              <el-input class="mg5_0" placeholder="用户名" v-model="nick_name"></el-input>
              <el-input class="mg5_0" type="password" placeholder="设置密码"  v-model="password"></el-input>
              <el-input class="mg5_0" placeholder="手机号"  v-model="phone"></el-input>
              <div class="flex_between_center">
              <el-col :span="12">
                <el-input class="mg5_0" placeholder="验证码"  v-model="verify_code"></el-input>
              </el-col>
              <el-col :span="12" >
                <button class=" button" v-if="reflesh"  @click="Getverify()" >获取验证码</button>
                 <button class=" button" v-if="time">{{time}}s后重新获取</button>
              </el-col>
              </div>
              
              <el-button class="common_button mg5_0" style="width:100%" @click="Register()">注册</el-button>
              <p class="font-size12 common_a" @click="Login()">已有账号，前往登陆~</p>
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
      nick_name: "",
      password: "",
      phone: "",
      verify_code: "",
      time: "",
      reflesh: true
    };
  },
  created() {},
  computed: mapState([
    // 映射 this.count 为 store.state.count
    "token"
  ]),
  methods: {
    Login() {
      this.$router.push({ name: "Login" });
    },
    Register() {
      if (!this.nick_name) {
        this.$message("请填写用户名");
        return false;
      }
      if (!this.password) {
        this.$message("请填写密码");
        return false;
      }
      if (!this.phone) {
        this.$message("请填写手机号");
        return false;
      }
      if (!/^1[34578]\d{9}$/.test(this.phone)) {
        this.$message("手机号格式有误");
        return false;
      }
      if (!this.verify_code) {
        this.$message("请填写验证码");
        return false;
      }
      this.$axios({
        method: "post",
        url: "ComeYangHome/Register",
        data: {
          nick_name: this.nick_name,
          password: this.password,
          phone: this.phone,
          verify_code: this.verify_code
        }
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            this.$message("注册成功");
            localStorage.setItem(
              "token",
              JSON.stringify(res.data.res_content.open_id)
            );
            localStorage.setItem("user", JSON.stringify(res.data.res_content));
            this.$store.commit(types.LOGIN, res.data.res_content.open_id);
            this.$store.commit(
              types.USER,
              JSON.stringify(res.data.res_content)
            );
            this.$router.push("/");
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
    Getverify() {
      if (!this.phone) {
        this.$message("请填写手机号");
      } else if (!/^1[34578]\d{9}$/.test(this.phone)) {
        this.$message("手机号格式有误");
      } else {
        this.$axios({
          method: "get",
          url: "ComeYangHome/GetVerifyCode",
          params: {
            phone: this.phone
          }
        })
          .then(res => {
            if (res.data.res_status_code == "0") {
              console.log(res.data.res_content);
              this.time = "10";
              this.reflesh = false;
              this.countDown();
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
    /**倒计时**/
    countDown() {
      let interval = window.setInterval(() => {
        if (this.time == 1) {
          this.reflesh = true;
        }
        if (this.time-- <= 0) {
          this.time = "";
          this.isGetCode = false;
          window.clearInterval(interval);
        }
      }, 1000);
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
  // height: 280px;
  width: 350px;
  border-radius: 20px;
}
.button {
  background: white;
  color: #333;
  border: 1px solid #dcdfe6;
  padding: 0 11px;
  height: 40px;
  line-height: 40px;
  border-radius: 4px;
}
</style>