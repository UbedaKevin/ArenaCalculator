<template>
  <div class="page-tier-list h-screen flex flex-col overflow-hidden">
    <NavBar />
    <div
      class="flex-1 bg-center bg-cover bg-no-repeat"
      :style="{
        backgroundImage: `url(${banner})`
      }"
    />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import banner from '@/assets/images/banner/926f304d-8d74-4fc0-a10d-9a8663205931.webp';
</script>
