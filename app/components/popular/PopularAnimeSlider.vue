<script setup lang="ts">
import type { Anime } from "~/types/anime";

interface Props {
  animeList: Anime[];
}

const props = defineProps<Props>();

const visibleItemCount = 5;
const activeIndex = ref(0);

const visibleAnime = computed<Anime[]>(() => {
  return props.animeList.slice(activeIndex.value, activeIndex.value + visibleItemCount);
});

const canShowPrevious = computed<boolean>(() => {
  return activeIndex.value > 0;
});

const canShowNext = computed<boolean>(() => {
  return activeIndex.value < props.animeList.length - visibleItemCount;
});

function showPrevious(): void {
  if (!canShowPrevious.value) {
    return;
  }

  activeIndex.value--;
}

function showNext(): void {
  if (!canShowNext.value) {
    return;
  }

  activeIndex.value++;
}
</script>

<template>
  <div class="relative">
    <PopularAnimeGrid :anime-list="visibleAnime" />

    <PopularAnimeSliderControls
      :show-previous="canShowPrevious"
      :show-next="canShowNext"
      @previous="showPrevious"
      @next="showNext"
    />
  </div>
</template>
