<template>
  <div>
    <div class="absolute inset-0 bg-black/20 z-20"></div>
    <section class="relative">
      <div class="absolute inset-0 z-30">
        <NavBar />
      </div>
      <HeroBanner />
    </section>
    <section class="">
      <div class="border-section">
      </div>
      <h2 class="section">Section</h2>
    </section>
  </div>
</template>

<script setup>
// import NavBar from '@/components/NavBar.vue';
import NavBar from '@/components/NavBar.vue';
import HeroBanner from '@/components/HeroBanner.vue';
// import backgroundImg from '../assets/images/orgri.webp';
// import backgroundVideo from '../assets/images/orcStrongold.mp4';

</script>

<style scoped>
.section-divider {
  height: 8px;
  background-image: url('../assets/images/border/section-border.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}
</style>
