<script setup lang="ts">
import type { HeroSlide } from "~/types/hero-slider";

interface Props {
  slides: HeroSlide[];
  activeIndex: number;
}

interface Emits {
  select: [index: number];
}

defineProps<Props>();

const emit = defineEmits<Emits>();

function selectSlide(index: number): void {
  emit("select", index);
}
</script>

<template>
  <nav
    class="absolute bottom-10 left-20 z-30 flex gap-3"
    aria-label="Выбор слайда"
  >
    <button
      v-for="(slide, index) in slides"
      :key="slide.id"
      type="button"
      :aria-label="`Показать слайд ${index + 1}: ${slide.title}`"
      :aria-current="index === activeIndex ? 'true' : undefined"
      :class="[
        'size-4 rounded-full transition-colors',
        index === activeIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/60',
      ]"
      @click="selectSlide(index)"
    />
  </nav>
</template>
