<template>
  <main class="min-h-screen">
    <section
      class="relative min-h-screen bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <!-- <div class="absolute inset-0 bg-black/40"></div> -->

      <div class="relative z-30 flex flex-col min-h-screen">
        <NavBar />

        <div class="flex-1 w-full max-w-7xl mx-auto px-4 py-8">
          <!-- {{ className }} -->
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import backgroundImage from '../assets/images/banner/926f304d-8d74-4fc0-a10d-9a8663205931.webp';

defineProps({
  className: String,
});
</script>
