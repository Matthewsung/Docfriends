<template>
<h1>{{tmp}}</h1>
  <section class="bot">
    <div class="sm_menu_box">
      <div class="sm_menu">알림 키워드</div>
      <div class="sm_menu_detail keywords">
        <span v-for="(value, index) in info.alarmKeywordList" :key=index># {{value}} </span>
      </div>
    </div>
    <div class="sm_menu_box">
      <div class="sm_menu">병원 홈페이지</div>
      <div class="sm_menu_detail "><a :href="info.homepageUrl">{{info.homepageUrl}}</a></div>
    </div>
    <div class="sm_menu_box">
      <div class="sm_menu">병원 전화번호</div>
      <div class="sm_menu_detail ">{{info.tel}}</div>
    </div>
    <div class="sm_menu_box">
      <div class="sm_menu">주소</div>
      <div class="sm_menu_detail address">{{`${info.addrRoad} (${info.addrEtc})`}}</div>
        <Map :info="info" :lat="info.lat"/>
    </div>
  </section>
</template>
<script>
  import {INFO} from '../api/'
  import Map from './Map.vue'
  
  export default {
    name:'info',
    data(){
      return{
        info:{},
      }
    },
    components:{ Map },
    created(){
      INFO
      .then(res => {
        this.info = res.data.data
        // console.log(res.data.data)
      })
      .catch(err => console.log(err));
    }
  }
</script>
<style >
    .bot{
      width: 1200px;
      border: 2px solid #e6e6e6;
      padding: 130px 50px;
      margin:  0 auto;
      box-sizing: border-box;
      text-align: left;
    }
    .sm_menu_box{
      margin-bottom: 82px;
    }
    .sm_menu{
      font-size: 20px;
      font-weight: 900;
      margin-bottom: 30px;
    
    }
    .sm_menu_detail{
      color: #52a830;
    }
    .keywords{
      color: #667186;
    }
    .keywords span{
      margin-right: 1em;
    }
    .address{
      color: #414141;
    }
    #map{
      width: 1088px;
      height: 666px;
      margin-top: 42px;
    }
</style>