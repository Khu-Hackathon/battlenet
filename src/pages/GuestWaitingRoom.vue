<template>
  <div style="text-align: center; width: 700px; margin: 0 auto;">
    <div style="margin-top: 3em;">
      현재 참가자
    </div>
    <div class="candidates" v-for="c in candidates" :key="c.name">
        {{ c }}
    </div>
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

        socket.on("enter", data => {
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

        socket.emit("joinGuest", [route.query.name, route.query.guest]);

        return {
          candidates,
        }
    }
}
</script>

<style scoped>
.candidates {
  margin-top: 3em;
  margin-bottom: 3em;
}

</style>