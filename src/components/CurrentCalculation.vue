<template>
  <div class="w-full bg-dark-calculator">
    <div class="border-calculator  font-cormorant">
        <div class="border-calculator ">
            <div class="relative py-1">
                <p class="text-wow-gold text-xl font-bold uppercase">
                    <span class="text-2xl">C</span>URRENT CALCULATION
                </p>
                <div class="side-border-bottom "></div>
            </div>
            <div class="p-1 relative">
                <div class="flex items-center justify-center gap-4 w-full">
                    <img src="../assets/images/icons/calculator/gold-sword.webp"
                    alt="Gold Sword" class="w-16">
                    <p class="text-wow-gold text-4xl font-morpheus mb-2">
                        {{ props.bracket }}v{{ props.bracket }}</p>
                </div>
                <div class="side-border-bottom "></div>
            </div>
            <div class="relative p-4">
                <div class="text-wow-gold text-center">
                    <p class="text-2xl font-bold">RATING</p>
                    <p class="text-5xl font-morpheus shadow-lg">{{ props.rating }}</p>
                </div>
                <div class="side-border-bottom "></div>
            </div>
            <div class="relative p-4">
                <div class="text-wow-gold text-center">
                    <p class="text-2xl font-bold">WEEKLY POINTS</p>
                    <p class="text-7xl font-morpheus shadow-lg">{{ props.weeklyPoints }}</p>
                </div>
                <div class="side-border-bottom "></div>
            </div>
        </div>
        <div class="px-4 py-6 flex flex-col
        gap-4 items-center border-calculator mt-2">
            <RedButtonHeroBanner
            text="Save Build"
            :img="redButtonImage"
            :scale="1.2"
            @click="saveBuild"
            />
            <RedButtonHeroBanner
            text="Reset"
            :img="grayButtonImage"
            :scale="1.2"
            @click="reset"
            />
        </div>
    </div>
  </div>
</template>

<script setup>
import RedButtonHeroBanner from './ui/ButtonHeroBanner.vue';
import redButtonImage from '../assets/images/boutonRougeHero.png';
import grayButtonImage from '../assets/images/boutonGrisHero.png';

const emit = defineEmits(['save', 'reset']);

const props = defineProps({
  bracket: {
    type: Number,
    default: 2,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  weeklyPoints: {
    type: Number,
    required: true,
    default: 0,
  },
});

const saveBuild = () => {
  emit('save');
};

const reset = () => {
  emit('reset');
};

</script>

<style scoped>
@import "../assets/styles/main.css";

</style>
