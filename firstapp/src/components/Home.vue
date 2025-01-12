<template>
    <div class="root">
        <div class="title">
            <h2>{{now}}</h2>
        </div>
        <div class="profile">
            <img src="../assets/icon/user-icon.png" width="60" height="60" style="position: absolute; left: 5%; top: 22.5px; border: 1px solid rgb(194, 194, 194); border-radius: 50%;">
            <div style="position: absolute; width: 30%; left: 20%; top: 10px; text-align: center; line-height: 0.1;">
                <p style="color: plum;">TEAM26</p>
                <p style="padding-top: 0px;"></p>
                <hr>
                <p style="font-size: 25px; margin-top: 20px;">{{id}}</p>
            </div>
            <div style="position: absolute; left: 55%; top: 60%; transform:translate(0,-50%); width: 40%; text-align: center; line-height: 0.1;">
                <p style="word-break: break-all; line-height: 1; font-size: 20px; margin-top: 0px;">나의 다짐이 없어요</p>
            </div>
            
        </div>
        <p></p>
        <div class="sunprocess">
            <div style="padding-left: 5%; padding-right: 5%;">
                <div style="position: relative; display: flex; margin-bottom: 0px; padding-bottom: 0px;">
                    <p style="font-size: 20px; padding-top: 0px; margin-top: 10px; margin-bottom: 0px;" ><b>대학수학능력시험 D-{{sunDday}}</b></p>
                    <p style="position: absolute; left: 75%; margin-top: 15px;">2025-11-13</p>
                </div>
                <progress value="10" min="0" max="100" style="appearance: none; width: 100%; height: 10px;"></progress>
                
                <p style="font-size: 15px; margin-top: 5px; padding-bottom: 5px;">{{ sunDdaySub }}</p>
            </div>
        </div>

        <div class="mogoprocess">
            <div style="padding-left: 5%; padding-right: 5%;">
                <div style="position: relative; display: flex; margin-bottom: 0px; padding-bottom: 0px;">
                    <p style="font-size: 20px; padding-top: 0px; margin-top: 10px; margin-bottom: 0px;" >3월모의고사 D-{{mogoDday}}</p>
                    <p style="position: absolute; left: 75%; margin-top: 15px;">2025-03-26</p>
                </div>
                <progress value="10" min="0" max="100" style="appearance: none; width: 100%; height: 10px;"></progress>
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
                sunDate: new Date("2025-11-13"),
                sunDday: '...',
                sunDdaySub:'...',
                mogoDate: new Date("2025-03-26"),
                mogoDday: '',
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
            setInterval(()=>{
                let daychange = ['일','월','화','수','목','금','토','일'];
                let today = new Date();
                this.now=today.getFullYear().toString()+"년 "+
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


                let diff2 = this.mogoDate-today;
                this.mogoDday=Math.ceil(diff2 / (1000*60*60*24));
            
            },100);
        }
    }
</script>
<style>
.title{
    text-align: center;
}
.profile{
    box-shadow: 0 0 6px 1px rgb(194, 194, 194);
    border-radius: 20px;
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