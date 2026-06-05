<template>
  <div
    class="flex items-center gap-2 justify-evenly
    p-4  transition">
    <img :src="item.icon" :alt="item.text" class="w-12 h-12 icon-glow">
    <p class="text-md font-morpheus text-wow-gold font-bold tracking-wider">
      {{ item.text }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});

</script>
<style scoped>
@import '../assets/styles/main.css';

</style>
