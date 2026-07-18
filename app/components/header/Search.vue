<script setup lang="ts"></script>

<template>
  <label
    for="search"
    class="flex items-center gap-3 rounded-full bg-surface-input px-4 py-3 transition focus-within:ring-2 focus-within:ring-accent-primary"
  >
    <Icon
      name="lucide:search"
      class="shrink-0 text-text-secondary"
      aria-hidden="true"
    />

    <input
      id="search"
      class="min-w-0 flex-1 bg-transparent text-text-primary outline-none placeholder:text-text-secondary"
      type="search"
      placeholder="Поиск на сайте..."
    />
  </label>
</template>
