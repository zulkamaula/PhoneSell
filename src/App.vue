<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <HomePhones />
  </div>
</template>

<script>
import HomePhones from "./views/HomePhones.vue";

export default {
  name: "App",
  components: {
    HomePhones,
  },
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap"); */
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;800&display=swap");

@import "./assets/style.css";

#app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  /* background-image: url("/src/assets/images/Group 1784.png"); */
}
</style>
