<template>
  <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      metrics: ["总任务数", "完成任务数"],
      dimension: ["月份"]
    };
    return {
      chartData: {
        columns: ["月份", "总任务数", "完成任务数"],
        rows: [
          { 月份: "1", 总任务数: 139, 完成任务数: 103},
          { 月份: "2", 总任务数: 353, 完成任务数: 323 },
          { 月份: "3", 总任务数: 292, 完成任务数: 262 },
          { 月份: "4", 总任务数: 172, 完成任务数: 142 },
          { 月份: "5", 总任务数: 379, 完成任务数: 349 },
          { 月份: "6", 总任务数: 459, 完成任务数: 429 }
        ]
      }
    };
  }
};
</script>
