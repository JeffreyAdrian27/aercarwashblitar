<!-- frontend/src/views/ContactView.vue -->
<template>
  <div class="contact-page section-py">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">KONTAK &amp; LOKASI RESMI</span>
        <h1 class="section-title">Hubungi Aer Carwash Blitar</h1>
        <p class="section-desc">
          Layanan cuci mobil drive-thru ekspres hanya 10 menit di Kota Blitar. Langsung datang ke workshop atau hubungi kami lewat WhatsApp!
        </p>
      </div>

      <div class="contact-layout">
        <!-- Kartu Utama Kontak -->
        <div class="glass-card main-contact-card">
          <h2 class="card-title">Informasi &amp; Kontak Resmi</h2>
          <p class="card-subtitle">
            Tidak perlu booking jadwal, Anda bisa langsung meluncur ke workshop kami kapan saja selama jam operasional.
          </p>

          <div class="contact-methods-grid">
            <!-- 1. WhatsApp Resmi -->
            <a href="https://wa.me/6282143243184" target="_blank" rel="noopener noreferrer" class="contact-item-box wa-box">
              <div class="icon-circle wa-bg">
                <MessageSquare class="c-icon" />
              </div>
              <div class="box-text">
                <span class="box-label">WhatsApp CS Resmi</span>
                <strong class="box-val">0821-4324-3184</strong>
                <span class="box-hint">Klik untuk chat langsung →</span>
              </div>
            </a>

            <!-- 2. Telepon -->
            <a href="tel:082143243184" class="contact-item-box phone-box">
              <div class="icon-circle phone-bg">
                <PhoneCall class="c-icon" />
              </div>
              <div class="box-text">
                <span class="box-label">Telepon Langsung</span>
                <strong class="box-val">0821-4324-3184</strong>
                <span class="box-hint">Klik untuk menelepon →</span>
              </div>
            </a>

            <!-- 3. Alamat Workshop -->
            <div class="contact-item-box addr-box">
              <div class="icon-circle map-bg">
                <MapPin class="c-icon" />
              </div>
              <div class="box-text">
                <span class="box-label">Alamat Workshop</span>
                <strong class="box-val">Jl. Bali No. 144, Kota Blitar</strong>
                <span class="box-hint">Jawa Timur, Indonesia</span>
              </div>
            </div>

            <!-- 4. Jam Operasional -->
            <div class="contact-item-box hours-box">
              <div class="icon-circle clock-bg">
                <Clock class="c-icon" />
              </div>
              <div class="box-text">
                <span class="box-label">Jam Operasional</span>
                <strong class="box-val">07.00 - 23.00 WIB (11.00 Malam)</strong>
                <span class="box-status">Buka Setiap Hari</span>
              </div>
            </div>
          </div>

          <!-- Quick Action Buttons -->
          <div class="direct-actions">
            <a href="https://wa.me/6282143243184" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp action-btn">
              <MessageSquare class="btn-icon" />
              <span>Chat WhatsApp: 0821-4324-3184</span>
            </a>
            <a href="https://maps.app.goo.gl/euUY6TVDstqSZVzF7" target="_blank" rel="noopener noreferrer" class="btn btn-secondary action-btn">
              <Navigation class="btn-icon" />
              <span>Petunjuk Arah Google Maps</span>
            </a>
          </div>
        </div>

        <!-- Info Tambahan & FAQ -->
        <div class="contact-info-side">
          <div class="glass-card speed-card">
            <div class="badge-drive">DRIVE-THRU</div>
            <h3>Hanya 10 Menit Saja!</h3>
            <p>
              Dengan konsep drive-thru, Anda cukup antre di jalur masuk dan staf kami siap mencuci kendaraan Anda dalam waktu singkat.
            </p>
            <ul class="highlight-list">
              <li><strong>Cuci Luar 30k:</strong> Cukup di dalam mobil.</li>
              <li><strong>Cuci Luar Dalam 40k:</strong> Karpet + vacuum.</li>
              <li><strong>Wax Body 25k:</strong> Kilap maksimal.</li>
              <li><strong>Cuci Mesin 10k:</strong> Ruang mesin bersih.</li>
              <li><strong>Motor:</strong> Rp 15k / Motor Besar Rp 25k.</li>
            </ul>
          </div>

          <div class="glass-card faq-card">
            <h4>Pertanyaan Umum</h4>
            <div class="faq-item">
              <strong>Apakah perlu booking terlebih dahulu?</strong>
              <p>Tidak perlu booking! Anda bisa langsung datang ke workshop di Jl. Bali No. 144 kapan saja dari jam 07.00 sampai 23.00 WIB.</p>
            </div>
            <div class="faq-item">
              <strong>Berapa lama proses cuci?</strong>
              <p>Cuci luar ekspres hanya memakan waktu sekitar 10 menit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MessageSquare, PhoneCall, MapPin, Clock, Navigation } from 'lucide-vue-next'
</script>

<style scoped>
.contact-layout {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 36px;
  align-items: start;
}

@media (max-width: 900px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }
}

.main-contact-card {
  padding: 36px;
}

@media (max-width: 600px) {
  .main-contact-card {
    padding: 24px;
  }
}

.card-title {
  font-size: 1.8rem;
  margin-bottom: 8px;
}

.card-subtitle {
  color: #94a3b8;
  font-size: 0.95rem;
  margin-bottom: 30px;
  line-height: 1.6;
}

.contact-methods-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-bottom: 32px;
}

@media (max-width: 640px) {
  .contact-methods-grid {
    grid-template-columns: 1fr;
  }
}

.contact-item-box {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 18px;
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.contact-item-box:hover {
  background: rgba(15, 23, 42, 0.95);
  border-color: var(--primary-light);
  transform: translateY(-2px);
}

.icon-circle {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.c-icon {
  width: 22px;
  height: 22px;
}

.wa-bg { background: rgba(37, 211, 102, 0.2); color: #25d366; }
.phone-bg { background: rgba(56, 189, 248, 0.2); color: #38bdf8; }
.map-bg { background: rgba(245, 158, 11, 0.2); color: #f59e0b; }
.clock-bg { background: rgba(168, 85, 247, 0.2); color: #c084fc; }

.box-text {
  display: flex;
  flex-direction: column;
}

.box-label {
  font-size: 0.78rem;
  color: #94a3b8;
  font-weight: 600;
  margin-bottom: 2px;
}

.box-val {
  font-size: 0.96rem;
  color: #ffffff;
  margin-bottom: 4px;
}

.box-hint {
  font-size: 0.78rem;
  color: var(--primary-light);
}

.box-status {
  font-size: 0.78rem;
  color: #10b981;
  font-weight: 700;
}

.direct-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.action-btn {
  flex: 1;
  min-width: 200px;
  padding: 14px;
  font-size: 0.95rem;
}

/* Info Side */
.contact-info-side {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.speed-card {
  padding: 28px;
  border-color: rgba(56, 189, 248, 0.35);
}

.badge-drive {
  display: inline-block;
  background: rgba(56, 189, 248, 0.15);
  color: var(--primary-light);
  font-size: 0.75rem;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  margin-bottom: 12px;
}

.speed-card h3 {
  font-size: 1.4rem;
  margin-bottom: 8px;
}

.speed-card p {
  font-size: 0.92rem;
  color: #cbd5e1;
  margin-bottom: 16px;
  line-height: 1.5;
}

.highlight-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
}

.highlight-list li {
  font-size: 0.88rem;
  color: #cbd5e1;
  padding: 6px 10px;
  background: rgba(2, 6, 23, 0.4);
  border-radius: var(--radius-sm);
}

.highlight-list strong {
  color: var(--accent-gold);
}

.faq-card {
  padding: 24px;
}

.faq-card h4 {
  font-size: 1.15rem;
  margin-bottom: 14px;
  color: #ffffff;
}

.faq-item {
  margin-bottom: 14px;
}

.faq-item:last-child {
  margin-bottom: 0;
}

.faq-item strong {
  display: block;
  font-size: 0.9rem;
  color: var(--primary-light);
  margin-bottom: 4px;
}

.faq-item p {
  font-size: 0.86rem;
  color: #94a3b8;
  margin: 0;
  line-height: 1.5;
}
</style>
