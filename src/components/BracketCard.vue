<template>
    <div class=" p-4 px-5 rounded-xl text-center">
    <div class="border-b-4" :style="{ borderColor: color }">
        <h2 class=" morpheus font-bold text-3xl tracking-wider text-shadow-wow"
        :style="{ color: color }">{{ props.bracket }}</h2>
        <p class="text-xl text-gray-400 mb-2 ArialN text-shadow-md">x{{ props.multiplier }}</p>
    </div>
    <div class="mt-2">
        <p class="text-2xl text-gray-400 mb-2 ArialN text-shadow-md">RATING</p>
    </div>
    <input type="number"
    :id="props.id"
    placeholder="0"
    v-model="rating"
    :aria-labelledby="`${props.id}-label`"
    class="border-5 border-[#828382] rounded-lg text-center px-2 py-1
    text-[#D7C793] text-2xl w-2/3 bg-dark-overlay"
    style="border-style: ridge;">
    <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
    <div class="mt-4 border-1 rounded w-2/3 mx-auto p-6 bg-dark-overlay relative h-24"
    :style="{ borderColor: color }">
        <span :id="'res' + props.id"
        class="absolute bottom-10 left-[50%] translate-x-[-50%] morpheus
        tracking-widest text-shadow-wow text-[#DA6D2F] text-4xl"
        :style="{ color: color }">{{ props.points }}</span>
        <span class="absolute bottom-0 left-[50%] translate-x-[-50%] text-2xl ArialN
        text-shadow-lg tracking-wide text-[#6A6142]">PTS/WEEK</span>
    </div>
</div>
</template>

<script setup>

import { defineModel, defineProps } from 'vue';

const rating = defineModel('rating', {
  type: Number,
  default: 0,
});

const props = defineProps({
  bracket: {
    type: String,
    default: '2v2',
  },
  id: {
    type: String,
    default: 'r2',
  },
  multiplier: {
    type: Number,
    default: 0.76,
  },
  color: {
    type: String,
    default: '#DA6D2F',
  },
  points: {
    type: Number,
    default: 0,
  },
});

</script>

<style scoped>
@import '../assets/styles.css';
</style>
