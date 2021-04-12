<template>
  <div id="introduce">
    <a class="logo"></a>
    <h1>introduce</h1>
    <div class="container">
      <div class="line-bar">
        <div class="line-circle"></div>
        <div class="line-bar-line"></div>
        <div class="line-bar-rect">宏奕工作室成立于2013年9月，是一个学生自主创业工作室</div>
      </div>
      <div class="line-bar">
        <div class="line-circle"></div>
        <div class="line-bar-line"></div>
        <div class="line-bar-rect">由团队核心12级王宏凯学长   领着十余名团队成员创立</div>
      </div>
      <div class="line-bar">
        <div class="line-circle"></div>
        <div class="line-bar-line"></div>
        <div class="line-bar-rect">在学院各领导，老师的大力 支持下迅速成长起来   </div>
      </div>
      <div class="line-bar">
        <div class="line-circle"></div>
        <div class="line-bar-line"></div>
        <div class="line-bar-rect">工作室致力于Web开发，不断 进取，开拓创新</div>
      </div>
      <div class="line-bar">
        <div class="line-circle"></div>
        <div class="line-bar-line"></div>
        <div class="line-bar-rect">以“有爱同行，踏实求新” 为团队精神</div>
      </div>
      <div class="line-bar">
        <div class="line-circle"></div>
        <div class="line-bar-line"></div>
        <div class="line-bar-rect">以超强的团队凝聚力和深厚的技 术实力得到学院师生的一致肯定</div>
      </div>
    </div>

  </div>  
</template>

<script>
export default {
  name:'introduce',
  data(){
    return {

    }
  },
  methods:{
    getInitDom()
    {
      this.lineBars = document.getElementsByClassName('line-bar')
      this.lineBarsLen = this.lineBars.length
      this.spaceTime = 0
    }
  },
  mounted(){
    this.getInitDom() //初始化dom
    for(let i=0;i<this.lineBarsLen;i++)
    {
      this.lineBars[i].style.animationDelay = (this.spaceTime++ * 0.2)+ 's'
    }
  }
}
</script>

<style scoped>
@import url(../assets/css/Introduce/introduce.css);
  #introduce{
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-image: url(../assets/images/Introduce/introduce.jpg);
    background-size: cover;
  }
</style>