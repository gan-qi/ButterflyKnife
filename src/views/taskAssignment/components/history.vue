<template>
  <div class="container">
    <div class="optionTool">
      <el-row>
        <el-col :span="12">
          <div class="buttonGroup">
            <el-button type="primary" icon="el-icon-edit" @click="addNewTask">指派任务</el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              :disabled="deleteTaskBtn"
              @click="deleteTask"
              >删除({{ multipleSelection.length }})</el-button
            >
          </div>
        </el-col>
        <el-col :span="12">
          <div class="searchInput">
            <el-input v-model="search" placeholder="搜索" />
          </div>
        </el-col>
      </el-row>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column label="任务名" width="400" sortable>
        <template slot-scope="scope">{{
          scope.row.title.length > 20
            ? scope.row.title.substring(0, 20) + "..."
            : scope.row.title
        }}</template>
      </el-table-column>
      <el-table-column label="状态" sortable>
        <template slot-scope="scope">
          <el-tag :type="scope.row.status ? 'success' : 'info'">{{
            scope.row.status ? "已完成" : "未完成"
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="desc" label="描述" width="500" />
      <el-table-column prop="user" label="委派人员" sortable />
      <el-table-column prop="time" label="委派时间" sortable />
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div v-show="!search" class="footer">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pagesize"
        :total="lists.length"
        @current-change="changeCurrent"
      />
    </div>

    <div>
      <el-dialog title="任务详情" :visible.sync="dialogFormVisible">
        <el-form :model="taskForm">
          <el-form-item label="任务名称" :label-width="formLabelWidth">
            <el-input v-model="taskForm.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="描述" :label-width="formLabelWidth">
            <el-input v-model="taskForm.desc" autocomplete="off" type="textarea" :rows="5"></el-input>
          </el-form-item>
          <el-form-item label="颜色" :label-width="formLabelWidth">
            <el-color-picker v-model="taskForm.color"></el-color-picker>
          </el-form-item>
          <el-form-item label="委派人员" :label-width="formLabelWidth">
            <el-select v-model="taskForm.user" placeholder="请选择委派人员">
              <el-option
                v-for="user in userLists"
                :key="user.id"
                :label="user.name"
                :value="user.name"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addTaskSubmit">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLabelWidth: "80",
      dialogFormVisible: false,
      dialogPanelStatus: true,
      taskForm: {
        title: "",
        desc: "",
        time: "",
        user: ""
      },
      userLists: [
        {
          id: 0,
          name: "tom"
        },
        {
          id: 1,
          name: "jerry"
        }
      ],
      lists: [
        {
          title: "task1",
          status: 0,
          desc: "Hello, World !",
          time: "2019-12-25 18:04",
          user: "tom"
        },
        {
          title: "task2",
          status: 0,
          desc: "Hello, World !",
          time: "2019-12-25 18:04",
          user: "jerry"
        },
        {
          title: "task3",
          status: 1,
          desc: "Hello, World !",
          time: "2019-12-25 18:04",
          user: "tom"
        },
        {
          title: "task4",
          status: 1,
          desc: "Hello, World !",
          time: "2019-12-25 18:04",
          user: "tom"
        },
        {
          title: "task5",
          status: 0,
          desc: "Hello, World !",
          time: "2019-12-25 18:04",
          user: "jerry"
        },
        {
          title: "task6",
          status: 0,
          desc: "Hello, World !",
          time: "2019-12-25 18:04",
          user: "tom"
        },
        {
          title: "task7",
          status: 0,
          desc: "Hello, World !",
          time: "2019-12-25 18:04",
          user: "tom"
        },
        {
          title: "task8",
          status: 1,
          desc: "Hello, World !",
          time: "2019-12-25 18:04",
          user: "jerry"
        }
      ],
      multipleSelection: [],
      classificationList: [],
      pagesize: 10,
      currentPage: 1,
      search: ""
    };
  },
  computed: {
    deleteTaskBtn() {
      // 删除按钮的禁用状态，未选中时为禁止状态
      if (this.multipleSelection.length !== 0) {
        return false;
      }
      return true;
    },
    tableData() {
      const search = this.search;
      if (search) {
        return this.lists.filter(data => {
          return Object.keys(data).some(key => {
            return (
              String(data[key])
                .toLowerCase()
                .indexOf(search) > -1
            );
          });
        });
      }
      return this.lists.slice(
        (this.currentPage - 1) * this.pagesize,
        this.currentPage * this.pagesize
      );
    }
  },
  created() {
    this.total = this.lists.length;
    this.fetchData();
  },
  methods: {
    fetchData() {
      console.log("start");
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit(val) {
      // 编辑任务，跳转到编辑页面
      this.dialogPanelStatus = false;
      this.taskForm = this.lists[val];
      this.dialogFormVisible = true;
    },
    handleDelete(val) {
      // 单个删除
      this.lists.splice(val, 1);
    },
    deleteTask() {
      this.$confirm("此操作将删除选中任务, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 删除文件
          for (let i = 0; i < this.lists.length; i++) {
            if (this.multipleSelection.indexOf(this.lists[i]) > -1) {
              this.lists.splice(i, 1);
              i -= 1;
            }
          }
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    changeCurrent(current) {
      this.currentPage = current;
    },
    tableFilterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    addTaskSubmit() {
      if (this.dialogPanelStatus == true) {
        this.lists.push(this.taskForm);
      }
      this.dialogFormVisible = false;
      this.taskForm = {
        title: "",
        desc: "",
        time: "",
        user: {}
      }
    },
    addNewTask() {
      this.dialogFormVisible = true;
      this.dialogPanelStatus = true;
    }
  }
};
</script>

<style scoped>
div.optionTool {
  margin: 20px 0;
}
.footer {
  text-align: right;
  margin-top: 20px;
}
</style>
