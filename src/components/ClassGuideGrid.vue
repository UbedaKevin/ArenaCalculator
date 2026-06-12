<template>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
  <div
    v-for="item in source"
    :key="item.name"
    :style="{ backgroundImage: `url(${item.image})` }"
    class="h-68 rounded-xl bg-cover bg-center overflow-hidden
    transition-transform duration-300 cursor-pointer
    border-class-guide card"
  >
    <div class="h-full flex items-end justify-center
     p-4 bg-gradient-to-t from-black/80 to-transparent">
     <div class="flex flex-col items-center gap-2">
     <p class="text-wow-gold font-friz text-3xl font-bold uppercase test">
        <span class="text-4xl">{{ item.name.slice(0, 1) }}</span>{{ item.name.slice(1) }}
     </p>
      <RedButton
      :text="text"
      :img="redButtonImage"
      :scale="1"
      @click="goToGuide(item.route)" />
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import RedButton from './ui/ButtonHeroBanner.vue';
import druid from '../assets/images/card/druid.webp';
import hunter from '../assets/images/card/hunter.webp';
import mage from '../assets/images/card/mage.webp';
import paladin from '../assets/images/card/paladin.webp';
import priest from '../assets/images/card/priest.webp';
import rogue from '../assets/images/card/rogue.webp';
import shaman from '../assets/images/card/shaman.webp';
import warlock from '../assets/images/card/warlock.webp';
import warrior from '../assets/images/card/warrior.webp';
import redButtonImage from '../assets/images/boutonRougeHero.png';

const source = [
  { name: 'Warrior', image: warrior, route: '/class-guide/warrior' },
  { name: 'Paladin', image: paladin, route: '/class-guide/paladin' },
  { name: 'Hunter', image: hunter, route: '/class-guide/hunter' },
  { name: 'Rogue', image: rogue, route: '/class-guide/rogue' },
  { name: 'Priest', image: priest, route: '/class-guide/priest' },
  { name: 'Shaman', image: shaman, route: '/class-guide/shaman' },
  { name: 'Mage', image: mage, route: '/class-guide/mage' },
  { name: 'Warlock', image: warlock, route: '/class-guide/warlock' },
  { name: 'Druid', image: druid, route: '/class-guide/druid' },
].sort((a, b) => a.name.localeCompare(b.name));

const text = 'View guide';

const router = useRouter();

const goToGuide = (route) => {
  router.push(route);
};

</script>

<style scoped>
.card {
  background-size: 100%;
  background-position: center;
  transition: background-size 0.4s ease;
}

.card:hover {
  background-size: 110%;
}

.test {
text-shadow: 1px 1px 0px #787878;
}
</style>
