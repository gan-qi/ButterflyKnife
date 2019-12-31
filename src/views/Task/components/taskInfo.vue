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
              <div v-if="dialogStatus">
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
            <div v-for="(log, index) in logList" :key="index">
              {{ log }}
            </div>
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
import { changeTask } from "../../../api/task";

export default {
  props: {
    form: {
      type: Object,
      default: function() {
        return {
          id: 1,
          title: "task1",
          desc: "Hello, World !",
          color: "#FFF",
          dialogStatus: true
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
      dialogStatus: true
    };
  },
  methods: {
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm("确定保存吗？")
        // eslint-disable-next-line
        .then(_ => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            setTimeout(() => {
              // 提交修改给后端
              var targetTaskNewData = {
                title: this.form.title,
                desc: this.form.desc,
                color: this.form.color,
                status: this.form.status
              };
              changeTask(targetTaskNewData, this.form.id).then(() => {
                this.loading = false;
                this.$emit("dialogchange", this.localDialog);
                // 使mdEdit组件变为markdown形式展示
                this.dialogStatus = true;
              });
            }, 40);
          }, 200);
        })
        // eslint-disable-next-line
        .catch(_ => {});
    },
    cancelForm() {
      this.loading = false;
      this.localDialog = false;
      this.form.dialogStatus = true;
      clearTimeout(this.timer);
      this.$emit("dialogchange", this.localDialog);
    },
    focus() {
      this.dialogStatus = false;
    },
    blurFunc() {
      this.dialogStatus = true;
    }
  },
  computed: {
    logList() {
      const list = [];
      list.push(`${this.form.ctime} - 创建任务`);
      if (this.form.dialogStatus === 1)
        list.push(`${this.form.wtime} - 任务进行中`);
      if (this.form.dialogStatus === 2)
        list.push(`${this.form.etime} - 任务完成`);
      return list;
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
