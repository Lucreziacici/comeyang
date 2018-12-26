<template>
  <div>
    <el-row :gutter="0">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
        <div>
          <el-col :span="6">
            <Menu></Menu>
          </el-col>
          <el-col :span="18">
            <div class="header pd10_20 font-size15 bold">
              <span>用户信息</span>
             
            </div>
            <div class="user_list pd10_20">
              <div class="user_item pd20_0">
                  <span class="bold ">用户名：</span>
                  <span>{{JSON.parse(user).nick_name}}</span>
              </div>
               <div class="user_item pd20_0">
                  <span class="bold ">手机号：</span>
                  <span>{{JSON.parse(user).phone}}</span>
                  <el-button type="mini" class="mg0_10" @click="toChange()">修改</el-button>
              </div>

            </div>
           

          </el-col>
        </div>
      </el-col>
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp;</el-col>
    </el-row>
  </div>
</template>

<script>
import Menu from "../../components/Menu";
import { mapState } from "vuex";
import * as types from "../../vuex/mutation-types";
export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      }
    };
  },
  computed: {
    ...mapState(["token", "user"])
  },
  components: {
    Menu
  },
  created() {},
  methods: {
    toChange() {
      this.$router.push({
        name: "ChangePhone"
      });
    }
  }
};
</script>
<style lang="less" >
.user_item {
  border-bottom: 1px solid #f2f2f2;
}
</style>