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
          class="absolute top-3 right-3 rounded-full badge-gradient px-2.5 py-1 text0sm font-semibold"
        >
          {{ anime.rating }}
        </div>
      </div>

      <h3 class="mt-3 line-clamp-2 text-base font-semibold">
        {{ anime.title }}
      </h3>
    </article>
  </NuxtLink>
</template>
