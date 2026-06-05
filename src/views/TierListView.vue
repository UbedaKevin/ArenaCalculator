<template>
  <div class="relative min-h-screen overflow-hidden"
  :style="backgroundStyle">
    <!-- <div class="relative min-h-screen overflow-hidden">
      <video :src="backgroundVideo" autoplay muted loop
      class="z-0 absolute object-cover w-full h-full"></video> -->
    <div class="absolute inset-0 bg-black/30"></div>
    <div class="relative z-10">
      <NavBar />
      <HeroBanner />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
// import NavBar from '@/components/NavBar.vue';
import NavBar from '@/components/NavBar.vue';
import HeroBanner from '@/components/HeroBanner.vue';
import backgroundImg from '../assets/images/orgri.webp';
// import backgroundVideo from '../assets/images/orcStrongold.mp4';

const backgroundStyle = computed(() => ({
  backgroundImage: `url(${backgroundImg})`,
}));

</script>

<style scoped>
</style>
