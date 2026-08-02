<script setup lang="ts">
import { animeUpdates } from "~/data/anime-updates";
</script>

<template>
  <AppSection labelled-by="updates-section-title">
    <AppSectionHeader
      title-id="updates-section-title"
      title="Обновления аниме"
      description="Актуальные серии для просмотра"
      icon="lucide:refresh-cw"
    />

    <UpdateAnimeGrid :updates="animeUpdates" />

    <div class="mt-12 flex justify-center">
      <AppButton>
        Показать ещё

        <Icon name="lucide:arrow-right" class="size-4" aria-hidden="true" />
      </AppButton>
    </div>
  </AppSection>
</template>
