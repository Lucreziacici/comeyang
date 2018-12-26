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
              <span>修改密码</span>

            </div>
            <div class="user_list pd30_0">
              <el-form :model="formLabelAlign" status-icon  ref="formLabelAlign" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="pass">
                  <el-input type="phone" :disabled="true" v-model="JSON.parse(user).nick_name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="原始密码" prop="checkPass">
                  <el-input type="password" v-model="oldpassword" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="checkPass">
                  <el-input type="password" v-model="newpassword" autocomplete="off"></el-input>
                </el-form-item>
                 <el-form-item label="重复新密码" prop="checkPass">
                  <el-input type="password" v-model="renewpassword" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" class="common_button" @click="submitForm()">提交</el-button>
                </el-form-item>
              </el-form>

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
      oldpassword:"",
      newpassword:"",
      renewpassword:""
    };
  },
  computed: mapState([
    // 映射 this.count 为 store.state.count
    "token","user"
  ]),
  components: {
    Menu
  },
  created() {},
  methods: {}
};
</script>
<style lang="less" >
.user_item {
  border-bottom: 1px solid #f2f2f2;
}
</style>