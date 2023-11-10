<template>
  <div style="text-align: center; width: 700px; margin: 0 auto;">
    <div style="margin-top: 3em;">
      현재 참가자
    </div>
    <div class="candidates" v-for="c in candidates" :key="c.name">
        {{ c }}
    </div>

    <button @click="start">
      시작하기
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { io } from 'socket.io-client';

export default {
    setup() {
        const route = useRoute();
        const router = useRouter();
        const candidates = ref([]);
        
        const socket = io("http://localhost:8080");

        socket.on("enterMaster", data => {
            console.log(data);
            candidates.value.push(data);
        });

        socket.on("candidates", data => {
            candidates.value = data;
        })

        socket.on("startTest", () => {
          router.push({
            name: 'test',
            query: {
              time: route.query.time,
            }
          })
        })

        socket.emit("joinMaster", [route.query.name, route.query.master]);

        const start = () => {
          socket.emit("start", route.query.name);
        }

        return {
          candidates,
          start,
        }
    }
}
</script>

<style scoped>
.candidates {
  margin-top: 3em;
  margin-bottom: 3em;
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