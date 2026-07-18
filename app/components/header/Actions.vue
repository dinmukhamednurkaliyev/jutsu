<script setup lang="ts"></script>

<template>
  <div class="flex shrink-0 items-center gap-3">
    <button
      class="rounded-full bg-surface-input px-8 py-3 text-sm font-medium transition-opacity hover:opacity-90"
      type="button"
    >
      Зарегистрироваться
    </button>

    <button
      class="rounded-full bg-linear-to-r from-accent-primary to-accent-secondary px-8 py-3 text-sm font-medium transition-opacity hover:opacity-90"
      type="button"
    >
      Войти
    </button>

    <button
      class="flex size-11 items-center justify-center rounded-full bg-surface-input transition-opacity hover:opacity-90"
      type="button"
      aria-label="Переключить тему"
    >
      <Icon name="lucide:sun" aria-hidden="true" />
    </button>
  </div>
</template>
