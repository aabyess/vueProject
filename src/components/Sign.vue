<template>
  <input type="text" v-model="email" placeholder="email"><br>
  <input type="password" v-model="password" placeholder="password"><br>
  <button v-on:click="signUp">가입하기</button>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// 'firebaseConfig.js'에서 app을 가져올 필요가 없으니, 필요한 'auth' 함수들만 가져옵니다.

export default {
  name: 'SignUp',
  
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    signUp() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password).then(
        () => {
          alert('회원가입완료!');
        },
        function(err) {
          alert('에러: ' + err.message);
        }
      );
    }
  },
}
</script>

<style>
</style>
