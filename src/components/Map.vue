<template>
  <div id="map" ></div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader"
export default {
  props:{
    info:Object
  },
  setup(props){
    console.log(props.lat)
    const myoptions={
      center:{
        lat:37.484288,
        lng:127.042315
      },
      zoom:16,
    }
    const loader = new Loader({
      apiKey: "AIzaSyC214TDMzbglLsut1sjukaqafGKvxe8FWE",
    });
    loader.load().then(res => {
      const map = new res.maps.Map(document.querySelector('#map'),myoptions)
      new res.maps.Marker({
        position:{lat: 37.484288, lng:127.042315},
        map:map
      })
    })
    return{
    }
  }
}
</script>

<style>
  
</style>