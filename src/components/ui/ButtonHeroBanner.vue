<template>
  <div class="relative inline-block w-[200px] cursor-pointer group"
     tabindex="0"
     role="button"
     @click="emit('click')"
     @keydown.enter="emit('click')"
     @keydown.space.prevent="emit('click')"
     @mousedown="isClicked = true"
     @mouseup="isClicked = false"
     @mouseleave="isClicked = false"
     @focusout="isClicked = false"
     @blur="isClicked = false">
    <img
      :src="img"
      alt=""
      class="w-full h-auto transition duration-300 group-active:scale-90"
      loading="lazy"
      :style="{ transform: `scale(${scale})`}"
    >

    <p :style="{ bottom: `${bottomOffset}px` }"
      class="absolute top-0 left-0 right-0 flex items-center justify-center
             text-white text-xl font-bold pointer-events-none
             font-morpheus tracking-wider text-wow-gold transition-all duration-300
             group-active:scale-90
             "
    >
      {{ text }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  text: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
    default: '../../assets/boutonRougeHero.png',
  },
  scale: {
    type: Number,
    required: false,
    default: 1,
  },
  bottomOffset: {
    type: Number,
    required: false,
    default: 8,
  },
});

const emit = defineEmits(['click']);

const isClicked = ref(false);
</script>

<style scoped>
</style>
