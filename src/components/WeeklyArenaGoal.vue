<template>
    <div class="border-calculator flex
    flex-col items-center justify-center w-full">
        <div class="pt-4 relative w-full font-cormorant text-center">
            <p class="uppercase text-xl text-wow-gold font-bold">
                <span>🏆</span> <span class="text-2xl">
                    W</span>eekly<span class="text-2xl">
                    A</span>rena<span class="text-2xl">
                    G</span>oal <span>🏆</span>
            </p>
            <p class="text-amber-100 text-lg">
                Set your target arena points and see the rating
            </p>
            <p class="text-amber-100 text-lg">
                you need to achieve your goal
            </p>
            <img
            src="../assets/images/icons/calculator/icon-weekly-gold.png"
            alt="Weekly Arena Goal"
            loading="lazy"
            class="object-cover w-120 mx-auto glow-gold py-2">
        </div>
        <div class="flex items-center justify-center gap-4 px-4 pb-4">
            <div class="flex flex-col gap-2">
                <div class="text-start font-bold font-cormorant text-wow-gold text-xl uppercase">
                    <p>
                        <span class="text-2xl">T</span>arget
                        <span class="text-2xl">A</span>rena
                        <span class="text-2xl">P</span>oints
                    </p>
                </div>
                <div class="flex flex-col min-[1330px]:flex-row items-center">
                    <div class="flex items-center gap-2">
                        <img
                        src="../assets/images/icons/calculator/target-arena-point-icon.png"
                        alt="Target Arena Point Icon"
                        loading="lazy"
                        class="object-cover w-16 max-[390px]:w-14">
                        <div class="relative">
                            <label for="target-arena-points"></label>
                            <input id="target-arena-points" type="number"
                            placeholder="0" class="border-calculator  font-skurri
                            text-2xl max-[390px]:text-2xl outline-none text-wow-gold outline-none"
                              :value="arenaValue"
                              @input="emit('update:arenaValue', Number($event.target.value))">
                            <img
                                @click="emit('clickup')"
                                @keydown.enter="emit('clickup')"
                                @keydown.space.prevent="emit('clickup')"
                                @mousedown="isClickedup = true"
                                @mouseup="isClickedup = false"
                                @mouseleave="isClickedup = false"
                                @focusout="isClickedup = false"
                                @blur="isClickedup = false"
                            src="../assets/images/icons/calculator/arrow-up-weekly-arena-icon.png"
                            alt="Arrow Weekly Arena Icon"
                            class="absolute w-7 right-3 top-3 cursor-pointer"
                            :class="['transform', isClickedup ? 'scale-90' : '']">
                            <img
                                @click="emit('clickdown')"
                                @keydown.enter="emit('clickdown')"
                                @keydown.space.prevent="emit('clickdown')"
                                @mousedown="isClickeddown = true"
                                @mouseup="isClickeddown = false"
                                @mouseleave="isClickeddown = false"
                                @focusout="isClickeddown = false"
                                @blur="isClickeddown = false"
                            src="../assets/images/icons/calculator/arrow-down-weekly-arena-icon.png"
                            alt="Arrow Weekly Arena Icon"
                            class="absolute w-7 right-3 bottom-3 cursor-pointer"
                            :class="['transform', isClickeddown ? 'scale-90' : '']">
                        </div>
                    </div>
                    <div class="flex mt-4 min-[1330px]:mt-0 min-[1340px]:ml-8 p-2">
                        <RedButton
                        text="Calculate"
                        :img="redButtonImage"
                        :scale="1.2"
                        @click="handleCalculate" />
                    </div>
                </div>
            </div>
        </div>
        <div class="flex gap-4 flex-col min-[1340px]:flex-row pb-4">
            <div class="min-w-[320px]">
                <div class="p-4 text-wow-gold border-calculator w-full"
                :style="backgroundStyle">
                <p class="uppercase text-xl font-cormorant font-bold">
                    <span class="text-2xl">R</span>equired Rating</p>
                    <div class="flex items-center justify-center gap-2">
                        <img src="../assets/images/icons/calculator/arrow-weekly-icon2.png"
                        alt="Arrow Weekly Icon"
                        loading="lazy"
                        class="max-w-18 object-cover">
                        <p class="text-7xl font-morpheus icon-glow mb-5">
                            {{ Math.round(props.ratingValue) }}
                        </p>
                        <img src="../assets/images/icons/calculator/arrow-weekly-icon2.png"
                        alt="Arrow Weekly Icon"
                        loading="lazy"
                        class="rotate-180 max-w-18 object-cover">
                    </div>
                    <p class="text-amber-100 font-cormorant text-lg">to earn <span class="text-2xl">
                        {{ Math.round(props.arenaValue) }}
                    </span> arena points in
                    <span class="text-2xl font-skurri">{{ props.bracket }}</span>
                    <span class="text-xl font-skurri">vs</span>
                    <span class="text-2xl font-skurri">{{ props.bracket }}</span>
                    Bracket</p>
                </div>
            </div>
            <div
                class="border-calculator text-amber-100 font-cormorant
                text-md max-w-[320px] relative overflow-hidden flex items-center"
                :style="backgroundCalculated"
                >
                <!-- Overlay noir -->
                <div class="absolute inset-0 bg-black/60 z-0"></div>

                <!-- Contenu -->
                <div class="relative z-10 p-4">
                    <div class="flex items-center gap-2">
                        <span class="flex-shrink-0 mr-3" v-html="warning">   </span>
                        <span>Higher rating = More points</span>
                    </div>

                    <p>Points are calculated based on your performance</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import RedButton from './ui/ButtonHeroBanner.vue';
import redButtonImage from '../assets/images/boutonRougeHero.png';

import backgroundImg from '../assets/images/background-calculator-result.webp';
import backgroundCalculatedImg from '../assets/images/background-calculator-arena-goal.webp';

const backgroundStyle = computed(() => ({
  backgroundImage: `url(${backgroundImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}));

const backgroundCalculated = computed(() => ({
  backgroundImage: `url(${backgroundCalculatedImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}));

const isClickedup = ref(false);
const isClickeddown = ref(false);

const props = defineProps({
  arenaValue: {
    type: Number,
    required: true,
  },
  ratingValue: {
    type: Number,
    required: true,
  },
  bracket: {
    type: String,
    required: true,
  },
});

const emit = defineEmits([
  'update:arenaValue',
  'clickdown',
  'clickup',
  'update:ratingValue',
]);

const handleCalculate = () => {
  emit('handleCalculate');
};

const warning = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" /></svg>';
</script>

<style scoped>
@import '../assets/styles/main.css';
</style>
