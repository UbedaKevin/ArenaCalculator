<template>
<div
  class="relative min-h-screen"
  :style="{
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }"
>
  <div class="absolute inset-0 bg-black/30">
    <NavBar />
  </div>

  <div class="relative z-20 flex min-h-screen items-center">
    <div class="max-w-xl pl-12 md:pl-24">
      <h1 class="font-morpheus text-8xl text-wow-gold glow-gold">
        404
      </h1>

      <p class="mt-4 text-2xl text-wow-gold">
        You have ventured into an unknown land.
      </p>

      <p class="mt-2 text-lg text-gray-200">
        The page you are looking for does not exist.
      </p>
      <div class="mt-4">
        <Redbutton
          :text="'Return Home'"
          :img="redButtonImage"
          @click="goHome"
        />
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import Redbutton from '@/components/ui/ButtonHeroBanner.vue';
import backgroundImg from '../assets/images/72d2ed44-6ad7-446d-8175-be6deed618c7.png';
import redButtonImage from '../assets/images/boutonRougeHero.png';

const router = useRouter();

const goHome = () => {
  router.push('/');
};
</script>
