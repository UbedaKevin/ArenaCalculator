<template>
  <main class="min-h-screen">
    <section class="relative min-h-screen">
      <div class="relative z-30 flex flex-col bg-dark-calculator">
        <NavBar />
        <div class="w-full max-w-7xl mx-auto px-4 py-8 flex flex-col gap-8">
          <ClassGuideGrid />
          <!-- <CtaBanner /> -->
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import ClassGuideGrid from '@/components/ClassGuideGrid.vue';
// import CtaBanner from '@/components/CtaBanner.vue';
</script>

<style scoped>
.section-divider {
  height: 8px;
  background-image: url('../assets/images/border/section-border.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}
</style>
