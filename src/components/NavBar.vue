<template>
  <nav class="w-full border-metal bg-gradient-to-b
  from-[#181512] via-[#181512] to-black ">

    <!-- TOP BAR -->
    <div class="flex items-center justify-between px-4 py-2">

      <!-- LOGO -->
      <div @click="goToHome()"
      @keydown.enter="goToHome"
      class="flex items-center cursor-pointer"
      >
        <img
          src="../assets/images/logoNavBar.png"
          alt="Arena Guide Calculator Logo"
          class="w-16 sm:w-20 md:w-24 h-auto logo-glow"
        />

        <div class="max-[420px]:hidden sm:flex flex-col ml-3 text-wow-gold font-morpheus">
          <div class="text-xl md:text-3xl text-shadow-wow">
            TBC <span class="text-2xl md:text-4xl">A</span>RENA
          </div>
          <div class="flex items-center gap-2">
            <img src="../assets/images/arrow.png" alt="Arrow" class="w-18">
            <div class="text-sm md:text-xl">
              Season 2
            </div>
            <img src="../assets/images/arrow.png" alt="Arrow" class="w-18 rotate-180">
          </div>
        </div>
      </div>

      <!-- BURGER (mobile only) -->
      <button class="hidden max-[1300px]:block text-wow-gold text-3xl">
        ☰
      </button>

      <!-- DESKTOP MENU -->
      <div class="hidden min-[1300px]:flex items-stretch min-[1700px]:mr-40 relative">
        <div v-for="item in route" :key="item.path" :to="item.path" class="relative">
          <div class="side-border-left">
          </div>
          <NavItem :imgSrc="item.imgSrc"
          :label="item.label"
          :color="item.color"
          :key="item.path"
          @click="goTo(item.path)"
          class="logo-glow"/>
        </div>
        <div class="side-border-right"></div>
      </div>
      <!-- STATUS -->
      <div class="hidden min-[1300px]:flex flex-col text-right text-sm text-wow-gold">
        <div>
            <div class="flex items-center gap-2">
                <div>
                    <img src="../assets/images/arrow.png" alt="left arrow" class="w-12">
                </div>
                <div class="font-morpheus text-wow-gold text-shadow-wow text-2xl">SEASON 2</div>
                <div>
                    <img src="../assets/images/arrow.png" alt="right arrow"
                    class="rotate-180 w-12">
                </div>
            </div>
            <div>
                <span class="text-green-400 flex items-center font-bold">
                    * Live data: 3 bracket(s) loaded
                </span>
            </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { useRouter } from 'vue-router';
import NavItem from './NavItem.vue';
import orangeSword from '../assets/images/icons/navbar/tierlist-icon.png';
import scroll from '../assets/images/icons/navbar/class-guide-icon.png';
import calculator from '../assets/images/icons/navbar/calculator-icon.png';
import ladder from '../assets/images/icons/navbar/ladder-icon.png';
import meta from '../assets/images/icons/navbar/meta-icon.png';
import tools from '../assets/images/icons/navbar/tools-icon.png';

const router = useRouter();

const goTo = (path) => {
  router.push(path);
};

const goToHome = () => {
  router.push('/');
};

const route = [
  {
    name: 'Tier List',
    path: '/tier-list',
    imgSrc: orangeSword,
    label: 'TIER LIST',
    color: 'text-orange-500',
  },
  {
    name: 'Class Guide',
    path: '/class-guide',
    imgSrc: scroll,
    label: 'CLASS GUIDE',
    color: 'text-wow-gold',
  },
  {
    name: 'Calculator',
    path: '/calculator',
    imgSrc: calculator,
    label: 'CALCULATOR',
    color: 'text-wow-gold',
  },
  {
    name: 'Ladder',
    path: '/ladder',
    imgSrc: ladder,
    label: 'LADDER',
    color: 'text-green',
  },
  {
    name: 'Meta',
    path: '/meta',
    imgSrc: meta,
    label: 'META',
    color: 'text-blue',
  },
  {
    name: 'Tools',
    path: '/tools',
    imgSrc: tools,
    label: 'TOOLS',
    color: 'text-wow-gray',
  },
];
</script>
<style scoped>

</style>
