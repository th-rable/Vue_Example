<template>
    <Navbar/>
    <p>fdas</p>
</template>
<script>
    import Navbar from './Navbar.vue';
    export default {
        name: 'RegisterComponents',
        components:{
            Navbar:Navbar,
        },
        created(){
            this.$checklogin().then(()=>{
                this.$router.push({name:'home'});
            }).catch(()=>{
            });
        },
    }
</script>
<style>
    
</style>