<script setup lang="ts">
interface FooterLink {
  label: string;
  to: string;
}

const footerLinks: FooterLink[] = [
  {
    label: "Политика конфиденциальности",
    to: "/privacy",
  },
  {
    label: "Для правообладателей",
    to: "/copyright",
  },
  {
    label: "Карта сайта",
    to: "/sitemap",
  },
  {
    label: "Главная",
    to: "/",
  },
];
</script>

<template>
  <footer class="border-t border-white/10 bg-black">
    <div
      class="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 lg:flex-row lg:items-center lg:justify-between"
    >
      <p class="text-center text-sm text-text-secondary lg:text-left">
        © 2026 JUT-SU. Учебный проект.
      </p>

      <nav aria-label="Дополнительная навигация">
        <ul class="flex flex-wrap justify-center gap-3 lg:justify-end">
          <li v-for="link in footerLinks" :key="link.to">
            <AppButton :to="link.to" size="small">
              {{ link.label }}
            </AppButton>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
