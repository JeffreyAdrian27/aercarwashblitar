<!-- frontend/src/components/Logo.vue -->
<template>
  <div class="aer-logo-container" :style="{ height: height }">
    <img 
      src="/icons.png" 
      alt="Aer Drive Thru Carwash Blitar" 
      class="aer-logo-img"
      loading="eager"
    />
  </div>
</template>

<script setup>
defineProps({
  height: {
    type: String,
    default: '48px'
  }
})
</script>

<style scoped>
.aer-logo-container {
  display: inline-flex;
  align-items: center;
  line-height: 0;
}

.aer-logo-img {
  height: 100%;
  width: auto;
  max-width: 100%;
  display: block;
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));
}
</style>
