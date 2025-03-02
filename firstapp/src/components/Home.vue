<template>
    <div class="root">
        <div class="title">
            <p style="font-size: 21px; line-height: 0.1;"><b>{{now}}</b></p>
        </div>
        <hr>
        <div class="profile">
            <img src="../assets/icon/user-icon.png" width="60" height="60" style="position: absolute; left: 2%; top: 22.5px; border: 1px solid rgb(194, 194, 194); border-radius: 50%;">
            <div style="position: absolute; width: 30%; left: 20%; top: 10px; text-align: center; line-height: 0.1;">
                <p style="color: plum;">TEAM06</p>
                <p style="padding-top: 0px;"></p>
                <hr>
                <p style="font-size: 20px; margin-top: 20px;">{{id}}</p>
            </div>
            <div style="position: absolute; left: 55%; top: 60%; transform:translate(0,-50%); width: 40%; text-align: center; line-height: 0.1;">
                <p style="word-break: break-all; line-height: 1; font-size: 15px; margin-top: 0px;">나의 다짐이 없어요</p>
            </div>
        </div>
        <hr>
        <p></p>
        <div class="sunprocess">
            <div style="padding-left: 5%; padding-right: 5%;">
                <div style="position: relative; display: flex; margin-bottom: 0px; padding-bottom: 0px;">
                    <p style="font-size: 18px; padding-top: 0px; margin-top: 10px; margin-bottom: 0px;" >대학수학능력시험 D-{{sunDday}}</p>
                    <p style="position: absolute; left: 75%; margin-top: 15px;">{{sunDay}}</p>
                </div>
                <progress value="10" min="0" max="100" style="appearance: none; width: 100%; height: 10px;"></progress>
                
                <p style="font-size: 15px; margin-top: 5px; padding-bottom: 5px;">{{ sunDdaySub }}</p>
            </div>
        </div>

        <div class="mogoprocess">
            <div style="padding-left: 5%; padding-right: 5%;">
                <div v-for="(data,i) in mogoData" :key=i>
                    <div style="position: relative; display: flex; margin-bottom: 0px; padding-bottom: 0px;">
                    <p style="font-size: 18px; padding-top: 0px; margin-top: 10px; margin-bottom: 0px;" >{{ data }} D-{{mogoDday[i]}}</p>
                    <p style="position: absolute; left: 75%; margin-top: 15px;">{{mogoDay[i]}}</p>
                    </div>
                    <progress value="10" min="0" max="100" style="appearance: none; width: 100%; height: 10px;"></progress>
                    
                </div>
                <p style="margin-top: 5px; padding-bottom: 5px;"></p>
            </div>
        </div>
    </div>
    
    <HomeNabar :menu="1"/>
</template>
<script>
    import HomeNabar from './HomeNabar.vue';
    export default {
        name: 'HomeComponents',
        data(){
            return{
                id: this.$cookies.get('id'),
                key: this.$cookies.get('key'),
                now: '...',
                todayDate: new Date(),
                sunDate: new Date(),
                sunDay: '...',
                sunDday: '...',
                sunDdaySub:'...',

                mogoDay: [],
                mogoDate: [],
                mogoData: [],
                mogoDday: [],
            }
        },
        components:{
            HomeNabar:HomeNabar,
        },
        created(){
            this.$checklogin().then((data)=>{
                console.log(data);
            }).catch(()=>{
                //this.$router.replace({name:'main'});
                window.location.href = '/';
            }).then(()=>fetch(this.$requestURL+'api/getdday/',{
                method:'get',
                headers:{
                'Content-Type':'application/json'
                }
            })).then(response=>{
                if(!response.ok){
                    throw new Error('실패');
                }
                return response.json();
            }).then((data)=>{
                this.sunDay = data[0].suneng;
                this.sunDate=new Date(this.sunDay);
                for(var x of data){
                    if(data[0]==x) continue;
                    this.mogoDate.push(new Date(x.date));
                    this.mogoData.push(x.type);
                    this.mogoDay.push(x.date);
                    this.mogoDday.push(0);
                }
            }).catch(err=>{
                console.log(err);
            });
        },
        mounted(){
            setInterval(()=>{
                let daychange = ['일','월','화','수','목','금','토','일'];
                let today = new Date();
                this.now=
                    (today.getMonth()+1).toString()+"월 "+
                    today.getDate().toString()+"일 "+
                    daychange[today.getDay()]+"요일";
                let diff = (this.sunDate-today);
                this.sunDday=Math.ceil(diff / (1000*60*60*24));
                this.sunDdaySub=Math.floor(diff / (1000*60*60*24*30)).toString()+'개월 '+
                    Math.floor(diff / (1000*60*60*24)%30).toString()+'일 '+
                    Math.floor(diff / (1000*60*60)%24).toString()+'시간 '+
                    Math.floor(diff / (1000*60)%60).toString()+'분 '+
                    Math.floor(diff / (1000)%60).toString()+'초';

                for(var i=0;i<this.mogoDay.length;i++){
                    let diff2 = this.mogoDate[i]-today;
                    this.mogoDday[i]=Math.ceil(diff2 / (1000*60*60*24));
                }
                
            
            },100);
        }
    }
</script>
<style>
.title{
    padding-left: 5px;
}
.profile{
    /* box-shadow: 0 0 6px 1px rgb(194, 194, 194);
    border-radius: 20px; */
    text-align: left;
    display: flex;
    justify-content: left;
    position: relative;
    height: 100px;
}
.sunprocess{
    box-shadow: 0 0 6px 1px rgb(194, 194, 194);
    border-radius: 20px;
    text-align: left;
    justify-content: left;
    position: relative;
}
.mogoprocess{
    box-shadow: 0 0 6px 1px rgb(194, 194, 194);
    border-radius: 20px;
    text-align: left;
    justify-content: left;
    position: relative;
}
.main{
    box-shadow: 0 0 6px 1px rgb(194, 194, 194);
    border-radius: 20px;
}
</style>