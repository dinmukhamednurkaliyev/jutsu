<script setup lang="ts">
import type { Comment } from "~/types/comment";

interface Props {
  comment: Comment;
}

defineProps<Props>();
</script>

<template>
  <article class="flex h-full flex-col rounded-3xl bg-surface-header p-6">
    <div class="flex items-center gap-3">
      <NuxtLink
        :to="comment.authorTo"
        :aria-label="`Перейти в профиль ${comment.author}`"
        class="shrink-0"
      >
        <img
          :src="comment.avatar"
          :alt="comment.author"
          class="size-12 rounded-full object-cover"
        />
      </NuxtLink>

      <div class="min-w-0">
        <h3>
          <NuxtLink
            :to="comment.authorTo"
            class="font-semibold transition-colors hover:text-accent-start"
          >
            {{ comment.author }}
          </NuxtLink>
        </h3>

        <time class="block text-xs text-text-secondary">
          {{ comment.publishedAt }}
        </time>
      </div>
    </div>

    <p class="mt-5 flex-1 text-sm leading-relaxed">
      {{ comment.message }}
    </p>

    <NuxtLink
      :to="comment.animeTo"
      class="mt-5 flex items-center gap-2 rounded-full bg-surface-input px-4 py-2 text-sm transition-colors hover:bg-accent-start"
    >
      <Icon name="lucide:map-pin" class="size-4 shrink-0" aria-hidden="true" />

      <span class="truncate">
        {{ comment.animeTitle }}
      </span>
    </NuxtLink>
  </article>
</template>
