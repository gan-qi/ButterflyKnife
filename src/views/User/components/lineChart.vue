<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      axisSite: { right: ["完成率"] },
      yAxisType: ["KMB", "percent"],
      yAxisName: ["数值", "比率"]
    };
    return {
      chartData: {
        columns: ["日期", "正在完成任务数", "已经完成任务数", "完成率"],
        rows: [
          { 日期: "1/1", 正在完成任务数: 93, 已经完成任务数: 10, 完成率: 0.32 },
          { 日期: "1/2", 正在完成任务数: 30, 已经完成任务数: 32, 完成率: 0.26 },
          { 日期: "1/3", 正在完成任务数: 23, 已经完成任务数: 26, 完成率: 0.76 },
          { 日期: "1/4", 正在完成任务数: 31, 已经完成任务数: 14, 完成率: 0.49 },
          { 日期: "1/5", 正在完成任务数: 92, 已经完成任务数: 34, 完成率: 0.323 },
          { 日期: "1/6", 正在完成任务数: 93, 已经完成任务数: 42, 完成率: 0.78 }
        ]
      }
    };
  }
};
</script>
