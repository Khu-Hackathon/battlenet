<template>
    <div class="loginform">
        <input
          class="id"
          v-model="id"
          type="id"
          placeholder="아이디"
          @keyup.enter="login"
        />
        <br />
        <input
          class="password"
          v-model="pw"
          type="password"
          placeholder="비밀번호"
          @keyup.enter="login"
        />
        <br />
        <button type="button" class="login" @click="login">로그인</button>
    </div>
</template>

<script>
export default {
    setup() {
        axios.post()
        .
    }
}
</script>

<style scoped>
.loginform {
    text-align: center;
}
.id {
  width: 250px;
  border: 1px solid white;
  border-bottom: 1px solid gray;
  padding: 1em;
  margin-top: 30vh;
  margin-bottom: 1em;
}
.id:focus {
    outline: none;
    border-bottom: 1px solid black;
}
.password {
  width: 250px;
  border: 1px solid white;
  border-bottom: 1px solid gray;
  padding: 1em;
  margin-bottom: 1em;
}
.password:focus {
    outline: none;
    border-bottom: 1px solid black;
}

.login {
  width: 278px;
  background-color: gray;
  border: none;
  color: white;
  padding: 1em;
  border-radius: 1em;
  cursor: pointer;
}
</style>