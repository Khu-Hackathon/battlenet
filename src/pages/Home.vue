<template>
  <div>
    <h1>Hello</h1>
  </div>
</template>

<script>
import axios from '@/axios';
export default {
    setup() {
        console.log(1);

        axios.get('http://localhost:8080/hello')
            .then((res) => {
                console.log(res.data);
            })
    }
}
</script>

<style>

</style>