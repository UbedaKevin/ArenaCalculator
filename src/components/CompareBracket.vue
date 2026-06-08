<template>
    <div class="border-calculator">
        <div class="text-center py-4 text-wow-gold
        font-cormorant text-xl font-bold uppercase">
            <p>
                <span class="text-2xl">C</span>ompare
                <span class="text-2xl">B</span>racket
            </p>
        </div>
        <div class="w-full overflow-x-auto px-4 pb-4 flex font-morpheus mt-10">
          <table class="w-full table-fixed">
              <thead>
              <tr class="text-wow-gold  bg-[#130F09]">
                  <th class="border-table-preset font-cormorant text-xl md:text-2xl">Rating</th>
                  <th class="border-table-preset text-2xl">2v2</th>
                  <th class="border-table-preset text-2xl">3v3</th>
                  <th class="border-table-preset text-2xl">5v5</th>
              </tr>
              </thead>

              <tbody>
              <tr
                  v-for="item in ratingByBracket"
                  :key="item.rating"
                  class="text-center font-semibold text-2xl"
              >
                  <td class="text-amber bg-[#130F09] border-table-preset">
                      {{ item.rating }}</td>
                  <td class="text-green border-table-preset">{{ item.bracket[2] }}</td>
                  <td class="text-blue border-table-preset">{{ item.bracket[3] }}</td>
                  <td class="text-orange border-table-preset">{{ item.bracket[5] }}</td>
              </tr>
              </tbody>
          </table>
        </div>
    </div>
</template>

<script setup>

const ratingByBracket = [
  {
    rating: 1500,
    bracket: {
      2: 845,
      3: 978,
      5: 1111,
    },
  },
  {
    rating: 1700,
    bracket: {
      2: 1398,
      3: 1619,
      5: 1839,
    },
  },
  {
    rating: 1800,
    bracket: {
      2: 1632,
      3: 1890,
      5: 2147,
    },
  },
  {
    rating: 1900,
    bracket: {
      2: 1768,
      3: 2048,
      5: 2327,
    },
  },
  {
    rating: 2000,
    bracket: {
      2: 1834,
      3: 2124,
      5: 2413,
    },
  },
  {
    rating: 2100,
    bracket: {
      2: 1863,
      3: 2157,
      5: 2451,
    },
  },
];
</script>

<style scoped>
@import '../assets/styles/main.css';
</style>
