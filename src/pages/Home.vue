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
            <th>시간</th>
            <th>비밀번호</th>
            <th>총 인원</th>
            <th>방장</th>
          </tr>
        </thead>
        <tbody>
          <!-- v-for="" -->
          <tr class="content" v-for="(room, index) in rooms" :key="room.id" @click="moveToRoom(room.name, room.time, room.num_person)">
            <td>{{index + 1}}</td>
            <td>{{room.name}}</td>
            <td>{{room.num_problem}}</td>
            <td>{{room.time}}</td>
            <td v-if="room.is_password == 1">있음</td>
            <td v-else>없음</td>
            <td>{{room.num_person}}</td>
            <td>{{room.master}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from '@/axios';

export default {
    setup() {
        const rooms = ref([]);
        const router = useRouter();

        const getRoom = async () => {
          await axios.get("http://localhost:8080/room/getroom")
            .then((res) => {
              rooms.value = res.data;
            })
        }

        getRoom();

        const moveToRoom = (name, time, num_person) => {
          router.push({
            name: "guestwaitingroom",
            query: {
              name: name,
              time: time,
              num_person: num_person,
              guest: localStorage.getItem("currentUser"),
            }
          })
        }

        return {
          getRoom,
          rooms,
          moveToRoom,
        }
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
  width: 100%;
  border-radius: 0.3em;
  border: 0.0625rem solid rgb(215, 226, 235);
}
</style>