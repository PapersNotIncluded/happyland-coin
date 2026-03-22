<script setup lang="ts">
import { CoinHeading } from '@/shared/coin-heading'
import { CoinButton } from '@/shared/coin-button'
</script>

<template>
  <section class="flex w-full flex-col items-center justify-center gap-2 text-center">
    <CoinHeading>Оплата и <span>оформление заказа</span></CoinHeading>
    <h3 class="inter-700 text-[18px] md:text-[20px] lg:text-[22px]">
      Медаль с двусторонней гравировкой и подарочной упаковкой
    </h3>
    <p class="inter-700 text-[34px] md:text-[40px] lg:text-[44px]">1690 ₽</p>
    <p class="mt-4 mb-[10px] text-[16px] md:text-[18px]">
      Гравировка на обеих сторонах, бархатная коробочка и стандартная доставка по России
    </p>
    <CoinButton
      class="max-w-[320px]"
      button-type="default"
    >
      Заказать сейчас
    </CoinButton>
  </section>
</template>

<style scoped></style>
