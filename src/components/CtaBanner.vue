<template>
  <div class="relative w-full border-class-guide h-50 overflow-hidden
  bg-black/10
     shadow-[inset_0_0_20px_rgba(74,222,128,0.15),0_0_25px_rgba(74,222,128,0.25)]">
    <img
      :src="backgroundImg"
      alt="CTA Banner"
      class="w-full h-full object-cover"
      style="object-position: center 20%;"
    />

    <div class="absolute inset-0 flex flex-col
     justify-center items-center text-center px-4 gap-2">
      <h2
        class="text-xl md:text-4xl font-bold text-green-400 uppercase tracking-wide
        font-morpheus [text-shadow:0_0_8px_rgba(34,197,94,0.5)]"
      >
        LEVEL FASTER. PLAY MORE.
      </h2>

      <p
        class="mt-2 text-sm md:text-xl font-bold text-white
               font-cormorant [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]"
      >
        Professional World of Warcraft leveling services.
      </p>

      <GrayButton
        class="mt-1"
        :text="'View Options'"
        :img="grayButtonImage"
        :scale="1.1"
        @click="goToOptions"
      />
    </div>
  </div>
</template>

<script setup>
import GrayButton from './ui/ButtonHeroBanner.vue';
import backgroundImg from '../assets/images/banner/banniere-cta.webp';
import grayButtonImage from '../assets/images/boutonGrisHero.png';

const goToOptions = () => {
  window.open('https://discord.gg/xDE7rwnfK', '_blank');
};
</script>
