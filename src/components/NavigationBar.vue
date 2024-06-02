<template>
  <div class="navbar">
    <div class="icon">
      <h2 class="logo">W.Tech.</h2>
    </div>
    <div class="menu">
      <ul>
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/about">ABOUT</router-link></li>
        <li><router-link to="/profile">PROFILE</router-link></li>
        <li><router-link to="/photos">PHOTOS</router-link></li>
      </ul>
    </div>
    <div class="search">
      <input class="srch" type="search" placeholder="Type To Find" />
      <button class="btn">Find</button>
    </div>
  </div>
</template>

<script>
import "@/assets/css/styles.css";
import { mapMutations } from 'vuex';


export default {
  name: 'NavbarComponent',
data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    ...mapMutations(['SET_SEARCH_QUERY']), 
    updateSearchQuery() {
      this.SET_SEARCH_QUERY(this.searchQuery);
    },
  },
};
</script>
