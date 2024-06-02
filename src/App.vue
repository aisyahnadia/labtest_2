<template>
  <div class="main">
    <NavbarComponent /> 
    <router-view />
  </div>
</template>

<script>
import NavbarComponent from './components/NavigationBar.vue';
import '@/assets/css/styles.css';
export default {
  name: 'App',
  components: {
    NavbarComponent
  },
};
</script>

<style>

.main {
  width: 100%;
  background-color: #000;
  background-image: url("@/assets/bg_image.png"); 
  background-position: center;
  background-size: cover;
  height: 100vh;
}
</style>


