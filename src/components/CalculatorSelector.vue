<template>
  <div class="w-full bg-dark-calculator">
    <div class="border-calculator  font-cormorant">
        <div class="relative py-4">
            <p class="text-wow-gold text-xl font-bold uppercase">
            <span class="text-2xl">C</span>alculator
            </p>
            <div class="side-border-bottom "></div>
        </div>
        <div class="py-4">
            <p class="uppercase text-wow-gold font-bold text-lg">
            <span class="text-2xl">B</span>RACKET</p>
        </div>
        <div class="flex items-center justify-evenly relative pb-6">
            <div class=" flex flex-col items-center overflow-hidden
            cursor-pointer border-calculator transition-all duration-300 ease-in-out"
                v-for="bracket in brackets" :key="bracket.id"
                @click="selectedBracket = bracket.id"
                @keydown="selectedBracket = bracket.id"
                :class="{ 'bracket-card': selectedBracket === bracket.id }">
                <img src="../assets/images/icons/calculator/sword.png"
                alt="Sword Icon" class="w-16 logo-glow"
                :class="{ 'icon-glow': selectedBracket === bracket.id}"
                >
                <p class="font-cormorant text-wow-gold font-bold text-2xl">{{ bracket.name }}</p>
            </div>
            <div class="side-border-bottom absolute bottom-0 left-0 right-0"></div>
        </div>
        <div class="py-4">
            <p class="uppercase text-wow-gold font-bold text-lg">
                <span class="text-2xl">A</span>rena
                <span class="text-2xl">R</span>ating
            </p>
            <div class="flex items-center justify-center p-4 gap-4">
              <button class="cursor-pointer"
                @mousedown="isMinusActive = true;"
                @mouseup=" decrement(); isMinusActive = false"
                @mouseleave="isMinusActive = false"
                @focusout="isMinusActive = false"
                @blur="isMinusActive = false"
              >
                <img src="../assets/images/icons/bouton-minus-calculator.webp"
                alt="Minus Button" class="w-15 transition duration-300"
                :class="{ 'scale-90': isMinusActive }">
              </button>
              <label>
                <input
                  id="arena-rating"
                  type="number"
                  :value="props.arenaRating"
                  @input="emit('update:arenaRating', Number($event.target.value))"
                  class="w-full border-calculator text-center font-skurri p-1
                  text-3xl outline-none text-wow-gold"
                >
              </label>
              <button class="cursor-pointer"
                @mousedown="isPlusActive = true;"
                @mouseup="increment(); isPlusActive = false"
                @mouseleave="isPlusActive = false"
                @focusout="isPlusActive = false"
                @blur="isPlusActive = false"
              >
                <img src="../assets/images/icons/bouton-plus-calculator.webp"
                alt="Plus Button" class="w-15 transition duration-300"
                :class="{ 'scale-90': isPlusActive }">
              </button>
            </div>
            <div class="pb-4 flex justify-center">
              <p class="text-wow-gold text-md font-bold flex items-start gap-2 max-w-md">
                <span
                  v-html="svg"
                  class="flex-shrink-0 mt-0.5"
                ></span>
                <span class="font-cormorant">
                  This is your personal rating (No participation requirement)
                </span>
              </p>
            </div>
              <div class="pt-4">
                <ButtonHeroBanner
                text="Calculate"
                :img="redButtonImage"
                :scale="1.2"
                @click="calculate" />
              </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ButtonHeroBanner from './ui/ButtonHeroBanner.vue';
import redButtonImage from '../assets/images/boutonRougeHero.png';

const brackets = [
  {
    id: 2,
    name: '2v2',
  },
  {
    id: 3,
    name: '3v3',
  },
  {
    id: 5,
    name: '5v5',
  },
];

const selectedBracket = defineModel('selectedBracket');
const isMinusActive = ref(false);
const isPlusActive = ref(false);

const props = defineProps({
  arenaRating: {
    type: Number,
    default: 1500,
  },
});

const emit = defineEmits([
  'update:arenaRating',
  'update:selectedBracket',
  'calculate',
]);

const increment = () => {
  emit('update:arenaRating', Number(props.arenaRating) + 1);
};

const decrement = () => {
  emit('update:arenaRating', Math.max(0, Number(props.arenaRating) - 1));
};

const calculate = () => {
  emit('calculate');
};

const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" /></svg>';
</script>

<style scoped>
@import "../assets/styles/main.css";

</style>
