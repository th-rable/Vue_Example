<template>
  <Navbar/>
  <p></p>
  <NoticeBar :text="noticetext[noticeNum]"/>
  <p></p>
  <progress></progress>
  <p></p>
  <input type="search" @keyup.enter="noticetext.push($event.target.value); $event.target.value=''">
  <p></p>
  <button v-on:click="likeClick()">👍</button> <span>{{data.like}}번</span>
  <div v-if="data.like >= 10">📈인기게시물!</div>
  <p></p>
  <button @click="data.prices.push(12345);data.titleCnt++;">➕</button>
  <div>제목 {{data.titleCnt}}번 클릭</div>
  <hr>
  <div v-for="(pp,i) in data.prices" :key=i>
    <h4 @click="data.titleCnt++">{{i}}번째 영화</h4>
    <p>{{pp}}원</p>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import NoticeBar from './components/Notice.vue';
import {data} from './assets/testData.js';

export default {
  name: 'App',
  data(){
    return {
      data:data,
      noticetext:['공지사항이 없어요'],
      noticeNum:0,
    }
  },
  methods:{
    likeClick(){
      this.data.like++;
      console.log("!!");
    },
  },
  components: {
    Navbar:Navbar,
    NoticeBar:NoticeBar,
  },
  mounted() {
    setInterval(()=>{
      if(this.noticetext.length!=1){
        if(this.noticetext.length==this.noticeNum+1) this.noticeNum=1;
        else this.noticeNum+=1;
      }  
    },1000);
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

</style>
