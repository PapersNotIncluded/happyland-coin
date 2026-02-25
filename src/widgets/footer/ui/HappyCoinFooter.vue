<script setup lang="ts">
const currentYear = new Date().getFullYear()
const copyrightPeriod = `2026 ${currentYear === 2026 ? '' : '- ' + currentYear}`
</script>

<template>
  <footer class="mx-auto my-0 w-fit">
    <p>&#169; {{ copyrightPeriod }}</p>
  </footer>
</template>

<style scoped></style>
