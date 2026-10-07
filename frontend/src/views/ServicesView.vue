<!-- frontend/src/views/ServicesView.vue -->
<template>
  <div class="services-page section-py">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">LAYANAN &amp; HARGA RESMI</span>
        <h1 class="section-title">Layanan Aer Drive-Thru Carwash Blitar</h1>
        <p class="section-desc">
          Cuci mobil dan sepeda motor super ekspres hanya dalam 10 menit di Jl. Bali No. 144, Kota Blitar.
        </p>
      </div>

      <!-- Services List -->
      <div class="services-detail-list">
        <div 
          v-for="(service, index) in services" 
          :key="service.id" 
          class="glass-card service-detail-item"
          :class="{ 'reverse-row': index % 2 === 1, 'promo-item': service.is_promo }"
        >
          <!-- Image Col -->
          <div class="service-media-col">
            <img :src="service.image_url" :alt="service.name" class="service-media-img" />
            <div v-if="service.is_promo" class="featured-badge">
              <span>PROMO SPESIAL</span>
            </div>
          </div>

          <!-- Content Col -->
          <div class="service-info-col">
            <div class="service-meta-top">
              <span class="duration-tag">⏱ {{ service.estimated_duration }}</span>
              <span class="price-start">Rp {{ Number(service.price).toLocaleString('id-ID') }}</span>
            </div>

            <h2 class="service-title">{{ service.name }}</h2>
            <p class="service-sub">{{ service.tagline }}</p>
            <p class="service-desc">{{ service.description }}</p>

            <div class="features-block">
              <h4 class="features-label">Rincian Pengerjaan:</h4>
              <ul class="features-grid">
                <li v-for="(feat, fIdx) in service.features" :key="fIdx">
                  <CheckCircle2 class="feat-icon" />
                  <span>{{ feat }}</span>
                </li>
              </ul>
            </div>

            <div class="service-actions">
              <a 
                :href="'https://wa.me/6282143243184?text=' + encodeURIComponent('Halo Aer Carwash, saya mau tanya layanan ' + service.name)"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-whatsapp"
              >
                <MessageSquare class="btn-icon" />
                <span>Tanya via WhatsApp</span>
              </a>
              <router-link to="/location" class="btn btn-secondary">
                <span>Lihat Lokasi Workshop</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CheckCircle2, MessageSquare } from 'lucide-vue-next'

const services = ref([
  {
    id: 1,
    name: 'PROMO : Cuci Luar (Drive-Thru)',
    tagline: 'Hanya bagian luar saja, tidak perlu keluar dari mobil',
    description: 'Solusi cuci mobil paling praktis dan cepat! Anda bisa tetap santai di dalam kendaraan, sementara tim kami membersihkan seluruh bodi luar mobil hingga mengkilap.',
    price: 30000,
    estimated_duration: 'Hanya 10 Menit',
    features: [
      'Bisa tetap di dalam mobil saat pencucian',
      'Busa salju aktif pH netral aman untuk cat',
      'Pembersihan velg & semprot kolong',
      'Pengeringan microfiber & semir ban hitam kilap'
    ],
    is_promo: true,
    image_url: '/dummy/services/service-exterior.svg'
  },
  {
    id: 2,
    name: 'PROMO : Cuci Luar Dalam',
    tagline: 'Bagian luar dan dalam, termasuk membersihkan karpet dan vacuum',
    description: 'Pembersihan komprehensif untuk bodi luar sekaligus seluruh kabin mobil Anda. Karpet dibersihkan dan jok divacuum tuntas dari debu.',
    price: 40000,
    estimated_duration: '20 - 30 Menit',
    features: [
      'Cuci bersih bodi luar tuntas',
      'Membersihkan dan cuci karpet mobil',
      'Vacuum interior, sela jok, dan bagasi',
      'Lap dashboard bersih & semir ban tebal'
    ],
    is_promo: true,
    image_url: '/dummy/services/service-complete.svg'
  },
  {
    id: 3,
    name: 'PROMO : Wax Body Protection',
    tagline: 'Membuat body lebih berkilau dan terproteksi',
    description: 'Lapisan wax khusus yang diaplikasikan ke seluruh permukaan bodi mobil untuk mengunci kilau cat, memberikan efek basah (wet-look shine), dan efek hidrofobik daun talas.',
    price: 25000,
    estimated_duration: '15 Menit',
    features: [
      'Cat bodi mobil jauh lebih berkilau mengkilap',
      'Efek daun talas (air hujan cepat turun)',
      'Melindungi cat dari kusam akibat sinar UV',
      'Mudah dibersihkan saat terkena debu'
    ],
    is_promo: true,
    image_url: '/dummy/services/service-coating.svg'
  },
  {
    id: 4,
    name: 'Cuci Mesin (Engine Bay)',
    tagline: 'Ruang mesin bersih dari kerak oli & debu',
    description: 'Pembersihan ruang mesin secara hati-hati untuk meluruhkan kerak debu dan rembesan oli tanpa risiko pada komponen penting.',
    price: 10000,
    estimated_duration: '10 Menit',
    features: [
      'Degreasing kerak kotoran ruang mesin',
      'Pembersihan sela-sela kap mesin',
      'Harga sangat terjangkau hanya Rp 10.000'
    ],
    is_promo: false,
    image_url: '/dummy/services/service-engine.svg'
  },
  {
    id: 5,
    name: 'Sepeda Motor Standar',
    tagline: 'Cuci bersih motor bebek & matic kecil',
    description: 'Layanan cuci busa salju untuk motor harian seperti Honda Beat, Scoopy, Vario 125, Yamaha Mio, Fazzio, dsb.',
    price: 15000,
    estimated_duration: '10 Menit',
    features: [
      'Busa salju aktif & semprot kolong mesin',
      'Pembersihan velg & rantai/knalpot',
      'Semir ban hitam rapi'
    ],
    is_promo: false,
    image_url: '/dummy/services/service-interior.svg'
  },
  {
    id: 6,
    name: 'Sepeda Motor Besar (Moge / Sport)',
    tagline: 'Cuci motor matic besar, sport & moge',
    description: 'Pembersihan detail untuk motor bodi bongsor seperti NMax, PCX, XMax, ADV, CBR, Ninja, hingga motor sport moge.',
    price: 25000,
    estimated_duration: '15 Menit',
    features: [
      'Cuci detail bodi lebar & visor depan',
      'Pembersihan sela suspensi & rem cakram ganda',
      'Semir ban & body wax touchup'
    ],
    is_promo: false,
    image_url: '/dummy/services/service-polishing.svg'
  }
])
</script>

<style scoped>
.services-detail-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.service-detail-item {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 36px;
  align-items: center;
  padding: 32px;
}

.promo-item {
  border-color: rgba(56, 189, 248, 0.4);
}

.service-detail-item.reverse-row {
  grid-template-columns: 1.3fr 1fr;
}

.service-detail-item.reverse-row .service-media-col {
  order: 2;
}

.service-detail-item.reverse-row .service-info-col {
  order: 1;
}

@media (max-width: 900px) {
  .service-detail-item,
  .service-detail-item.reverse-row {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 24px;
  }
  .service-detail-item.reverse-row .service-media-col {
    order: 1;
  }
  .service-detail-item.reverse-row .service-info-col {
    order: 2;
  }
}

.service-media-col {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--border-subtle);
}

.service-media-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(245, 158, 11, 0.9);
  color: #070e1b;
  font-weight: 800;
  font-size: 0.75rem;
  letter-spacing: 0.5px;
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
}

.service-meta-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 10px;
}

.duration-tag {
  background: rgba(56, 189, 248, 0.1);
  color: var(--primary-light);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: var(--radius-full);
}

.price-start {
  color: var(--accent-gold);
  font-weight: 800;
  font-size: 1.35rem;
}

.service-title {
  font-size: 1.7rem;
  margin-bottom: 6px;
}

.service-sub {
  color: #38bdf8;
  font-weight: 500;
  font-size: 0.95rem;
  margin-bottom: 14px;
}

.service-desc {
  color: #cbd5e1;
  font-size: 0.94rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.features-block {
  margin-bottom: 24px;
  background: rgba(15, 23, 42, 0.4);
  padding: 16px;
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.features-label {
  font-size: 0.88rem;
  color: #94a3b8;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.features-grid {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 16px;
}

@media (max-width: 600px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}

.features-grid li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.86rem;
  color: #e2e8f0;
}

.feat-icon {
  width: 16px;
  height: 16px;
  color: var(--primary-light);
  flex-shrink: 0;
}

.service-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
</style>
