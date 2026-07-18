<script setup lang="ts">
interface HeroSlide {
  id: number;
  title: string;
  image: string;
  actionLabel: string;
  actionTo: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    title: "Наруто",
    image: "/images/hero/naruto.webp",
    actionLabel: "Посмотреть топовый сериал",
    actionTo: "/anime/naruto",
  },
];
</script>

<template>
  <section class="overflow-hidden rounded-3xl" aria-label="Рекомендуемые аниме">
    <div class="relative h-96" v-for="slide in slides" :key="slide.id">
      <img
        class="h-full w-full object-cover"
        :src="slide.image"
        :alt="slide.title"
      />
      <div
        class="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"
        aria-hidden="true"
      />
      <div class="absolute inset-0 flex items-center">
        <div class="max-w-xl px-10">
          <div class="flex flex-col items-start gap-6">
            <h2 class="text-5xl font-extrabold tracking-tight">
              {{ slide.title }}
            </h2>
            <NuxtLink
              :to="slide.actionTo"
              class="inline-flex items-center justify-center rounded-full bg-linear-to-r from-accent-primary to-accent-secondary px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90"
            >
              {{ slide.actionLabel }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
