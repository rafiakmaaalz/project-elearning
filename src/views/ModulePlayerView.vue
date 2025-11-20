<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { courses } from '@/db/courses.js'

const route = useRoute()

const course = computed(() => {
  const courseId = Number(route.params.id)
  return courses.find(c => c.id === courseId)
})

const module = computed(() => {
  const moduleId = route.params.moduleId
  return course.value?.modules.find(m => m.id === moduleId)
})

const videoUrl = computed(() => {
  if (module.value) {
    return `https://www.youtube.com/embed/${module.value.videoId}`
  }
  return ''
})
</script>

<template>
  <div class="player-view container">
    <div v-if="course && module">

      <RouterLink :to="'/kursus/' + course.id" class="back-link">
        &larr; Kembali ke Daftar Modul
      </RouterLink>

      <h1>{{ module.title }}</h1>

      <div class="video-container">
        <iframe
          :src="videoUrl"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

    </div>

    <div v-else>
      <h1>Oops!</h1>
      <p>Modul tidak dapat ditemukan.</p>
    </div>
  </div>
</template>

<style scoped>
.back-link {
  display: inline-block;
  margin-bottom: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  color: #007bff;
}
.back-link:hover {
  text-decoration: underline;
}

h1 {
  margin-top: 0;
}

.video-container {
  position: relative;
  aspect-ratio: 16 / 9;
  height: auto;
  width: 100%;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>