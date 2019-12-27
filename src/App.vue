<template>
  <div id="app">
    <el-container>
      <el-header class="headerMenu">
        <header-menu />
      </el-header>
      <el-main>
        <router-view transition="fade"></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import headerMenu from "@/components/headerMenu.vue";

export default {
  name: "app",
  components: {
    headerMenu
  },
  methods: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-bottom: 60px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<style scoped>
.headerMenu {
  padding: 0;
}
</style>
