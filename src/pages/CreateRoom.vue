<template>
    <div class="wrapper">
        <div class="li">
            방 이름
        </div>
        <input type="text" v-model="roomName" placeholder="방 이름 입력" />
        <div class="li">
            문제 수
        </div>
        <select v-model="numProblem">
            <option v-for="num in 5" :key="num">{{num}}</option>
        </select>
        <div class="li">
            시험 시간
        </div>
        <select v-model="time">
            <option v-for="num in 180" :key="num">{{num}}</option>
        </select>
        <div class="li">
            총 인원
        </div>
        <select v-model="numPerson">
            <option v-for="num in 10" :key="num">{{num}}</option>
        </select>
        <div class="li">
            비밀번호 설정
        </div>
        <input type="checkbox" v-model="isPassword" />
        <div class="li">
            비밀번호
        </div>
        <input type="password" :disabled="!isPassword" v-model="password" placeholder="비밀번호 입력" />
        <button @click="createRoom">
            방 만들기
        </button>
    </div>
</template>

<script>
import { ref } from 'vue';
import axios from '@/axios';
import { io } from 'socket.io-client';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const roomName = ref('');
        const numProblem = ref(0);
        const time = ref(0);
        const isPassword = ref(0);
        const numPerson = ref(0);
        const password = ref('');

        const router = useRouter();
        const socket = io("http://localhost:8080");

        const createRoom = async () => {
            if(!localStorage.getItem("isLogined")) {
                alert("로그아웃 상태에서는 방을 만들 수 없습니다");
                return;
            }
            await axios.post("http://localhost:8080/room/createroom", {
                name: roomName.value,
                num_problem: numProblem.value,
                time: time.value,
                is_password: isPassword.value ? 1 : 0,
                password: password.value,
                num_person: numPerson.value,
                master: localStorage.getItem("currentUser"),
            })
                .then((res) => {
                    if(res.data.result === 1) {
                        alert("방이 성공적으로 생성되었습니다.");
                        router.push({
                            name: "masterwaitingroom",
                            query: {
                                name: roomName.value,
                                time: time.value,
                                num_person: numPerson.value,
                                master: localStorage.getItem("currentUser")
                            }
                        })
                    } else {
                        alert("방 생성에 실패했습니다.");
                    }
                })
        }

        return {
            roomName,
            numProblem,
            numPerson,
            time,
            isPassword,
            password,
            createRoom,
        }
    }
}
</script>

<style scoped>
.wrapper {
  text-align: center;
  width: 40%;
  min-width : 300px;
  margin: 3em auto;
}

.li {
    text-align: left;
    padding: 1.2em 0 0.6em 0;
}

select {
    padding: 0.6em 2.5%;
    width: 100%;
    border: 0.0625rem solid rgb(215, 226, 235);
    border-radius: 0.5em;
}

input {
    padding: 0.6em 2.5%;
    width: 95%;
    border: 0.0625rem solid rgb(215, 226, 235);
    border-radius: 0.5em;
}

button {
    margin-top: 3em;
    width: 100%;
    padding: 1em 0;
    background-color: gray;
    border: none;
    color: white;
    padding: 1em;
    border-radius: 0.5em;
    cursor: pointer;
}
</style>