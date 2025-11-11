<template>
    <div>
        <h1 class="text-center">안녕하세요!</h1>
        <v-container fluid>
            <p class="text-center text-h3 mb-5">안녕하세요!</p>
            <v-card
             variant="tonal"
             class="mb-10">
                <v-card-title class="text-center">Card Title입니다</v-card-title>
            </v-card>
            <v-row align="center" justify="center">
                <v-col cols="auto">
                    <v-text-field
                        v-model.number="inputAmount"
                        label="증가량"
                        type="number"
                        style="width: 120px;" 
                        density="compact"
                        hide-details
                        variant="outlined"
                        prepend-inner-icon="mdi-plus-minus"
                    ></v-text-field>
                </v-col>
                <v-col cols="auto">
                    <v-btn rounded="xl" size="x-large" variant="flat" color="black" @click="increment">{{ count }}</v-btn>
                </v-col> 
                <v-col cols="auto">
                    <v-btn rounded="xl" size="x-large" variant="flat" color="red" @click="resetCount">초기화</v-btn>
                </v-col>
            </v-row>
            <v-fade-transition>
                <v-alert
                    v-if="showAlert"
                    type="success"
                    class="mt-5"
                >
                    카운터가 초기화되었습니다!
                </v-alert>
            </v-fade-transition>
            
        </v-container>
    </div>
</template>
<script>
    export default {
        name: 'MainComponents',
        data() {
            return {
                count: 0, // 카운터 값
                showAlert: false, // 알림 표시 여부
                inputAmount: 1 // 증가량 입력 값
            }
        },
        created(){
            
        },
        methods:{
            // 카운터 값을 inputAmount 만큼 증가시킵니다.
            increment() {
                this.count += parseInt(this.inputAmount || 1); // inputAmount가 없으면 1을 더합니다.
            },
            // 카운터 값을 0으로 초기화하고 알림을 표시합니다.
            resetCount() {
                this.count = 0;
                this.showAlert = true;
                // 3초 후에 알림을 숨깁니다.
                setTimeout(() => {
                    this.showAlert = false;
                }, 3000); 
            }
        },
        components:{
        }
    }
</script>
<style>
    
</style>