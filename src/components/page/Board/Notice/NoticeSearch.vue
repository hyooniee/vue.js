<template>
    <div class="search-box">
        
        <input v-model.lazy="keyword" /> 
        <input type="date" v-model="searchStDate"/>
        <input type="date" v-model="searchEdDate"/>
        <!-- <button v-on:click="handlerSearch">검색</button> -->
        <button @click="handlerSearch">검색</button> 
        <button>신규등록</button>
    </div>
</template>
<script setup>
import router from '@/router';

const keyword = ref(''); //값이 변경되면 변경된 새로운 창을 띄우게 해주세요 
const searchStDate = ref('');
const searchEdDate = ref('');

const handlerSearch = () => {
    //alert(keyword.value + searchStartDate.value + searchEndDate.value);
    
    // 1. url파라미터 쿼리
    const query = [];
    !keyword.value || query.push(`searchTitle=${keyword.value}`);
    !searchStDate.value || query.push(`searchTitle=${searchStDate.value}`);
    !searchEdDate.value || query.push(`searchTitle=${searchEdDate.value}`);
    const queryString = query.length > 0 ? `?${query.join('&')}`:'';
    

    router.push(queryString);
};

//인자로 받는 함수안에 반응형 객체 (ref 같은거)가 있으면, 객체가 변경될때 마다 해당 함수를 실행시켜 줌..
//밑에는 ref 같은 거 없음. 그래서 그냥 새로고침 누르면 최초에 한번 실행되는거.
watchEffect(() => window.location.search && router.push(window.location.pathname, {replace : true}));
/* watch(keyword,()=> {
    console.log(keyword.value); //.value 객체말고 그 값만 확인하고 싶을때
    
}); //keyword값이 변경되면 이하의 함수가 실행 , 첫번째 인자: 반응형 객체를 넣어줘야함 
//서버에서 데이터를 받아올때 :반응형 객체가 아닐때는 함수처럼 사용 */
</script>

<style lang="scss" scoped>
.search-box {
    margin-bottom: 10px;
    display: block;
    float: inline-end;
}

input {
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
}

button {
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border: none;
    color: white;
    width: 70px;
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 12px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 12px;
    box-shadow: 0 4px #999;
    background-color: #3bb2ea;

    &:hover {
        background-color: #45a049;
    }

    &:active {
        background-color: #3e8e41;
        box-shadow: 0 2px #666;
        transform: translateY(2px);
    }
}
</style>
