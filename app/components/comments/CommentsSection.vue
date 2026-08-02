<script setup lang="ts">
import { comments } from "~/data/comments";
</script>

<template>
  <AppSection labelled-by="comments-section-title">
    <AppSectionHeader
      title-id="comments-section-title"
      title="Комментарии"
      description="Обсуждение деталей с другими зрителями"
      icon="lucide:messages-square"
    />

    <CommentsGrid :comments="comments" />
  </AppSection>
</template>
