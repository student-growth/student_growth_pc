<!--  -->
<template>
  <div class="tabbar">
     <tab-item></tab-item>
     <span>欢迎你：Leesure</span>
  </div>
</template>

<script>
import TabItem from './TabItem.vue' 
export default {
  name:'TabBar',
  data () {
    return {
    };
  },
  components:{
    TabItem
  }
}

</script>
<style lang='less' scoped>
   
</style>