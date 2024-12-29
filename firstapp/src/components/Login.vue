<template>
    <Navbar/>
    <h1>Team수능 로그인</h1>
    <div>
        <input type="text" v-model="id" placeholder="아이디">
        <br>
        <input type="password" v-model="pw" placeholder="비밀번호" @keyup.enter="login()">
        <br>
        <button @click="login()">✔</button>
    </div>
</template>
<script>
    import Navbar from './Navbar.vue';


    export default {
        name: 'LoginComponents',
        data(){
            return{
                id:'',
                pw:'',
            }
        },
        components:{
            Navbar:Navbar,
        },
        created(){
            this.$checklogin().then(()=>{
                this.$router.push({name:'home'});
            }).catch(()=>{
            });
        },
        methods:{
            login(){
                const body={
                    id:this.id,
                    psword:this.pw,
                }
                fetch('https://rable.duckdns.org/auth/login/',{
                    method:'post',
                    body: JSON.stringify(body),
                    headers:{
                    'Content-Type':'application/json'
                    }
                }).then(response=>{
                    if(!response.ok){
                        throw new Error('로그인을 실패했어요');
                    }
                    return response.json();
                }).then((data)=>{
                    console.log(data);
                    this.$cookies.set('id', body.id);
                    this.$cookies.set('key', data.key);
                    this.$router.push({name:'home'});
                }).catch(err=>{
                    alert(err.message);
                });
            }
        }
    }
    
</script>
<style>
    
</style>