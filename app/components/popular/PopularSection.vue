<script setup lang="ts">
import { popularAnime } from "~/data/popular-anime";
</script>

<template>
  <AppSection labelled-by="popular-section-title">
    <AppSectionHeader
      title-id="popular-section-title"
      title="Самое популярное"
      description="Самые популярные тайтлы на сайте за всё время"
      icon="lucide:star"
    />

    <PopularAnimeSlider :anime-list="popularAnime" />
  </AppSection>
</template>
