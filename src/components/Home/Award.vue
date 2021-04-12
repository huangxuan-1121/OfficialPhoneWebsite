<template>
  <div id="award">
    <a class="logo"></a>
    <h1>Our Achievements</h1>
    <div class="container">
      <div class="card1">
        <div class="img-bac"></div>
        <h3>专业竞赛</h3>
        <hr>
        <div text-algin="left">
          <p>江西省软件服务外包大赛<br>中国智能机器人大赛<br>中国大学生计算机设计大赛<br>江西省计算机作品大赛</p>
        </div>
      </div>
      <div class="card2">
        <div class="img-bac"></div>
        <h3>项目实例</h3>
        <hr>
        <div>
          <p>江西师范大学管理决策评价研究中心<br>江西师范大学学生工作综合办公平台<br>江西师范大学国际教育学院<br>江西师范大学五河治理项目建设管理系统</p>
        </div>
      </div>
      <div class="card3">
        <div class="img-bac"></div>
        <h3>就业成绩</h3>
        <hr>
        <div>
          <p>宏奕的一些学长们已经成功挑战阿里巴巴，腾讯，百度三大巨头急360等知名互联网企业HR,博得offer,现已成为学院30年来就业率质量最高的团队</p>
        </div>
      </div>

    </div>
    <p>
      You never know how strong you really are until being strong is the only choice you have.
    </p>
  </div>  
</template>

<script>
import { constants, open } from 'fs';
export default {
  name:'award',
  data(){
    return {
        cards:['']
    }
  },
  methods:{
    getInitDom()
    {
      this.cards = [
        {rotate:-15,zIndex:4},
        {rotate:0,zIndex:5},
        {rotate:15,zIndex:6}
      ]
      this.cardsIndex = [0,1,2]//这个是啥元素显示的排序的位置,它的下标是对应元素id
      this.cardObjs = document.querySelectorAll('.container>div')  //对象数组
      this.cardObjsLen = this.cardObjs.length
      this.showOpen  = true
    }
  },
  mounted()
  {
    this.getInitDom()
    var that = this
    //核心思想就是点击该张时和最上层maxIndex换calssList,记录改变maxIndex,再改变相应的类名数组cards
    //二就是maxIndex永远指向最上层元素在cardObjs的位置

    //点击第n个，就把第N个样式和最好的样式替换一下,而最好的那个样式变成第n个样式
    for(let j=0;j<that.cardObjsLen;j++)
    {
      that.cardObjs[j].index = j;
      that.cardObjs[j].ontouchstart = function()
      {
        if(that.showOpen)
        {
          clickImg.call(this)
          that.showOpen = false
        }
        else{
          showCard()
          that.showOpen = true       
        }
      } 

      function clickImg()
      {
        // 先清空旋转
        for(let i=0;i<that.cardObjsLen;i++)
        {
          that.cardObjs[i].style.transform = 'rotate(0deg)'
        }
        // 先清空旋转

        var doIndex = that.cardsIndex.indexOf(this.index) 
        //拿到当前点击元素的显示层叠位置

        //处理浮动层顺序
        var cardTemp = that.cardsIndex.splice(doIndex,1)[0]
        that.cardsIndex.push(cardTemp)
        //处理浮动层顺序

        // 为了视觉动画先处理新的层叠顺序
        that.cardsIndex.forEach((cardsObjIndex,cardsIndexIndex) => {
          that.cardObjs[cardsObjIndex].style.zIndex = that.cards[cardsIndexIndex].zIndex
        });
        // 为了视觉动画先处理新的层叠顺序
        
        //当前的浮动层数不是最上层层数执行动画
        if(doIndex !== that.cardObjsLen-1)
        {
          that.cardObjs[this.index].style.transition = 'none'
          that.cardObjs[this.index].classList.add('card-anmi')
          that.cardObjs[this.index].style.transform = 'translate(20vh,-20vh) rotate(20deg) scale(1.5)'
          setTimeout(()=>{
            that.cardObjs[this.index].style.transition = 'all 0.5s '
            that.cardObjs[this.index].classList.remove('card-anmi')
            that.cardObjs[this.index].style.transform = 'rotate(0deg)'
          },100)
        }
        //当前的浮动层数不是最上层层数执行动画
      }

      function showCard()
      {
        that.cardsIndex.forEach((cardsObjIndex,cardsIndexIndex) => {
          that.cardObjs[cardsObjIndex].style.transform = 'rotate(' + that.cards[cardsIndexIndex].rotate + 'deg)'
        });
      }
    }
  }
}
</script>

<style scoped>
  @import url(../../assets/fonts/MONTSERRAT-REGULAR.css);
  @import url(../../assets/css/home/award.css);
</style>
