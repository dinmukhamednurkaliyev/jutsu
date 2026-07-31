<script setup lang="ts">
type ButtonVariant = "primary" | "secondary";
type ButtonSize = "small" | "medium";

interface Props {
  to?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const props = withDefaults(defineProps<Props>(), {
  to: undefined,
  variant: "primary",
  size: "medium",
});

const componentName = computed(() => {
  return props.to ? resolveComponent("NuxtLink") : "button";
});

const variantClasses: Record<ButtonVariant, string> = {
  primary: "accent-gradient text-white hover:opacity-90",
  secondary: "bg-surface-input text-white hover:bg-zinc-600",
};

const sizeClasses: Record<ButtonSize, string> = {
  small: "px-5 py-2.5 text-sm",
  medium: "px-6 py-3 text-sm",
};
</script>

<template>
  <component
    :is="componentName"
    :to="to"
    :type="to ? undefined : 'button'"
    :class="[
      'inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none',
      variantClasses[variant],
      sizeClasses[size],
    ]"
  >
    <slot />
  </component>
</template>
