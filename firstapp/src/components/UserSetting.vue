<template>
    <div>
        <h1>{{id}}의 페이지</h1>
        <button @click="logout()">로그아웃</button>
    </div>

    <p></p>
    <HomeNabar :menu="4"/>
</template>
<script>
    import HomeNabar from './HomeNabar.vue';
    export default {
        name: 'UserComponents',
        data(){
            return{
                id: this.$cookies.get('id'),
                key: this.$cookies.get('key'),
                now: '',
            }
        },
        components:{
            HomeNabar:HomeNabar,
        },
        created(){
            this.$checklogin().then((data)=>{
                console.log(data);
            }).catch(()=>{
                window.location.href = '/';
            });
        },
        mounted(){
            
        },
        methods:{
            logout(){
                window.location.href='/logout';
            }
        }
    }
</script>
<style>
    
</style>