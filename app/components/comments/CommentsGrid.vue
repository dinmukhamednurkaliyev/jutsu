<script setup lang="ts">
import type { Comment } from "~/types/comment";

interface Props {
  comments: Comment[];
}

defineProps<Props>();
</script>

<template>
  <div class="grid grid-cols-2 gap-6">
    <CommentsCard v-for="comment in comments" :key="comment.id" :comment="comment" />
  </div>
</template>
