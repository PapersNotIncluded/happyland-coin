<script setup lang="ts">
import DefaultLayout from '../app/layouts/DefaultLayout.vue'
import { HeroScreen } from '@/widgets/hero-screen'
import { StepsScreen } from '@/widgets/steps-screen'
import { AboutScreen } from '@/widgets/about-screen'
</script>

<template>
  <default-layout>
    <div class="mx-auto w-full flex-col items-center">
      <HeroScreen />
      <AboutScreen />
      <StepsScreen />
    </div>
  </default-layout>
</template>

<style scoped></style>
