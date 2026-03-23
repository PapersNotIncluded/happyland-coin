<script setup lang="ts">
import { CoinHeading } from '@/shared/coin-heading'
import { CoinTag } from '@/shared/coin-tag'

const stepsItems = [
  {
    title: 'Ввод текста',
    text: 'Введите ваш уникальный текст',
  },
  {
    title: 'Гравировка',
    text: 'Мы выгравируем и упакуем медаль',
  },
  {
    title: 'Доставка',
    text: 'Доставим в индивидуальной коробке',
  },
]
</script>

<template>
  <section class="flex w-full flex-col gap-2">
    <div v-reveal="{ type: 'fade-in', delay: 0 }">
      <CoinTag :tag-type="'outline'">Как это работает</CoinTag>
    </div>
    <div v-reveal="{ type: 'fade-up', delay: 80 }">
      <CoinHeading>Три шага до <span>идеального подарка</span></CoinHeading>
    </div>
    <div class="steps__wrapper">
      <div
        v-for="(item, i) in stepsItems"
        :key="item.title"
        v-reveal="{ type: 'fade-up', delay: 140 + i * 100 }"
        :class="[
          'flex w-full max-w-none flex-col items-center rounded-[10px] border-4 border-[#4950BC] p-4 text-center lg:max-w-[240px]',
          i === 1 ? 'lg:translate-y-[50%]' : i === 2 ? 'lg:translate-y-[100%]' : '',
        ]"
      >
        <p class="inter-600 text-[20px] md:text-[22px]">{{ item.title }}</p>
        <p class="text-center text-[16px] md:text-[18px]">{{ item.text }}</p>
      </div>
    </div>
    <p
      v-reveal="{ type: 'fade-up', delay: 260 }"
      class="text-center text-[16px] md:text-[18px]"
    >
      От идеи до подарка — всего несколько минут. Вы придумываете слова, мы воплощаем их в металле и доставляем в
      красивой коробочке.
    </p>
  </section>
</template>

<style scoped lang="scss">
.steps {
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 16px;
    margin: 10px 0 20px;

    @media (min-width: 1024px) {
      grid-template: repeat(2, 1fr) / repeat(3, 1fr);
    }
  }
}
</style>
