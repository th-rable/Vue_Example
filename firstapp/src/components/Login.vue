<template>
    <Navbar/>
    <h1>Team수능 로그인하기</h1>
    <div>
        <p>{{ name }}님, 안녕하세요</p>
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
                id:this.$route.query.id,
                pw:'',
                name:'',
            }
        },
        components:{
            Navbar:Navbar,
        },
        created(){
            this.$checklogin().then(()=>{
                //this.$router.push({name:'home'});
                window.location.href = '/home';
                return;
            }).catch(()=>{
            });
            const body={
                id:this.id,
            }
            fetch(this.$requestURL+'api/auth/getname/',{
                method:'post',
                body: JSON.stringify(body),
                headers:{
                    'Content-Type':'application/json'
                }
            }).then(response=>{
                if(!response.ok){
                    throw new Error('서버 오류 발생');
                }
                return response.json();
            }).then(data=>{
                if(data.result==null){
                    window.location.href = '/';
                    return;
                }
                this.name=data.result;
            }).catch(err=>{
                alert(err.message);
            })
        },
        methods:{
            login(){
                const body={
                    id:this.id,
                    psword:this.pw,
                }
                fetch(this.$requestURL+'api/auth/login/',{
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
                    window.location.href = '/home';
                }).catch(err=>{
                    alert(err.message);
                });
            }
        }
    }
    
</script>
<style>
    
</style>