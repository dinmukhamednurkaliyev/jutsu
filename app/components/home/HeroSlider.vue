<script setup lang="ts">
import HeroSliderControls from "./HeroSliderControls.vue";
import HeroSliderPagination from "./HeroSliderPagination.vue";
import HeroSliderSlide from "./HeroSliderSlide.vue";

import { heroSlides } from "~/types/hero-slides";
import type { HeroSlide } from "~/types/hero-slider";

const activeSlideIndex = ref(0);

const activeSlide = computed<HeroSlide>(() => {
  return heroSlides[activeSlideIndex.value] ?? heroSlides[0]!;
});

function selectSlide(index: number): void {
  activeSlideIndex.value = index;
}

function showPreviousSlide(): void {
  activeSlideIndex.value =
    (activeSlideIndex.value - 1 + heroSlides.length) % heroSlides.length;
}

function showNextSlide(): void {
  activeSlideIndex.value = (activeSlideIndex.value + 1) % heroSlides.length;
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
        :slides="heroSlides"
        :active-index="activeSlideIndex"
        @select="selectSlide"
      />
    </section>

    <HeroSliderControls @previous="showPreviousSlide" @next="showNextSlide" />
  </div>
</template>
