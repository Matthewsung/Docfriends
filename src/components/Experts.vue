<template>
  <div class="w_1200">
   <div class="experts_box"> 
      <div class="experts" v-for="(value, index) in experts" :key="index">
        <router-link to="/expertsdetail"><!--  누르면 전문가 페이지로 이동 -->
          <div class="img_box" :class="{img_box_noPic:value.profileImgPath ===noPic }" v-bind:style="{background:`url(${value.profileImgPath}) no-repeat center / cover`}" >
            <div class="absent_box">
              <div class="absent" :class="{absent_act:value.alarmActivationState === 'Y'}"></div>
            </div>
          </div>
          <div class="experts_name">{{ `${value.name} ${value.expertTypeName}님` }}</div>
          <div class="work_place">닥프렌즈 병원</div>
          <div class="like">♥ {{value.likeCnt}}</div>
        </router-link>    
      </div>
    </div>

  </div>
</template>
<script>
import { EXPERTS } from '../api/index'
export default {
  name:'experts',
  data(){
    return{
      experts:[],
      isActive:false,
      noPic: ""
    }
  },
  created(){
    EXPERTS.then(res => {
      this.experts = res.data.data.expertList
      // console.log(res.data.data.expertList)
      })
      .catch(err => console.log(err))
  },
}
</script>
<style>
  .experts_box{
    width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr) ;
    grid-template-rows: repeat(2, 1fr);
    column-gap: 106px;
    row-gap: 48px ;
  }
  .experts{
    border: 2px solid #e6e6e6;
    text-align: center;
    padding: 48px 0 73px;

  }
  .img_box{
    width: 136px;
    height: 136px;
    border-radius: 50%;
    margin: 0 auto 50px;
    position: relative;
  }
  .img_box_noPic{
    background: url("../assets/no_pic.svg") no-repeat center / cover !important;
  }
  .absent_box{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    right: 0 ;
    bottom: 0;
  }
  .absent{
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #dadada;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .absent_act{
    background: #52a830;
  }
  .experts_name{
    font-size: 28px;
    font-weight: 900 ;
  }
  .work_place{
    font-size: 25px;
    color: #7a7a7a;
    margin: 25px 0 55px ;
  }
  .like{
    color: #ee8432;
    font-size: 20px;
  }
</style>
