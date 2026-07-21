<script setup lang="ts">
import { headerNavigationItems } from "~/data/header-navigation";
</script>

<template>
  <nav aria-label="Основная навигация">
    <ul class="flex items-stretch">
      <li
        v-for="item in headerNavigationItems"
        :key="item.to"
        class="flex flex-1"
      >
        <NuxtLink
          :to="item.to"
          :exact="item.to === '/'"
          active-class="bg-linear-to-r from-accent-primary to-accent-secondary"
          class="flex min-h-14 flex-1 items-center justify-center px-3 text-center text-sm font-medium transition-colors hover:bg-white/5"
        >
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
