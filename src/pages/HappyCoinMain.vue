<script setup lang="ts">
import DefaultLayout from '../app/layouts/DefaultLayout.vue'
import { HeroScreen } from '../widgets/hero-screen'
</script>

<template>
  <default-layout>
    <div class="mx-auto w-full flex-col items-center">
      <HeroScreen />
    </div>
  </default-layout>
</template>

<style scoped></style>
