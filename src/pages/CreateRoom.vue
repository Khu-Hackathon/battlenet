<template>
    <div class="wrapper">
        <div class="li">
            방 이름
        </div>
        <input type="text" placeholder="방 이름 입력" />
        <div class="li">
            문제 수
        </div>
        <select>

        </select>
        <div class="li">
            시험 시간
        </div>
        <select>

        </select>
        <div class="li">
            난이도
        </div>
        <select>

        </select>
        <div class="li">
            비밀번호 설정
        </div>
        <select>

        </select>
        <div class="li">
            비밀번호
        </div>
        <input type="password" placeholder="비밀번호 입력" />
        <button>
            방 만들기
        </button>
    </div>
</template>

<script>
export default {

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