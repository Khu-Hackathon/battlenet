<template>
  <div class="wrapper">
    <input type="text" placeholder="방 이름 검색" />
    <div class="rooms">
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>방 이름</th>
            <th>문제 수</th>
            <th>난이도</th>
            <th>시간</th>
            <th>비밀번호</th>
            <th>인원</th>
            <th>방장</th>
          </tr>
        </thead>
        <tbody>
          <!-- v-for="" -->
          <tr class="content" @click="">
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { io } from 'socket.io-client';
import axios from '@/axios';

export default {
    setup() {
        const room = ref("");

        axios.get('http://localhost:8080/room/findroom')
            .then((res) => {
                room.value = res.data;
            })

        console.log(room.value);

        const socket = io("http://localhost:8080");
        
        socket.emit('hello', () => {

        })
    }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

.content {
  border-top: 0.0625rem solid rgb(215, 226, 235);
  cursor: pointer;
}

.content:hover {
  background-color: rgb(215, 226, 235);
}

th {
  color: rgb(152, 168, 185);
  padding: 0.5rem 0;
}

td {
  padding: 0.5rem 0;
}

input {
  width: 95%;
  padding: 1em 2.5%;
  margin-bottom: 2em;
  border: 0.0625rem solid rgb(215, 226, 235);
  border-radius: 0.5em;
}
.wrapper {
  text-align: center;
  width: 60%;
  min-width : 700px;
  margin: 3em auto;
}
.rooms {
  text-align: center;
  width: 60%;
  min-width : 700px;
  border-radius: 0.3em;
  border: 0.0625rem solid rgb(215, 226, 235);
}
</style>