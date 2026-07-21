<template>
  <div class="min-h-screen">
    <div class="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Header />

      <main class="mt-12">
        <slot />
      </main>

      <Footer />
    </div>
  </div>
</template>
