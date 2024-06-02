<template>
  <div class="photos-container">
    <h1 class="title">List of Photos</h1>
    <ul class="photo-list">
      <li v-for="photo in photos" :key="photo.id">
        <img :src="photo.thumbnailUrl" :alt="photo.title" class="thumbnail" />
        {{ photo.id }}. {{ photo.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      photos: [],
    };
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10') // Get 10 photos to match the list
      .then(response => {
        this.photos = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
   computed: {
    ...mapGetters(['filteredPhotos'])
  },
};

</script>

<style scoped>
.photos-container {
 
  color: #fff;
  padding: 20px;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.photo-list {
  display: flex;
  flex-direction: column; 
  align-items: center;   
  gap: 10px;            
}

.photo-list li {
  display: flex; 
  flex-direction: column; 
  align-items: center;  
  text-align: center;    
}

.thumbnail {
  width: 50px; 
  height: 50px;
  object-fit: cover; 
  margin-right: 10px; 
}
</style>




