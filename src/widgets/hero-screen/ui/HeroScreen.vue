<script setup lang="ts">
import { CoinHeading } from '@/shared/coin-heading'
import { CoinButton } from '@/shared/coin-button'
import { openQuestionModal } from '@/shared/composables/useQuestionModal'
</script>

<template>
  <section class="flex w-full flex-col-reverse items-center gap-8 pt-2 lg:flex-row lg:justify-between lg:gap-10">
    <div class="flex w-full max-w-[800px] flex-col gap-4 text-center lg:text-left">
      <CoinHeading>Happy Coin — <span>медаль любви</span> с&nbsp;вашими словами</CoinHeading>
      <p class="text-[18px] md:text-[20px] lg:text-[24px]">
        Круглая медаль с вращающимся сердечком, на которой выгравирован именно ваш текст. Уникальный подарок,
        который останется в сердце навсегда.
      </p>
      <div class="flex w-full flex-col gap-3 md:flex-row md:flex-wrap lg:w-auto">
        <CoinButton :button-type="'default'">Создать свою медаль</CoinButton>
        <CoinButton
          :button-type="'outline'"
          @click="openQuestionModal"
        >
          Задайте нам вопрос
        </CoinButton>
      </div>
    </div>
    <div class="w-full max-w-[220px] md:max-w-[320px] lg:max-w-[400px]">
      <img
        alt="Medal image"
        class="h-auto w-full"
        src="@/shared/assets/medal.png"
      />
    </div>
  </section>
</template>

<style scoped></style>
