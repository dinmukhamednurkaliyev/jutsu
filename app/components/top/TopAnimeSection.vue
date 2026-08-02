<script setup lang="ts">
import { topAnime } from "~/data/top-anime";
</script>

<template>
  <AppSection labelled-by="top-section-title">
    <TopAnimeSectionHeader />

    <div class="mt-12">
      <TopAnimeGrid :anime-list="topAnime" />
    </div>
  </AppSection>
</template>
