<script setup lang="ts">
interface Emits {
  register: [];
  login: [];
  toggleTheme: [];
}

const emit = defineEmits<Emits>();
</script>

<template>
  <div class="flex shrink-0 items-center gap-3">
    <button
      class="rounded-full bg-surface-input px-8 py-3 text-sm font-medium transition-opacity hover:opacity-90"
      type="button"
      @click="emit('register')"
    >
      Зарегистрироваться
    </button>

    <button
      class="rounded-full bg-linear-to-r from-accent-primary to-accent-secondary px-8 py-3 text-sm font-medium transition-opacity hover:opacity-90"
      type="button"
      @click="emit('login')"
    >
      Войти
    </button>

    <button
      aria-label="Переключить тему"
      class="flex size-11 items-center justify-center rounded-full bg-surface-input transition-opacity hover:opacity-90"
      type="button"
      @click="emit('toggleTheme')"
    >
      <Icon aria-hidden="true" name="lucide:sun" />
    </button>
  </div>
</template>
