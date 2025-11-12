<template>
  <v-container fluid class="pa-0">
    <!-- Hero Section -->
    <v-img
      class="d-flex align-center text-center"
      height="400"
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      cover
      gradient="to bottom, rgba(0,0,0,.7), rgba(0,0,0,.4)"
    >
      <div class="text-white">
        <h1 class="text-h3 font-weight-bold mb-4">저희 애플리케이션에 오신 것을 환영합니다</h1>
        <h2 class="text-h6 font-weight-light">Vue를 경험하는 새로운 방법.</h2>
        <v-btn class="mt-6" color="primary" large>
          시작하기
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </v-img>

    <!-- Features Section -->
    <v-container class="my-12">
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2 class="text-h4 font-weight-bold">주요 기능</h2>
          <p class="text-medium-emphasis">저희 서비스의 특별함을 경험해보세요.</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="feature in features" :key="feature.title" cols="12" md="4">
          <v-card class="mx-auto" max-width="344" outlined hover>
            <v-card-item class="text-center">
              <v-icon :icon="feature.icon" size="x-large" class="my-4"></v-icon>
              <div class="text-h6 mb-1">{{ feature.title }}</div>
              <div class="text-caption">{{ feature.description }}</div>
            </v-card-item>
            <v-card-actions>
              <v-btn text color="primary" block>더 알아보기</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Call to Action Section -->
    <v-sheet color="grey-lighten-3" class="py-12">
      <v-container class="text-center">
        <h2 class="text-h4 font-weight-bold">시작할 준비가 되셨나요?</h2>
        <p class="text-medium-emphasis mt-2 mb-6">오늘 저희와 함께 여정을 시작하세요.</p>
        <v-btn color="primary" x-large>지금 가입하기</v-btn>
      </v-container>
    </v-sheet>

  </v-container>
</template>

<script>
export default {
  name: 'HomeComponents',
  data: () => ({
    features: [
      {
        icon: 'mdi-rocket-launch-outline',
        title: '빠르고 효율적',
        description: '놀라운 성능과 직관적인 사용자 인터페이스를 경험하세요.'
      },
      {
        icon: 'mdi-security',
        title: '안전한 설계',
        description: '최고 수준의 보안으로 데이터를 안전하게 보호합니다.'
      },
      {
        icon: 'mdi-headset',
        title: '연중무휴 지원',
        description: '저희 전담팀이 24시간 내내 도와드립니다.'
      }
    ]
  }),
}
</script>

<style scoped>
.text-white {
  color: white;
}
</style>
