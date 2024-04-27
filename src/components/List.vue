<template>
    <div>
      <h5>{{블로그글[0].title}}</h5>
      <p>{{블로그글[0].date}}</p>
    </div>
    <div>
      <h5>{{블로그글[1].title}}</h5>
      <p>{{블로그글[1].date}}</p>
    </div>
    <div>
      <h5>{{블로그글[2].title}}</h5>
      <p>{{블로그글[2].date}}</p>
    </div>
    <div class="login">
      <h3>Login</h3>
      <input type="text" placeholder="email"><br>
      <input type="password" placeholder="password"><br>
      <button>로그인</button>
      <p>만약 계정이 없다면, 회원가입을 먼저 실행해주세요!</p>
    </div>
  </template>
  
  <script>
  export default {
    name : 'BlogList',
    props : {
      블로그글 : Array,
    }
  }
  </script>
  
  <style>
  
  </style>