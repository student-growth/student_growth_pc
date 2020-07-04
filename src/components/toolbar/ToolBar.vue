<!-- navigation  -->
<template>
  <div>
    <router-link class="nav_item" v-for="(item,i) in pageRoute" :key="i" :to="item.path">
      <span class="icon is-medium">
        <i :class="item.icon"></i>
      </span>
      <span>{{item.name}}</span>
    </router-link>
  </div>
</template>

<script>
import pageRoute from "@/path.js";
export default {
  name: "ToolBar",
  data() {
    return {
      pageRoute
    };
  }
};
</script>
<style lang='less' scoped>
 
</style>