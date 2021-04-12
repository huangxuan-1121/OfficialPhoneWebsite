<template>
  <div id="app">
    <router-view />
    <app-nav></app-nav>
  </div>
</template>

<script>
  var deg = 0
  import appNav from './components/common/Nav'
  import {
    constants
  } from 'fs';
  export default {
    name: 'App',
    data() {
      return {}
    },
    components: {
      appNav,
    },
    methods: {
      // isMobile() {
      //   let flag = navigator.userAgent.match(
      //     /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      //   );
      //   return flag;
      // }
    },
    // created: function() {
    //   if (!this.isMobile()) {
    //     window.location.href =
    //       "http://www.homyit.cn";
    //   }
    // }
  }

</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: calc(8px + 1vw);
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    color: white;
  }
</style>
