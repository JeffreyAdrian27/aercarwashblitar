<!-- frontend/src/views/PromoView.vue -->
<template>
  <div class="promo-page section-py">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">PROMO SPESIAL AER CARWASH</span>
        <h1 class="section-title">Promo Cuci Mobil Drive-Thru Blitar</h1>
        <p class="section-desc">
          Dapatkan harga promo terbaik untuk perawatan mobil Anda. Tanpa ribet, langsung datang ke workshop di Jl. Bali No. 144!
        </p>
      </div>

      <!-- 3 Promo Cards Utama -->
      <div class="promos-grid">
        <!-- Promo 1: Cuci Luar 30k -->
        <div class="glass-card promo-card highlight">
          <div class="promo-badge-tag">HEMAT</div>
          <div class="promo-header">
            <h2 class="promo-title">Promo: Cuci Luar (Drive-Thru)</h2>
            <div class="promo-price-tag">Rp 30.000</div>
          </div>
          <p class="promo-desc">
            Hanya bagian luar saja, tidak perlu keluar dari mobil! Cepat, praktis, dan selesai hanya dalam 10 menit.
          </p>
          <div class="promo-features">
            <h4>Keunggulan:</h4>
            <ul>
              <li>Bisa tetap santai di dalam kendaraan</li>
              <li>Busa salju aktif &amp; pembersihan velg</li>
              <li>Semprot kolong bertekanan tinggi</li>
              <li>Semir ban mengkilap tahan lama</li>
            </ul>
          </div>
          <!-- <a href="https://wa.me/6282143243184?text=Halo%20Aer%20Carwash,%20saya%20mau%20klaim%20Promo%20Cuci%20Luar%2030k" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp w-full">
            <MessageSquare class="btn-icon" />
            <span>Tanya Promo via WhatsApp</span>
          </a> -->
        </div>

        <!-- Promo 2: Cuci Luar Dalam 40k -->
        <div class="glass-card promo-card popular">
          <div class="promo-badge-tag gold">FAVORIT</div>
          <div class="promo-header">
            <h2 class="promo-title">Promo: Cuci Luar Dalam</h2>
            <div class="promo-price-tag gold-text">Rp 40.000</div>
          </div>
          <p class="promo-desc">
            Bagian luar dan dalam, termasuk membersihkan karpet dan vacuum kabin mobil secara menyeluruh.
          </p>
          <div class="promo-features">
            <h4>Keunggulan:</h4>
            <ul>
              <li>Cuci bodi luar bersih total</li>
              <li>Pembersihan &amp; cuci karpet mobil</li>
              <li>Vacuum interior dan sela-sela jok</li>
              <li>Lap dashboard &amp; semir ban</li>
            </ul>
          </div>
          <!-- <a href="https://wa.me/6282143243184?text=Halo%20Aer%20Carwash,%20saya%20mau%20klaim%20Promo%20Cuci%20Luar%20Dalam%2040k" target="_blank" rel="noopener noreferrer" class="btn btn-primary w-full">
            <MessageSquare class="btn-icon" />
            <span>Tanya Promo via WhatsApp</span>
          </a> -->
        </div>

        <!-- Promo 3: Wax 25k -->
        <div class="glass-card promo-card highlight">
          <div class="promo-badge-tag">GLOSS</div>
          <div class="promo-header">
            <h2 class="promo-title">Promo: Wax Body Protection</h2>
            <div class="promo-price-tag">Rp 25.000</div>
          </div>
          <p class="promo-desc">
            Aplikasi wax berkualitas membuat body mobil lebih berkilau, mengkilap basah, dan terlindungi.
          </p>
          <div class="promo-features">
            <h4>Keunggulan:</h4>
            <ul>
              <li>Menambah kilau wet-look pada cat</li>
              <li>Efek hidrofobik daun talas anti air hujan</li>
              <li>Membantu mencegah kusam pada bodi</li>
            </ul>
          </div>
          <!-- <a href="https://wa.me/6282143243184?text=Halo%20Aer%20Carwash,%20saya%20mau%20klaim%20Promo%20Wax%2025k" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp w-full">
            <MessageSquare class="btn-icon" />
            <span>Tanya Promo via WhatsApp</span>
          </a> -->
        </div>
      </div>

      <!-- Membership Section (199k & 399k) -->
      <div class="membership-section">
        <div class="section-header text-center">
          <span class="section-badge badge-gold">PAKET MEMBERSHIP BULANAN</span>
          <h2 class="section-title">Cuci Mobil Tiap Hari Jauh Lebih Hemat</h2>
          <p class="section-desc">
            Pilihan membership bulanan praktis untuk kendaraan Anda. Nikmati kemudahan cuci mobil setiap hari selama 30 hari penuh!
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
            <p class="mem-desc">Pilihan tepat untuk pemilik 1 mobil pribadi. Mobil selalu bersih mengkilap tanpa khawatir biaya cuci berulang.</p>
            <ul class="mem-features">
              <li><Check class="mem-chk text-cyan" /> <span>Terdaftar untuk <strong>1 Plat Mobil</strong></span></li>
              <li><Check class="mem-chk text-cyan" /> <span>Masa aktif <strong>30 Hari</strong> penuh</span></li>
              <li><Check class="mem-chk text-cyan" /> <span>Cuci <strong>tiap hari</strong> (Maksimal 1 mobil per hari)</span></li>
              <li><Check class="mem-chk text-cyan" /> <span>Konsep Drive-Thru ekspres 10 menit</span></li>
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
            <p class="mem-desc">Super hemat dan fleksibel untuk keluarga dengan beberapa kendaraan atau mobil operasional usaha.</p>
            <ul class="mem-features">
              <li><Check class="mem-chk text-gold" /> <span>Terdaftar untuk <strong>3 Plat Mobil</strong></span></li>
              <li><Check class="mem-chk text-gold" /> <span>Masa aktif <strong>30 Hari</strong> penuh</span></li>
              <li><Check class="mem-chk text-gold" /> <span>Cuci <strong>tiap hari</strong> (Maksimal 1 mobil per hari bergantian)</span></li>
              <li><Check class="mem-chk text-gold" /> <span>Hemat ratusan ribu rupiah per bulan</span></li>
            </ul>
            <a href="https://wa.me/6282143243184?text=Halo%20Aer%20Carwash,%20saya%20mau%20daftar%20Membership%20399k%20(3%20Plat%20Mobil)" target="_blank" rel="noopener noreferrer" class="btn btn-primary w-full">
              <MessageSquare class="btn-icon" />
              <span>Daftar Membership 399k</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Workshop Info -->
      <!-- <div class="promo-location-card">
        <h3>Lokasi Workshop: Jl. Bali No. 144, Kota Blitar</h3>
        <p>Buka setiap hari dari pukul <strong>07.00 sampai 23.00 WIB</strong> (11.00 malam). Hubungi kami di <strong>0821-4324-3184</strong>.</p>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { MessageSquare, Check } from 'lucide-vue-next'
</script>

<style scoped>
.promos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 50px;
}

@media (max-width: 992px) {
  .promos-grid {
    grid-template-columns: 1fr;
  }
}

.promo-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.promo-card.highlight {
  border-color: rgba(56, 189, 248, 0.4);
}

.promo-card.popular {
  border-color: var(--accent-gold);
  background: linear-gradient(180deg, rgba(245, 158, 11, 0.08) 0%, var(--bg-card) 40%);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7), 0 0 20px rgba(245, 158, 11, 0.2);
}

.promo-badge-tag {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(56, 189, 248, 0.2);
  border: 1px solid var(--primary-light);
  color: var(--primary-light);
  font-weight: 800;
  font-size: 0.78rem;
  padding: 4px 10px;
  border-radius: var(--radius-sm);
}

.promo-badge-tag.gold {
  background: linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-hover) 100%);
  color: #070e1b;
  border: none;
}

.promo-header {
  margin-bottom: 14px;
  padding-right: 90px;
}

.promo-title {
  font-size: 1.35rem;
  margin-bottom: 8px;
}

.promo-price-tag {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--primary-light);
}

.gold-text {
  color: var(--accent-gold);
}

.promo-desc {
  font-size: 0.95rem;
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 20px;
}

.promo-features {
  margin-bottom: 24px;
  background: rgba(2, 6, 23, 0.4);
  padding: 16px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.promo-features h4 {
  font-size: 0.85rem;
  color: #94a3b8;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.promo-features ul {
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.promo-features li {
  font-size: 0.88rem;
  color: #cbd5e1;
}

.w-full {
  width: 100%;
}

.promo-location-card {
  text-align: center;
  background: rgba(11, 23, 42, 0.8);
  border: 1px solid rgba(56, 189, 248, 0.2);
  border-radius: var(--radius-lg);
  padding: 30px;
}

.promo-location-card h3 {
  font-size: 1.35rem;
  margin-bottom: 8px;
  color: #ffffff;
}

.promo-location-card p {
  color: #94a3b8;
  font-size: 0.95rem;
}

.promo-location-card strong {
  color: var(--primary-light);
}

/* Membership Section Styles */
.membership-section {
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
