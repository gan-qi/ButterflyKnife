<template>
  <div class="bg container">
    <div class="line">
      <panel-group />
    </div>
    <div class="line panel">
      <line-chart />
      <div class="chartTitle">
        每周任务信息图
      </div>
    </div>
    <div class="line">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="panel">
            <pie-chart />
            <div class="chartTitle">
              当日任务信息对比图
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="panel">
            <Histogram />
            <div class="chartTitle">
              每月总任务数和完成任务数对比图
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="panel">
            <pie-chart />
            <div class="chartTitle">
              当日任务信息对比图
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import panelGroup from "./components/panelGruop";
import lineChart from "./components/lineChart";
import pieChart from "./components/pieChart";
import Histogram from "./components/Histogram";

export default {
  components: {
    panelGroup,
    lineChart,
    pieChart,
    Histogram
  },
  /*
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#f2f2f2");
  },
  beforeDestroy() {
    document.querySelector("body").setAttribute("style", "background:#fff");
  }
  */
};
</script>

<style scoped>
div.line {
  margin-bottom: 20px;
}
div.panel {
  border-radius: 10px;
  padding: 35px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background-color: white;
}
div.chartTitle {
  text-align: center;
  color: #606266;
}
</style>
