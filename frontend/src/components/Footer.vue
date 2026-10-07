<!-- frontend/src/components/Footer.vue -->
<template>
  <footer class="footer-wrapper">
    <div class="container">
      <div class="footer-grid">
        <!-- Col 1: Brand & Profile -->
        <div class="footer-col brand-col">
          <router-link to="/" class="footer-logo">
            <Logo height="54px" />
          </router-link>
          <p class="brand-desc">
            Pelopor cuci mobil berkonsep <strong>Drive-Thru</strong> pertama di Kota Blitar. Praktis, cepat, bersih maksimal, buka hingga malam jam 23.00 WIB.
          </p>
        </div>

        <!-- Col 2: Navigasi Cepat -->
        <div class="footer-col">
          <h4 class="col-title">Navigasi Cepat</h4>
          <ul class="col-links">
            <li><router-link to="/">Beranda</router-link></li>
            <li><router-link to="/about">Tentang Kami</router-link></li>
            <li><router-link to="/services">Layanan Cuci &amp; Detailing</router-link></li>
            <li><router-link to="/pricing">Daftar Harga &amp; Paket</router-link></li>
            <li><router-link to="/gallery">Galeri &amp; Before-After</router-link></li>
            <li><router-link to="/promo">Promo &amp; Membership</router-link></li>
          </ul>
        </div>

        <!-- Col 3: Layanan Populer -->
        <!-- <div class="footer-col">
          <h4 class="col-title">Layanan Utama</h4>
          <ul class="col-links">
            <li><router-link to="/services">Cuci Luar Drive-Thru (Rp 30rb)</router-link></li>
            <li><router-link to="/services">Cuci Luar + Dalam (Rp 40rb)</router-link></li>
            <li><router-link to="/services">Cuci Komplit + Wax Gloss</router-link></li>
            <li><router-link to="/services">Poles Body &amp; Jamur Kaca</router-link></li>
            <li><router-link to="/services">Interior Deep Cleaning &amp; Fogging</router-link></li>
          </ul>
        </div> -->

        <!-- Col 4: Jam Buka & Lokasi -->
        <div class="footer-col contact-col">
          <h4 class="col-title">Jam Buka &amp; Kontak</h4>
          <div class="info-item">
            <Clock class="info-icon" />
            <div>
              <strong>Buka Setiap Hari:</strong>
              <p>07.00 - 23.00 WIB (Pagi s/d Malam)</p>
            </div>
          </div>
          <div class="info-item">
            <MapPin class="info-icon" />
            <div>
              <strong>Lokasi Workshop:</strong>
              <p>Jl. Bali No. 144, Kota Blitar, Jawa Timur</p>
            </div>
          </div>
          <div class="info-item">
            <Phone class="info-icon" />
            <div>
              <strong>Hotline WhatsApp:</strong>
              <p><a href="https://wa.me/6282143243184" target="_blank" class="contact-link">0821-4324-3184</a></p>
            </div>
          </div>
        </div>
      </div>

      <!-- Copyright & Bottom Bar -->
      <div class="footer-bottom">
        <p class="copyright-text">&copy; {{ new Date().getFullYear() }} <a href="https://github.com/JeffreyAdrian27" target="_blank" rel="noopener noreferrer" class="copyright-author">Jeffrey Adrian. All rights reserved.</a></p>
        <div class="footer-socials">
          <a href="https://www.instagram.com/aercarwash.blitar/" target="_blank" rel="noopener noreferrer" class="social-tag instagram-highlight">
            <img src="/instagram_icons.png" alt="Instagram Aer Carwash" class="instagram-icon-img" />
            <span>@aercarwash.blitar</span>
          </a>
          <!-- <router-link to="/location" class="social-tag">Petunjuk Lokasi</router-link> -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Clock, MapPin, Phone } from 'lucide-vue-next'
import Logo from './Logo.vue'
</script>

<style scoped>
.footer-wrapper {
  background: #040810;
  border-top: 1px solid rgba(56, 189, 248, 0.12);
  padding-top: 70px;
  padding-bottom: 30px;
  margin-top: 60px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1.2fr 1.8fr;
  gap: 40px;
  margin-bottom: 50px;
}

@media (max-width: 992px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
}

@media (max-width: 600px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

.footer-logo-img {
  height: 52px;
  width: auto;
  margin-bottom: 18px;
}

.brand-desc {
  font-size: 0.92rem;
  color: #94a3b8;
  margin-bottom: 20px;
  line-height: 1.6;
}



.col-title {
  font-size: 1.15rem;
  color: #ffffff;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 8px;
}

.col-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--primary-light);
  border-radius: 2px;
}

.col-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.col-links a {
  font-size: 0.92rem;
  color: #94a3b8;
  transition: all var(--transition-fast);
}

.col-links a:hover {
  color: var(--primary-light);
  padding-left: 6px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
}

.info-icon {
  width: 18px;
  height: 18px;
  color: var(--primary-light);
  flex-shrink: 0;
  margin-top: 3px;
}

.info-item strong {
  display: block;
  font-size: 0.88rem;
  color: #e2e8f0;
}

.info-item p {
  font-size: 0.86rem;
  color: #94a3b8;
  margin: 0;
}

.contact-link {
  color: var(--primary-light);
  font-weight: 600;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 25px;
  font-size: 0.85rem;
  color: #64748b;
  flex-wrap: wrap;
  gap: 16px;
}

.footer-socials {
  display: flex;
  gap: 16px;
  align-items: center;
}

.social-tag {
  color: #94a3b8;
  font-size: 0.85rem;
  transition: color var(--transition-fast);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.social-tag:hover {
  color: var(--primary-light);
}

.instagram-highlight {
  color: #38bdf8;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.instagram-highlight:hover {
  color: #ffffff;
}

.instagram-icon-img {
  width: 24px;
  height: 24px;
  object-fit: contain;
  border-radius: 6px;
  display: block;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  transition: transform var(--transition-fast);
}

.instagram-highlight:hover .instagram-icon-img {
  transform: scale(1.12);
}

.copyright-text {
  margin: 0;
  font-size: 0.88rem;
  color: #64748b;
  line-height: 1.5;
}

.copyright-author {
  color: #94a3b8;
  text-decoration: none;
  font-weight: 600;
  transition: all var(--transition-fast);
}

.copyright-author:hover {
  color: #38bdf8;
  text-shadow: 0 0 10px rgba(56, 189, 248, 0.4);
}
</style>
