<script setup lang="ts">
import type { TopAnime } from "~/types/top-anime";

interface Props {
  animeList: TopAnime[];
}

defineProps<Props>();
</script>

<template>
  <div class="grid grid-cols-5 gap-10">
    <TopAnimeCard
      v-for="(anime, index) in animeList"
      :key="anime.id"
      :anime="anime"
      :position="index + 1"
    />
  </div>
</template>
