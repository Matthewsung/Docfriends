<template>
  <div class="w_1200">
    <div class="top">
      <div class="top_pic_title">{{info.name}}</div >
      <div class="hospital_img">
        <div class="slide" :class="{slide_act : isActive[index]}" v-for="(value, index) in info.imagePathList" :key=index>
          <img :src=value >
        </div>
        <div class="slide_btn" @click="clickSlide">
          <img src='@/assets/slide_btn.svg' alt="슬라이드 버튼">
        </div>
        <div class="indicator_box">
          <div class="indi" :class="{indi_act : isActive[index]}"  v-for="(value, index) in info.imagePathList" :key=index></div>
        </div>
      </div>
      <div class="menu_tab">
        <div class="tab_btn" :class="{tab_btn_act:clickBtn[0]}" @click="clickTapBtn" >
          <router-link to="/info">소속 정보</router-link>
        </div>
        <div class="tab_btn " :class="{tab_btn_act:clickBtn[1]}" @click="clickTapBtn" >
          <router-link to="/experts">소속 전문가</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {INFO} from '../api/'
  export default {
    name:'Home',
    data(){
      return{
        info:[],
        index: 1,
        isActive:[true,false,false,false],
        clickBtn:[false,false],
      }
    },
    components:{ },
    methods:{
      clickSlide (){ //슬라이드 클릭 이벤트
        const slide = document.querySelectorAll('.slide');
        const indi = document.querySelectorAll('.indi');
        this.isActive = false
        const slide_leng = slide.length
        slide[this.index % slide_leng].classList.add('slide_act')
        slide[(this.index - 1) % slide_leng].classList.remove('slide_act')
        indi[this.index % slide_leng].classList.add('indi_act')
        indi[(this.index - 1) % slide_leng].classList.remove('indi_act')
        this.index += 1;
      },
      clickTapBtn(e){ //소속정보, 전문가 클릭이벤트

        if(e.target.innerHTML === "소속 정보"){
          this.clickBtn[0] = true
          this.clickBtn[1] = false
        }
        else if(e.target.innerHTML === "소속 전문가"){
          this.clickBtn[0] = false
          this.clickBtn[1] = true
        }
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
    .top_pic_title{
      font-size: 22px;
      font-weight: 900;
      padding: 85px;
      text-align: center;
    }
    .hospital_img{
      position: relative;
      padding-bottom: 33%;    
      overflow: hidden;
    }
    .slide{
      width: 589px;
      height: 358px;
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      transition: all 0.7s;
      opacity: 0;
      overflow: hidden;
    }
    .slide_act{
      opacity: 1;
    }
    .slide img{
      width: 100%;
    }
    .slide_btn{
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
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
    .indi_act{
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