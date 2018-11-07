<template>
  <div>
    <el-row :gutter="0">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
        <div class="header pd10_20 font-size15 bold">
          <span>身份证列表</span>
          <el-button class="right commonbg white common_button pd10_20" size="mini" @click="addidcard()">新增身份证</el-button>
        </div>

      </el-col>
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp;</el-col>
    </el-row>
    <el-row :gutter="0" class="mg20_0">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
        <el-table :data="Idcardlist" border style="width: 100%">
          <el-table-column fixed="left" label="是否为默认">
            <template slot-scope="scope">
              <el-checkbox v-if="scope.row.is_default" checked disabled class="commoncolor">默认</el-checkbox>
              <el-button @click="SetDefaultIdcard(scope.row)" v-else type="text" class="commoncolor defaultbtn">设为默认</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="real_name" label="姓名">
          </el-table-column>
          <el-table-column prop="idcard" label="身份证号">
          </el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="handleDelete(scope.row)" icon="el-icon-delete">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

      </el-col>
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp;</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Idcardlist: []
    };
  },
  created() {
    this.GetIDCardList();
  },
  methods: {
    // 获取身份证列表
    GetIDCardList() {
      this.$axios({
        method: "get",
        url: "CustomerIDCard/IDCardList"
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            var cardlist=res.data.res_content
            for (var i = 0; i < cardlist.length; i++) {
              cardlist[i].idcard = cardlist[i].id_card.substr(0, 3) + "************" + cardlist[i].id_card.substr(15);
            }
            this.Idcardlist = cardlist;
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
    // 身份证设为默认
    SetDefaultIdcard(e) {
      this.$axios({
        method: "post",
        url: "CustomerIDCard/SetDefaultIDCard",
        data: { id: e.id }
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            this.GetIDCardList();
            this.$message({
              showClose: true,
              message: "设置成功",
              type: "success"
            });
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
    // 删除
    handleDelete(e) {
      this.$axios({
        method: "post",
        url: "CustomerIDCard/DeleteIDCard",
        data: { id: e.id }
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            this.GetIDCardList();
            this.$message({
              showClose: true,
              message: "删除成功",
              type: "success"
            });
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
    //跳转
    addidcard() {
      this.$router.push({
        name: "AddIdcard"
      });
    }
  }
};
</script>
<style lang="less" >
</style>