<script setup lang="ts">
import type { AnimeUpdate } from "~/types/anime-update";

interface Props {
  updates: AnimeUpdate[];
}

defineProps<Props>();
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <UpdateCard v-for="update in updates" :key="update.id" :update="update" />
  </div>
</template>
