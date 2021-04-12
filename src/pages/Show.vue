<template>
    <div id="show">
<div class="header">
    <img src="../assets/images/show/home.png" alt="">
    <img src="../assets/images/show/line.png" alt="">
</div>
<div class="content" id="img">
   <img src="../assets/images/show/picture3.jpg" alt="">
</div>

<div class="footer">
    <img src="../assets/images/show/plante.png" alt="" ref="img">
</div>
    </div>
</template>

<script>
import axios from 'axios'
import Qs from 'qs'
import { constants } from 'fs';
var timer
var list1=[]
export default {
  name:'show',
  data()
  {
    return {}
  },
  
  mounted()
  {
    axios({
    method:'post',
    url:'http://www.homyit.cn/Harry/Img',
    params:{
      
        },
    headers:{'Content-Type': 'application/x-www-form-urlencoded'}
    }).then((res)=>{
      for(var i=0;i<res.data.length;i++)
      {
        list1.push(res.data[i].address)
      }
    }).catch(function(error){
            console.log(error)
    })

    var img = document.getElementById("img");
    var index = 0;
    timer = setInterval(()=>{
            index++;
            index = index % list1.length;
            img.firstChild.src = list1[index];  
       },2000);
  },
  beforeDestroy()
  {
      clearInterval(timer)
  }
}
</script>


<style scoped>
@import url(../assets/css/Show/show.css);
@import url(../assets/fonts/LCALLIG.css);
</style>