<template>
  <div>
    <draggable class="list-group" :list="cardData" group="task" @change="log">
      <div v-for="(item, index) in cardData" :key="index" class="card">
        <el-card>
          <el-row class="showSvg">
            <el-col :span="22">
              <div
                class="taskInfo"
                :style="{ color: item.color }"
                @click="taskInfo(item)"
              >
                {{ item.title }}
              </div>
            </el-col>
            <el-col :span="2" class="closeSvg">
              <svg-icon icon-class="close" @click="deleteTaskBtn(item)" />
            </el-col>
          </el-row>
        </el-card>
      </div>
    </draggable>

    <task-info
      :dialog="dialog"
      :form="taskInfoForm"
      @dialogchange="dialogchange"
    />
  </div>
</template>

<script>
import draggable from "vuedraggable";
import taskInfo from "./taskInfo";

import { deleteTask } from "../../../api/task";

export default {
  props: {
    cardData: {
      type: Array,
      default: function() {
        return [
          {
            title: "task1",
            desc: "Hello, World !"
          },
          {
            title: "task2",
            desc: "Hello, World !"
          },
          {
            title: "task3",
            desc: "Hello, World !"
          }
        ];
      }
    }
  },
  components: {
    draggable,
    taskInfo
  },
  data() {
    return {
      newTask: "",
      dialog: false,
      taskInfoForm: {
        title: "",
        desc: "",
        color: ""
      }
    };
  },
  methods: {
    deleteTaskBtn(data) {
      for (var i = 0; i < this.cardData.length; i++) {
        if (this.cardData[i] === data) {
          this.cardData.splice(i, 1);
          // 后端删除
          deleteTask(data.id);
        }
      }
    },
    dialogchange(val) {
      this.dialog = val;
    },
    taskInfo(val) {
      this.dialog = !this.dialog;
      this.taskInfoForm = val;
    },
    log(val) {
      console.log(val);
    }
  }
};
</script>

<style scoped>
.card {
  margin-bottom: 8px;
}
svg {
  float: right;
  cursor: pointer;
}
.closeSvg {
  display: none;
}
.showSvg:hover .closeSvg {
  display: block;
}
.tipText {
  color: #909399;
}
div.taskInfo:hover {
  cursor: pointer;
}
</style>
