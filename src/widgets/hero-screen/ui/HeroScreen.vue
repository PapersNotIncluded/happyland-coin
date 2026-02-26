<script setup lang="ts">
import { CoinHeading } from '../../../shared/coin-heading'
import { CoinButton } from '@/shared/coin-button'
</script>

<template>
  <div class="flex items-center justify-center gap-10">
    <div class="flex max-w-[800px] flex-col gap-4">
      <CoinHeading>Happy Coin — <span>медаль любви</span> с&nbsp;вашими словами</CoinHeading>
      <p class="text-[24px]">
        Круглая медаль с вращающимся сердечком, на которой выгравирован именно ваш текст. Уникальный подарок, который
        останется в сердце навсегда.
      </p>
      <div class="flex gap-4">
        <CoinButton :button-type="'default'">Создать свою медаль</CoinButton>
        <CoinButton :button-type="'outline'">Задайте нам вопрос</CoinButton>
      </div>
    </div>
    <div class="max-w-[400px]">
      <img
        alt="Medal image"
        src="@/shared/assets/medal.png"
      />
    </div>
  </div>
</template>

<style scoped></style>
