
<template>
    <!-- <a href="https://www.flaticon.com/uicons">Flaticon</a>의 UIcon -->
    <div class="menu">
        <router-link to="/home">
          <img v-show="menu!=1" src="../assets/icon/home-icon.png" alt="" width="25px" height="25px">
          <img v-show="menu==1" src="../assets/icon/home-icon-bold.png" alt="" width="25px" height="25px">
        </router-link>  
        <router-link to="/home">
          <img v-show="menu!=2" src="../assets/icon/comm-icon.png" alt="" width="25px" height="25px">
          <img v-show="menu==2" src="../assets/icon/comm-icon-bold.png" alt="" width="25px" height="25px">
        </router-link>  
        <router-link to="/home">
          <img v-show="menu!=3" src="../assets/icon/time-icon.png" alt="" width="25px" height="25px">
          <img v-show="menu==3" src="../assets/icon/time-icon-bold.png" alt="" width="25px" height="25px">
        </router-link>  
        <router-link to="/user">
          <img v-show="menu!=4" src="../assets/icon/user-icon.png" alt="" width="25px" height="25px">
          <img v-show="menu==4" src="../assets/icon/user-icon-bold.png" alt="" width="25px" height="25px">
        </router-link>  
    </div>
</template>
<script>
    export default{
        name: 'HomeNavbarComponent',
        props:{
          menu: Number,
        },
    }

</script>

<style>
.menu{
  background: rgb(227, 223, 255);
  padding: 1px;
  border-top: 1px;
  width: 100%;
  height: 50px;
  bottom: 0;
  left:0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.menu a{
  color: white;
  padding: 10px;
}
</style>