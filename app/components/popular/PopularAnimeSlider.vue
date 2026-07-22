<script setup lang="ts">
import type { Anime } from "~/types/anime";

interface Props {
  animeList: Anime[];
}

defineProps<Props>();
</script>
<template>
  <div class="grid grid-cols-5 gap-6">
    <PopularAnimeCard
      v-for="anime in animeList"
      :key="anime.id"
      :anime="anime"
    />
  </div>
</template>
