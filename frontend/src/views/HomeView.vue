<!-- frontend/src/views/HomeView.vue -->
<template>
  <div class="home-page">
    <!-- 1. HERO SECTION -->
    <section class="hero-section">
      <!-- Full Hero Background Image (50% Opacity) -->
      <div class="hero-bg-backdrop">
        <img src="/images/aer_car_wash_depan.jpg" alt="Aer Drive Thru Carwash Blitar - Tampak Depan" class="hero-bg-img" />
        <div class="hero-bg-overlay"></div>
      </div>

      <div class="container hero-container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            Pelopor Cuci Mobil Drive-Thru Pertama di Blitar
          </div>
          <h1 class="hero-title">
            Hanya Cuci Dalam <span class="gradient-text">10 Menit!</span>
          </h1>
          <p class="hero-subtitle">
            Nikmati cuci mobil ekspres super cepat tanpa perlu turun dari kendaraan Anda di <strong>Jl. Bali No. 144, Kota Blitar</strong>. Bersih tuntas, kilap seketika, dan buka setiap hari mulai pukul 07.00 hingga 23.00 WIB!
          </p>
          <div class="hero-buttons">
            <!-- <a href="https://wa.me/6282143243184" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp hero-btn">
              <MessageSquare class="btn-icon" />
              <span>Chat WhatsApp: 0821-4324-3184</span>
            </a> -->
            <router-link to="/pricing" class="btn btn-secondary hero-btn">
              <span>Daftar Menu &amp; Harga</span>
              <ArrowRight class="btn-icon" />
            </router-link>
          </div>
          
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">10 Menit</span>
              <span class="stat-label">Cuci Ekspres Kilat</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">Mulai 30k</span>
              <span class="stat-label">Promo Cuci Luar</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">07.00 - 23.00</span>
              <span class="stat-label">Buka Setiap Hari</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. DAFTAR MENU LAYANAN & HARGA RESMI -->
    <section class="section-py menu-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">MENU &amp; HARGA RESMI</span>
          <h2 class="section-title">Pilihan Layanan Aer Carwash Blitar</h2>
          <p class="section-desc">
            Harga transparan dan terjangkau untuk mobil serta sepeda motor. Tanpa antre lama, cukup drive-thru!
          </p>
        </div>

        <div class="menu-grid">
          <!-- 1. Cuci Luar (Promo) -->
          <div class="glass-card menu-card promo-card-highlight">
            <div class="menu-badge">PROMO SPESIAL</div>
            <div class="menu-header">
              <h3 class="menu-title">Cuci Luar (Drive-Thru)</h3>
              <div class="menu-price">Rp 30.000</div>
            </div>
            <p class="menu-desc">Hanya bagian luar saja, praktis &amp; cepat, tidak perlu keluar dari mobil!</p>
            <ul class="menu-features">
              <li><Check class="chk" /> Selesai hanya dalam 10 menit</li>
              <li><Check class="chk" /> Tetap nyaman di dalam kabin mobil</li>
              <li><Check class="chk" /> Busa salju aktif &amp; semprot kolong</li>
              <li><Check class="chk" /> Semir ban hitam mengkilap</li>
            </ul>
          </div>

          <!-- 2. Cuci Luar Dalam (Promo) -->
          <div class="glass-card menu-card promo-card-highlight">
            <div class="menu-badge popular">PALING FAVORIT</div>
            <div class="menu-header">
              <h3 class="menu-title">Cuci Luar Dalam</h3>
              <div class="menu-price">Rp 40.000</div>
            </div>
            <p class="menu-desc">Pembersihan menyeluruh bagian luar dan dalam kabin mobil.</p>
            <ul class="menu-features">
              <li><Check class="chk" /> Cuci bodi luar bersih maksimal</li>
              <li><Check class="chk" /> Membersihkan &amp; cuci karpet mobil</li>
              <li><Check class="chk" /> Vacuum debu interior &amp; jok mobil</li>
              <li><Check class="chk" /> Lap dashboard &amp; semir ban</li>
            </ul>
          </div>

          <!-- 3. Wax Body (Promo) -->
          <div class="glass-card menu-card promo-card-highlight">
            <div class="menu-badge">PROMO GLOSS</div>
            <div class="menu-header">
              <h3 class="menu-title">Wax Body Protection</h3>
              <div class="menu-price">Rp 25.000</div>
            </div>
            <p class="menu-desc">Aplikasi lapisan wax khusus untuk membuat body mobil lebih berkilau dan terlindungi.</p>
            <ul class="menu-features">
              <li><Check class="chk" /> Efek wet-look mengkilap basah</li>
              <li><Check class="chk" /> Melindungi cat dari kusam dan debu</li>
              <li><Check class="chk" /> Efek hidrofobik daun talas</li>
            </ul>
          </div>

          <!-- 4. Cuci Mesin -->
          <div class="glass-card menu-card">
            <div class="menu-badge standard">TAMBAHAN</div>
            <div class="menu-header">
              <h3 class="menu-title">Cuci Mesin (Engine Bay)</h3>
              <div class="menu-price">Rp 10.000</div>
            </div>
            <p class="menu-desc">Pembersihan ruang mesin dari kerak debu dan oli agar kembali bersih dan rapi.</p>
            <ul class="menu-features">
              <li><Check class="chk" /> Bersihkan kap &amp; ruang mesin</li>
              <li><Check class="chk" /> Perlakuan aman pada komponen kelistrikan</li>
              <li><Check class="chk" /> Harga super hemat Rp 10rb</li>
            </ul>
          </div>

          <!-- 5. Sepeda Motor -->
          <div class="glass-card menu-card">
            <div class="menu-badge standard">MOTOR</div>
            <div class="menu-header">
              <h3 class="menu-title">Sepeda Motor Standar</h3>
              <div class="menu-price">Rp 15.000</div>
            </div>
            <p class="menu-desc">Cuci bersih motor bebek, matic kecil (Beat, Vario 125, Scoopy, Mio, dsb).</p>
            <ul class="menu-features">
              <li><Check class="chk" /> Busa salju aktif &amp; semprot sela mesin</li>
              <li><Check class="chk" /> Pembersihan velg &amp; rantai</li>
              <li><Check class="chk" /> Semir ban kinclong</li>
            </ul>
          </div>

          <!-- 6. Sepeda Motor Besar -->
          <div class="glass-card menu-card">
            <div class="menu-badge standard">MOGE / SPORT</div>
            <div class="menu-header">
              <h3 class="menu-title">Sepeda Motor Besar</h3>
              <div class="menu-price">Rp 25.000</div>
            </div>
            <p class="menu-desc">Cuci motor matic besar (NMax, PCX, XMax, ADV) dan motor sport / moge.</p>
            <ul class="menu-features">
              <li><Check class="chk" /> Pembersihan bodi gambot &amp; kolong shock</li>
              <li><Check class="chk" /> Detail sela velg lebar &amp; cakram</li>
              <li><Check class="chk" /> Semir ban &amp; body dressing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 2.5 MEMBERSHIP BULANAN (199k & 399k) -->
    <section class="section-py membership-home-section">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-badge badge-gold">MEMBERSHIP BULANAN</span>
          <h2 class="section-title">Solusi Cuci Mobil Tiap Hari Paling Hemat</h2>
          <p class="section-desc">
            Bebas cuci mobil tiap hari selama 30 hari penuh dengan paket membership resmi Aer Carwash Blitar.
          </p>
        </div>

        <div class="membership-grid">
          <!-- Membership 199k -->
          <div class="glass-card membership-card">
            <div class="mem-badge-tag">1 PLAT MOBIL</div>
            <div class="mem-header">
              <span class="mem-tier">Paket Personal</span>
              <h3 class="mem-title">Membership 199k</h3>
              <div class="mem-price-box">
                <span class="mem-currency">Rp</span>
                <span class="mem-amount">199.000</span>
                <span class="mem-period">/ 30 hari</span>
              </div>
            </div>
            <p class="mem-desc">Untuk 1 mobil pribadi. Tiap hari bisa cuci mobil Anda (maksimal 1 kali sehari) tanpa biaya berulang selama sebulan.</p>
            <ul class="mem-features">
              <li><Check class="mem-chk text-cyan" /> <span>Terdaftar <strong>1 Plat Mobil</strong></span></li>
              <li><Check class="mem-chk text-cyan" /> <span>Masa aktif <strong>30 Hari</strong> penuh</span></li>
              <li><Check class="mem-chk text-cyan" /> <span>Cuci <strong>tiap hari</strong> (Maksimal 1 mobil/hari)</span></li>
              <li><Check class="mem-chk text-cyan" /> <span>Konsep Drive-Thru cepat 10 menit</span></li>
            </ul>
            <a href="https://wa.me/6282143243184?text=Halo%20Aer%20Carwash,%20saya%20mau%20daftar%20Membership%20199k%20(1%20Plat%20Mobil)" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp w-full">
              <MessageSquare class="btn-icon" />
              <span>Daftar Membership 199k</span>
            </a>
          </div>

          <!-- Membership 399k -->
          <div class="glass-card membership-card featured-gold">
            <div class="mem-badge-tag gold">3 PLAT MOBIL</div>
            <div class="mem-header">
              <span class="mem-tier text-gold">Paket Family &amp; Bisnis</span>
              <h3 class="mem-title">Membership 399k</h3>
              <div class="mem-price-box">
                <span class="mem-currency">Rp</span>
                <span class="mem-amount text-gold">399.000</span>
                <span class="mem-period">/ 30 hari</span>
              </div>
            </div>
            <p class="mem-desc">Untuk keluarga &amp; mobil kantor. Daftarkan sampai 3 mobil, cuci bergantian tiap hari selama sebulan penuh.</p>
            <ul class="mem-features">
              <li><Check class="mem-chk text-gold" /> <span>Terdaftar <strong>3 Plat Mobil</strong></span></li>
              <li><Check class="mem-chk text-gold" /> <span>Masa aktif <strong>30 Hari</strong> penuh</span></li>
              <li><Check class="mem-chk text-gold" /> <span>Cuci <strong>tiap hari</strong> (Maksimal 1 mobil)</span></li>
              <li><Check class="mem-chk text-gold" /> <span>Bebas ganti mobil terdaftar</span></li>
            </ul>
            <a href="https://wa.me/6282143243184?text=Halo%20Aer%20Carwash,%20saya%20mau%20daftar%20Membership%20399k%20(3%20Plat%20Mobil)" target="_blank" rel="noopener noreferrer" class="btn btn-primary w-full">
              <MessageSquare class="btn-icon" />
              <span>Daftar Membership 399k</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. COMING SOON SECTION (DETAILING & CAFE) -->
    <section class="section-py coming-soon-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge badge-coming-soon">SEGERA HADIR</span>
          <h2 class="section-title">Coming Soon di Aer Carwash</h2>
          <p class="section-desc">
            Nantikan inovasi terbaru kami untuk perawatan mobil paripurna dan pengalaman menunggu yang semakin menyenangkan!
          </p>
        </div>

        <div class="coming-soon-grid">
          <!-- 1. Auto Detailing -->
          <div class="glass-card coming-card">
            <div class="coming-badge-tag cyan">
              <span class="pulse-indicator"></span>
              <span>COMING SOON</span>
            </div>
            <div class="coming-icon-box cyan-glow">
              <Sparkles class="coming-icon text-cyan" />
            </div>
            <h3 class="coming-title">Aer Auto Detailing</h3>
            <p class="coming-desc">
              Perawatan salon mobil profesional tingkat lanjut: Multi-stage Paint Correction (hilangkan baret halus &amp; swirl mark), detailing interior total, dan perlindungan jangka panjang Nano Ceramic Coating 9H.
            </p>
            <div class="coming-tags">
              <span class="tag">Nano Ceramic Coating 9H</span>
              <span class="tag">Paint Correction</span>
              <span class="tag">Interior Deep Clean</span>
            </div>
          </div>

          <!-- 2. Cafe & Lounge -->
          <div class="glass-card coming-card">
            <div class="coming-badge-tag gold">
              <span class="pulse-indicator gold"></span>
              <span>COMING SOON</span>
            </div>
            <div class="coming-icon-box gold-glow">
              <Coffee class="coming-icon text-gold" />
            </div>
            <h3 class="coming-title">Aer Cafe &amp; Lounge</h3>
            <p class="coming-desc">
              Tempat nongkrong estetik ber-AC sejuk. Nikmati aneka sajian kopi nikmat, minuman segar, dan camilan lezat dengan free WiFi kencang sambil menunggu kendaraan Anda selesai dibersihkan.
            </p>
            <div class="coming-tags">
              <span class="tag">Specialty Coffee</span>
              <span class="tag">Free High-Speed WiFi</span>
              <span class="tag">Cozy AC Ambience</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. KEUNGGULAN WORKSHOP -->
    <section class="section-py advantages-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">MENGAPA MEMILIH KAMI</span>
          <h2 class="section-title">Kenyamanan Cuci Mobil di Aer Carwash</h2>
          <p class="section-desc">Konsep modern yang dirancang untuk menghemat waktu Anda yang berharga.</p>
        </div>

        <div class="advantages-grid">
          <div class="glass-card advantage-card">
            <div class="adv-icon-box">
              <Clock class="adv-icon" />
            </div>
            <h3 class="adv-title">Hanya 10 Menit</h3>
            <p class="adv-desc">Waktu Anda tidak terbuang sia-sia. Sistem kerja terkoordinasi cepat dan bersih maksimal.</p>
          </div>

          <div class="glass-card advantage-card">
            <div class="adv-icon-box">
              <Car class="adv-icon" />
            </div>
            <h3 class="adv-title">Konsep Drive-Thru</h3>
            <p class="adv-desc">Bisa tetap berada di dalam kendaraan santai mendengarkan musik atau AC dingin saat cuci luar.</p>
          </div>

          <div class="glass-card advantage-card">
            <div class="adv-icon-box">
              <Sparkles class="adv-icon" />
            </div>
            <h3 class="adv-title">Buka Hingga Malam</h3>
            <p class="adv-desc">Buka setiap hari dari pukul 07.00 pagi sampai 23.00 malam (jam 11 malam), cocok sepulang kerja.</p>
          </div>

          <div class="glass-card advantage-card">
            <div class="adv-icon-box">
              <MapPin class="adv-icon" />
            </div>
            <h3 class="adv-title">Lokasi di Jl. Bali 144</h3>
            <p class="adv-desc">Jalan utama yang lebar dan mudah diakses dari berbagai penjuru Kota Blitar.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. LOKASI & CTA LANGSUNG -->
    <section class="section-py location-cta-section">
      <div class="container">
        <div class="cta-card">
          <div class="cta-content">
            <span class="cta-badge">KUNJUNGI SEKARANG</span>
            <h2 class="cta-title">Mobil Kotor? Langsung Drive-Thru ke Sini!</h2>
            <p class="cta-desc">
              Tidak perlu reservasi rumit. Langsung datang ke <strong>Jl. Bali No. 144, Kota Blitar</strong> atau hubungi kami lewat WhatsApp jika ada pertanyaan.
            </p>
            <div class="cta-actions">
              <!-- <a href="https://wa.me/6282143243184" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
                <MessageSquare class="btn-icon" />
                <span>WhatsApp: 0821-4324-3184</span>
              </a> -->
              <a href="https://maps.app.goo.gl/euUY6TVDstqSZVzF7" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                <MapPin class="btn-icon" />
                <span>Petunjuk Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { MessageSquare, ArrowRight, Clock, Sparkles, Check, Car, MapPin, Coffee } from 'lucide-vue-next'
</script>

<style scoped>
/* Hero Section */
.hero-section {
  position: relative;
  min-height: 560px;
  padding: 75px 0 85px 0;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* Full Hero Background Image (50% Opacity) */
.hero-bg-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}

.hero-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 38%;
  opacity: 1;
  filter: brightness(0.92) contrast(1.06);
}

.hero-bg-overlay {
  position: absolute;
  inset: 0;
  /* Overlay tipis agar bangunan dan area workshop tampak sangat jelas */
  background: linear-gradient(90deg, rgba(7, 14, 27, 0.78) 0%, rgba(7, 14, 27, 0.45) 48%, rgba(7, 14, 27, 0.08) 85%),
              linear-gradient(180deg, transparent 72%, rgba(7, 14, 27, 0.85) 100%);
}

.hero-container {
  position: relative;
  z-index: 2;
  width: 100%;
}

.hero-content {
  max-width: 680px;
}

@media (max-width: 992px) {
  .hero-section {
    padding: 60px 0 70px 0;
    min-height: auto;
  }

  .hero-content {
    max-width: 100%;
    text-align: center;
  }

  .hero-bg-overlay {
    background: linear-gradient(180deg, rgba(7, 14, 27, 0.68) 0%, rgba(7, 14, 27, 0.72) 100%);
  }
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid var(--border-subtle);
  color: var(--primary-light);
  font-size: 0.88rem;
  font-weight: 600;
  padding: 6px 16px;
  border-radius: var(--radius-full);
  margin-bottom: 22px;
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary-light);
  box-shadow: 0 0 10px var(--primary-light);
}

.hero-title {
  font-size: 3.4rem;
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.4rem;
  }
}

.gradient-text {
  background: linear-gradient(135deg, #38bdf8 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.12rem;
  color: #f1f5f9;
  margin-bottom: 34px;
  line-height: 1.65;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.95), 0 1px 3px rgba(0, 0, 0, 0.8);
}

.hero-subtitle strong {
  color: #ffffff;
}

.hero-buttons {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 45px;
  flex-wrap: wrap;
}

@media (max-width: 992px) {
  .hero-buttons {
    justify-content: center;
  }
}

.hero-btn {
  padding: 14px 28px;
  font-size: 1rem;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 28px;
}

@media (max-width: 992px) {
  .hero-stats {
    justify-content: center;
  }
}

@media (max-width: 500px) {
  .hero-stats {
    gap: 16px;
  }
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  font-weight: 800;
  color: #ffffff;
}

.stat-label {
  font-size: 0.82rem;
  color: #94a3b8;
}

.stat-divider {
  width: 1px;
  height: 38px;
  background: rgba(255, 255, 255, 0.1);
}

.hero-visual {
  position: relative;
}

.hero-image-wrapper {
  position: relative;
  border-radius: var(--radius-lg);
}

.hero-car-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(56, 189, 248, 0.25);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), 0 0 40px rgba(56, 189, 248, 0.2);
}

.floating-stat-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(11, 23, 42, 0.92);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 12px 18px;
  backdrop-filter: blur(12px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
  z-index: 5;
}

.card-top {
  top: -18px;
  right: -15px;
}

.card-bottom {
  bottom: -20px;
  left: -15px;
}

@media (max-width: 768px) {
  .hero-visual {
    margin: 15px 0;
  }
}

@media (max-width: 600px) {
  .floating-stat-card {
    padding: 8px 12px;
    gap: 8px;
    border-radius: var(--radius-sm);
  }

  .card-top {
    top: -12px;
    right: 4px;
  }

  .card-bottom {
    bottom: -12px;
    left: 4px;
  }

  .floating-icon {
    width: 20px !important;
    height: 20px !important;
  }

  .floating-stat-card strong {
    font-size: 0.78rem !important;
  }

  .floating-stat-card p {
    font-size: 0.68rem !important;
  }
}

@media (max-width: 400px) {
  .floating-stat-card {
    padding: 6px 9px;
    gap: 6px;
  }

  .card-top {
    top: -10px;
    right: 2px;
  }

  .card-bottom {
    bottom: -10px;
    left: 2px;
  }

  .floating-icon {
    width: 17px !important;
    height: 17px !important;
  }

  .floating-stat-card strong {
    font-size: 0.72rem !important;
  }

  .floating-stat-card p {
    font-size: 0.63rem !important;
  }
}

.floating-icon {
  width: 28px;
  height: 28px;
}

.text-cyan { color: #38bdf8; }
.text-gold { color: #f59e0b; }

.floating-stat-card strong {
  display: block;
  font-size: 0.9rem;
  color: #ffffff;
}

.floating-stat-card p {
  font-size: 0.78rem;
  color: #94a3b8;
  margin: 0;
}

/* Menu Grid */
.menu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

@media (max-width: 992px) {
  .menu-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .menu-grid {
    grid-template-columns: 1fr;
  }
}

.menu-card {
  position: relative;
  display: flex;
  flex-direction: column;
}

.promo-card-highlight {
  border-color: rgba(56, 189, 248, 0.4);
  background: linear-gradient(180deg, rgba(2, 132, 199, 0.08) 0%, var(--bg-card) 50%);
}

.menu-badge {
  position: absolute;
  top: -12px;
  right: 20px;
  background: rgba(56, 189, 248, 0.2);
  border: 1px solid var(--primary-light);
  color: var(--primary-light);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  padding: 4px 10px;
  border-radius: var(--radius-sm);
}

.menu-badge.popular {
  background: rgba(245, 158, 11, 0.2);
  border-color: var(--accent-gold);
  color: var(--accent-gold);
}

.menu-badge.standard {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  color: #cbd5e1;
}

.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 12px;
  gap: 12px;
}

.menu-title {
  font-size: 1.25rem;
}

.menu-price {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--accent-gold);
  white-space: nowrap;
}

.menu-desc {
  font-size: 0.92rem;
  color: #94a3b8;
  margin-bottom: 18px;
  line-height: 1.5;
}

.menu-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.menu-features li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.86rem;
  color: #cbd5e1;
}

.chk {
  width: 15px;
  height: 15px;
  color: var(--primary-light);
  flex-shrink: 0;
}

/* Advantages */
.advantages-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

@media (max-width: 992px) {
  .advantages-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .advantages-grid {
    grid-template-columns: 1fr;
  }
}

.adv-icon-box {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-light);
  margin-bottom: 20px;
}

.adv-icon {
  width: 26px;
  height: 26px;
}

.adv-title {
  font-size: 1.25rem;
  margin-bottom: 12px;
}

.adv-desc {
  font-size: 0.92rem;
  line-height: 1.6;
}

/* CTA */
.cta-card {
  background: linear-gradient(135deg, #0b2342 0%, #071325 100%);
  border: 1px solid rgba(56, 189, 248, 0.3);
  border-radius: var(--radius-lg);
  padding: 60px 40px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(56, 189, 248, 0.15);
}

.cta-content {
  max-width: 680px;
  margin: 0 auto;
}

.cta-badge {
  display: inline-block;
  background: rgba(245, 158, 11, 0.15);
  border: 1px solid rgba(245, 158, 11, 0.3);
  color: #fbbf24;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 5px 14px;
  border-radius: var(--radius-full);
  margin-bottom: 16px;
}

.cta-title {
  font-size: 2.3rem;
  margin-bottom: 16px;
}

@media (max-width: 600px) {
  .cta-title {
    font-size: 1.8rem;
  }
}

.cta-desc {
  font-size: 1.05rem;
  color: #cbd5e1;
  margin-bottom: 30px;
}

.cta-desc strong {
  color: #ffffff;
}

.cta-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

/* Coming Soon Styles */
.badge-coming-soon {
  background: rgba(245, 158, 11, 0.15);
  border-color: rgba(245, 158, 11, 0.35);
  color: var(--accent-gold);
}

.coming-soon-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

@media (max-width: 800px) {
  .coming-soon-grid {
    grid-template-columns: 1fr;
  }
}

.coming-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 36px 30px;
  background: linear-gradient(180deg, rgba(16, 33, 61, 0.8) 0%, rgba(12, 24, 44, 0.95) 100%);
  border: 1px dashed rgba(56, 189, 248, 0.35);
  border-radius: var(--radius-lg);
}

.coming-badge-tag {
  position: absolute;
  top: 24px;
  right: 24px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: var(--font-heading);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  padding: 6px 14px;
  border-radius: var(--radius-full);
  z-index: 2;
  white-space: nowrap;
}

.coming-badge-tag.cyan {
  background: rgba(14, 165, 233, 0.2);
  border: 1px solid #38bdf8;
  color: #38bdf8;
  box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
}

.coming-badge-tag.gold {
  background: rgba(245, 158, 11, 0.2);
  border: 1px solid #f59e0b;
  color: #fbbf24;
  box-shadow: 0 0 15px rgba(245, 158, 11, 0.3);
}

.pulse-indicator {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #38bdf8;
  box-shadow: 0 0 8px #38bdf8;
  animation: pulse-dot 1.8s infinite ease-in-out;
}

.pulse-indicator.gold {
  background: #fbbf24;
  box-shadow: 0 0 8px #fbbf24;
}

@keyframes pulse-dot {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(0.75);
  }
}

.coming-icon-box {
  width: 58px;
  height: 58px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.cyan-glow {
  background: rgba(56, 189, 248, 0.15);
  border: 1px solid rgba(56, 189, 248, 0.3);
}

.gold-glow {
  background: rgba(245, 158, 11, 0.15);
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.coming-icon {
  width: 28px;
  height: 28px;
}

.coming-title {
  font-size: 1.45rem;
  margin-bottom: 10px;
}

.coming-desc {
  font-size: 0.92rem;
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 22px;
}

.coming-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: auto;
}

.coming-tags .tag {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #cbd5e1;
  font-size: 0.78rem;
  padding: 4px 10px;
  border-radius: var(--radius-full);
}

/* Membership Home Styles */
.membership-home-section {
  background: linear-gradient(180deg, rgba(7, 14, 27, 0) 0%, rgba(14, 165, 233, 0.04) 50%, rgba(7, 14, 27, 0) 100%);
}

.badge-gold {
  background: rgba(245, 158, 11, 0.15) !important;
  color: #fbbf24 !important;
  border-color: rgba(245, 158, 11, 0.4) !important;
}

.membership-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 960px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .membership-grid {
    grid-template-columns: 1fr;
  }
}

.membership-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 28px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(56, 189, 248, 0.35);
  background: linear-gradient(180deg, rgba(14, 165, 233, 0.06) 0%, rgba(7, 14, 27, 0.85) 100%);
  transition: all var(--transition-normal);
}

.membership-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(56, 189, 248, 0.2);
}

.membership-card.featured-gold {
  border-color: rgba(245, 158, 11, 0.5);
  background: linear-gradient(180deg, rgba(245, 158, 11, 0.08) 0%, rgba(7, 14, 27, 0.85) 100%);
}

.membership-card.featured-gold:hover {
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6), 0 0 30px rgba(245, 158, 11, 0.25);
}

.mem-badge-tag {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(56, 189, 248, 0.15);
  border: 1px solid var(--primary-light);
  color: var(--primary-light);
  font-weight: 800;
  font-size: 0.75rem;
  letter-spacing: 1px;
  padding: 4px 10px;
  border-radius: var(--radius-sm);
}

.mem-badge-tag.gold {
  background: linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-hover) 100%);
  color: #070e1b;
  border: none;
}

.mem-header {
  margin-bottom: 16px;
}

.mem-tier {
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #94a3b8;
  display: block;
  margin-bottom: 4px;
}

.mem-title {
  font-size: 1.6rem;
  margin-bottom: 12px;
  color: #ffffff;
}

.mem-price-box {
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.mem-currency {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-muted);
}

.mem-amount {
  font-family: var(--font-heading);
  font-size: 2.3rem;
  font-weight: 900;
  color: #ffffff;
  line-height: 1;
}

.mem-period {
  font-size: 0.9rem;
  color: var(--text-muted);
}

.mem-desc {
  font-size: 0.92rem;
  color: #cbd5e1;
  line-height: 1.5;
  margin-bottom: 22px;
}

.mem-features {
  list-style: none;
  padding: 0;
  margin: 0 0 28px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: rgba(2, 6, 23, 0.4);
  padding: 18px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.mem-features li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.88rem;
  color: #e2e8f0;
  line-height: 1.5;
}

.mem-features li span {
  flex: 1;
}

.mem-chk {
  width: 17px;
  height: 17px;
  flex-shrink: 0;
  margin-top: 2px;
}
</style>
