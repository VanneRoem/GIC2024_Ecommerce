<template>
  <div class="header">
    <h1>Header</h1>
    <div class="button-container">
       <router-link to="/page1" active-class="active">Page 1</router-link>
       <router-link to="/page2" active-class="active">Page 2</router-link>
       <router-link to="/page3" active-class="active">Page 3</router-link>
   </div>
  </div>


<RouterView />
  <div>
    <div class="footer">
      <h1>Footer</h1></div>
  </div>
   
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>
<style scoped>
.header{
  display:flex;
  justify-content:space-between}
.footer{
  display: flex;
  justify-content: center;
}
.active{
  color:red;
}

</style>

