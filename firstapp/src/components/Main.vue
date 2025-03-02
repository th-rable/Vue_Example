<template>
    <Navbar/>
    <h1>👏 안녕하세요</h1>
    <h2>수능까지 TEAM수능과 함께해요</h2>

    <button @click="goLogin()">시작하기</button>
</template>
<script>
    import Navbar from './Navbar.vue';
    export default {
        name: 'MainComponents',
        created(){
            this.$checklogin().then(()=>{
                //this.$router.push({name:'home'});
                window.location.href = '/home';
                return;
            }).catch(()=>{
            });
        },
        methods:{
            goLogin(){
                this.$router.push('/login_start');
            },
        },
        components:{
            Navbar:Navbar,
        }
    }
</script>
<style>
    
</style>