<template>
    <div>
        <h1>{{id}}의 페이지</h1>
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
                this.$router.push({name:'main'});
            });
        },
        mounted(){
            
        }
    }
</script>
<style>
    
</style>