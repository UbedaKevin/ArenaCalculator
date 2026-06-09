<template>
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div class="border-calculator h-64 relative object-cover"
    :style="{ backgroundImage: `url(${item.img})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
     }"
     v-for="item in items" :key="item.title" tabindex="0"
     @click="go(item.route)" @keydown.enter="go(item.route)">
     <div class="absolute bottom-4 left-1/2 -translate-x-1/2
     font-morpheus text-2xl text-wow-gold">
      {{ item.title }}
      <Redbutton class="mt-2"
      :text="item.textButton"
      :img="redButtonImage"
      :scale="0.9"
      :bottomOffset="2" />
     </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import card3 from '@/assets/images/background/5cc94cad-f9da-4383-9cec-ba0e2e6c269f.webp';
import card1 from '@/assets/images/background/958d0c26-e37e-47f0-bfd7-341fb4174ddb.webp';
import card2 from '@/assets/images/background/dc971496-5f47-45ff-aba0-3d1789bf5e75.webp';
import card4 from '@/assets/images/background/35bf4417-50a2-4642-a15f-58789b493a40.webp';
import Redbutton from '@/components/ui/ButtonHeroBanner.vue';
import redButtonImage from '@/assets/images/boutonRougeHero.png';

const router = useRouter();

const items = [
  {
    title: 'Best Arena Composition',
    img: card1,
    textButton: 'Read Guide',
    route: '/best-arena-composition',
  },
  {
    title: 'Arena Rating Guide',
    img: card2,
    textButton: 'Read Guide',
    route: '/arena-rating-guide',
  },
  {
    title: 'Season 2 Tier List',
    img: card3,
    textButton: 'View Tier List',
    route: '/tier-list',
  },
  {
    title: 'Guide Class',
    img: card4,
    textButton: 'Browse Guides',
    route: '/class-guide',
  },
];

function go(route) {
  router.push(route);
}
</script>
