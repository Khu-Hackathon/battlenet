<template>
  <div>
    <nav class="nav">
        <router-link class="title" :to="{name: 'home'}">
            CodingTest with Friends
        </router-link>

        <router-link class="createRoom" :to="{name: 'createroom'}">
            테스트 방 만들기
        </router-link>

        <router-link v-if="!isLogined" class="log" :to="{name: 'login'}">
            Login
        </router-link>

        <router-link v-if="isLogined" class="log" :to="{name: 'home'}">
            Logout
        </router-link>
    </nav>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const isLogined = ref(false);

        return {
            isLogined,
        }
    }
}
</script>

<style scoped>
.nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3.75em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 10px 0 gray;
    background-color: white;
    z-index: 100;
}

.title {
    text-decoration: none;
    color: black;
    padding-left: 3%;
    font-size: 1.3em;
    font-weight: 600;
}

.log {
    text-decoration: none;
    color: black;
    padding-right: 3%;
}

.createRoom {
    padding-left: 50%;
    text-decoration: none;
    color: black;
}
</style>