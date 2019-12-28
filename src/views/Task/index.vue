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
      taskCard1: [
        {
          title: "task1",
          desc: "Hello, World !",
          color: "#F56C6C"
        },
        {
          title: "task2",
          desc: "Hello, World !",
          color: "#67C23A"
        },
        {
          title: "task3",
          desc: "Hello, World !"
        },
        {
          title: "task6",
          desc: "Hello, World !"
        },
        {
          title: "task7",
          desc: "Hello, World !"
        },
        {
          title: "task8",
          desc: "Hello, World !"
        }
      ],
      taskCard2: [
        {
          title: "task4",
          desc: "Hello, World !",
          color: "#67C23A"
        }
      ],
      taskCard3: [
        {
          title: "task5",
          desc: "Hello, World !"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
