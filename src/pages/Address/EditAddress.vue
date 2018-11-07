<template>
  <div>
    <el-row :gutter="0">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
        <div class="header pd10_20 font-size15 bold">{{type=='add'?'新增地址':'修改地址'}}</div>
      </el-col>
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp;</el-col>
    </el-row>
    <el-row :gutter="0" class="mg20_0 ">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col class="bd" :xs="24" :sm="22" :md="18" :lg="14" :xl="12" style="height:400px;">
        <el-form ref="form" class="mg20_0" label-width="120px" style="width:500px">
          <el-form-item label="地址信息" :required="true">
            <area-cascader type='text' v-model="provice" :level='1' :data="pcaa"></area-cascader>
          </el-form-item>
          <el-form-item label="详细信息" :required="true">
            <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="address">
            </el-input>
          </el-form-item>
          <el-form-item label="收件人姓名" :required="true">
            <el-input v-model="name"></el-input>
          </el-form-item>
          <el-form-item label="手机号码" :required="true">
            <el-input v-model="phone"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="common_button" @click="Save()">保存</el-button>
            <el-button @click="goback()">取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp;</el-col>
    </el-row>
  </div>
</template>

<script>
import { pca, pcaa } from "area-data"; // v5 or higher
export default {
  data() {
    return {
      type: this.$route.query.type, //type:add/edit  edit会有地址id参数，为修改地址， add无参数，为新增地址
      id: this.$route.query.id,
      editaddress: {}, //修改地址
      pcaa: pcaa, //省市区data
      provice: [], //省市区
      address: "", //详细地址
      name: "", //收件人姓名
      phone: "" //收件人手机号
    };
  },
  created() {
    if (this.id) {
      this.GetAddressByID();
    }
  },

  methods: {
    // todo 根据地址id查询地址
    GetAddressByID() {
      this.$axios({
        method: "get",
        url: "CustomerAddress/GetAddressByID",
        params: {
          id: this.id
        }
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            this.address = res.data.res_content.address;
            this.name = res.data.res_content.receiver_name;
            this.phone = res.data.res_content.receiver_phone;
            var pro = [];
            pro.push(res.data.res_content.province);
            pro.push(res.data.res_content.city);
            pro.push(res.data.res_content.district);
            this.provice = pro;
            this.editaddress = res.data.res_content;
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
    // 保存地址
    Save() {
      var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
      if (this.provice.length == 0) {
        this.$message("请选择地址信息");
         return false;
      } else if (!this.address) {
        this.$message("请填写详细地址");
         return false;
      } else if (!this.name) {
        this.$message("请填写收件人姓名");
         return false;
      } else if (!this.phone) {
        this.$message("请填写手机号");
         return false;
      } else if (!myreg.test(this.phone)) {
        this.$message("手机号格式不对");
         return false;
      }
      // 判断是新增还是修改，新增掉用新增接口，修改调用修改接口
      if (this.type == "add") {
        this.$axios({
          method: "post",
          url: "CustomerAddress/AddNewAddress",
          data: {
            receiver_name: this.name,
            receiver_phone: this.phone,
            province: this.provice[0],
            city: this.provice[1],
            district: this.provice[2],
            address: this.address
          }
        })
          .then(res => {
            if (res.data.res_status_code == "0") {
              this.$router.back();
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
          url: "CustomerAddress/ReviseAddress",
          data: {
            receiver_name: this.name,
            receiver_phone: this.phone,
            province: this.provice[0],
            city: this.provice[1],
            district: this.provice[2],
            address: this.address,
            id: this.id,
            is_default: this.editaddress.is_default
          }
        })
          .then(res => {
            if (res.data.res_status_code == "0") {
              this.$router.back();
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
    //回到上一页
    goback() {
      this.$router.back();
    }
  }
};
</script>
<style lang="less" >
.el-form-item__content {
  line-height: 20px;
}
.area-select.large {
  width: 378px;
}
</style>