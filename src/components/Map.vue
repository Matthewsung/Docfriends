<template>
  <div id="map"></div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader"
export default {
  props:{
    info:Object,
    lat:Number
  },
  data(){
    return{
      myoptions:{
        center:{
          lat:37.484288, //info.lat
          lng:127.042315 //info.lon
        },
        zoom:16,
      }
    }
  },
  created(){
    const loader = new Loader({
      apiKey : process.env.VUE_APP_MAP_KEY ,
    });
    loader.load().then(res => {
      const map = new res.maps.Map(document.querySelector('#map'),this.myoptions)
      new res.maps.Marker({
        position:{lat: 37.484288, lng:127.042315},
        map:map
      })
    })
  }
}
</script>

<style>
  
</style>