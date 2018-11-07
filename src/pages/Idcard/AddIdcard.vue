<template>
  <div>
    <el-row :gutter="0">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
        <div class="header pd10_20 font-size15 bold">
          <span>新增身份证</span>
        </div>

      </el-col>
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp;</el-col>
    </el-row>
    <el-row :gutter="0" class="mg20_0 ">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col class="bd" :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
        <el-form ref="form" class="mg20_0" label-width="120px" style="width:500px">
          <el-form-item label="姓名" :required="true">
            <el-input v-model="real_name"></el-input>
          </el-form-item>
          <el-form-item label="身份证号" :required="true">
            <el-input v-model="id_card"></el-input>
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
export default {
  data() {
    return {
      id_card: "",
      real_name: ""
    };
  },
  created() {},
  methods: {
    Save() {
      var pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if (!this.real_name) {
        this.$message("请填写姓名");
        return false;
      } else if (!this.id_card) {
        this.$message("请填写身份证号");
        return false;
      } else if (!pattern.test(this.id_card)) {
        this.$message("身份证格式不对");
        return false;
      }
      this.$axios({
        method: "post",
        url: "CustomerIDCard/AddNewIDCard",
        data: {
          real_name: this.real_name,
          id_card: this.id_card
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
    },

    //回到上一页
    goback() {
      this.$router.back();
    }
  }
};
</script>
<style lang="less" >
</style>