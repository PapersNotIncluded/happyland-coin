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
import { QuestionModal } from '@/widgets/question-modal'
</script>

<template>
  <default-layout>
    <div class="mx-auto flex w-full flex-col gap-16 pb-12 md:gap-20 md:pb-16 lg:gap-24 lg:pb-20">
      <section
        id="hero"
        class="scroll-mt-24 md:scroll-mt-28"
      >
        <HeroScreen />
      </section>
      <section
        id="about"
        class="scroll-mt-24 md:scroll-mt-28"
      >
        <AboutScreen />
      </section>
      <StepsScreen />
      <section
        id="constructor"
        class="scroll-mt-24 md:scroll-mt-28"
      >
        <ConstructorScreen />
      </section>
      <ReviewScreen />
      <section
        id="faq"
        class="scroll-mt-24 md:scroll-mt-28"
      >
        <FaqScreen />
      </section>
      <QuestionModal />
      <OrderScreen />
      <section
        id="contacts"
        class="scroll-mt-24 md:scroll-mt-28"
      >
        <CallbackScreen />
      </section>
    </div>
  </default-layout>
</template>
<style scoped></style>
