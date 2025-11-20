<script setup>
import { useRoute, RouterLink } from 'vue-router'
import { courses } from '@/db/courses.js'

const route = useRoute()
const courseId = Number(route.params.id)
if (isNaN(courseId)) {
  // Redirect ke 404 atau tampilkan error
}
const course = courses.find(c => c.id === courseId)
</script>

<template>
  <div class="course-detail container">
    <div v-if="course">
      <h1>{{ course.title }}</h1>
      <p class="description">{{ course.description }}</p>

      <hr>

      <h3>Daftar Modul</h3>
      <ul class="module-list">
        <li v-for="module in course.modules" :key="module.id">
          <RouterLink :to="'/kursus/' + course.id + '/modul/' + module.id">
            {{ module.title }}
          </RouterLink>
        </li>
      </ul>

      <RouterLink to="/" class="back-link">&larr; Kembali ke Daftar Kursus</RouterLink>
    </div>

    <div v-else>
      <h1>Oops!</h1>
      <p>Kursus dengan ID {{ courseId }} tidak dapat ditemukan.</p>
      <RouterLink to="/" class="back-link">&larr; Kembali ke Halaman Utama</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.description {
  font-size: 1.1rem;
  color: #555;
}

hr {
  margin: 2rem 0;
}

.module-list {
  list-style-type: none;
  padding-left: 0;
}

.module-list li {
  margin-bottom: 0.5rem;
}

.module-list li a {
  display: block;
  background-color: #f9f9f9;
  border: 1px solid #eee;
  padding: 0.75rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  color: #333;
  transition: all 0.2s ease;
}

.module-list li a:hover {
  background-color: #f1f1f1;
  border-color: #ddd;
}

.back-link {
  display: inline-block;
  margin-top: 2rem;
  font-weight: 600;
  text-decoration: none;
  color: #007bff;
}
.back-link:hover {
  text-decoration: underline;
}
</style>