<template>
  <div>
    <nav class="nav">
        <router-link class="title" :to="{name: 'home'}">
            CodingTest with Friends
        </router-link>

        <router-link class="createRoom" :to="{name: 'createroom'}">
            테스트 방 만들기
        </router-link>

        <router-link v-if="!isLogined" class="log" :to="{name: 'signup'}">
            SignUp
        </router-link>

        <router-link v-if="!isLogined" class="log" :to="{name: 'login'}">
            Login
        </router-link>

        <router-link v-if="isLogined" class="log" @click="logout" :to="{name: 'home'}">
            Logout
        </router-link>
    </nav>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const isLogined = ref(false);
        const router = useRouter();

        if(localStorage.getItem("isLogined")) isLogined.value = true;

        const logout = () => {
            localStorage.removeItem("isLogined");
            localStorage.removeItem("currentUser");
            isLogined.value = false;
            router.push({
                name: "home",
            })
        }

        return {
            isLogined,
            logout,
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
    padding-left: 40%;
    text-decoration: none;
    color: black;
}
</style>