<template>
  <v-container class="my-10">
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="text-center" elevation="4" style="overflow: visible;">
          <v-sheet color="primary" class="pa-6">
            <h1 class="text-h4 text-white">인터랙티브 카운터</h1>
            <p class="text-white mt-2">클릭하세요!</p>
          </v-sheet>

          <v-card-text class="pa-8">
            <div class="counter-wrapper">
              <p class="text-h1 font-weight-bold mb-6" :class="{ 'animate-pulse': isAnimating }">{{ count }}</p>
              <!-- 파티클 효과를 위한 요소들 -->
              <div v-if="isAnimating" class="particles-container">
                <i v-for="i in 12" :key="i" class="particle"></i>
              </div>
            </div>
            
            <v-row align="center" justify="center" class="mb-4">
              <v-col cols="12" sm="5">
                <v-text-field
                  v-model.number="inputAmount"
                  label="증가량"
                  type="number"
                  density="compact"
                  hide-details
                  variant="outlined"
                  prepend-inner-icon="mdi-plus-minus-variant"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-btn 
              size="x-large" 
              variant="flat" 
              color="primary" 
              @click="increment"
              class="mx-2"
              prepend-icon="mdi-plus-circle-outline"
            >
              추가
            </v-btn>
            <v-btn 
              size="x-large" 
              variant="outlined" 
              color="red" 
              @click="resetCount"
              class="mx-2"
              prepend-icon="mdi-refresh"
            >
              초기화
            </v-btn>
          </v-card-text>

        </v-card>
          <v-fade-transition>
            <v-alert
              v-if="showAlert"
              type="success"
              class="ma-4"
              closable
              @input="showAlert = false"
            >
              카운터가 초기화되었습니다!
            </v-alert>
          </v-fade-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'MainComponents',
  data() {
    return {
      count: 0,
      showAlert: false,
      inputAmount: 1,
      isAnimating: false,
      animationTimeout: null // 애니메이션 타이머 ID를 저장하기 위한 속성
    }
  },
  methods: {
    increment() {
      this.count += parseInt(this.inputAmount || 1);

      // 이전 애니메이션 타이머가 있다면 초기화합니다.
      clearTimeout(this.animationTimeout);

      // 애니메이션 상태를 리셋합니다.
      this.isAnimating = false;

      // Vue가 DOM을 업데이트한 후 다음 프레임에서 애니메이션을 다시 시작합니다.
      this.$nextTick(() => {
        this.isAnimating = true;
        // 애니메이션 지속 시간 후에 isAnimating을 false로 설정합니다.
        this.animationTimeout = setTimeout(() => {
          this.isAnimating = false;
        }, 700); // 애니메이션 시간(0.7s)과 동일하게 설정
      });
    },
    resetCount() {
      this.count = 0;
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3000);
    }
  }
}
</script>

<style scoped>
.text-white {
  color: white !important;
}

.counter-wrapper {
  position: relative;
  display: inline-block;
}

.particles-container {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1px;
  height: 1px;
  pointer-events: none; /* 클릭 방지 */
}

.particle {
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  animation: particle-burst 0.7s ease-out forwards;
}

/* 숫자 펄스 애니메이션 */
.animate-pulse {
  animation: pulse 0.3s ease-out;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.25); }
  100% { transform: scale(1); }
}

/* 파티클 폭발 애니메이션 */
@keyframes particle-burst {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(var(--x), var(--y)) scale(0);
    opacity: 0.5;
  }
}

/* 12개의 파티클에 각각 다른 색상과 이동 경로를 부여 */
.particle:nth-child(1) { background-color: #ff6347; --x: -80px; --y: -120px; animation-delay: 0.01s; }
.particle:nth-child(2) { background-color: #ffc107; --x: 90px; --y: -100px; animation-delay: 0.05s; }
.particle:nth-child(3) { background-color: #4caf50; --x: 120px; --y: 0px; animation-delay: 0.02s; }
.particle:nth-child(4) { background-color: #2196f3; --x: 80px; --y: 110px; animation-delay: 0.1s; }
.particle:nth-child(5) { background-color: #9c27b0; --x: -70px; --y: 130px; animation-delay: 0.03s; }
.particle:nth-child(6) { background-color: #e91e63; --x: -130px; --y: 20px; animation-delay: 0.08s; }
.particle:nth-child(7) { background-color: #00bcd4; --x: -110px; --y: -90px; animation-delay: 0.04s; }
.particle:nth-child(8) { background-color: #ff9800; --x: 100px; --y: -50px; animation-delay: 0.12s; }
.particle:nth-child(9) { background-color: #8bc34a; --x: 140px; --y: 60px; animation-delay: 0.06s; }
.particle:nth-child(10) { background-color: #3f51b5; --x: -40px; --y: 110px; animation-delay: 0.09s; }
.particle:nth-child(11) { background-color: #673ab7; --x: -120px; --y: 80px; animation-delay: 0.01s; }
.particle:nth-child(12) { background-color: #f44336; --x: 50px; --y: -130px; animation-delay: 0.07s; }
</style>
