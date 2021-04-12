<template>
  <div class="main_menu">
    <a class="menu anmi" href="#/"  ></a>
    <a class="menu anmi" href="#/introduce"  ></a>
    <a class="menu anmi" href="#/show" ></a>
    <a class="menu anmi" href="#/group"  ></a>
    <div class="button" id="btn" @touchstart="menuShow">
      <div class="button_att"></div>
      <div class="button_att"></div>
    </div>
  </div>
</template>
<script>
import { fail } from 'assert';
import { constants } from 'fs';
  export default {
    name: 'Nav',
    data () {
      return {
        btnStart : false
      }
    },
    methods:{
      mainMenuS(){
        btn.style.transform = 'rotate(765deg) scale(' + 5/6 + ')'
        for(let i=0;i<this.menusLength;i++)
        {
          this.menus[i].classList.remove('anmi');
        }
        this.menus[0].parentNode.classList.add('main_menu_anim')
        this.btnStart = true
      },
      mainMenuE(){
        btn.style.transform = 'rotate(0deg)'
        for(let i=0;i<this.menusLength;i++)
        {
          this.menus[i].classList.add('anmi');
        }
        this.menus[0].parentNode.classList.remove('main_menu_anim')
        this.btnStart = false
      },

      menuShow(){ //点击事件动画总开关
        if(this.btnStart){
          this.mainMenuE()
          constants
        }else{
          this.mainMenuS()
        }
      },

      getInitDom()//初始dom
      {
        this.menus = document.getElementsByClassName('menu')
        this.menusLength = this.menus.length
      }

    },
    mounted()
    {
      this.getInitDom() //初始dom
      var that = this

      for(let i=0;i<this.menusLength;i++)
      {
        this.menus[i].index = i
        this.menus[i].onclick = function(){ 
          btn.style.transform = 'rotate(0deg)'
          for(let i=0;i<that.menusLength;i++)
          {
            that.menus[i].classList.add('anmi');
          }
          this.parentNode.classList.remove('main_menu_anim')
          that.btnStart = false
        }
      }
    }
  }

</script>

<style>
  @import url(../../assets/css/nav/nav.css);
</style>
