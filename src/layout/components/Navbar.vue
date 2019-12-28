<template>
  <div class="bg">
    <ul>
      <li>
        <a class="imgLogo"><img src="@/assets/logo.png" class="imgLogo"/></a>
      </li>
      <li>
        <router-link to="/" :class="{ active: this.$store.state.active.home }">
          首页
        </router-link>
      </li>
      <li>
        <router-link
          to="/task"
          :class="{ active: this.$store.state.active.task }"
        >
          任务
        </router-link>
      </li>
      <li>
        <router-link
          to="/department"
          :class="{ active: this.$store.state.active.department }"
        >
          部门
        </router-link>
      </li>
      <li>
        <router-link
          to="/taskassignment"
          :class="{ active: this.$store.state.active.taskassignment }"
        >
          任务委派
        </router-link>
      </li>
      <li>
        <router-link
          to="/feedback"
          :class="{ active: this.$store.state.active.feedback }"
        >
          反馈
        </router-link>
      </li>
      <span class="right">
        <li>
          <a class="avatar">
            <el-dropdown>
              <span>
                <img src="@/assets/user.png" alt="avatar" class="avatar" />
              </span>
              <el-dropdown-menu slot="dropdown">
                <span @click="settings">
                  <el-dropdown-item>设置</el-dropdown-item><br />
                </span>
                <span @click="logout">
                  <el-dropdown-item>登出</el-dropdown-item>
                </span>
              </el-dropdown-menu>
            </el-dropdown>
          </a>
        </li>
      </span>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$router.push("/login");
    },
    settings() {
      this.$router.push("/settings");
    }
  }
};
</script>

<style scoped>
div.bg {
  background-color: white;
}
img.imgLogo {
  width: 32px;
  height: 32px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
li {
  float: left;
}

li a {
  padding: 15px 16px;
  display: block;
  text-align: center;
  text-decoration: none;
  color: #606266;
}
li a:not(.imgLogo):not(.avatar) {
  padding: 24px 16px;
}

li a:hover {
  cursor: pointer;
  color: #303133;
}

li a:hover:not(.avatar):not(.imgLogo):not(.active) {
  background-color: #f2f2f2;
}
li a.active {
  color: #303133;
  background-color: #f2f2f2;
}
.right {
  float: right;
}
img.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #dcdfe6;
}
img.avatar:hover {
  border: 1px solid #303133;
}
</style>
