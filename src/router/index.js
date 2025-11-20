import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Daftar Kursus' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'Tentang Kami' }
    },
    {
      path: '/kursus/:id',
      name: 'course-detail',
      component: () => import('../views/CourseDetailView.vue'),
      meta: { title: 'Detail Kursus' }
    },
    {
      path: '/kursus/:id/modul/:moduleId',
      name: 'module-player',
      component: () => import('../views/ModulePlayerView.vue'),
      meta: { title: 'Player Modul' }
    },
    {
      // Rute 404 - HARUS DI PALING AKHIR
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue'),
      meta: { title: '404 - Tidak Ditemukan' }
    }
  ]
})

// Penjaga Navigasi Global untuk Judul Dinamis
router.afterEach((to) => {
  const baseTitle = 'My E-Learning';
  if (to.meta.title) {
    document.title = `${to.meta.title} | ${baseTitle}`;
  } else {
    document.title = baseTitle;
  }
});

export default router