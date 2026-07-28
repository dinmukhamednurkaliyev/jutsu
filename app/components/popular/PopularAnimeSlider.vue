<script setup lang="ts">
import type { Anime } from "~/types/anime";

interface Props {
  animeList: Anime[];
}

const props = defineProps<Props>();

const visibleItemCount = 5;
const activeIndex = ref(0);

const visibleAnime = computed<Anime[]>(() => {
  return props.animeList.slice(
    activeIndex.value,
    activeIndex.value + visibleItemCount,
  );
});

const canShowPrevious = computed<boolean>(() => {
  return activeIndex.value > 0;
});

const canShowNext = computed<boolean>(() => {
  return activeIndex.value < props.animeList.length - visibleItemCount;
});

function showPreviousCards(): void {
  if (!canShowPrevious.value) {
    return;
  }

  activeIndex.value--;
}

function showNextCards(): void {
  if (!canShowNext.value) {
    return;
  }

  activeIndex.value++;
}
</script>

<template>
  <div class="relative">
    <div class="grid grid-cols-5 gap-6">
      <PopularAnimeCard
        v-for="anime in visibleAnime"
        :key="anime.id"
        :anime="anime"
      />
    </div>

    <PopularAnimeSliderControls
      :show-previous="canShowPrevious"
      :show-next="canShowNext"
      @previous="showPreviousCards"
      @next="showNextCards"
    />
  </div>
</template>
