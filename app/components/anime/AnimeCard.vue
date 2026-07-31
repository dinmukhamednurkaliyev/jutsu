<script setup lang="ts">
import type { Anime } from "~/types/anime";

interface Props {
  anime: Anime;
}
defineProps<Props>();
</script>

<template>
  <NuxtLink class="group block" :to="anime.to">
    <article>
      <div class="relative overflow-hidden rounded-2xl">
        <img
          class="aspect-2/3 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          :src="anime.image"
          :alt="anime.title"
        />
        <div
          class="badge-gradient absolute top-3 right-3 rounded-full px-2.5 py-1 text-sm font-semibold"
        >
          {{ anime.rating }}
        </div>
        <div
          v-if="anime.episodes"
          class="absolute bottom-3 left-3 rounded-full bg-accent-start px-2.5 py-1 text-xs font-semibold"
        >
          {{ anime.episodes }}
        </div>
      </div>

      <div class="mt-3">
        <h3 class="line-clamp-2 text-sm leading-snug font-semibold">
          {{ anime.title }}
        </h3>
      </div>
    </article>
  </NuxtLink>
</template>
