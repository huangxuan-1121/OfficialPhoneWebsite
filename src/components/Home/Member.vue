<template>
  <div id="member">
    <div class="head"> 
      <div class="close-arrow" @touchstart="$emit('memberOpenStatu')"><span class="arrow"></span></div>
      <div> members</div>
    </div>
    <div class="grade-box">
      <img src="../../assets/images/Home/member/flower.png" class="flower-bck">
      <img src="../../assets/images/Home/member/flower.png" class="flower-bck">
      <img src="../../assets/images/Home/member/flower.png" class="flower-bck">
      <img src="../../assets/images/Home/member/flower.png" class="flower-bck">
      <div class="lineBars">
        <div class="line-bar" v-if="showGeadeId === 0">
          <h2>12 级</h2>
          <p class="line-text">王宏凯&#160;&#160;&#160;&#160;吕金秀&#160;&#160;&#160;&#160;罗强&#160;&#160;&#160;&#160;许楠</p>
        </div>
        <div class="line-bar" v-if="showGeadeId === 1">
          <h2>13 级</h2>
          <p class="line-text">张敏&#160;&#160;&#160;&#160;林嘉桦&#160;&#160;&#160;&#160;施佳航&#160;&#160;&#160;&#160;周舒雅</p>
        </div>
        <div class="line-bar" v-if="showGeadeId === 2">
          <h2>14 级</h2>
          <p class="line-text"> 向恢进&#160;&#160;&#160;&#160;梦颖&#160;&#160;&#160;&#160;秦文芳&#160;&#160;&#160;&#160;
            双喜&#160;&#160;&#160;&#160;林金章</p>
        </div>
        <div class="line-bar" v-if="showGeadeId === 3">
          <h2>15 级</h2>
          <p class="line-text">胡悦&#160;&#160;&#160;&#160;李亮&#160;&#160;&#160;&#160;姜敏&#160;&#160;&#160;&#160;
            张晨烨&#160;&#160;&#160;&#160;程佳俊&#160;&#160;&#160;&#160;黄建凯&#160;&#160;&#160;&#160;张昊&#160;&#160;&#160;&#160;沈剑伟&#160;&#160;&#160;&#160;温隆强
          </p>
        </div>
        <div class="line-bar" v-if="showGeadeId === 4">
          <h2>16 级</h2>
          <p class="line-text">邢文鹏&#160;&#160;&#160;&#160;朱国根&#160;&#160;&#160;&#160;徐凯&#160;&#160;&#160;&#160;
            罗明钏&#160;&#160;&#160;&#160;龚方伟&#160;&#160;&#160;&#160;刘安平</p>
        </div>
        <div class="line-bar" v-if="showGeadeId === 5">
          <h2>17 级</h2>
          <p class="line-text">
            郭国渊&#160;&#160;&#160;&#160;郑佳佳&#160;&#160;&#160;&#160;廖孟章&#160;&#160;&#160;&#160;李宗泽&#160;&#160;&#160;&#160;李丹&#160;&#160;&#160;&#160;谢昊雪&#160;&#160;&#160;&#160;
            赵业辉&#160;&#160;&#160;&#160;郑晗璐&#160;&#160;&#160;&#160;钟文康</p>
        </div>
        <div class="line-bar" v-if="showGeadeId === 6">
          <h2>18 级</h2>
          <!-- <div class="line-bck"></div> -->
          <p class="line-text">
            肖静&#160;&#160;&#160;&#160;罗明&#160;&#160;&#160;&#160;林明皓&#160;&#160;&#160;&#160;黄璇&#160;&#160;&#160;&#160;张龙&#160;&#160;&#160;&#160;吴灿&#160;&#160;&#160;&#160;朱益荣,
            李欣懋&#160;&#160;&#160;&#160;贺欣&#160;&#160;&#160;&#160;朱梦迪</p>
        </div>
      </div>
    </div>
    <div class="cloud-bck"></div>
  </div>
</template>

<script>
  export default {
    name: 'member',
    props: ['showGeadeId'],
    data() {
      return {}
    },
    methods: {},
  }

</script>


<style scoped>
  @import url(../../assets/css/Home/member/member.css);
</style>
