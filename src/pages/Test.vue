<template>
  <div style="display: flex; align-items: center;">
    <div class="left">
        <div class="problem">
            <textarea disabled v-model="problem">

            </textarea>
        </div>
        <div class="example">
            입력
            <textarea style="height: 10%;" disabled v-model="input">
                
            </textarea>
            출력
            <textarea style="height: 10%;" disabled v-model="output">  
            </textarea>
        </div>
    </div>
    <div class="right">
        <div class="source">
            <textarea v-model="source">

            </textarea>
        </div>
        <button @click="execute">실행</button>
        <div class="result">

        </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from '@/axios';

export default {
    setup() {

        const problem = ref('');
        const input = ref('');
        const output = ref('');
        const source = ref('');

        const getProblem = async (num) => {
            await axios.post(`http://localhost:8080/problem/problem`, {
                number: num,
            })
            .then((res) => {
                console.log(res.data);
                problem.value += res.data[0]["problem"] + '\n';
                problem.value += res.data[0]["problem_input"] + '\n';
                problem.value += res.data[0]["problem_output"]
                console.log(problem.value);
            })
        }

        getProblem(1);

        const getExample = async (num) => {
            await axios.post(`http://localhost:8080/problem/example`, {
                number: num,
            })
            .then((res) => {
                console.log(res.data);
                input.value = res.data[0].data;
                output.value = res.data[1].data;
            })
        }

        getExample(1);

        const execute = async () => {
            await axios.post('http://localhost:8080/execute', {
                source: source.value,
            })
                .then((res) => {
                    console.log(res.data);
                })
        }

        return {
            problem,
            source,
            input,
            output,
            execute,
        }
    }
}
</script>

<style scoped>
.left {
    width: 20%;
    height: 100vh;
}
.right {
    width: 80%;
    height: 100vh;
}

.problem {
    width: 100%;
    height: 80%;
}

.example {
    width: 100%;
    height: 20%;
}
.source {
    width: 100%;
    height: 80%;
    background-color: lightgray;
}

.result {
    width: 100%;
    height: 20%;
    background-color: gray;
}

textarea {
    width: 100%;
    height: 100%;
    border:none;
    background: transparent;
}
</style>