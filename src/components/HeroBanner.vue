<template>
<div id="hero" class="flex items-center justify-center h-screen relative">
<img src="../assets/images/orgri.webp"
  alt="Arena Points Calculator Background"
  class="absolute inset-0 w-full h-full object-cover z-0"
  loading="lazy"
  >
<div class="flex items-center justify-center px-6 relative z-50 md:mt-30 mt-20">
  <div class="max-w-5xl w-full text-center">
    <!-- TITLE -->
    <h1 class="text-4xl md:text-6xl font-bold tracking-wider text-shadow-wow font-morpheus
    text-wow-gold hero-title">
      <span class="text-5xl md:text-7xl">T</span>BC <span class="text-5xl md:text-7xl">A</span>RENA
    </h1>
    <div class="flex items-center justify-center gap-2 mt-3">
      <img src="../assets/images/arrow.png" alt="Arrow" class="w-18" loading="lazy">
      <h2 class=" text-xl md:text-3xl font-semibold  tracking-wider
      text-wow-gold text-shadow-wow font-morpheus hero-title">
        Season 2
      </h2>
      <img src="../assets/images/arrow.png" alt="Arrow" class="w-18 rotate-180" loading="lazy">
    </div>

    <p class="mt-2 text-2xl md:text-7xl font-bold tracking-wider
    text-wow-gold font-morpheus hero-title">
      The Ultimate PvP Hub
    </p>

    <!-- SUBTITLE -->
    <p class="mt-6 text-gray-300 text-lg md:text-2xl shadow-2xl
     max-w-2xl mx-auto font-cormorant">
      Everything you need to dominate TBC Classic Arena Season 2.
    </p>

    <!-- CTA ICON ROW -->
  <div class="mt-10 grid grid-cols-2 md:grid-cols-4
  gap-4 max-w-3xl mx-auto rounded-xl bg-black/40 z-10">
  <CTAItem
    v-for="item in ctaItems"
    :key="item.text"
    :item="item"
  />
  </div>
    <!-- CTA BUTTONS -->
    <div class="mt-5 md:mt-10 flex flex-col sm:flex-row
     justify-center items-center md:gap-14 gap-4">
      <RedButtonHeroBanner
        text="ArenaCalculator"
        :img="redButtonImage"
        :scale="1.2"
        @click="goToCalculator"
        />
      <RedButtonHeroBanner
        text="Class Guides"
        :img="grayButtonImage"
        :scale="1.2"
        @click="goToGuides"
        />
    </div>
  </div>
</div>
</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import CTAItem from './CTAItem.vue';
import RedButtonHeroBanner from './ui/ButtonHeroBanner.vue';
import arenaCalculatorIcon from '../assets/images/icons/hero/arena-calculator-icon.png';
import classGuidesIcon from '../assets/images/icons/hero/class-guides-icon.png';
import tierListsIcon from '../assets/images/icons/hero/tier-lists-icon.png';
import metaAnalysisIcon from '../assets/images/icons/hero/meta-analysis-icon.png';
import redButtonImage from '../assets/images/boutonRougeHero.png';
import grayButtonImage from '../assets/images/boutonGrisHero.png';

const router = useRouter();

const goToCalculator = () => {
  router.push('/calculator');
};

const goToGuides = () => {
  router.push('/class-guide');
};

const ctaItems = [
  {
    icon: arenaCalculatorIcon,
    text: 'Arena Calculator',
    route: '/calculator',
  },
  {
    icon: classGuidesIcon,
    text: 'Class Guides',
    route: '/class-guide',
  },
  {
    icon: tierListsIcon,
    text: 'Tier Lists',
    route: '/tier-lists',
  },
  {
    icon: metaAnalysisIcon,
    text: 'Meta Analysis',
    route: '/meta-analysis',
  },
];

</script>

<style scoped>
@import '../assets/styles/main.css';

</style>
