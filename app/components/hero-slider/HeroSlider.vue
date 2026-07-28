<script setup lang="ts">
import { heroSlides } from "~/data/hero-slides";
import type { HeroSlide } from "~/types/hero-slider";

const activeSlideIndex = ref(0);

const activeSlide = computed<HeroSlide>(() => {
  return heroSlides[activeSlideIndex.value] ?? heroSlides[0]!;
});

const canShowPrevious = computed<boolean>(() => {
  return activeSlideIndex.value > 0;
});

const canShowNext = computed<boolean>(() => {
  return activeSlideIndex.value < heroSlides.length - 1;
});

function selectSlide(index: number): void {
  activeSlideIndex.value = index;
}

function showPreviousSlide(): void {
  if (!canShowPrevious.value) {
    return;
  }

  activeSlideIndex.value--;
}

function showNextSlide(): void {
  if (!canShowNext.value) {
    return;
  }

  activeSlideIndex.value++;
}
</script>

<template>
  <div class="relative">
    <section
      class="relative overflow-hidden rounded-3xl"
      aria-label="Рекомендуемые аниме"
    >
      <HeroSliderSlide :slide="activeSlide" />

      <HeroSliderPagination
        v-if="heroSlides.length > 1"
        :slides="heroSlides"
        :active-index="activeSlideIndex"
        @select="selectSlide"
      />
    </section>

    <HeroSliderControls
      :show-previous="canShowPrevious"
      :show-next="canShowNext"
      @previous="showPreviousSlide"
      @next="showNextSlide"
    />
  </div>
</template>
