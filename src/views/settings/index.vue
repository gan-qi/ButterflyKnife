<template>
  <div class="container">
    <el-card class="box-card">
      <div slot="header">
        <span>个人信息</span>
      </div>
      <div class="content">
        <user-info />
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header">
        <span>修改密码</span>
      </div>
      <div class="content">
        <passwd />
      </div>
    </el-card>
  </div>
</template>

<script>
import userInfo from "./components/userInfo";
import passwd from "./components/passwd";

export default {
  components: {
    userInfo,
    passwd
  }
};
</script>
<style scoped>
.box-card {
  margin: 20px 350px;
}
</style>
