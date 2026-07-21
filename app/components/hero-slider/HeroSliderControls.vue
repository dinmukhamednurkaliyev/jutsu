<script setup lang="ts">
interface Emits {
  previous: [];
  next: [];
}

const emit = defineEmits<Emits>();
</script>

<template>
  <button
    type="button"
    class="absolute top-1/2 left-0 z-30 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-surface-input text-white transition-colors hover:bg-zinc-600 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
    aria-label="Предыдущий слайд"
    @click="emit('previous')"
  >
    <Icon aria-hidden="true" class="size-5" name="lucide:chevron-left" />
  </button>

  <button
    type="button"
    class="absolute top-1/2 right-0 z-30 flex size-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-surface-input text-white transition-colors hover:bg-zinc-600 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
    aria-label="Следующий слайд"
    @click="emit('next')"
  >
    <Icon aria-hidden="true" class="size-5" name="lucide:chevron-right" />
  </button>
</template>
