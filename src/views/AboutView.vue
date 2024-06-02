<template>
  <div class="about-container"> 
    <div class="about-item">
      <span class="label">Name</span> : <span class="value">{{ profile.name }}</span>
    </div>
    <div class="about-item">
      <span class="label">Course Year</span> : <span class="value">{{ profile.courseYear }}</span>
    </div>
    <div class="about-item">
      <span class="label">Matrix No.</span> : <span class="value">{{ profile.matrixNo }}</span>
    </div>
    <div class="about-item">
      <span class="label">Address</span> : <span class="value">{{ profile.address }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['profile']),
  },
};
</script>


<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  width: 40%; 
  margin: 20px auto; 
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8); 
  border-radius: 10px; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
}

.about-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px; 
  font-family: Arial, sans-serif; 
  border-bottom: 1px solid #000; 
  padding-bottom: 10px; 
}

.label {
  width: 120px; 
  font-weight: bold;
  color: #333; 
}

.value {
  color: #ff7200; 
}

table {
  margin-left: auto;
  margin-right: auto;
}
table td {
  padding: 12px;
  border-bottom: 1px solid black;
}
</style>

