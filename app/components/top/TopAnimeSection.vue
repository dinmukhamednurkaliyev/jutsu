<script setup lang="ts">
import { topAnime } from "~/data/top-anime";
</script>

<template>
  <AppSection labelled-by="top-section-title">
    <div class="text-center">
      <Icon name="lucide:award" class="mx-auto text-accent-start" aria-hidden="true" size="24" />
      <h2 id="top-section-title" class="mt-2 text-xl font-bold">Пять топовых аниме по запросам</h2>
      <p class="mt-2 font-semibold text-accent-start">наших пользователей!</p>
    </div>

    <div class="mt-12">
      <TopAnimeGrid :anime-list="topAnime" />
    </div>
  </AppSection>
</template>
