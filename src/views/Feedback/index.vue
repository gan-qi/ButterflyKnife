<template>
  <div class="feedback">
    <div class="panel animated fadeInUpBig fast">
      <el-input
        type="textarea"
        :rows="10"
        placeholder="请给我们一些建议帮助我们做得更好!"
        v-model="data"
      >
      </el-input>
      <div class="footer">
        <el-button type="primary" class="submitBtn" @click="onSubmit" :disabled="!data.length"
          >提 交</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import animate from 'animate.css';

export default {
  data() {
    return {
      data: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.data.length != 0) {
        console.log("submit!");
        this.$message({
          message: "提交反馈成功!",
          type: "success"
        });
      }
    }
  }
};
</script>

<style scoped>
div.feedback {
  padding: 50px 0;
}
div.panel {
  width: 500px;
  margin: auto;
  border-radius: 10px;
  padding: 35px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background-color: white;
  text-align: center;
}
div.footer {
  margin-top: 20px;
}
.submitBtn {
  width: 100%;
}
</style>
