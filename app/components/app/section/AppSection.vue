<script setup lang="ts">
interface Props {
  labelledBy: string;
}

defineProps<Props>();
</script>

<template>
  <section :aria-labelledby="labelledBy">
    <slot />
  </section>
</template>
