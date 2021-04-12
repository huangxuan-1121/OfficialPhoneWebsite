<template>
  <div id="home" ref="home">
    <div ref="stageBox" id="stage-box">
      <div class="indexpage"><index /></div>
      <div class="secondpage"><about-amend v-if="aboutOpen" ref="aboutAmend"/></div>
      <div class="thirdpage"><Award  v-if="awardOpen"/></div>
      <div class="fourthpage"><Connect  v-if="showOpen"/></div>
    </div>
  </div>
</template>

<script>
  import Index from '../components/Home/Index'
  import Award from '../components/Home/Award'
  import Connect from '../components/Home/Connect'
  import AboutAmend from '../components/Home/AboutAmend'
  import {
    constants
  } from 'fs';
  export default {
    name: 'App',
    components: {
      Index,
      Award,
      Connect,
      AboutAmend
    },
    mounted() {},
    data() {
      return {
        aboutOpen:false,
        awardOpen:false,
        showOpen:false,
        deg : 0
      }
    },
    mounted() {
      // 以下的变量是为了懒加载模块，及切片组合动画
      var startPos
      var isScrolling 
      var endPos
      var that = this;
      var stageBox = this.$refs.stageBox
      home.addEventListener('touchstart', start,false)
      function start(event) {
        var touch = event.targetTouches[0]; //touches数组对象获得屏幕上所有的touch，取第一个touch
        startPos = {
          x: touch.pageX,
          y: touch.pageY,
          time: +new Date
        }; //取第一个touch的坐标值
        isScrolling = 0; //这个参数判断是垂直滚动还是水平滚动
        home.addEventListener('touchmove', move, false);
        home.addEventListener('touchend', end, false);
      }

      function move(event) {
        //当屏幕有多个touch或者页面被缩放过，就不执行move操作
        if (event.targetTouches.length > 1 || event.scale && event.scale !== 1) return;

        var touch = event.targetTouches[0];
        endPos = {
          x: touch.pageX - startPos.x,
          y: touch.pageY - startPos.y
        };
        isScrolling = (Math.abs(endPos.x) < Math.abs(endPos.y)) ? 1 : 0; //isScrolling为1时，表示纵向滑动，0为横向滑动
        if (isScrolling === 0) {
          event.preventDefault()
        }
      }

      function end(event) {
        var duration = +new Date - startPos.time; //滑动的持续时间
        if (!endPos) return
        if (isScrolling === 0 && Math.abs(endPos.x) > 50) { //当为水平滚动时
          if (Number(duration) > 10) {
            //判断是左移还是右移，当偏移量大于10时执行
            if (endPos.x > 10) {
              that.deg += 90
              judegRotate(that.deg)
            } 
            else if (endPos.x < -10) {
              that.deg -= 90
              judegRotate(that.deg)
            }

            function judegRotate(deg){
              endPos = {}
              var indexDeg = deg % 360 
              if(!that.aboutOpen){ //加载aboutamend页面
                if(indexDeg == -90 || indexDeg == 270 )
                {
                  that.aboutOpen = true;
                  setTimeout(() => {
                    AboutAmend.methods.wordAnmiS()
                  }, 500)
                }
              }
              if(!that.awardOpen)//加载award页面
              {
                if(indexDeg == -180 || indexDeg == 180 )
                {
                  that.awardOpen = true
                }
              }
              if(!that.showOpen)//加载show页面
              {
                if(indexDeg == -270 || indexDeg == 90 )
                {
                  that.showOpen = true
                }
              }
              var stageBoxs = stageBox.children
              var stageBoxsLen =  stageBoxs.length 
              for(let i=0;i<stageBoxsLen;i++){
                  stageBoxs[i].style.transform = 'rotateY(' + (that.deg + 90*i) + 'deg) translateZ(50vw)'
              } 
            }
          }
        } else {
          // event.preventDefault()
        }
        //解绑事件
        home.removeEventListener('touchmove', this, false);
        home.removeEventListener('touchend', this, false);
      }
      // 这里是touch事件动画
    }
  }

</script>
<style scoped>


</style>
<style>
  @import url(./../assets/css/Home/home.css);

  #stage-box{
    height: 100vh;
    width: 100%;
    position: relative;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transition: all 0.5s ease-in-out;
  }
</style>
