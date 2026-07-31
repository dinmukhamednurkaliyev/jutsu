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
    <AppButton variant="secondary" size="small"> Зарегистрироваться </AppButton>

    <AppButton size="small"> Войти </AppButton>

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
