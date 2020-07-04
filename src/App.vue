<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import TabBar from "@/components/tabbar/TabBar.vue";
import ToolBar from "@/components/toolbar/ToolBar.vue";
export default {
  data() {
    return {};
  },
  components: {
    TabBar,
    ToolBar
  }
};
</script>
<style lang="less">
#app {
   
}
</style>
