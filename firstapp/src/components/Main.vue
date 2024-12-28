<template>
    <Navbar/>
    <h1>👏 안녕하세요</h1>
    <h2>수능까지 TEAM수능과 함께해요</h2>
    <button @click="goRegister()">처음이신가요? Team수능 시작하기</button>
    <p></p>
    <button @click="goLogin()">이미 계정이 있어요</button>
</template>
<script>
    import Navbar from './Navbar.vue';
    export default {
        name: 'MainComponents',
        methods:{
            goLogin(){
                this.$router.push('/login');
            },
            goRegister(){
                this.$router.push('/register');
            }
        },
        components:{
            Navbar:Navbar,
        }
    }
</script>
<style>
    
</style>