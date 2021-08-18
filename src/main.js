import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router";
// import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App);
// app.use(VueGoogleMaps,{
//   load:{
//     key:"AIzaSyC214TDMzbglLsut1sjukaqafGKvxe8FWE"
//   }
// })
app.use(Router);
app.mount("#app");