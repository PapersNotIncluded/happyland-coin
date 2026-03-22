<script setup lang="ts">
const currentYear = new Date().getFullYear()
const copyrightPeriod = currentYear === 2026 ? '2026' : `2026–${currentYear}`
</script>

<template>
  <footer
    class="mx-auto mt-12 flex w-full max-w-5xl flex-wrap items-center justify-center gap-2 border-t border-gray-200 px-4 py-6 text-center text-sm text-gray-500"
  >
    <span class="font-medium text-gray-700">HappyLand Coin</span>
    <span
      class="h-4 w-px bg-gray-200"
      aria-hidden="true"
    ></span>
    <span>© {{ copyrightPeriod }}</span>
  </footer>
</template>

<style scoped></style>
