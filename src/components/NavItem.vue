<template>
  <div class="flex flex-col items-center justify-center px-6 py-2
  cursor-pointer min-w-[90px] hover:bg-black/20 transition"
  @click="emit('click')"
  @keydown.enter="emit('click')"
  :tabindex="tabindex"
  >

    <img :src="imgSrc" :alt="label" class="w-8 sm:w-10 md:w-12 h-12" />

    <div :class="['font-friz shadow-2xl text-sm md:text-xl', color]">
      {{ label }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  imgSrc: String,
  label: String,
  color: String,
  tabindex: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(['click']);
</script>
<style scoped>
@import "../assets/styles/main.css";
</style>
