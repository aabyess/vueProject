<template>
  <div class="container mt-4">
    <h5> vue test 메인페이지.</h5>
    <p>- Vue로 만들었음 -</p>
  </div>
  <div>
    <div v-if="user">
      {{ user.email }}님, 환영합니다!
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['user']) // Vuex store의 user 상태를 직접 매핑
  }
}
</script>

<style>

</style>