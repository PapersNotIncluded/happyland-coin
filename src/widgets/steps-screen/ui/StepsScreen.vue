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
  <div class="flex flex-col gap-2">
    <CoinTag :tag-type="'outline'">Как это работает</CoinTag>
    <CoinHeading>Три шага до <span>идеального подарка</span></CoinHeading>
    <div class="steps__wrapper">
      <div
        v-for="(item, i) in stepsItems"
        :key="item.title"
        :class="[
          'flex max-w-[240px] flex-col items-center rounded-[10px] border-4 border-[#4950BC] p-4',
          i === 1 ? 'translate-y-[50%]' : i === 2 ? 'translate-y-[100%]' : '',
        ]"
      >
        <p class="inter-600 text-[22px]">{{ item.title }}</p>
        <p class="text-center text-[18px]">{{ item.text }}</p>
      </div>
    </div>
    <p class="text-center text-[18px]">
      От идеи до подарка — всего несколько минут. Вы придумываете слова, мы воплощаем их в металле и доставляем в
      красивой коробочке.
    </p>
  </div>
</template>

<style scoped lang="scss">
.steps {
  &__wrapper {
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(3, 1fr);
    justify-items: center;
    margin: 10px 0 20px;
  }
}
</style>
