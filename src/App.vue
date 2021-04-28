<template>
  <Navigation v-if="!isPublic">
    <router-view />
  </Navigation>
  <div v-else>
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation/Navigation.vue";

export default {
  name: "Home",
  created() {
    this.$store.dispatch("tryLogin");
  },
  components: {
    Navigation,
  },
  computed: {
    isPublic() {
      return this.$route.path === "/register" || this.$route.path === "/login";
    },
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
