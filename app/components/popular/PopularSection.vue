<script setup lang="ts">
import { popularAnime } from "~/data/popular-anime";
</script>

<template>
  <section aria-labelledby="popular-section-title">
    <PopularSectionHeader />
    <PopularAnimeSlider :anime-list="popularAnime" />
  </section>
</template>
