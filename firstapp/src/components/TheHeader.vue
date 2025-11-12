<template>
  <div>
    <v-app-bar
      scroll-behavior="elevate inverted"
      scroll-threshold="1000"
      color="black"
    >
      <v-app-bar-title>Hello Vue!</v-app-bar-title>
      <v-spacer></v-spacer>
      <div v-if="isDesktop">
        <v-btn v-for="item in menuItems" :key="item.title" :to="item.to">
          {{ item.title }}
        </v-btn>
      </div>
      <v-app-bar-nav-icon v-if="!isDesktop" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="top"
      color="black"
      style="max-height: 120px;"
    >
      <v-list>
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.to" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      drawer: false,
      menuItems: [
        { title: 'Main', to: '/', icon: 'mdi-view-dashboard' },
        { title: 'Home', to: '/home', icon: 'mdi-home' },
      ]
    }
  },
  computed: {
    isDesktop() {
      return this.$vuetify.display.smAndUp
    },
  },
}
</script>
