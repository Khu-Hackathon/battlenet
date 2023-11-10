<template>
    <div class="signupform">
        <input
          class="id"
          v-model="id"
          type="id"
          placeholder="아이디"
        />
        <br />
        <input
          class="password"
          v-model="password"
          type="password"
          placeholder="비밀번호"
        />
        <br />
        <input
          class="password"
          v-model="confirm"
          type="password"
          placeholder="비밀번호 확인"
        />
        <br />
        <input
          class="name"
          v-model="name"
          type="text"
          placeholder="이름"
        />
        <br />
        <button type="button" class="signup" @click="signup">회원가입</button>
    </div>
</template>

<script>
import { ref } from 'vue';
import axios from '@/axios';
import { useRouter } from 'vue-router';

export default {
    setup() {
      const id = ref('');
      const password = ref('');
      const name = ref('');
      const confirm = ref('');
      const router = useRouter();

      const signup = async () => {
        console.log(password.value);
        console.log(name.value);
        console.log(confirm.value);
        console.log(password.value);
        await axios.post('http://localhost:8080/signup/signup', {
          id: id.value,
          password: password.value,
          confirmPassword: confirm.value,
          name: name.value,
        })
          .then((res) => {
            if(res.data.success) {
                router.push({
                    name: "login",
                });
            } else {
                alert(res.data.msg);
            }
          })
      }

      return {
        id,
        password,
        name,
        confirm,
        signup,
      }
    }
}
</script>

<style scoped>
.signupform {
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

.name {
  width: 250px;
  border: 1px solid white;
  border-bottom: 1px solid gray;
  padding: 1em;
  margin-bottom: 1em;
}
.name:focus {
    outline: none;
    border-bottom: 1px solid black;
}

.signup {
  width: 278px;
  background-color: gray;
  border: none;
  color: white;
  padding: 1em;
  border-radius: 1em;
  cursor: pointer;
}
</style>