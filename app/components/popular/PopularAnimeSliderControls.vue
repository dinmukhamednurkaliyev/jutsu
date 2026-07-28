<script setup lang="ts">
interface Props {
  showPrevious: boolean;
  showNext: boolean;
}

interface Emits {
  previous: [];
  next: [];
}

defineProps<Props>();

const emit = defineEmits<Emits>();
</script>

<template>
  <button
    v-if="showPrevious"
    type="button"
    class="absolute top-[calc(50%-1.5rem)] left-0 z-30 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-surface-input text-white transition-colors hover:bg-zinc-600 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
    aria-label="Показать предыдущие аниме"
    @click="emit('previous')"
  >
    <Icon name="lucide:chevron-left" class="size-5" aria-hidden="true" />
  </button>

  <button
    v-if="showNext"
    type="button"
    class="absolute top-[calc(50%-1.5rem)] right-0 z-30 flex size-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-surface-input text-white transition-colors hover:bg-zinc-600 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
    aria-label="Показать следующие аниме"
    @click="emit('next')"
  >
    <Icon name="lucide:chevron-right" class="size-5" aria-hidden="true" />
  </button>
</template>
