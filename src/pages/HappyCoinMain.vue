<script setup lang="ts">
import DefaultLayout from '../app/layouts/DefaultLayout.vue'
import { HeroScreen } from '@/widgets/hero-screen'
import { StepsScreen } from '@/widgets/steps-screen'
import { AboutScreen } from '@/widgets/about-screen'
import { ReviewScreen } from '@/widgets/review-screen'
import ConstructorScreen from '@/widgets/constructor-screen/ui/ConstructorScreen.vue'
import FaqScreen from '@/widgets/faq-screen/ui/FaqScreen.vue'
import { OrderScreen } from '@/widgets/order-screen'
import { CallbackScreen } from '@/widgets/callback-screen'
</script>

<template>
  <default-layout>
    <div class="mx-auto w-full flex-col items-center">
      <HeroScreen />
      <AboutScreen />
      <StepsScreen />
      <ConstructorScreen />
      <ReviewScreen />
      <FaqScreen />
      <OrderScreen />
      <CallbackScreen />
    </div>
  </default-layout>
</template>

<style scoped></style>
