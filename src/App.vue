<template>
  <Head />
  <TopPic />
  <router-view ></router-view>
</template>

<script>
import Head from './components/Head.vue'
import TopPic from './components/TopPic.vue'
export default {
  name:'app',
  components:{ Head, TopPic }
};
</script>
<style>

  *{margin: 0; padding: 0;}
  a{width:100%; height: 100%; display: block; text-decoration: none;color: inherit;}
  .wrap{width: 100%;}
  .w_1200{width: 1200px; margin: 0 auto;}

</style>
