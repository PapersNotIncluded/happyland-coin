<script setup lang="ts">
import { CoinHeading } from '@/shared/coin-heading'
import { CoinButton } from '@/shared/coin-button'
</script>

<template>
  <section class="flex w-full flex-col items-center justify-center gap-2 text-center">
    <div v-reveal="{ type: 'fade-up', delay: 0 }">
      <CoinHeading>Оплата и <span>оформление заказа</span></CoinHeading>
    </div>
    <h3
      v-reveal="{ type: 'fade-up', delay: 90 }"
      class="inter-700 text-[18px] md:text-[20px] lg:text-[22px]"
    >
      Медаль с двусторонней гравировкой и подарочной упаковкой
    </h3>
    <p
      v-reveal="{ type: 'fade-up', delay: 160 }"
      class="inter-700 text-[34px] md:text-[40px] lg:text-[44px]"
    >
      1690 ₽
    </p>
    <p
      v-reveal="{ type: 'fade-up', delay: 220 }"
      class="mt-4 mb-[10px] text-[16px] md:text-[18px]"
    >
      Гравировка на обеих сторонах, подарочная коробочка и стандартная доставка по России уже включены в стоимость.
    </p>
    <div v-reveal="{ type: 'fade-up', delay: 280 }">
      <CoinButton
        class="max-w-[320px]"
        button-type="default"
      >
        Заказать сейчас
      </CoinButton>
    </div>
  </section>
</template>

<style scoped></style>
