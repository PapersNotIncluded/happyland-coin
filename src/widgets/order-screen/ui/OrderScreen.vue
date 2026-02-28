<script setup lang="ts">
import { CoinHeading } from '@/shared/coin-heading'
import { CoinButton } from '@/shared/coin-button'
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-1">
    <CoinHeading>Оплата и <span>оформление заказа</span></CoinHeading>
    <h3 class="inter-700 text-[22px]">Медаль с двусторонней гравировкой и подарочной упаковкой</h3>
    <p class="inter-700 text-[44px]">1690 ₽</p>
    <p class="mt-[20px] mb-[10px] text-[18px]">
      Гравировка на обеих сторонах, бархатная коробочка и стандартная доставка по России
    </p>
    <CoinButton button-type="default">Заказать сейчас</CoinButton>
  </div>
</template>

<style scoped></style>
