<template>
  <div class="w-full bg-dark-calculator">
    <div class="border-calculator  font-cormorant">
        <div class="relative py-4">
            <p class="text-wow-gold text-xl font-bold uppercase">
            <span class="text-2xl">W</span>EEKLY REWARDS
            </p>
            <div class="side-border-bottom "></div>
        </div>
        <div class="relative p-4"
          :style="backgroundStyle">
              <p class="text-wow-gold text-2xl font-bold uppercase">
                <span class="text-3xl">A</span>rena Points</p>
                <p class="text-wow-gold text-8xl font-morpheus icon-glow">
                  {{ props.arenaPoints }}</p>
                <div class="side-border-bottom "></div>
          </div>
          <div class="relative py-4">
            <p class="text-wow-gold text-xl font-bold uppercase">
              <span class="text-2xl">B</span>reakdown
            </p>
            <div v-for="item in breakdown"
            :key="item.label"
            class="flex justify-between text-amber px-6"
             :class="{ 'text-green': item.label === 'Final Result' }">
              <div>
                <p class="text-2xl font-semibold font-cormorant">{{ item.label }}</p>
              </div>
              <div>
                <p class="text-2xl font-semibold font-morpheus"
                 v-if="item.label === 'Bracket Multiplier'">
                  <span class="text-2xl font-cormorant">x</span> {{ item.value }}
                </p>
                <p class="text-2xl font-semibold font-morpheus"
                 v-else>
                  {{ item.value }}
                </p>
              </div>
            </div>
            <div class="side-border-bottom "></div>
          </div>
          <div class="py-4 px-6">
            <p class="text-wow-gold text-xl font-bold uppercase">
            <span class="text-2xl">S</span>EASON PROJECTION
            </p>
            <p class="font-cormorant text-wow-gold text-xl p-1">
              After 4 weeks : {{ props.progress }} / 5000 ( Remember Cap points is 5000)
            </p>
            <div class="relative border-calculator w-full overflow-hidden">
              <div class="absolute top-0 left-0 inner-border rounded-full glow-gold"
              :style="{ width: props.width + '%' }"></div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import backgroundImg from '../assets/images/background-calculator-result.webp';

const backgroundStyle = computed(() => ({
  backgroundImage: `url(${backgroundImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}));

const props = defineProps({
  arenaPoints: {
    type: Number,
    required: true,
  },
  bracketMultiplier: {
    type: Number,
    required: true,
  },
  selectedBracket: {
    type: Number,
    required: true,
  },
  finalResult: {
    type: Number,
    required: true,
  },
  progress: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
});

const breakdown = computed(() => [
  {
    label: 'Bracket Multiplier',
    value: props.bracketMultiplier,
  },
  {
    label: 'Selected Bracket',
    value: props.selectedBracket,
  },
  {
    label: 'Match Requirements',
    value: '10',
  },
  {
    label: 'Final Result',
    value: props.finalResult,
  },
]);

</script>

<style scoped>
@import "../assets/styles/main.css";

.inner-border {
  background-color: var(--wow-gold);
  transition: width 2s;
  height: 100%;
}

</style>
