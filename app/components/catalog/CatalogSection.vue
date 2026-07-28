<template>
  <AppSection labelled-by="anime-catalog-title">
    <AppSectionHeader
      title-id="anime-catalog-title"
      title="Смотреть аниме на jut-su"
      description="Все доступные к просмотру аниме"
      icon="lucide:circle-play"
    >
      <template #actions>
        <button
          type="button"
          class="accent-gradient inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
        >
          <Icon name="lucide:list-filter" class="size-4" aria-hidden="true" />

          Фильтр
        </button>
      </template>
    </AppSectionHeader>
  </AppSection>
</template>
