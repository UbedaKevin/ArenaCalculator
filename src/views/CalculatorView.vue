<template>
  <div class="page-calculator bg-dark-calculator">
    <!-- <div
      class="relative overflow-hidden bg-no-repeat bg-center bg-cover"
      :style="backgroundStyle"
    > -->
    <div>
      <div class="z-10">
        <NavBar />
        <CalculatorBanner />
      </div>
    </div>
    <div class="p-4 bg-dark-calculator grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <CalculatorSelector
      v-model:arenaRating="arenaRating"
      v-model:selectedBracket="selectedBracket"
      @calculate="calculate" />
      <CalculatorResult
      :arenaPoints="result"
      :bracketMultiplier="bracketMultiplier"
      :selectedBracket="selectedBracket"
      :finalResult="result"
      :progress="progress"
      :width="width" />
      <CurrentCalculation
      :bracket="savedBuild?.bracket"
      :rating="savedBuild?.rating"
      :weeklyPoints="savedBuild?.weeklyPoints"
      @save="saveBuild"
      @reset="resetCalculator" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4
    bg-dark-calculator px-4 mx-auto">
      <WeeklyArenaGoal
      v-model:arenaValue="arenaValue"
      :ratingValue="ratingResult"
      @handleCalculate="handleCalculate"
      @clickup="arenaValue += 1"
      @clickdown="arenaValue -= 1"
      :bracket="selectedBracket" />
      <CompareBracket />
    </div>
  </div>
</template>

<script setup>
import {
  ref, watch, onMounted,
} from 'vue';
// import NavBar from '@/components/NavBar.vue';
import NavBar from '@/components/NavBar.vue';
import CalculatorBanner from '@/components/CalculatorBanner.vue';
import CalculatorSelector from '@/components/CalculatorSelector.vue';
import CalculatorResult from '@/components/CalculatorResult.vue';
import CurrentCalculation from '@/components/CurrentCalculation.vue';
import CompareBracket from '@/components/CompareBracket.vue';
import WeeklyArenaGoal from '@/components/WeeklyArenaGoal.vue';
import calcPoints from '@/composables/calculateBestRating';
import calcRatingNeeded from '@/composables/calcRatingNeeded';

// import backgroundVideo from '../assets/images/orcStrongold.mp4';

const arenaRating = ref(1500);
const selectedBracket = ref(2);
const bracketMultiplier = ref(0.76);
const result = ref(0);
const multipliers = {
  2: 0.76,
  3: 0.88,
  5: 1.0,
};
const progress = ref(0);
const width = ref(0);
const savedBuild = ref(null);
const arenaValue = ref(0);
const ratingResult = ref(0);

const calculate = () => {
  if (!selectedBracket.value) return;
  result.value = calcPoints(arenaRating.value, multipliers[selectedBracket.value]);
  bracketMultiplier.value = multipliers[selectedBracket.value];
  console.log(result.value);
  progress.value = result.value * 4;
  width.value = (progress.value / 5000) * 100;
};

watch(selectedBracket, (newValue) => {
  bracketMultiplier.value = multipliers[newValue] ?? 0.76;
});

const saveBuild = () => {
  const build = {
    bracket: selectedBracket.value,
    rating: arenaRating.value,
    weeklyPoints: result.value,
  };

  localStorage.setItem(
    'arena-calculator-build',
    JSON.stringify(build),
  );

  savedBuild.value = build;
};

const resetCalculator = () => {
  selectedBracket.value = 2;
  arenaRating.value = 1500;
  result.value = 0;

  localStorage.removeItem('arena-calculator-build');
  savedBuild.value = null;
};

onMounted(() => {
  const saved = localStorage.getItem('arena-calculator-build');

  if (!saved) return;

  savedBuild.value = JSON.parse(saved);
});

const handleCalculate = () => {
  const value = calcRatingNeeded(arenaValue.value, bracketMultiplier.value);

  console.log('INPUT:', arenaValue.value, bracketMultiplier.value);
  console.log('OUTPUT:', value);
  ratingResult.value = value;
};
</script>

<style scoped>
</style>
