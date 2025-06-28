<template>
    <v-app>
        <v-app-bar
        scroll-behavior="elevate inverted"
        scroll-threshold="1000"
        color="black"
        >
        <v-app-bar-title>Hello Vue!</v-app-bar-title>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </v-app-bar>

        <v-main>
            <h1>안녕하세요!</h1>
            <v-container fluid>
                <p class="text-center text-h3 mb-5">안녕하세요!</p>
                <v-card
                 variant="tonal"
                 class="mb-10">
                    <v-card-title class="text-center">Card Title입니다</v-card-title>
                </v-card>
                <v-row align="center" justify="center">
                    <v-col cols="auto">
                        <v-btn rounded="xl" size="x-large" variant="flat" color="black">버튼입니다</v-btn>
                    </v-col>
                </v-row>
               
                
            </v-container>
        </v-main>

        <v-footer app>
            <h1>footer!</h1>
        </v-footer>
    </v-app>
</template>
<script>
    export default {
        name: 'MainComponents',
        created(){
            
        },
        methods:{
            
        },
        components:{
        }
    }
</script>
<style>
    
</style>