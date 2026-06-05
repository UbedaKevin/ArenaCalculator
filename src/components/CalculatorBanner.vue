<template>
<div id="calculator-banner"
class="flex items-center justify-center min-h-[500px]"
:style="backgroundStyle">
  <div class="max-w-5xl w-full text-center">

    <!-- TITLE -->
    <h1 class="text-4xl md:text-6xl font-bold tracking-wider text-shadow-wow font-morpheus
    text-wow-gold hero-title">
      <span class="text-5xl md:text-7xl">A</span>rena
       <span class="text-5xl md:text-7xl">P</span>OINTS
    </h1>

    <p class="mt-2 text-2xl md:text-7xl font-bold tracking-wider
    text-wow-gold font-morpheus hero-title">
      Calculator
    </p>

    <!-- SUBTITLE -->
    <p class="mt-6 text-gray-300 text-lg md:text-3xl shadow-2xl
     max-w-lg mx-auto font-cormorant">
      Calculate your exact weekly arena points based on rating and bracket.
    </p>
  </div>
</div>
</template>

<script setup>
import { computed } from 'vue';
import backgroundImg from '../assets/images/banner/banner-calculator-green.webp';

const backgroundStyle = computed(() => ({
  backgroundImage: `url(${backgroundImg})`,
}));
</script>

<style scoped>
@import '../assets/styles/main.css';

</style>
