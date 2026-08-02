<script setup lang="ts">
import { catalogAnime } from "~/data/catalog-anime";
</script>

<template>
  <AppSection labelled-by="catalog-section-title">
    <AppSectionHeader
      title-id="catalog-section-title"
      title="Смотреть аниме на jut-su"
      description="Все доступные к просмотру аниме"
      icon="lucide:circle-play"
    >
      <template #actions>
        <AppButton size="small">
          <Icon name="lucide:list-filter" class="size-4" aria-hidden="true" />

          Фильтр
        </AppButton>
      </template>
    </AppSectionHeader>

    <CatalogAnimeGrid :anime-list="catalogAnime" />

    <div class="mt-12 flex justify-center">
      <AppButton>
        Показать ещё

        <Icon name="lucide:arrow-right" class="size-4" aria-hidden="true" />
      </AppButton>
    </div>
  </AppSection>
</template>
