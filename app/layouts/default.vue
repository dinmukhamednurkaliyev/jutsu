<script setup lang="ts">
import BrandLogo from "~/components/BrandLogo.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header
      class="w-full bg-background-secondary border-b border-background-secondary"
    >
      <div class="container mx-auto px-4 h-16 flex items-center">
        <BrandLogo />
      </div>
    </header>

    <main class="grow">
      <slot />
    </main>

    <footer class="w-full py-8 bg-background-secondary mt-auto">
      <div
        class="container mx-auto px-4 text-center text-on-background-secondary text-sm"
      >
        © 2020-2026 Jut-su.net. ДжутСУ/ДжитСУ All Rights Reserved
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
