<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'Deskripsi tidak tersedia' // Nilai default jika kosong
  }
})
</script>

<template>
  <RouterLink :to="'/kursus/' + id" class="card-link">
    <div class="course-card">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </RouterLink>
</template>

<style scoped>
.card-link {
  text-decoration: none;
  color: inherit;
}

.course-card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1rem;
  background-color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease-in-out;
}

.course-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

h3 {
  margin-top: 0;
  color: #1a202c;
}

p {
  color: #4a5568;
  font-size: 0.9rem;
}
</style>