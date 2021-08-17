<template>
      <div class="w_1200">
        <div class="top">
          <div class="title">{{info.name}}</div >
          <div class="hospital_img">
            <div class="slide" v-for="(value, index) in info.imagePathList" :key=index>
              <img :src=value >
            </div>
            <div class="slide_btn" @click="clickSlide">
              <img src='@/assets/slide_btn.svg' alt="슬라이드 버튼">
            </div>
            <div class="indicator_box">
              <div class="indi"></div>
              <div class="indi"></div>
              <div class="indi"></div>
              <div class="indi"></div>
            </div>
          </div>
          <div class="menu_tab">
            <div class="tab_btn tab_btn_act" >
              <router-link to="/info">소속 정보</router-link>
              
            </div>
            <div class="tab_btn " >
              <router-link to="/experts">소속 전문가</router-link>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import INFO from '../api/Info'
  export default {
    name:'Home',
    data(){
      return{
        info:[]
      }
    },
    components:{ },
    methods:{
      clickSlide (){ //클릭 이벤트

      }
    },
    created(){
      INFO
      .then(res => {
        this.info = res.data.data
        })
      .catch(err => console.log(err));
      
    }
    
  }
</script>

<style >
    main{
      text-align: center;
    }
    .title{
      font-size: 22px;
      font-weight: 900;
      padding: 85px;
    }
    .hospital_img{
      position: relative;
      padding-bottom: 33%;    
    }
    .slide{
      width: 589px;
      height: 358px;
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      overflow: hidden;
    }
    .slide img{
      width: 100%;
    }
    .slide_btn{
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    .indicator_box{
      display: flex;
      flex-direction: row;
      justify-content: center;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
    .indi{
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #bebebe;
      margin-right: 9px;
    }
    .indi:last-child{
      margin-right: 0;
    }
    .indi:first-child{
      background: #52a830;
    }
    .menu_tab{
      width: 748px;
      height: 94px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 64px auto 28px;
    }
    .tab_btn{
      width: 362px;
      height: 94px;
      line-height: 94px;
      font-size: 20px;
      text-align: center;
      color: #8a8a8a;
      border: 2px solid #dadada;
      border-radius: 47px;
    }
    .tab_btn_act{
      color: #52a830;
      border: 2px solid #52a830;
    }

</style>