<template>
  <div class="profile-container">
    <form @submit.prevent="saveProfile">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="profile.name" class="form-control">
      </div>

      <div class="form-group">
        <label for="courseYear">Course Year:</label>
        <input type="text" id="courseYear" v-model="profile.courseYear" class="form-control" />
      </div>

      <div class="form-group">
        <label for="matrixNo">Matrix No:</label>
        <input type="text" id="matrixNo" v-model="profile.matrixNo" class="form-control" />
      </div>

      <div class="form-group">
        <label for="address">Address:</label>
        <textarea id="address" v-model="profile.address" class="form-control"></textarea>
      </div>

      <div class="button-group">
        <button type="submit" class="save-button">Save</button>
        <button type="button" @click="resetProfile" class="reset-button">Reset</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      profile: { ...this.$store.state.profile },
    };
  },
  computed: {
    ...mapGetters(['profile']),
  },
  methods: {
    ...mapActions(['updateProfile']),
    saveProfile() {
      this.updateProfile(this.profile);
      
      alert('Profile saved!');
    },
    resetProfile() {
    
      this.profile = { ...this.$store.state.profile };
    alert('Profile reset!');
  },
  },
};
</script>

<style scoped>
/* Profile Container */
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

form {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 400px; /* Adjust width as needed */
  text-align: left;
}

/* Form Groups */
.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box; /* Include padding and border in element's total width and height */
}

textarea.form-control {
  resize: vertical; /* Allow vertical resizing for the address field */
}

/* Button Group */
.button-group {
  display: flex;
  justify-content: space-around; /* Evenly space the buttons */
}

.save-button,
.reset-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.save-button {
  background-color: #09880F; 
  color: white;
}

.reset-button {
  background-color: #09880F; 
  color: white;
}
</style>







