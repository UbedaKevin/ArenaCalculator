<template>
    <div class="footer border-t-2 border-[#EEBF5F] p-4">
    <div class="flex">
        <p class=" text-2xl ArialN text-shadow-md text-[#6A6142]">
    YOU RECEIVE:
        <span class="ml-4 best morpheus tracking-widest text-shadow-wow text-[#EEBF5F] text-3xl"
        id="best"
        >{{ props.best }}</span>
        </p>
        <button
        id="refresh"
        @click="emit('refresh')"
        class="ml-auto px-5 py-0 text-2xl font-bold text-[#EEBF5F] ArialN
        text-shadow-wow-small cursor-pointer
        rounded-lg border-2 border-[#828382]
        bg-gradient-to-b from-[#8b0a0a] to-[#3a0000]
        shadow-[inset_0_2px_2px_rgba(255,255,255,0.3),
        inset_0_-3px_5px_rgba(0,0,0,0.8),0_3px_6px_rgba(0,0,0,0.6)]
        hover:brightness-110 active:translate-y-[2px]
        active:shadow-[inset_0_4px_6px_rgba(0,0,0,0.9)]"
        >
        Refresh
        </button>
    </div>
    <div class="ArialN text-shadow-md text-[#6A6142] text-xl text-left">
        <p>* best from <span id="bracket"></span> bracket</p>
        <!-- <p>Click pts box or total to reverse-calculate</p> -->
        <p>For any questions, contact us on Discord</p>
        <a href="https://discord.gg/y3yFPs2Uw" target="_blank"
        aria-label="Join our Discord server"
        class="flex flex-row items-center gap-2 w-fit mt-2 px-4 py-2 bg-[#5865F2]
        text-white rounded-lg hover:bg-[#4752c4] transition">
        <DiscordIcon />
        Discord
        </a>
    </div>
</div>
<div class="flex ArialN text-shadow-md text-[#6A6142] text-xl justify-end">
    <p>10+ games required</p>
</div>
</template>

<script setup>

import DiscordIcon from './icons/DiscordIcon.vue';

const props = defineProps({
  best: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(['refresh']);

</script>

<style scoped>
</style>
