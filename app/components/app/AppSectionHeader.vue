<script setup lang="ts">
interface Props {
  titleId: string;
  title: string;
  icon: string;
  description?: string;
}

defineProps<Props>();
</script>

<template>
  <header class="mb-6 flex items-start justify-between gap-6">
    <div>
      <div class="flex items-center gap-2">
        <Icon :name="icon" class="size-6 text-accent-start" aria-hidden="true" />

        <h2 :id="titleId" class="text-2xl font-bold tracking-tight">
          {{ title }}
        </h2>
      </div>

      <p v-if="description" class="mt-1 text-sm text-text-secondary">
        {{ description }}
      </p>
    </div>

    <slot name="actions" />
  </header>
</template>
