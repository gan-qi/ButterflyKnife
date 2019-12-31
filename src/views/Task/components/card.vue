<template>
  <div>
    <el-card shadow="hover" class="card">
      <!--标题-->
      <div class="cardTitle"><svg-icon :icon-class="icon" /> {{ title }}</div>
      <el-divider></el-divider>
      <!--标题 结束-->

      <!--卡片-->
      <div class="content">
        <minCard :cardData="cardData" />
      </div>
      <!--卡片 结束-->

      <!--添加任务-->
      <div v-if="listStatus">
        <div class="addTask" @keyup.enter="addTask">
          <el-input
            placeholder="请输入任务名称"
            v-model="newTask"
            class="newTaskInput"
            clearable
          >
          </el-input>
        </div>
      </div>
      <!--添加任务 结束-->
    </el-card>
  </div>
</template>

<script>
import { addTask } from "../../../api/task";
import minCard from "./minCard";

export default {
  props: {
    icon: {
      type: String,
      default: function() {
        return "list";
      }
    },
    title: {
      type: String,
      default: function() {
        return "任务列表";
      }
    },
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
          },
          {
            title: "task4",
            desc: "Hello, World !"
          }
        ];
      }
    }
  },
  components: {
    minCard
  },
  data() {
    return {
      newTask: "",
      listStatus: true
    };
  },
  methods: {
    addTask() {
      var data = {
        title: this.newTask,
        desc: ""
      };
      //this.cardData.push(data);
      //this.newTask = "";
      // 后端添加信息
      addTask(data).then(response => {
        this.cardData.push(response.data);
        this.newTask = "";
      });
    }
  },
  created() {
    if (this.title != "任务列表") this.listStatus = false;
  }
};
</script>

<style scoped>
.card {
  background-color: #ebecf0;
}
div.cardTitle {
  padding: 3px 0;
}
div.addTask {
  margin-top: 20px;
}
input {
  height: 50px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #dcdfe6;
  padding-left: 10px;
  background-color: #ebecf0;
}
input:hover {
  border: none;
  border-bottom: 1px solid #606266;
}
</style>
