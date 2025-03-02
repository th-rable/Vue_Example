<template>
    <Navbar/>
    <div style="">
        <h1>Team수능 회원가입</h1>
        <input type="password" v-model="pw" placeholder="비밀번호">
        <p></p>
        <input type="password" v-model="pw_cf" placeholder="비밀번호 확인">
        <p></p>
        <input type="text" v-model="name" placeholder="사용할 닉네임">
        <p>2025년 3월 기준 몇학년인가요?</p>
        <select v-model="graderesult">
            <option value=9 disabled selected>선택</option>
            <option v-for="(x,i) in gradelist" :key="i" :value="x.value">{{ x.name }}</option>
        </select>
        
    </div>
    <div v-if="graderesult==-1">
        <p>다가오는 2025년 11월 수능을 선택해주세요</p>
        <select v-model="nsuCount">
            <option v-for="(x,i) in nsulist" :key="i" :value="x.value">{{ x.name }}</option>
        </select>
    </div>
    <p></p>
    <button @click="register()">✔</button>
</template>
<script>
    import Navbar from './Navbar.vue';
    export default {
        name: 'RegisterComponents',
        data(){
            return{
                id:this.$route.query.id,
                pw:'',
                pw_cf:'',
                name:'',
                graderesult:9,
                gradelist:[
                    {name:'예비고1(중3)', value:3},
                    {name:'고1', value:2},
                    {name:'고2', value:1},
                    {name:'고3(현역)', value:0},
                    {name:'N수', value:-1},
                    {name:'사회인(대학생)', value:10000},
                ],
                nsulist:[
                    {name:'재수',value:-1},
                    {name:'3수',value:-2},
                    {name:'4수',value:-3},
                    {name:'5수 이상',value:0},
                ],
                nsuCount:-1,
                
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
            const body={id:this.id};
            fetch(this.$requestURL+'api/auth/loginid_check/',{
                    method:'post',
                    body: JSON.stringify(body),
                    headers:{
                    'Content-Type':'application/json'
                    }
                }).then(response=>{
                    if(!response.ok){
                        throw new Error('서버에 오류가 발생했어요');
                    }
                    return response.json();
                }).then((data)=>{
                    console.log(data);
                    if(data.result){
                        this.$router.push('/login?id='+body.id);
                    }
                }).catch(err=>{
                    alert(err.message);
                });
        },
        methods:{
            register(){
                if(this.pw!=this.pw_cf) alert("비밀번호가 달라요");
                else if(this.graderesult==9) alert("학년을 선택해주세요");
                else{
                    let grade=this.graderesult;
                    if(grade==-1){
                        grade=this.nsuCount;
                        if(this.nsuCount==0) grade=-10000;
                    }
                    const body={
                        id:this.id,
                        psword:this.pw,
                        name:this.name,
                        grade:this.graderesult
                    }
                    fetch(this.$requestURL+'/api/auth/register/',{
                        method:'post',
                        body:JSON.stringify(body),
                        headers:{
                        'Content-Type':'application/json'
                        }
                    }).then(response=>{
                        if(!response.ok)
                            throw new Error("서버에 오류가 발생했어요");
                        return response.json();
                    }).then(data=>{
                        if(data.ok){
                            this.$cookies.set('id', body.id);
                            this.$cookies.set('key', data.key);
                            window.location.href = '/home';
                            return;
                        }
                        alert(data.message);
                    }).catch(err=>{
                        alert(err.message);
                    })
                }
            }
        }
    }
</script>
<style>
    
</style>