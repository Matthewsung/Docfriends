const path = require('path') //node의 문법으로 path를 잡아주는 역활
modules.exports ={
  mode:'development', // 개발 모드
  devtool : 'eval', // 개발시 사용(빠름)
  resolve:{
    extensions:['.js','.vue'], // 확장자
  },
  entry:{ 
    app:'main.js'  // main.js의 파일을 가져와서 app이라는 파일로 만들예정 (main에 모든 js 파일을 불러옴)
  },
  module :{ // 
    rules: [{   // 웹팩을 어떻게 합치고 설정할지 결정
      test: /\.vue$/, //.vue의 파일을 처리
      loader:'vue-loader', // .vue의 파일을 vue-loader가 처리하라고 시킴
     }]
  },
  plugins : [ ], // output 나오기 이전에 한번더 처리 해줌
  outupt: { // 하나로 합쳐진 결과물
    filename : 'app.js', // main.js에서 합쳐진 파일 이름이 app.js
    path: path.join(__dirname,'dist'), // 경로는 dist에 생성(절대 경로로 작성을 위하여 path를 사용)
  },
};