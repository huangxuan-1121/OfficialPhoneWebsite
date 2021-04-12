<template>
  <div id="bigbox">
    <a class="logo"></a>
    <h1>Contact Us<span></span></h1>
    <div class="content" id="content">
      <div class="content-1" id="content-1" ref="left">
        <div><i></i>
          <p>先骕楼北门理电左拐</p>
          <p>———</p>
        </div>
        <div>
          <span id="right" @click="right">
            
          </span><i></i>
          <p>1070301929.qq.com</p>
          <p>———</p>
        </div>
        <div><i></i>
          <p>1070301929</p>
        </div>
      </div>
      <div class="content-2" id="content-2" ref="right">
        <h1>Welcome</h1>
        <form action="" method="" class="login-form-1" @submit.prevent="submit">
          <input class="txtb" type="text" name="" placeholder="Username" v-model="name" />
          <p ref="name"></p>
          <input class="txtb" type="password" name="" placeholder="Password" v-model="pwd" />
          <p ref="password"></p>
          <input class="login-btn" type="submit" name="" value="login" />
        </form>
        <span id="left" @click="left"> </span>
        <span id="right_2" @click="right_2">  </span>
      </div>
      <div class="content-3" id="content-3" ref="register">
        <h1>register</h1>
        <form action="" method="" class="login-form-2" @submit.prevent="submit2">
          <input class="txtb" type="text" name="" placeholder="Username" @blur="username2" v-model="name2" />
          <p ref="name2"></p>

          <input class="txtb" type="text" name="" placeholder="E-mail" @blur="email" v-model="Email" />
          <p ref="email"></p>

          <input class="txtb" type="text" name="" placeholder="Phone Number" @blur="phone" v-model="Phone" />
          <p ref="phone"></p>

          <input class="txtb" type="password" name="" placeholder="Password" @blur="password2" v-model="pwd2" />
          <p ref="password2"></p>

          <input class="login-btn" type="submit" name="" value="Register" />
        </form>
        <span id="left_2" @click="left_2"> </span>
      </div>
    </div>
  </div>
</template>
<style scoped>
  @import url(../../assets/fonts/BOOMBOX.css);
  @import url(../../assets/css/Home/connect.css);
</style>
<script>
  import {
    constants
  } from 'fs';
  import axios from 'axios'
  import Qs from 'qs'
  import crypto from './../util/aes'
  export default {
    name: 'App',
    components: {},
    data() {
      return {
        name: '',
        pwd: '',
        Email: '',
        Phone: '',
        name2: '',
        pwd2: ''
      }
    },
    methods: {
      right() {
        this.$refs.left.style.display = "none";
        this.$refs.right.style.display = "flex";
      },
      left() {
        this.$refs.left.style.display = "grid";
        this.$refs.right.style.display = "none";
      },
      right_2() {
        this.$refs.right.style.display = "none";
        this.$refs.register.style.display = "flex";
      },

      left_2() {
        this.$refs.register.style.display = "none";
        this.$refs.right.style.display = "flex";
      },

      email() {
        var email = this.Email;
        var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        if (!emailReg.test(email)) {
          this.$refs.email.innerHTML = "请注意邮箱格式是否正确"
          return false

        } else {
          this.$refs.email.innerHTML = "格式正确！"
          return true

        }
      },
      phone() {
        var phone = this.Phone;
        var phoneReg = /^1(3|4|5|6|7|8|9)\d{9}$/
        if (!phoneReg.test(phone)) {
          this.$refs.phone.innerHTML = "请注意手机号格式是否正确"
          return false 

        } else {
          this.$refs.phone.innerHTML = "格式正确！"
          return true

        }
      },
      password2() {
        var password2 = this.pwd2;
        var passwordReg = /^[\d\w]{6,12}$/
        if (!passwordReg.test(password2)) {
          this.$refs.password2.innerHTML = "请输入6~12以内数字、字母或组合密码"
          return false

        } else {
          this.$refs.password2.innerHTML = "格式正确！"
          return true
        }
      },
      username2() {
        var name2 = this.name2;
        var nameReg = /^[a-zA-Z0-9_]{4,16}$/;
        if (!nameReg.test(name2)) { //判断
          this.$refs.name2.innerHTML = "请输入4到16位（字母，数字，下划线)!";
          return false
        } else {
          this.$refs.name2.innerHTML = "格式正确！";
          return true
        }
      },
      submit() {
        axios({
            url: 'http://slchen.jxnu.edu.cn/phone/LoginServlet',
            method: 'post',
            data: {
              username: this.name,
              password: this.pwd
            },
            transformRequest: [function (data) {//Crypto-js aes对称加密
            data.password = crypto.Encrypt(data.password)
              // let EnData = {
              //   username:crypto.Encrypt(data.username),
              //   password:crypto.Encrypt(data.password)
              // }
              data = Qs.stringify(data);
              return data;
            }],
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            dataType: "json"
          }).then((res) => {
            console.log(res.data)
            if (res.data.length > 0) {
              var ses = window.sessionStorage;
              var d = JSON.stringify(res.data); //存入sessionStorage中
              ses.setItem('data', d)
              // this.$router.push('/Group')
              this.$router.go(0)
              return true
            } else {
              alert("请输入正确的信息")
              return false
            }
          })
          .catch(function (error) {
            console.log(error)
          })

      },
      submit2() {
        if(this.username2()&&this.password2()&&this.phone()&&this.Email){ //判断是否符合格式
          axios({
            url: 'http://slchen.jxnu.edu.cn/phone/RegisterServlet',
            method: 'post',
            data: {
              username: this.name2,
              password: this.pwd2,
              email: this.Email,
              telphone: this.Phone,
            },
            transformRequest: [function (data) {//Crypto-js aes对称加密
              data.password = crypto.Encrypt(data.password);
              data = Qs.stringify(data);
              return data;
            }],
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            dataType: "json"
          }).then((res) => {
            if (res.data == "格式正确，注册成功") {
            // this.$router.push('/')  
            // console.log(res.data)
            // console.log(this)
            this.left_2()
              return true

            } else {
              alert("请输入正确的信息")
            }
          })
          .catch(function (error) {
            console.log(error)
          })
        }
      },
    }
  }

</script>
