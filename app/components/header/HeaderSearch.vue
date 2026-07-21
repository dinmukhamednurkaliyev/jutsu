<template>
  <form
    class="flex items-center gap-3 rounded-full bg-surface-input px-4 py-3 transition focus-within:ring-2 focus-within:ring-accent-primary"
    role="search"
    @submit.prevent
  >
    <Icon
      aria-hidden="true"
      class="shrink-0 text-text-secondary"
      name="lucide:search"
    />

    <label class="sr-only" for="header-search"> Поиск по сайту </label>

    <input
      id="header-search"
      class="min-w-0 flex-1 bg-transparent text-text-primary outline-none placeholder:text-text-secondary"
      name="query"
      placeholder="Поиск на сайте..."
      type="search"
    />
  </form>
</template>
