<!-- frontend/src/views/PricingView.vue -->
<template>
  <div class="pricing-page section-py">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">DAFTAR MENU &amp; HARGA</span>
        <h1 class="section-title">Harga Cuci Mobil &amp; Motor Aer Carwash</h1>
        <p class="section-desc">
          Layanan cuci cepat hanya 10 menit dengan konsep drive-thru praktis di Kota Blitar.
        </p>
      </div>

      <!-- Highlight Banner 10 Menit -->
      <div class="speed-banner">
        <Clock class="speed-icon text-cyan" />
        <div>
          <h3>Cuci Cepat Hanya Dalam 10 Menit!</h3>
          <p>Tanpa antre lama, staf profesional kami bekerja terorganisir untuk hasil maksimal.</p>
        </div>
      </div>

      <!-- Packages Grid -->
      <div class="packages-grid">
        <!-- 1. Promo Cuci Luar 30k -->
        <div class="glass-card package-card promo-card">
          <div class="package-badge">PROMO UTAMA</div>
          <div class="pkg-top">
            <h3 class="pkg-title">Cuci Luar (Drive-Thru)</h3>
            <span class="pkg-duration">⏱ Hanya 10 Menit</span>
          </div>
          <div class="pkg-price-box">
            <span class="currency">Rp</span>
            <span class="amount">30.000</span>
          </div>
          <p class="pkg-desc">Hanya bagian luar saja, tidak perlu keluar dari mobil!</p>
          <ul class="pkg-features">
            <li><Check class="pkg-chk" /> Cuci bodi luar bersih mengkilap</li>
            <li><Check class="pkg-chk" /> Tetap di dalam mobil saat pencucian</li>
            <li><Check class="pkg-chk" /> Busa salju aktif &amp; semprot kolong</li>
            <li><Check class="pkg-chk" /> Semir ban hitam basah</li>
          </ul>
          <!-- <a href="https://wa.me/6282143243184?text=Halo%20Aer%20Carwash,%20saya%20mau%20tanya%20paket%20Cuci%20Luar%2030k" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp w-full">
            <MessageSquare class="btn-icon" />
            <span>Tanya via WhatsApp</span>
          </a> -->
        </div>

        <!-- 2. Promo Cuci Luar Dalam 40k -->
        <div class="glass-card package-card popular-card">
          <div class="package-badge gold">PALING LENGKAP</div>
          <div class="pkg-top">
            <h3 class="pkg-title">Cuci Luar Dalam</h3>
            <span class="pkg-duration">⏱ Cepat &amp; Bersih</span>
          </div>
          <div class="pkg-price-box">
            <span class="currency">Rp</span>
            <span class="amount">40.000</span>
          </div>
          <p class="pkg-desc">Bagian luar dan dalam, termasuk membersihkan karpet dan vacuum.</p>
          <ul class="pkg-features">
            <li><Check class="pkg-chk" /> Cuci bodi luar bersih maksimal</li>
            <li><Check class="pkg-chk" /> Membersihkan &amp; cuci karpet mobil</li>
            <li><Check class="pkg-chk" /> Vacuum debu interior &amp; jok mobil</li>
            <li><Check class="pkg-chk" /> Lap dashboard &amp; semir ban</li>
          </ul>
          <!-- <a href="https://wa.me/6282143243184?text=Halo%20Aer%20Carwash,%20saya%20mau%20tanya%20paket%20Cuci%20Luar%20Dalam%2040k" target="_blank" rel="noopener noreferrer" class="btn btn-primary w-full">
            <MessageSquare class="btn-icon" />
            <span>Tanya via WhatsApp</span>
          </a> -->
        </div>

        <!-- 3. Promo Wax 25k -->
        <div class="glass-card package-card promo-card">
          <div class="package-badge">PROMO GLOSS</div>
          <div class="pkg-top">
            <h3 class="pkg-title">Wax Body Protection</h3>
            <span class="pkg-duration">⏱ Kilap Ekstra</span>
          </div>
          <div class="pkg-price-box">
            <span class="currency">Rp</span>
            <span class="amount">25.000</span>
          </div>
          <p class="pkg-desc">Membuat body lebih berkilau dan terlindungi dari kusam.</p>
          <ul class="pkg-features">
            <li><Check class="pkg-chk" /> Lapisan wax pelindung cat bodi</li>
            <li><Check class="pkg-chk" /> Efek kilap basah (wet-look shine)</li>
            <li><Check class="pkg-chk" /> Efek hidrofobik daun talas anti air</li>
          </ul>
          <!-- <a href="https://wa.me/6282143243184?text=Halo%20Aer%20Carwash,%20saya%20mau%20tambah%20Wax%2025k" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp w-full">
            <MessageSquare class="btn-icon" />
            <span>Tanya via WhatsApp</span>
          </a> -->
        </div>

        <!-- 4. Cuci Mesin 10k -->
        <div class="glass-card package-card">
          <div class="package-badge gray">TAMBAHAN</div>
          <div class="pkg-top">
            <h3 class="pkg-title">Cuci Mesin (Engine Bay)</h3>
            <span class="pkg-duration">⏱ Hemat &amp; Rapi</span>
          </div>
          <div class="pkg-price-box">
            <span class="currency">Rp</span>
            <span class="amount">10.000</span>
          </div>
          <p class="pkg-desc">Pembersihan ruang mesin dari kerak oli dan debu jalanan.</p>
          <ul class="pkg-features">
            <li><Check class="pkg-chk" /> Bersihkan sela-sela ruang mesin</li>
            <li><Check class="pkg-chk" /> Rontokkan kerak oli &amp; debu kotor</li>
            <li><Check class="pkg-chk" /> Harga super terjangkau Rp 10.000</li>
          </ul>
          <!-- <a href="https://wa.me/6282143243184?text=Halo%20Aer%20Carwash,%20saya%20mau%20cuci%20mesin" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp w-full">
            <MessageSquare class="btn-icon" />
            <span>Tanya via WhatsApp</span>
          </a> -->
        </div>

        <!-- 5. Sepeda Motor 15k -->
        <div class="glass-card package-card">
          <div class="package-badge gray">MOTOR</div>
          <div class="pkg-top">
            <h3 class="pkg-title">Sepeda Motor Standar</h3>
            <span class="pkg-duration">⏱ Cepat &amp; Bersih</span>
          </div>
          <div class="pkg-price-box">
            <span class="currency">Rp</span>
            <span class="amount">15.000</span>
          </div>
          <p class="pkg-desc">Untuk motor bebek, matic kecil (Beat, Scoopy, Vario, Mio, Genio, dsb).</p>
          <ul class="pkg-features">
            <li><Check class="pkg-chk" /> Busa salju aktif pH netral</li>
            <li><Check class="pkg-chk" /> Semprot bersih velg &amp; kolong</li>
            <li><Check class="pkg-chk" /> Semir ban hitam mengkilap</li>
          </ul>
          <!-- <a href="https://wa.me/6282143243184?text=Halo%20Aer%20Carwash,%20saya%20mau%20cuci%20sepeda%20motor" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp w-full">
            <MessageSquare class="btn-icon" />
            <span>Tanya via WhatsApp</span>
          </a> -->
        </div>

        <!-- 6. Sepeda Motor Besar 25k -->
        <div class="glass-card package-card">
          <div class="package-badge gray">MOGE / SPORT</div>
          <div class="pkg-top">
            <h3 class="pkg-title">Sepeda Motor Besar</h3>
            <span class="pkg-duration">⏱ Detailing Cepat</span>
          </div>
          <div class="pkg-price-box">
            <span class="currency">Rp</span>
            <span class="amount">25.000</span>
          </div>
          <p class="pkg-desc">Untuk matic bongsor (NMax, PCX, ADV, XMax) serta motor sport / moge.</p>
          <ul class="pkg-features">
            <li><Check class="pkg-chk" /> Pembersihan bodi besar menyeluruh</li>
            <li><Check class="pkg-chk" /> Detail sela velg &amp; rem cakram</li>
            <li><Check class="pkg-chk" /> Semir ban kinclong &amp; awet</li>
          </ul>
          <!-- <a href="https://wa.me/6282143243184?text=Halo%20Aer%20Carwash,%20saya%20mau%20cuci%20motor%20besar" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp w-full">
            <MessageSquare class="btn-icon" />
            <span>Tanya via WhatsApp</span>
          </a> -->
        </div>
      </div>

      <!-- Membership Bulanan Section (199k & 399k) -->
      <div class="pricing-membership-section">
        <div class="section-header text-center">
          <span class="section-badge badge-gold">MEMBERSHIP BULANAN</span>
          <h2 class="section-title">Paket Cuci Rutin 30 Hari Tanpa Batas</h2>
          <p class="section-desc">
            Bebas cuci mobil tiap hari selama sebulan penuh. Paling hemat untuk menjaga mobil selalu tampil prima!
          </p>
        </div>

        <div class="membership-grid">
          <!-- 1. Membership 199k -->
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
            <p class="mem-desc">Pilihan terbaik untuk 1 mobil pribadi. Cuci rutin setiap hari tanpa mikir biaya berkali-kali.</p>
            <ul class="mem-features">
              <li><Check class="mem-chk text-cyan" /> <span>Terdaftar untuk <strong>1 Plat Mobil</strong></span></li>
              <li><Check class="mem-chk text-cyan" /> <span>Masa aktif <strong>30 Hari</strong></span></li>
              <li><Check class="mem-chk text-cyan" /> <span>Cuci <strong>tiap hari</strong> (Maksimal 1 mobil per hari)</span></li>
              <li><Check class="mem-chk text-cyan" /> <span>Layanan Drive-Thru cepat 10 menit</span></li>
            </ul>
            <a href="https://wa.me/6282143243184?text=Halo%20Aer%20Carwash,%20saya%20mau%20daftar%20Membership%20199k%20(1%20Plat%20Mobil)" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp w-full">
              <MessageSquare class="btn-icon" />
              <span>Daftar Membership 199k</span>
            </a>
          </div>

          <!-- 2. Membership 399k -->
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
            <p class="mem-desc">Ideal untuk keluarga dengan beberapa mobil atau mobil operasional kantor. Sangat hemat dan fleksibel.</p>
            <ul class="mem-features">
              <li><Check class="mem-chk text-gold" /> <span>Terdaftar untuk <strong>3 Plat Mobil</strong></span></li>
              <li><Check class="mem-chk text-gold" /> <span>Masa aktif <strong>30 Hari</strong></span></li>
              <li><Check class="mem-chk text-gold" /> <span>Cuci <strong>tiap hari</strong> (Maksimal 1 mobil per hari bergantian)</span></li>
              <li><Check class="mem-chk text-gold" /> <span>Rotasi bebas antar mobil terdaftar</span></li>
            </ul>
            <a href="https://wa.me/6282143243184?text=Halo%20Aer%20Carwash,%20saya%20mau%20daftar%20Membership%20399k%20(3%20Plat%20Mobil)" target="_blank" rel="noopener noreferrer" class="btn btn-primary w-full">
              <MessageSquare class="btn-icon" />
              <span>Daftar Membership 399k</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Coming Soon Banner: Detailing & Cafe -->
      <div class="coming-soon-banner">
        <div class="coming-soon-item">
          <div class="cs-badge">
            <span class="pulse-indicator"></span>
            <span>COMING SOON</span>
          </div>
          <div class="cs-content">
            <Sparkles class="cs-icon text-cyan" />
            <div>
              <h4>Aer Auto Detailing (Segera Hadir)</h4>
              <p>Poles bodi multi-stage, paint correction, dan perlindungan Nano Ceramic Coating 9H bergaransi.</p>
            </div>
          </div>
        </div>
        <div class="cs-divider"></div>
        <div class="coming-soon-item">
          <div class="cs-badge gold">
            <span class="pulse-indicator gold"></span>
            <span>COMING SOON</span>
          </div>
          <div class="cs-content">
            <Coffee class="cs-icon text-gold" />
            <div>
              <h4>Aer Cafe &amp; Lounge (Segera Hadir)</h4>
              <p>Tempat nongkrong santai ber-AC dengan sajian aneka kopi nikmat, minuman segar, dan camilan lezat.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Workshop Info Footer -->
      <div class="pricing-footer-info">
        <MapPin class="info-pin text-cyan" />
        <div>
          <h4>Kunjungi Kami Langsung di Jl. Bali No. 144, Kota Blitar</h4>
          <p>Buka setiap hari mulai pukul 07.00 pagi sampai 23.00 malam WIB. Tanpa perlu booking, langsung datang dan rasakan cuci mobil 10 menit!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Clock, Check, MessageSquare, MapPin, Sparkles, Coffee } from 'lucide-vue-next'
</script>

<style scoped>
.speed-banner {
  display: flex;
  align-items: center;
  gap: 20px;
  background: rgba(14, 165, 233, 0.12);
  border: 1px solid rgba(56, 189, 248, 0.35);
  border-radius: var(--radius-lg);
  padding: 22px 30px;
  margin-bottom: 45px;
}

.speed-icon {
  width: 44px;
  height: 44px;
  flex-shrink: 0;
}

.speed-banner h3 {
  font-size: 1.35rem;
  margin-bottom: 4px;
}

.speed-banner p {
  color: #cbd5e1;
  font-size: 0.95rem;
  margin: 0;
}

.packages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-bottom: 50px;
}

@media (max-width: 992px) {
  .packages-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .packages-grid {
    grid-template-columns: 1fr;
  }
}

.package-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.promo-card {
  border-color: rgba(56, 189, 248, 0.35);
}

.popular-card {
  border-color: var(--accent-gold);
  background: linear-gradient(180deg, rgba(245, 158, 11, 0.08) 0%, var(--bg-card) 40%);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7), 0 0 20px rgba(245, 158, 11, 0.2);
}

.package-badge {
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

.package-badge.gold {
  background: linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-hover) 100%);
  color: #070e1b;
  border: none;
}

.package-badge.gray {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  color: #cbd5e1;
}

.pkg-top {
  margin-bottom: 12px;
}

.pkg-title {
  font-size: 1.3rem;
  margin-bottom: 4px;
}

.pkg-duration {
  font-size: 0.82rem;
  color: #94a3b8;
}

.pkg-price-box {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: 14px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.currency {
  font-size: 1rem;
  font-weight: 600;
  color: var(--primary-light);
}

.amount {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  font-weight: 800;
  color: #ffffff;
}

.pkg-desc {
  font-size: 0.92rem;
  color: #94a3b8;
  margin-bottom: 18px;
  line-height: 1.5;
}

.pkg-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
  flex: 1;
}

.pkg-features li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.88rem;
  color: #cbd5e1;
}

.pkg-chk {
  width: 16px;
  height: 16px;
  color: var(--primary-light);
  flex-shrink: 0;
  margin-top: 3px;
}

.w-full {
  width: 100%;
}

.coming-soon-banner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  background: rgba(16, 33, 61, 0.6);
  border: 1px dashed rgba(56, 189, 248, 0.35);
  border-radius: var(--radius-lg);
  padding: 24px;
  margin-bottom: 30px;
}

@media (max-width: 768px) {
  .coming-soon-banner {
    grid-template-columns: 1fr;
  }
}

.coming-soon-item {
  position: relative;
  display: flex;
  flex-direction: column;
}

.cs-badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  align-self: flex-start;
  background: rgba(14, 165, 233, 0.2);
  border: 1px solid #38bdf8;
  color: #38bdf8;
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 1.2px;
  padding: 5px 12px;
  border-radius: var(--radius-full);
  margin-bottom: 14px;
  box-shadow: 0 0 14px rgba(56, 189, 248, 0.25);
}

.cs-badge.gold {
  background: rgba(245, 158, 11, 0.2);
  border-color: #f59e0b;
  color: #fbbf24;
  box-shadow: 0 0 14px rgba(245, 158, 11, 0.25);
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

.cs-content {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.cs-icon {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  margin-top: 2px;
}

.cs-content h4 {
  font-size: 1.1rem;
  margin-bottom: 4px;
}

.cs-content p {
  font-size: 0.88rem;
  color: #94a3b8;
  line-height: 1.5;
  margin: 0;
}

.cs-divider {
  display: none;
}

.pricing-footer-info {
  display: flex;
  align-items: center;
  gap: 20px;
  background: rgba(11, 23, 42, 0.8);
  border: 1px solid rgba(56, 189, 248, 0.2);
  border-radius: var(--radius-lg);
  padding: 24px 30px;
}

.info-pin {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}

.pricing-footer-info h4 {
  font-size: 1.15rem;
  margin-bottom: 4px;
}

.pricing-footer-info p {
  font-size: 0.92rem;
  color: #94a3b8;
  margin: 0;
}

/* Membership Styles in PricingView */
.pricing-membership-section {
  margin-top: 50px;
  margin-bottom: 55px;
  padding-top: 40px;
  border-top: 1px solid rgba(56, 189, 248, 0.15);
}

.text-center {
  text-align: center;
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
