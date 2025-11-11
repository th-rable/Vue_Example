<template>
  <v-app>
    <v-app-bar
      scroll-behavior="elevate inverted"
      scroll-threshold="1000"
      color="black"
    >
      <v-app-bar-title>Hello Vue!</v-app-bar-title>
      <v-btn to="/">Main</v-btn>
      <v-btn to="/home">Home</v-btn>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      
    }
  },
  methods:{
    
  },
  components: {
  },
  mounted() {
 
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
  /* margin-top: 10px; */
}
</style>
