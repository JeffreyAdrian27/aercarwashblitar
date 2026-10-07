<!-- frontend/src/views/LocationView.vue -->
<template>
  <div class="location-page section-py">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">LOKASI WORKSHOP</span>
        <h1 class="section-title">Temukan Kami di Pusat Kota Blitar</h1>
        <p class="section-desc">
          Akses mudah, area parkir luas, dan dekat dengan pusat perbelanjaan serta kuliner kota Blitar.
        </p>
      </div>

      <div class="location-main-grid">
        <!-- Info Cards -->
        <div class="location-info-side">
          <div class="glass-card location-card">
            <div class="loc-head">
              <MapPin class="loc-icon text-cyan" />
              <div>
                <h3>Alamat Workshop</h3>
                <p>Jl. Bali No. 144, Kota Blitar, Jawa Timur 66137</p>
              </div>
            </div>
            <a 
              href="https://maps.app.goo.gl/euUY6TVDstqSZVzF7" 
              target="_blank" 
              rel="noopener noreferrer"
              class="btn btn-primary w-full mt-3"
            >
              <Navigation class="btn-icon" />
              <span>Buka Petunjuk di Google Maps</span>
            </a>
          </div>

          <div class="glass-card location-card">
            <div class="loc-head">
              <Clock class="loc-icon text-gold" />
              <div>
                <h3>Jam Operasional</h3>
                <div class="hours-row">
                  <span>Senin – Minggu:</span>
                  <strong>07.00 - 23.00 WIB</strong>
                </div>
                <div class="hours-row">
                  <span>Hari Libur Nasional:</span>
                  <strong class="text-green">Tetap Buka Sampai Malam</strong>
                </div>
              </div>
            </div>
          </div>

          <div class="glass-card location-card">
            <div class="loc-head">
              <Compass class="loc-icon text-cyan" />
              <div>
                <h3>Panduan Rute Mudah</h3>
                <ul class="route-hints">
                  <li><strong>Lokasi:</strong> Berada di jalan utama Jl. Bali No. 144, Kota Blitar dengan akses masuk jalur drive-thru yang luas.</li>
                  <li><strong>Dari Pusat Kota:</strong> Hanya sekitar 5-7 menit berkendara dari Alun-Alun Kota Blitar atau Stasiun Blitar.</li>
                  <li><strong>Patokan:</strong> Plang logo resmi <strong>AER DRIVE THRU CARWASH</strong> terlihat jelas di pinggir jalan.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Interactive Google Map Frame -->
        <div class="map-side">
          <div class="map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.6268802264903!2d112.17148137575276!3d-8.112291691907148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78ebb5eaeefa4d%3A0x1829dd5dd523c3cb!2sAer%20Carwash!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Aer Carwash Blitar"
            ></iframe>
            <div class="map-overlay-badge">
              <div class="badge-dot pulse"></div>
              <span>Aercarwash Workshop Sedang Buka</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MapPin, Navigation, Clock, Compass } from 'lucide-vue-next'
</script>

<style scoped>
.location-main-grid {
  display: grid;
  grid-template-columns: 1fr 1.35fr;
  gap: 36px;
  align-items: start;
}

@media (max-width: 900px) {
  .location-main-grid {
    grid-template-columns: 1fr;
  }
}

.location-info-side {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.location-card {
  padding: 24px;
}

.loc-head {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.loc-icon {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  margin-top: 2px;
}

.text-cyan { color: #38bdf8; }
.text-gold { color: #f59e0b; }
.text-green { color: #10b981; }

.loc-head h3 {
  font-size: 1.15rem;
  margin-bottom: 6px;
}

.loc-head p {
  font-size: 0.92rem;
  color: #cbd5e1;
  line-height: 1.5;
}

.hours-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-size: 0.92rem;
  margin-top: 6px;
  color: #94a3b8;
}

.hours-row strong {
  color: #ffffff;
}

.route-hints {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
}

.route-hints li {
  font-size: 0.88rem;
  color: #cbd5e1;
  line-height: 1.5;
}

.route-hints strong {
  color: var(--primary-light);
}

.mt-3 {
  margin-top: 18px;
}

.w-full {
  width: 100%;
}

.map-side {
  width: 100%;
  height: 100%;
  min-height: 520px;
}

.map-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 520px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-card);
}

.map-overlay-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(11, 23, 42, 0.9);
  border: 1px solid var(--border-subtle);
  backdrop-filter: blur(8px);
  padding: 8px 16px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.84rem;
  font-weight: 600;
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
}

.pulse {
  box-shadow: 0 0 0 rgba(16, 185, 129, 0.4);
  animation: pulse-dot 1.8s infinite;
}

@keyframes pulse-dot {
  0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  70% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
  100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}
</style>
