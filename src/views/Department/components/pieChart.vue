<template>
  <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      roseType: "radius"
    };
    return {
      chartData: {
        columns: ["类型", "数量"],
        rows: [
          { 类型: "总任务数量", 数量: 27 },
          { 类型: "正在完成任务数", 数量: 50 },
          { 类型: "已经完成任务数量", 数量: 43 }
        ]
      }
    };
  }
};
</script>
