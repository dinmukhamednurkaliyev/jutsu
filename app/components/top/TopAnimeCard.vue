<script setup lang="ts">
import { computed } from "vue";

import type { TopAnime } from "~/types/top-anime";

interface Props {
  anime: TopAnime;
  position: number;
}

const props = defineProps<Props>();

const rankClass = computed((): string => {
  switch (props.position) {
    case 1:
      return "rank-first-gradient";

    case 2:
      return "rank-second-gradient";

    case 3:
      return "rank-third-gradient";

    default:
      return "text-white/85";
  }
});
</script>

<template>
  <div class="relative pl-10">
    <div
      :class="[
        'pointer-events-none absolute -top-10 -left-2 z-0 text-[7rem] leading-none font-black',
        rankClass,
      ]"
      aria-hidden="true"
    >
      {{ position }}
    </div>

    <NuxtLink :to="anime.to" class="group relative z-10 block">
      <div class="relative overflow-hidden rounded-2xl">
        <img
          :src="anime.image"
          :alt="anime.title"
          class="aspect-2/3 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div
          class="badge-gradient absolute top-3 right-3 rounded-full px-2.5 py-1 text-sm font-semibold"
        >
          {{ anime.rating }}
        </div>
      </div>

      <h3 class="mt-3 line-clamp-3 text-sm leading-snug font-semibold">
        {{ anime.title }}
      </h3>
    </NuxtLink>
  </div>
</template>
