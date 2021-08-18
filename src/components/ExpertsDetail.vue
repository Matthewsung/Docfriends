<template>
  <div class="w_1350">
    <div class="detail_top">
      <div class="img_box" v-bind:style="{background:`url(${detail.profileImgPath}) no-repeat center / cover`}">
        <div class="absent_box">
          <div class="absent"></div>
        </div>
      </div>
      <div class="experts_name">{{ `${detail.name} ${detail.expertTypeName}님` }}</div>
      <div class="work_place">닥프렌즈 병원</div>
      <div class="like">♥ {{detail.likeCnt}}</div>
    </div>
    <div class="detail_bot">
      <div class="detail_title"> 학력 및 자격면허 </div>
      <div class="detail_desc">
        <p class="desc_education" v-for="(value, index) in education" :key="index">{{value}}</p>
      </div>

      <div class="detail_title"> 경력 </div>
      <div class="detail_desc">
        <p class="desc_certification" v-for="(value,index) in certification" :key="index">{{value}}</p>
      </div>

      <div class="detail_title"> 진료과 </div>
      <div class="detail_desc">{{detail.subject}}</div>

      <div class="detail_title"> 알림 키워드 </div>
      <div class="detail_desc">
        <span class="desc_alram" v-for="(value,index) in alarm" :key="index"># {{value}}</span>
      </div>

      <div class="detail_title"> 소속정보 </div>
      <div class="detail_desc">{{detail.companyName }}</div>
      <div class="detail_desc">{{detail.companyAddr + detail.companyAddrEtc }}</div>
      <div class="detail_home">
        <router-link to="/">닥프렌즈 병원 바로가기</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { EXPERTSDETAIL } from '../api/index'
  export default {
    name:'expertsDetail',
    data(){
      return{
        detail:{},
        education:[],
        certification:[],
        alarm:[]
      }
    },
    created(){
      EXPERTSDETAIL.then(res => {
        console.log(res.data.data)
        this.detail = res.data.data
        this.education = res.data.data.ability.split('\n')
        this.certification = res.data.data.career.split('\n')
        this.alarm = res.data.data.alarmKeywordList
        }).catch(err => console.log(err))
    },
    methods:{
      
    }    
  }
</script>

<style>
.detail_top{
  text-align: center;
  margin: 90px 0 28px;
}
.detail_bot{
  width: 100%;
  border: 2px solid #e6e6e6;
  padding: 81px 61px;
  box-sizing: border-box;
}
.detail_title{
  font-size: 22px;
  font-weight: 900;
  margin-bottom: 30px;
}
.detail_desc{
  margin-bottom: 90px;
  
    font-size: 20px;
  
}
.desc_education{
  color: #414141;
  margin-bottom: 61px;
}
.desc_education:last-child{
  margin-bottom: 0;
}
.desc_certification{
  margin-bottom: 64px;
}
.desc_certification:last-child{
  margin-bottom: 0;
}
.desc_alram{
  color: #667186;
}
.detail_desc:nth-child(10){
  margin-bottom: 19px;
}
.detail_home{
  width: 550px;
  height: 95px;
  line-height: 95px;
  border: 2px solid #919ebb;
  border-radius: 50px;
  color: #636e82;
  font-size: 20px;
  text-align: center;

  margin: 0 auto;
}
</style>