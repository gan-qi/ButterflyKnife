<template>
  <div class="loginContainer">
    <el-card shadow="hover">
      <el-row>
        <el-col :span="12">
          <div class="cardLeft">
            <img src="../../assets/logoBig.png" alt="login" />
            <span>GQToDo</span>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="cardRight">
            <span>登陆页面</span>
            <el-form ref="ruleForm" :model="form" :rules="rules">
              <el-form-item prop="name" required>
                <el-input v-model="form.name" placeholder="用户名"></el-input>
              </el-form-item>
              <el-form-item prop="password" required>
                <el-input
                  v-model="form.password"
                  type="password"
                  placeholder="密码"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  @click="submitForm('ruleForm')"
                  class="loginBtn"
                >
                  登 陆
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        password: ""
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push("/");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#f2f2f2");
  },
  beforeDestroy() {
    document.querySelector("body").setAttribute("style", "background:#fff");
  }
};
</script>

<style scoped>
div.loginContainer {
  padding: 100px 200px;
  border-radius: 40px;
}
.boxCard {
  padding: 100px 50px;
  width: 400px;
  margin: auto;
}
div.cardLeft {
  padding: 180px;
  text-align: center;
}
div.cardLeft span {
  display: block;
  font-size: 50px;
  margin-top: 30px;
}
div.cardRight {
  padding: 180px;
  border: none;
  border-left: 1px solid #dcdfe6;
}
div.cardRight span {
  font-size: 30px;
  display: block;
  text-align: center;
  margin-bottom: 30px;
}
.loginBtn {
  width: 100%;
  margin-top: 20px;
}
</style>
