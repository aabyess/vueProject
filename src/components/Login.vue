<template>
    <div class="login">
      <h3>Login</h3>
      <input type="text" v-model="email" placeholder="email"><br>
      <input type="password" v-model="password" placeholder="password"><br>
      <button v-on:click="login">로그인</button>
      <p>만약 계정이 없다면, <router-link to="/sign">회원가입</router-link>을 먼저 실행해주세요!</p>
    </div>
  </template>
  
  <script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // 수정: 로그인을 위해 필요한 함수를 import합니다.

export default {
  name : 'loginPage',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    // 로그인 메소드 예시
    // 예시 로그인 메소드
    login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          this.$store.dispatch('login', userCredential.user); // 스토어의 login 액션 호출
          this.$router.push('/'); // 메인 페이지로 이동
        })
        .catch(err => {
          alert('로그인 에러: ' + err.message);
        });
    }
  },
}
</script>


  
  <style>
  
  </style>