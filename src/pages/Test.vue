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
        <button @click="endTest">테스트 종료</button>
        남은 시간
        {{ r }}
        <div class="result">
            입력
            <input disabled :value="input" />
            
            출력
            <input disabled :value="result" />

            <input disabled v-if="result == output" value="정답입니다" />
            <input disabled v-if="executed && result != output" value="틀렸습니다" />
        </div>
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';
import axios from '@/axios';
import { io } from 'socket.io-client';

export default {
    setup() {

        const problem = ref('');
        const input = ref('');
        const output = ref('');
        const source = ref('');
        const result = ref('');
        const executed = ref(false);
        const status = ref(false);
        const remain = ref(0);
        const r = ref(0);

        const router = useRouter();
        const route = useRoute();

        remain.value = route.query.time;
        r.value = route.query.time * 60;

        setInterval(() => {
            r.value -= 1;
        }, 1000);

        const interval = setInterval(() => {
            endTest();
        }, remain.value * 60 * 1000)

        const socket = io("http://localhost:8080");

        socket.on("endTest", () => {
            console.log("??");
            router.push({
                name: 'endtest',
                query: {
                    userId: localStorage.getItem("currentUser"),
                    status: status,
                }
            })
        })

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
            executed.value = true;
            await axios.post('http://localhost:8080/execute', {
                source: source.value,
                input: input.value,
            })
                .then((res) => {
                    console.log(res.data);
                    result.value = res.data.output;
                    if(res.data.output === output.value) {
                        status.value = true;
                    }
                })
        }

        const endTest = () => {
            clearTimeout(interval);
            socket.emit("end", route.query.name);
        }

        return {
            problem,
            source,
            input,
            output,
            execute,
            result,
            executed,
            endTest,
            r,
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