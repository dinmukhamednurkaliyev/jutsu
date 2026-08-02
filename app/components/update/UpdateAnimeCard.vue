<script setup lang="ts">
import type { AnimeUpdate } from "~/types/anime-update";

interface Props {
  update: AnimeUpdate;
}

defineProps<Props>();
</script>

<template>
  <NuxtLink :to="update.to" class="flex items-stretch gap-4 rounded-2xl bg-surface-header p-3">
    <img
      class="h-28 w-20 shrink-0 rounded-xl object-cover"
      :src="update.image"
      :alt="update.title"
    />

    <div class="min-w-0 flex-1">
      <h3 class="line-clamp-2 text-base font-semibold">
        {{ update.title }}
      </h3>

      <div class="mt-2 flex items-center gap-3">
        <time class="rounded-full bg-surface-input px-3 py-1 text-sm text-text-secondary">
          {{ update.publishedAt }}
        </time>

        <span class="badge-gradient rounded-full px-2.5 py-1 text-sm font-semibold">
          {{ update.rating }}
        </span>
      </div>

      <p class="mt-2 text-sm">
        Озвучка:
        <span class="text-text-secondary">
          {{ update.voiceover }}
        </span>
      </p>
    </div>

    <div
      class="flex w-24 shrink-0 flex-col items-center justify-center rounded-xl bg-surface-input"
    >
      <strong class="text-4xl font-bold text-accent-start">
        {{ update.episode }}
      </strong>

      <span class="text-sm font-medium"> серия </span>
    </div>
  </NuxtLink>
</template>
