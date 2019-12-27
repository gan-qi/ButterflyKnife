<template>
  <div>
    <el-row :gutter="20">
      <el-col v-for="(item, index) in lists" :key="index" :span="6">
        <div class="panel">
          <el-row>
            <el-col :span="12">
              <div class="icon" :style="{ 'color':item.color }">
                <svg-icon :icon-class="item.icon" />
              </div>
            </el-col>
            <el-col :span="12">
              <div class="info">
                <div class="title">{{ item.title }}</div>
                <div class="count">
                  <count-to :start-val="0" :end-val="item.count" :duration="3000" />
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import countTo from 'vue-count-to'

export default {
  components: {
    countTo
  },
  props: {
    proportion: {
      type: Number,
      default: 95
    },
    list: {
      type: Number,
      default: 39
    },
    processing: {
      type: Number,
      default: 18
    },
    finish: {
      type: Number,
      default: 30
    }
  },
  data() {
    return {
      lists: [
        {
          icon: 'proportion',
          title: '部门任务完成率',
          color: '#4286F3',
          count: this.proportion
        },
        {
          icon: 'list',
          title: '部门任务总数',
          color: '#EB4537',
          count: this.list
        },
        {
          icon: 'processing',
          title: '部门正在完成任务数',
          color: '#FAC230',
          count: this.processing
        },
        {
          icon: 'finish',
          title: '部门已经完成任务数',
          color: '#55AF7B',
          count: this.finish
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>
.panel {
  border-radius: 10px;
  padding: 35px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background-color: white;
}
.icon {
  font-size: 50px;
  text-align: center;
}
.title {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.45);
  line-height: 18px;
  margin-bottom: 12px;
  text-align: center;
}
.count {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
</style>
