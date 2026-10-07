<!-- frontend/src/views/AboutView.vue -->
<template>
  <div class="about-page section-py">
    <div class="container">
      <!-- Header -->
      <div class="section-header">
        <span class="section-badge">TENTANG AERCARWASH</span>
        <h1 class="section-title">Dedikasi Kebersihan &amp; Perawatan Mobil di Blitar</h1>
        <p class="section-desc">
          Berdiri dengan komitmen memberikan standar cuci mobil dan salon kendaraan terbaik tanpa kompromi pada kualitas bahan dan keamanan sasis.
        </p>
      </div>

      <!-- Story & Vision Grid -->
      <div class="about-grid">
        <div class="about-visual">
          <img src="/dummy/about/about-team.svg" alt="Tim Detailer Aercarwash Blitar" class="about-img" />
        </div>
        <div class="about-content">
          <h2 class="sub-heading">Siapa Kami?</h2>
          <p class="story-paragraph">
            <strong>Aer Drive-Thru Carwash Blitar</strong> hadir sebagai pelopor pencucian kendaraan berkonsep <em>Drive-Thru</em> pertama di Kota Blitar. Berlokasi strategis di <strong>Jl. Bali No. 144</strong>, kami memberikan solusi cuci mobil cepat, bersih, dan praktis hanya dalam <strong>10 menit</strong>.
          </p>
          <p class="story-paragraph">
            Pengemudi tidak perlu repot turun dari mobil untuk paket cuci luar, atau dapat bersantai sejenak saat pengerjaan cuci luar dalam (termasuk karpet dan vacuum). Kami buka setiap hari mulai pukul 07.00 pagi hingga 23.00 malam (jam 11 malam) dengan harga promo mulai Rp 30.000 saja.
          </p>
          <div class="stats-row">
            <div class="stat-box">
              <span class="num">10 Menit</span>
              <span class="lbl">Cuci Cepat &amp; Bersih</span>
            </div>
            <div class="stat-box">
              <span class="num">Jl. Bali 144</span>
              <span class="lbl">Akses Drive-Thru Luas</span>
            </div>
            <div class="stat-box">
              <span class="num">s/d 23.00</span>
              <span class="lbl">Buka Sampai Malam</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Visi & Misi Cards -->
      <div class="vision-grid">
        <div class="glass-card vision-card">
          <div class="v-icon-box text-cyan">
            <Eye class="v-icon" />
          </div>
          <h3 class="v-title">Visi Kami</h3>
          <p class="v-desc">
            Menjadi pusat perawatan dan salon mobil nomor satu di Blitar dan sekitarnya yang diakui atas kualitas hasil kilap, ketepatan waktu, dan integritas pelayanan ramah.
          </p>
        </div>

        <div class="glass-card vision-card">
          <div class="v-icon-box text-gold">
            <Target class="v-icon" />
          </div>
          <h3 class="v-title">Misi Kami</h3>
          <ul class="misi-list">
            <li>Menghadirkan teknologi cuci hidrolik aman tanpa resiko benturan sasis.</li>
            <li>Menggunakan hanya produk kimia otomotif berkualitas ramah cat mobil.</li>
            <li>Memberikan transparansi harga dan jaminan kepuasan pelanggan.</li>
            <li>Menyediakan ruang tunggu paling nyaman dan representatif di kota Blitar.</li>
          </ul>
        </div>
      </div>

      <!-- 4 Nilai Utama -->
      <div class="values-section">
        <h2 class="values-heading">Nilai-Nilai Kerja Kami</h2>
        <div class="values-grid">
          <div class="value-item">
            <div class="val-num">01</div>
            <h4>Presisi &amp; Ketelitian</h4>
            <p>Pembersihan detail hingga sela baut velg, sela emblem, karet kaca, dan ventilasi AC.</p>
          </div>
          <div class="value-item">
            <div class="val-num">02</div>
            <h4>Bebas Baret Halus (Swirl-Free)</h4>
            <p>Metode 2-bucket wash, kain microfiber terpisah antara bodi atas, bodi bawah, dan velg.</p>
          </div>
          <div class="value-item">
            <div class="val-num">03</div>
            <h4>Kenyamanan Pelanggan</h4>
            <p>Ruang tunggu VIP ber-AC sejuk, kopi gratis, dan transparansi waktu estimasi pengerjaan.</p>
          </div>
          <div class="value-item">
            <div class="val-num">04</div>
            <h4>Garansi Kepuasan</h4>
            <p>Bila ada bagian yang terlewat, kami bersihkan ulang seketika di tempat tanpa biaya tambahan.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Eye, Target } from 'lucide-vue-next'
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 50px;
  align-items: center;
  margin-bottom: 70px;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 35px;
  }
}

.about-img {
  width: 100%;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-card);
}

.sub-heading {
  font-size: 2rem;
  margin-bottom: 16px;
}

.story-paragraph {
  font-size: 1rem;
  line-height: 1.7;
  color: #cbd5e1;
  margin-bottom: 16px;
}

.stats-row {
  display: flex;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;
}

.stat-box {
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 14px 20px;
  display: flex;
  flex-direction: column;
}

.stat-box .num {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--primary-light);
}

.stat-box .lbl {
  font-size: 0.8rem;
  color: #94a3b8;
}

.vision-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 70px;
}

@media (max-width: 768px) {
  .vision-grid {
    grid-template-columns: 1fr;
  }
}

.v-icon-box {
  width: 50px;
  height: 50px;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
}

.v-icon {
  width: 26px;
  height: 26px;
}

.text-cyan { color: #38bdf8; }
.text-gold { color: #f59e0b; }

.v-title {
  font-size: 1.35rem;
  margin-bottom: 12px;
}

.v-desc {
  font-size: 0.95rem;
  line-height: 1.6;
}

.misi-list {
  list-style: square;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.misi-list li {
  font-size: 0.92rem;
  color: #cbd5e1;
}

.values-section {
  text-align: center;
  margin-top: 50px;
}

.values-heading {
  font-size: 2rem;
  margin-bottom: 40px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  text-align: left;
}

@media (max-width: 900px) {
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .values-grid {
    grid-template-columns: 1fr;
  }
}

.value-item {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 24px;
}

.val-num {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--primary-light);
  margin-bottom: 10px;
}

.value-item h4 {
  font-size: 1.15rem;
  margin-bottom: 8px;
}

.value-item p {
  font-size: 0.88rem;
  color: #94a3b8;
  line-height: 1.5;
}
</style>
