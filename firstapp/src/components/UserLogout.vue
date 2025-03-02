<template>
    <p></p>
</template>
<script>
    export default {
        name: 'LogoutComponents',
        data(){
            return{
                id: this.$cookies.get('id'),
                key: this.$cookies.get('key'),
            }
        },
        created(){
            const body={
                    id:this.$cookies.get('id'),
                    key:this.$cookies.get('key'),
            }
            fetch('api/auth/logout/',{
                method:'post',
                body: JSON.stringify(body),
                headers:{
                'Content-Type':'application/json'
                }
            }).then(response=>{
                if(!response.ok){
                    throw new Error('서버 연결 실패');
                }
                return response.json();
            }).then(()=>{
                this.$cookies.remove('id');
                this.$cookies.remove('key');
                window.location.href = '/';
            }).catch(err=>{
                alert(err.message);
            });
        },
        mounted(){
            
        }
    }
</script>
<style>
</style>