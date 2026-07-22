<script setup lang="ts">
import type { HeroSlide } from "~/types/hero-slider";

interface Props {
  slide: HeroSlide;
}

defineProps<Props>();
</script>

<template>
  <div class="relative h-120">
    <img
      class="relative z-0 h-full w-full object-cover"
      :src="slide.image"
      :alt="slide.title"
    />

    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 z-10 bg-linear-to-r from-black via-black/40 to-transparent"
    />

    <div class="absolute inset-0 z-20 flex items-center px-20">
      <div class="flex max-w-xl flex-col items-start gap-8">
        <h2 class="text-5xl leading-tight font-extrabold tracking-tight">
          {{ slide.title }}
        </h2>

        <NuxtLink
          :to="slide.actionTo"
          class="inline-flex items-center justify-center rounded-full accent-gradient px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
        >
          {{ slide.actionLabel }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
