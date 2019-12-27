<template>
  <div>
    <el-drawer
      title="任务详情"
      :before-close="handleClose"
      :visible.sync="localDialog"
      direction="rtl"
      ref="drawer"
    >
      <div class="drawerContent">
        <el-form :model="form">
          <el-form-item label="任务名称" :label-width="formLabelWidth">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="描述" :label-width="formLabelWidth">
            <div @click="focus" @blur="blurFunc">
              <div v-if="status">
                <vue-markdown :source="form.desc" />
              </div>
              <div v-else>
                <el-input
                  type="textarea"
                  :rows="5"
                  placeholder="请输入概述"
                  v-model="form.desc"
                >
                </el-input>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="颜色" :label-width="formLabelWidth">
            <el-color-picker v-model="form.color"></el-color-picker>
          </el-form-item>
          <el-form-item label="日志" :label-width="formLabelWidth">
            <p>日志</p>
          </el-form-item>
        </el-form>
        <div class="drawerFooter">
          <el-button @click="cancelForm">取 消</el-button>
          <el-button
            type="primary"
            @click="$refs.drawer.closeDrawer()"
            :loading="loading"
            >{{ loading ? "提交中 ..." : "保 存" }}</el-button
          >
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
export default {
  props: {
    form: {
      type: Object,
      default: function() {
        return {
          title: "task1",
          desc: "Hello, World !",
          color: "#FFF",
          status: true
        };
      }
    },
    dialog: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  components: {
    VueMarkdown
  },
  data() {
    return {
      loading: false,
      localDialog: this.dialog,
      formLabelWidth: "80px",
      timer: null,
      status: true
    };
  },
  methods: {
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm("确定保存吗？")
        .then(_ => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            setTimeout(() => {
              this.loading = false;
              this.$emit("dialogchange", this.localDialog);
              // 使mdEdit组件变为markdown形式展示
              this.status = true;
            }, 40);
          }, 200);
        })
        .catch(_ => {});
    },
    cancelForm() {
      this.loading = false;
      this.localDialog = false;
      clearTimeout(this.timer);
      this.$emit("dialogchange", this.localDialog);
    },
    focus() {
      this.status = false;
    },
    blurFunc() {
      this.status = true;
    }
  },
  watch: {
    dialog(val) {
      this.localDialog = val;
    }
  }
};
</script>

<style scoped>
div.drawerFooter {
  padding-left: 20px;
}
</style>
