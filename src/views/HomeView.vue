<script setup>
import { ref, onMounted } from 'vue'
import { courses } from '@/db/courses.js'
import CourseCard from '@/components/CourseCard.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const courseList = ref([])
const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    courseList.value = courses
    isLoading.value = false
  }, 1500) // Simulasi loading 1.5 detik
})
</script>

<template>
  <div class="home-view container">
    <h1>Selamat Datang di E-Learning</h1>
    <p>Silakan pilih kursus yang tersedia:</p>

    <LoadingSpinner v-if="isLoading" />

    <div v-else class="course-list">
      <CourseCard
        v-for="course in courseList"
        :key="course.id"
        :id="course.id"
        :title="course.title"
        :description="course.description"
      />
    </div>
  </div>
</template>

<style scoped>
.course-list {
  margin-top: 2rem;
}

h1 {
  color: #2c3e50;
}
</style>