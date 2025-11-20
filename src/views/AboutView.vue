<script setup>
// 1. IMPORT GAMBAR DARI FOLDER ASSETS
// Pastikan file 'geto.png' dan 'gojo.jpg' SUDAH ADA di folder src/assets/
import getoImage from '@/assets/geto.png'
import gojoImage from '@/assets/gojo.jpeg'
</script>

<template>
  <div class="about container">
    <section class="hero-section">
      <h1>Belajar dengan Cara Baru</h1>
      <p class="tagline">
        Platform E-Learning kami didedikasikan untuk memberikan pengalaman belajar yang mudah diakses,
        efektif, dan menyenangkan bagi siapa saja, di mana saja.
      </p>
    </section>

    <hr>

    <section class="mission-section">
      <h2>Misi Kami</h2>
      <p>
        Misi kami adalah mendemokratisasi pendidikan dengan menyediakan
        kursus berkualitas tinggi dalam berbagai bidang, mulai dari
        pengembangan web hingga desain grafis dan banyak lagi. Kami percaya
        bahwa setiap orang berhak mendapatkan kesempatan untuk belajar dan
        mengembangkan potensi diri.
      </p>
      <p>
        Kami berkomitmen untuk terus memperbarui konten kami dengan teknologi
        dan praktik terbaik terkini, memastikan Anda selalu selangkah lebih
        maju dalam perjalanan belajar Anda.
      </p>
    </section>

    <hr>

    <section class="team-section">
      <h2>Tim Kami</h2>
      <div class="team-members">

        <div class="member-card">
          <img :src="getoImage" alt="Geto Suguru" class="member-avatar">
          <h3>Geto Suguru</h3>
          <p class="member-role">Pendiri & CEO</p>
          <p class="member-bio">Jane adalah visioner di balik platform ini, dengan pengalaman lebih dari 10 tahun di industri ed-tech.</p>
        </div>

        <div class="member-card">
          <img :src="gojoImage" alt="Gojo Satoru" class="member-avatar">
          <h3>Gojo Satoru</h3>
          <p class="member-role">Lead Instructor</p>
          <p class="member-bio">John ahli dalam pengembangan web dan telah melatih ribuan siswa untuk menjadi developer handal.</p>
        </div>

      </div>
    </section>

  </div>
</template>

<style scoped>
/* Style tetap sama, tidak perlu diubah karena sudah bagus */
.about {
  line-height: 1.6;
}

.hero-section {
  text-align: center;
  padding: 3rem 0;
  background-color: #e6f7ff;
  border-radius: 10px;
  margin-bottom: 2rem;
}

.hero-section h1 {
  font-size: 2.8rem;
  color: #0056b3;
  margin-bottom: 0.5rem;
}

.tagline {
  font-size: 1.2rem;
  color: #4a5568;
  max-width: 700px;
  margin: 0.5rem auto 0;
}

hr {
  border: 0;
  border-top: 1px solid #eee;
  margin: 3rem 0;
}

.mission-section h2, .team-section h2 {
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.mission-section p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1rem;
  text-align: justify;
}

.team-members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.member-card {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: transform 0.2s ease;
  width: 100%;
  max-width: 280px;
}

.member-card:hover {
  transform: translateY(-5px);
}

.member-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid #007bff;
}

.member-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
}

.member-role {
  font-weight: 600;
  color: #007bff;
  margin-bottom: 1rem;
}

.member-bio {
  font-size: 0.95rem;
  color: #666;
  text-align: justify;
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  .tagline {
    font-size: 1rem;
  }
  .mission-section p {
    font-size: 1rem;
  }
  .team-members {
    flex-direction: column;
    align-items: center;
  }
  .member-card {
    max-width: 90%;
  }
}
</style>