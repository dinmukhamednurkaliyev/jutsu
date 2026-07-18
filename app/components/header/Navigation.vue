<script setup lang="ts">
interface PageLink {
  label: string;
  to: string;
}

const pages: PageLink[] = [
  { label: "Все аниме", to: "/" },
  { label: "Фильмы", to: "/movies" },
  { label: "TV сериалы", to: "/tv-series" },
  { label: "OVA", to: "/ova" },
  { label: "ONA", to: "/ona" },
  { label: "ТОП-100", to: "/top-100" },
  { label: "Онгоинги", to: "/ongoing" },
  { label: "Анонсы", to: "/announcements" },
  { label: "Расписание", to: "/schedule" },
  { label: "Рандом", to: "/random" },
];
</script>

<template>
  <nav aria-label="Основная навигация">
    <ul class="flex items-stretch">
      <li v-for="page in pages" :key="page.to" class="flex flex-1">
        <NuxtLink
          :to="page.to"
          class="flex min-h-14 flex-1 items-center justify-center px-3 text-center text-sm font-medium transition-colors hover:bg-white/5"
          active-class="bg-linear-to-r from-accent-primary to-accent-secondary"
        >
          {{ page.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
