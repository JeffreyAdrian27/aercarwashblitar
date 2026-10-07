<!-- frontend/src/components/NavBar.vue -->
<template>
  <header class="navbar-wrapper" :class="{ 'is-scrolled': isScrolled }">
    <div class="container navbar-inner">
      <!-- Logo Official -->
      <router-link to="/" class="navbar-brand">
        <Logo height="46px" />
      </router-link>

      <!-- Desktop Navigation Menu -->
      <nav class="desktop-menu" aria-label="Navigasi Utama">
        <router-link 
          v-for="item in navLinks" 
          :key="item.path" 
          :to="item.path" 
          class="nav-link"
          active-class="nav-link-active"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <!-- Right Action CTA (Direct WhatsApp, No Booking) -->
      <div class="navbar-actions">
        <!-- <a href="https://wa.me/6282143243184" target="_blank" rel="noopener noreferrer" class="btn btn-primary nav-cta">
          <MessageSquareIcon class="btn-icon" />
          <span>Hubungi Kami</span>
        </a> -->

        <!-- Mobile Hamburger Toggle -->
        <button 
          class="hamburger-btn" 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Buka Menu"
        >
          <span class="bar" :class="{ 'open': isMobileMenuOpen }"></span>
          <span class="bar" :class="{ 'open': isMobileMenuOpen }"></span>
          <span class="bar" :class="{ 'open': isMobileMenuOpen }"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <transition name="drawer">
      <div v-if="isMobileMenuOpen" class="mobile-drawer">
        <div class="mobile-drawer-inner">
          <nav class="mobile-nav">
            <router-link 
              v-for="item in navLinks" 
              :key="item.path" 
              :to="item.path" 
              class="mobile-nav-link"
              active-class="mobile-nav-link-active"
              @click="isMobileMenuOpen = false"
            >
              {{ item.label }}
            </router-link>
          </nav>
          
          <!-- <div class="mobile-cta-wrapper">
            <a 
              href="https://wa.me/6282143243184" 
              target="_blank" 
              rel="noopener noreferrer"
              class="btn btn-primary mobile-cta" 
              @click="isMobileMenuOpen = false"
            >
              <MessageSquareIcon class="btn-icon" />
              <span>Hubungi via WhatsApp</span>
            </a>
          </div> -->
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { MessageSquare as MessageSquareIcon } from 'lucide-vue-next'
import Logo from './Logo.vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Beranda', path: '/' },
  { label: 'Menu Layanan & Harga', path: '/pricing' },
  { label: 'Promo', path: '/promo' },
  { label: 'Galeri Fasilitas', path: '/gallery' },
  { label: 'Lokasi & Jam Buka', path: '/location' },
  { label: 'Kontak', path: '/contact' }
]

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar-wrapper {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(7, 14, 27, 0.9);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(56, 189, 248, 0.12);
  transition: all var(--transition-normal);
}

.navbar-wrapper.is-scrolled {
  background: rgba(5, 11, 22, 0.98);
  border-bottom-color: rgba(56, 189, 248, 0.28);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 82px;
}

.navbar-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.brand-logo {
  height: 52px;
  width: auto;
}

.desktop-menu {
  display: flex;
  align-items: center;
  gap: 22px;
}

.nav-link {
  font-size: 0.92rem;
  font-weight: 500;
  color: #cbd5e1;
  padding: 6px 4px;
  position: relative;
  transition: color var(--transition-fast);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-light);
  border-radius: 2px;
  transition: width var(--transition-normal);
}

.nav-link:hover {
  color: #ffffff;
}

.nav-link:hover::after,
.nav-link-active::after {
  width: 100%;
}

.nav-link-active {
  color: var(--primary-light);
  font-weight: 600;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.nav-cta {
  padding: 10px 20px;
  font-size: 0.9rem;
}

.btn-icon {
  width: 17px;
  height: 17px;
}

.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 42px;
  height: 42px;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  cursor: pointer;
  padding: 8px;
}

.bar {
  width: 100%;
  height: 2px;
  background: #f8fafc;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.bar.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.bar.open:nth-child(2) {
  opacity: 0;
}
.bar.open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Drawer */
.mobile-drawer {
  position: fixed;
  top: 82px;
  left: 0;
  width: 100%;
  background: rgba(7, 14, 27, 0.98);
  border-bottom: 1px solid var(--border-subtle);
  backdrop-filter: blur(20px);
  padding: 24px 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.mobile-nav-link {
  font-size: 1.05rem;
  font-weight: 600;
  color: #94a3b8;
  padding: 10px 14px;
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.mobile-nav-link:hover,
.mobile-nav-link-active {
  color: #ffffff;
  background: rgba(56, 189, 248, 0.12);
  border-left: 3px solid var(--primary-light);
}

.mobile-cta-wrapper {
  margin-top: 20px;
  padding-top: 18px;
  border-top: 1px solid var(--border-subtle);
}

.mobile-cta {
  width: 100%;
  padding: 14px;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: all 0.25s ease-out;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 1024px) {
  .desktop-menu,
  .nav-cta {
    display: none;
  }
  .hamburger-btn {
    display: flex;
  }
}
</style>
