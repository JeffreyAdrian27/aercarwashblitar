<!-- frontend/src/views/GalleryView.vue -->
<template>
  <div class="gallery-page section-py">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">DOKUMENTASI WORKSHOP</span>
        <h1 class="section-title">Galeri Workshop &amp; Fasilitas Aer Carwash</h1>
        <p class="section-desc">
          Intip area cuci mobil drive-thru, fasilitas modern, dan kenyamanan workshop kami di Jl. Bali No. 144, Kota Blitar.
        </p>
      </div>

      <!-- Facilities Grid Section (Tanpa Before-After Slider) -->
      <div class="facilities-grid">
        <div 
          v-for="item in facilitiesList" 
          :key="item.id" 
          class="facility-card"
          @click="openLightbox(item)"
        >
          <div class="facility-thumb-wrapper">
            <img 
              :src="item.images ? item.images[slideIndices[item.id] || 0] : item.image" 
              :alt="item.title" 
              class="facility-thumb"
              :class="{ 'thumb-contain': item.images }"
            />

            <!-- Slider controls if item has multiple images -->
            <template v-if="item.images">
              <button class="slide-nav-btn prev" @click.stop="prevSlide(item)" aria-label="Sebelumnya">‹</button>
              <button class="slide-nav-btn next" @click.stop="nextSlide(item)" aria-label="Selanjutnya">›</button>
              <div class="slide-dots" @click.stop>
                <span 
                  v-for="(_, i) in item.images" 
                  :key="i" 
                  class="dot" 
                  :class="{ active: (slideIndices[item.id] || 0) === i }"
                  @click="slideIndices[item.id] = i"
                ></span>
              </div>
            </template>

            <div class="facility-overlay">
              <ZoomIn class="zoom-icon" />
              <span>Lihat Foto Lebih Besar</span>
            </div>
          </div>
          <div class="facility-info">
            <span class="facility-badge">{{ item.category }}</span>
            <h3 class="facility-title">{{ item.title }}</h3>
            <p class="facility-desc">{{ item.description }}</p>
          </div>
        </div>
      </div>

      <!-- Lightbox Modal -->
      <transition name="fade">
        <div v-if="lightboxItem" class="lightbox-backdrop" @click="closeLightbox">
          <div class="lightbox-modal" @click.stop>
            <button class="lightbox-close" @click="closeLightbox" aria-label="Tutup">✕</button>
            <div class="lightbox-img-wrap">
              <img 
                :src="lightboxItem.images ? lightboxItem.images[lightboxSlideIndex] : lightboxItem.image" 
                :alt="lightboxItem.title" 
                class="lightbox-full-img" 
              />
              <template v-if="lightboxItem.images">
                <button class="lb-nav-btn prev" @click.stop="prevLightbox">‹</button>
                <button class="lb-nav-btn next" @click.stop="nextLightbox">›</button>
                <div class="lb-dots">
                  <span 
                    v-for="(_, i) in lightboxItem.images" 
                    :key="i" 
                    class="dot" 
                    :class="{ active: lightboxSlideIndex === i }"
                    @click="lightboxSlideIndex = i"
                  ></span>
                </div>
              </template>
            </div>
            <div class="lightbox-caption">
              <h3>{{ lightboxItem.title }}</h3>
              <p>{{ lightboxItem.description }}</p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ZoomIn } from 'lucide-vue-next'

const lightboxItem = ref(null)

const facilitiesList = [
  {
    id: 101,
    title: 'Jalur Masuk & Bay Drive-Thru',
    category: 'Fasilitas Utama',
    image: '/images/jalur_masuk_drive_thru.jpg',
    description: 'Jalur cuci mobil ekspres yang luas dan teratur, bisa tetap di dalam mobil saat cuci luar 10 menit.'
  },
  {
    id: 102,
    title: 'Ruang Tunggu Nyaman & Bersih',
    category: 'Kenyamanan Pelanggan',
    image: '/images/ruang_tunggu.jpg',
    description: 'Tempat istirahat sejuk saat mobil Anda sedang dicuci luar dalam (vacuum interior dan karpet).'
  },
  {
    id: 103,
    title: 'Area Pengerjaan Detail & Wax',
    category: 'Finishing & Wax',
    image: '/images/ruang_wax_detailing.jpg',
    description: 'Area khusus untuk aplikasi wax bodi Rp 25.000 agar mobil mengkilap basah dan bebas kusam.'
  },
  {
    id: 104,
    title: 'Peralatan Busa Salju & Semprot Kolong',
    category: 'Teknologi Cuci',
    image: '/images/water_spray_atas.png',
    images: [
      '/images/water_spray_atas.png',
      '/images/water_spray_samping.png',
      '/images/water_spray.jpg'
    ],
    description: 'Busa salju aktif pH netral dan tekanan air stabil untuk meluruhkan debu jalanan tanpa merusak cat.'
  }
]

const lightboxSlideIndex = ref(0)
const slideIndices = ref({})

function prevSlide(item) {
  const cur = slideIndices.value[item.id] || 0
  slideIndices.value[item.id] = (cur - 1 + item.images.length) % item.images.length
}

function nextSlide(item) {
  const cur = slideIndices.value[item.id] || 0
  slideIndices.value[item.id] = (cur + 1) % item.images.length
}

function prevLightbox() {
  if (!lightboxItem.value?.images) return
  const len = lightboxItem.value.images.length
  lightboxSlideIndex.value = (lightboxSlideIndex.value - 1 + len) % len
}

function nextLightbox() {
  if (!lightboxItem.value?.images) return
  const len = lightboxItem.value.images.length
  lightboxSlideIndex.value = (lightboxSlideIndex.value + 1) % len
}

function openLightbox(item) {
  lightboxItem.value = item
  lightboxSlideIndex.value = item.images ? (slideIndices.value[item.id] || 0) : 0
}

function closeLightbox() {
  lightboxItem.value = null
}
</script>

<style scoped>
.facilities-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

@media (max-width: 800px) {
  .facilities-grid {
    grid-template-columns: 1fr;
  }
}

.facility-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  transition: all var(--transition-normal);
}

.facility-card:hover {
  border-color: var(--primary-light);
  transform: translateY(-4px);
  box-shadow: var(--shadow-card), var(--shadow-glow);
}

.facility-thumb-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #040810;
}

.facility-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.facility-thumb.thumb-contain {
  object-fit: contain;
  background: #040810;
}

.facility-card:hover .facility-thumb {
  transform: scale(1.04);
}

.facility-overlay {
  position: absolute;
  inset: 0;
  background: rgba(7, 14, 27, 0.6);
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 600;
  backdrop-filter: blur(4px);
  transition: opacity var(--transition-normal);
}

.facility-card:hover .facility-overlay {
  opacity: 1;
}

.zoom-icon {
  width: 28px;
  height: 28px;
  color: var(--primary-light);
}

.facility-info {
  padding: 24px;
}

.facility-badge {
  display: inline-block;
  background: rgba(56, 189, 248, 0.1);
  color: var(--primary-light);
  font-size: 0.78rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: var(--radius-sm);
  margin-bottom: 8px;
}

.facility-title {
  font-size: 1.25rem;
  margin-bottom: 8px;
}

.facility-desc {
  font-size: 0.92rem;
  color: #94a3b8;
  line-height: 1.5;
}

/* Lightbox Modal */
.lightbox-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(3, 7, 18, 0.85);
  backdrop-filter: blur(10px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.lightbox-modal {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  max-width: 800px;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
}

.lightbox-close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.lightbox-full-img {
  width: 100%;
  max-height: 75vh;
  object-fit: contain;
  background: #040810;
}

.lightbox-caption {
  padding: 20px 24px;
}

.lightbox-caption h3 {
  font-size: 1.3rem;
  margin-bottom: 6px;
}

.lightbox-caption p {
  color: #94a3b8;
  font-size: 0.95rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slider Controls for Item 104 */
.slide-nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(7, 14, 27, 0.85);
  border: 1px solid rgba(56, 189, 248, 0.45);
  color: #ffffff;
  font-size: 1.4rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.slide-nav-btn:hover {
  background: var(--primary);
  border-color: #38bdf8;
  transform: translateY(-50%) scale(1.1);
}

.slide-nav-btn.prev {
  left: 10px;
}

.slide-nav-btn.next {
  right: 10px;
}

.slide-dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  display: flex;
  gap: 6px;
  background: rgba(7, 14, 27, 0.7);
  padding: 4px 8px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.2s;
}

.dot.active {
  width: 18px;
  border-radius: 4px;
  background: var(--primary-light);
}

.lightbox-img-wrap {
  position: relative;
  width: 100%;
}

.lb-nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(7, 14, 27, 0.85);
  border: 1px solid rgba(56, 189, 248, 0.5);
  color: #ffffff;
  font-size: 1.6rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}

.lb-nav-btn:hover {
  background: var(--primary);
  border-color: #38bdf8;
  transform: translateY(-50%) scale(1.1);
}

.lb-nav-btn.prev {
  left: 14px;
}

.lb-nav-btn.next {
  right: 14px;
}

.lb-dots {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  gap: 8px;
  background: rgba(7, 14, 27, 0.75);
  padding: 5px 12px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
