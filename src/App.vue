<script setup>
import { RouterLink, RouterView } from 'vue-router'
import logoImage from '@/assets/logo.jfif' // Pastikan Anda punya 'logo.png' di src/assets/
</script>

<template>
  <div class="layout-wrapper">

    <header class="main-header">
      <div class="wrapper">
        <div class="logo">
          <RouterLink to="/">
            <img :src="logoImage" alt="My E-Learning Logo" />
          </RouterLink>
        </div>
        <nav>
          <RouterLink to="/">Daftar Kursus</RouterLink>
          <RouterLink to="/about">Tentang Kami</RouterLink>
        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="main-footer">
      <div class="wrapper">
        <p>&copy; {{ new Date().getFullYear() }} My E-Learning. All rights reserved.</p>
      </div>
    </footer>

  </div> </template>

<style scoped>
/* 2. STYLE UNTUK MEMBUAT FOOTER SELALU DI BAWAH */

.layout-wrapper {
  /* Membuat wrapper setinggi minimal 100% layar browser */
  min-height: 100vh;

  /* Mengaktifkan Flexbox mode kolom (atas ke bawah) */
  display: flex;
  flex-direction: column;
}

main {
  /* INI KUNCINYA:
     Perintah ini menyuruh <main> untuk mengambil SEMUA sisa ruang kosong.
     Akibatnya, footer akan terdorong mentok ke paling bawah.
  */
  flex: 1;

  /* Tetap pertahankan padding kita yang lama */
  padding-top: 1rem;
}

/* --- DI BAWAH INI ADALAH STYLE LAMA ANDA (TIDAK BERUBAH) --- */

.main-header {
  background-color: #ffffff;
  border-bottom: 2px solid #e9ecef;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.main-header .wrapper {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  text-decoration: none;
  color: inherit;
  display: block;
}

.logo img {
  height: 40px;
  display: block;
  transition: opacity 0.2s ease;
}

.logo img:hover {
  opacity: 0.85;
}

nav {
  display: flex;
  gap: 1.5rem;
}

nav a {
  text-decoration: none;
  color: #495057;
  font-weight: 600;
  font-size: 1.05rem;
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
}

nav a:hover {
  color: #007bff;
}

nav a.router-link-exact-active {
  color: #0056b3;
  border-bottom-color: #0056b3;
}

.main-footer {
  background-color: #343a40;
  color: #adb5bd;
  padding: 2rem 0;
  margin-top: 3rem;
  font-size: 0.9rem;
  text-align: center;
}

.main-footer .wrapper {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (max-width: 768px) {
  .main-header .wrapper {
    flex-direction: column;
    gap: 1rem;
  }

  .logo {
    text-align: center;
  }

  nav {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
}
</style>