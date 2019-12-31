<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="8">
        <card
          :title="cardTitle.card1.title"
          :icon="cardTitle.card1.icon"
          :cardData="taskCard1"
        />
      </el-col>
      <el-col :span="8">
        <card
          :title="cardTitle.card2.title"
          :icon="cardTitle.card2.icon"
          :cardData="taskCard2"
        />
      </el-col>
      <el-col :span="8">
        <card
          :title="cardTitle.card3.title"
          :icon="cardTitle.card3.icon"
          :cardData="taskCard3"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getTask } from "../../api/task.js";
import card from "./components/card";

export default {
  components: {
    card
  },
  data() {
    return {
      cardTitle: {
        card1: {
          title: "任务列表",
          icon: "list"
        },
        card2: {
          title: "正在进行",
          icon: "processing"
        },
        card3: {
          title: "已经完成",
          icon: "finish"
        }
      },
      taskCard1: [],
      taskCard2: [],
      taskCard3: []
    };
  },
  methods: {
    fetchData() {
      getTask().then(response => {
        response.data.forEach(item => {
          if (item.status === 0) this.taskCard1.push(item);
          if (item.status === 1) this.taskCard2.push(item);
          if (item.status === 2) this.taskCard3.push(item);
        });
      });
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style scoped></style>
