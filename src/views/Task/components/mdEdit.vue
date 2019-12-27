<template>
  <div @click="focus" @blur="blurFunc">
    <div v-if="localStatus">
      <vue-markdown :source="localDesc" />
    </div>
    <div v-else>
      <el-input
        type="textarea"
        :rows="5"
        placeholder="请输入概述"
        v-model="localDesc"
      >
      </el-input>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
export default {
  props: {
    status: {
      type: Boolean,
      default: function() {
        return true;
      }
    },
    desc: {
      type: String,
      default: function() {
        return "Hello, World !";
      }
    }
  },
  components: {
    VueMarkdown
  },
  data() {
    return {
      localStatus: this.status,
      localDesc: this.desc
    };
  },
  watch: {
    status(val) {
      this.localStatus = val;
    },
    desc(val) {
      this.localDesc = val;
    }
  },
  methods: {
    blurFunc() {
      this.localStatus = true;
      this.$emit("statuschange", this.localStatus);
      this.$emit("descchange", this.localDesc);
    },
    focus() {
      this.localStatus = false;
      this.$emit("statuschange", this.localStatus);
      this.$emit("descchange", this.localDesc);
    }
  }
};
</script>

<style scoped></style>
