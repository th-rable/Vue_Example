<template>
    <h1>2024년 12월 28일</h1>
    <p>{{ $route.params.id }}</p>
</template>
<script>
    export default {
        name: 'HomeComponents',
        data(){
            return{
                //text:'',
            }
        },
        setup(){
            /*if(this.$route.params.id){
                this.text = this.$route.params.id;
            }*/
        },
    }
</script>
<style>
    
</style>