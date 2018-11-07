<template>
  <div>
    <el-row :gutter="0" >
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
        <div class="header pd10_20 font-size15 bold">
          <span>我的地址</span> 
          <el-button class="right commonbg white addaddress pd10_20" size="mini" @click="addaddress()">新增地址</el-button>
        </div>
        
      </el-col>
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp;</el-col>
    </el-row>
    <el-row :gutter="0" class="mg20_0">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
        <el-table :data="addresslist" border style="width: 100%">
          <el-table-column fixed="left" label="是否为默认" width="100">
            <template slot-scope="scope">
              <el-checkbox v-if="scope.row.is_default" checked disabled class="commoncolor">默认</el-checkbox>
              <el-button @click="SetDefaultAddress(scope.row)" v-else type="text" class="commoncolor defaultbtn">设为默认</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="receiver_name" label="收件人" width="100">
          </el-table-column>
          <el-table-column prop="province" label="省份" width="100">
          </el-table-column>
          <el-table-column prop="city" label="市区" width="100">
          </el-table-column>
          <el-table-column prop="district" label="区域" width="100">
          </el-table-column>
          <el-table-column prop="address" label="详细地址" width="180">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.row)" icon="el-icon-edit">编辑</el-button>
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
      addresslist: [] //地址列表
    };
  },
  created() {
    this.getAddressList();
  },
  methods: {
    //获取地址列表
    getAddressList() {
      this.$axios({
        method: "get",
        url: "CustomerAddress/AddressList"
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            this.addresslist = res.data.res_content;
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

    //设为默认
    SetDefaultAddress(e) {
      this.$axios({
        method: "post",
        url: "CustomerAddress/SetDefaultAddress",
        data: { id: e.id }
      })
        .then(res => {
          if (res.data.res_status_code == "0") {
            this.getAddressList();
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

    //删除地址
    handleDelete(e) {
      this.$confirm("确认要删除该地址吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            method: "post",
            url: "CustomerAddress/DeleteAddress",
            data: { id: e.id }
          })
            .then(res => {
              if (res.data.res_status_code == "0") {
                this.$message({
                  showClose: true,
                  message: "删除成功",
                  type: "success"
                });
                this.getAddressList();
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
        })
        .catch(() => {});
    },
    //跳转编辑
    handleEdit(e) {
      this.$router.push({
        name: "EditAddress",
        query: { id:e.id,type:'edit' }
      });
    },
    //跳转新增
    addaddress(){
       this.$router.push({
        name: "EditAddress",
        query: { type:'add' }
      });
    }
  }
};
</script>
<style lang="less" >
.addaddress {
  border: 1px solid #ff69b4;
}
.addaddress:focus,
.addaddress:active,
.addaddress:hover {
  border: 1px solid #ff69b4;
  background-color: #ff69b4;
  color: white;
}
.defaultbtn:focus,
.defaultbtn:active,
.defaultbtn:hover {
  border: 1px solid #ff69b4;
  color: #ff69b4;
}
</style>

