<template>
<h2 >{{detail.name}}</h2>
</template>

<script>
import EXPERTSDETAIL from '../api/ExpertsDetail'
  export default {
    name:'expertsDetail',
    data(){
      return{
        detail:{}
      }
    },
    created(){
      EXPERTSDETAIL.then(res => {
        console.log(res.data.data)
        this.detail = res.data.data
        }).catch(err => console.log(err))
    },
    methods:{
      
      
    }    
  }
</script>


<style>
</style>