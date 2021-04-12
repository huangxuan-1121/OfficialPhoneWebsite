<template>
  <div id="index">
    <div id="index_container">
      <div class="welcome" v-if="username">Welcome <span>{{username}}</span></div>
    </div>
    <div id="main">
      <a href="" id="logo"></a>
      <div class="title_e">
        <div class="title_e_box">
          <div class="homyit">HOMYIT</div>
          <div class="studio">STUDIO</div>
        </div>
      </div>
      <div class="title_c">
        <div class="homyit_box">
          <div class=stage>
            <div>
              <div class="hong font">宏</div>
              <div class="yi font">奕</div>
            </div>
            <div>
              <div class="gong font">工</div>
              <div class="zuo font">作</div>
              <div class="shi font">室</div>
            </div>
          </div>
        </div>
      </div>
      <div class="time">
        <div >2013 </div>
        <div class="time_line"></div>
        <div >2019</div>
      </div>
      <!-- 这里是一个时间组件 -->
      <!-- 左右滑提示 -->
        <div class="tip-show"> <span class="tip-left"></span> <span class="tip-right"></span> </div>
      <!-- 左右滑提示 -->
    </div>
  </div>
</template>

<style scoped>
  span{
    display:block;
  }
  #svg-text{
    width: 100vw;
    margin: 0 auto;
  }
  .tip-show{
    display:flex;
    justify-content:space-between;
    position:absolute;
    top:calc(50% - 1.5rem);
    width:100%;
  }
  .tip-left{
    transform:translate(1.5rem,0);
  }
  .tip-right{
    transform:translate(-1.5rem,0);
  }
  .tip-left,.tip-right{
    position:relative;
    width:3rem;
    height:3rem;
    background-color:rgba(255, 255, 255,0.5);
    border-radius:50%;
    animation:tipShow 2s linear alternate infinite; 
  }
  @keyframes tipShow {
    from{opacity:0.25;}
    to{
      opacity:1;transform:translate(0);
    }
  }
  .tip-left::after,.tip-right::before,
  .tip-left::before,.tip-right::after{
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    margin:auto;
    content:'';
    width:1rem;
    height:2px;
    background-color:white;
  }
  .tip-left::before{
    transform-origin:0 50%;
    transform:rotate(45deg);
  }
  .tip-left::after{
    transform-origin:0 50%;
    transform:rotate(-45deg);
  }
  .tip-right::before{
    transform-origin:100% 50%;
    transform:rotate(45deg);
  }
  .tip-right::after{
    transform-origin:100% 50%;
    transform:rotate(-45deg);
  }
</style>

<script>
  import { constants } from 'fs';
  //对象输出
  export default {
    name:'index',
    data(){
      return {
        username:window.sessionStorage.data  //登录sessionStroage
      }
    },
    methods:{
    },
    mounted(){ 
      var squireHeight = 10 //vh
      var squireWidth = 10 //vw
      var line = 10 //height
      var clone = 10 //width
      //加载动画处理
      var imgSlices = new Array(line)
      var main = document.getElementById('main')  //获取到上层页面定时渲染
      var titleE = document.querySelectorAll('.title_e_box>div');
      var indexContainer = document.getElementById('index_container')
      for (let i = 0; i < line; i++) {
        imgSlices[i] = new Array(clone)
        var boxLine = document.createElement('div')
        boxLine.classList.add('img_slice_box')
        indexContainer.appendChild(boxLine)
        for (let j = 0; j < clone; j++) {
          var positionX = -10 * j //其实这就是他们的位置
          var positionY = -10 * i
          var randX = randPositon(positionX, positionY).x
          var randY = randPositon(positionX, positionY).y
          var box = document.createElement('div')
          boxLine.appendChild(box)
          box.style.backgroundPositionY = positionY + 'vh'
          box.style.backgroundPositionX = positionX + 'vw'
          box.style.transform = 'translate(' + randX + 'vw,' + randY + 'vh)'
        }
      }

      setTimeout(anim,0)

      function anim() {
        var imgs = document.querySelectorAll('.img_slice_box>div')
        var imgLength = imgs.length;
        for (let i = 0; i < imgLength; i++) {
          imgs[i].classList.add('img_slice')
          imgs[i].style.transform = ''
        }
        
        //注意这个组合动画1.5秒搞完
        setTimeout(
          function () {
            homyitFontS()
          },1500
        )
        function homyitFontS()
        {
          //处理整个界面的出现
          main.style.opacity = '1'  
          //文字动画效果
          var fonts = document.getElementsByClassName('font')
          for(let i=0;i<fonts.length;i++)
          {
            fonts[i].className = 'font'
          }
          titleE[0].style.transform = 'rotateX(10deg)'
          titleE[1].style.transform = 'rotateX(-10deg)'
          //文字动画效果
          // 动画结束之后释放内存

        }
      }

      //位置随机函数
      function randPositon(positionX, positionY)  {
        var flagX = (Math.random() * 1 - 0.5) > 0 ? 1 : (-1)
        var flagY = (Math.random() * 1 - 0.5) > 0 ? 1 : (-1)
        var ranX = flagX * (Math.floor(Math.random() * 20) * 5)
        var randY = flagY * (Math.floor(Math.random() * 20) * 10)
        return {
          x: ranX,
          y: randY
        }
      }
    }
  }


</script>

<style>
  .img_slice_box{
    display: flex;
    display: -webkit-box;
    display: -moz-box; 
    display: -ms-flexbox; 
    display: -webkit-flex; 
    display: flex;
  }
  .img_slice{
    width: 10vw;
    height:10vh;
    background-size: 100vw 100vh;
    background-image: url(../../assets/images/home/index/1.jpg);
    background-repeat: no-repeat;
    transition: transform 1.5s ease-out;
  }
</style>

<style scoped>
    @import url("../../assets/fonts/BOOMBOX.css");
    @import url("../../assets/css/home/index.css");
</style>
