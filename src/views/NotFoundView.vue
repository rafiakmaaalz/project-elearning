<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="not-found-view container">
    <h1>404</h1>
    <h2>Halaman Tidak Ditemukan</h2>
    <p>Maaf, halaman yang Anda cari mungkin sudah pindah atau tidak pernah ada.</p>
    <RouterLink to="/" class="home-link">Kembali ke Halaman Utama</RouterLink>
  </div>
</template>

<style scoped>
.not-found-view {
  margin-top: 2rem;
  text-align: center;
  background-color: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

h1 {
  font-size: 5rem;
  color: #e53e3e;
  margin: 0;
}

h2 {
  font-size: 1.75rem;
  color: #2d3748;
  margin-top: 0;
  margin-bottom: 0.5rem;
}

p {
  color: #4a5568;
  margin-bottom: 2rem;
}

.home-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  border-radius: 5px;
  transition: background-color 0.2s ease;
}

.home-link:hover {
  background-color: #0056b3;
}
</style>