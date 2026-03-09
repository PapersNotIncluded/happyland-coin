<script setup lang="ts">
import { CoinTag } from '@/shared/coin-tag'
import { CoinHeading } from '@/shared/coin-heading'

const reviewsContent = [
  {
    text: '«Подарила мужу на годовщину. Он был в слезах! Текст получился именно таким, как я хотела. Упаковка просто волшебная — как будто из ювелирного магазина.»',
    name: '— Анна К., Москва',
    number: '5000+',
    title: 'Счастливых заказов',
  },
  {
    text: '«Заказывал для девушки на День Святого Валентина. Медаль пришла за 2 дня, всё идеально. Гравировка чёткая, сердечко крутится — это так мило! Буду заказывать ещё.»',
    name: '— Дмитрий С., Мурманск',
    number: '4.9★',
    title: 'Средняя оценка',
  },
  {
    text: '«Уже третий заказ — дарю близким на все праздники. Каждый раз восторг и слёзы радости. Спасибо Happy Coin за такие тёплые эмоции!»',
    name: '— Марина В., Екатеринбург',
    number: '98%',
    title: 'Рекомендуют друзьям',
  },
]
</script>

<template>
  <div class="mt-20 mb-20 flex flex-col">
    <CoinTag tag-type="outline">Отзывы</CoinTag>
    <CoinHeading>Истории <span>счастливых</span> покупателей</CoinHeading>
    <div class="review__wrapper">
      <div
        v-for="review in reviewsContent"
        :key="review.title"
        class="flex max-w-[400px] flex-col items-center gap-4"
      >
        <div
          class="relative flex h-full flex-col justify-center gap-4 rounded-[10px] border-2 border-[#C0C1D7] p-[20px]"
        >
          <p>{{ review.text }}</p>
          <p class="inter-600">{{ review.name }}</p>
          <img
            alt="Quotes icon"
            class="absolute top-0 left-0 w-[26px] translate-[-10px]"
            src="@/shared/assets/quotes.svg"
          />
          <img
            alt="Quotes icon"
            class="absolute right-0 bottom-0 w-[26px] translate-[10px] rotate-180"
            src="@/shared/assets/quotes.svg"
          />
        </div>
        <div class="w-fit text-center">
          <p class="inter-700 text-[60px]">{{ review.number }}</p>
          <p class="inter-700 text-[22px]">{{ review.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.review {
  &__wrapper {
    display: grid;
    grid-template: 1fr / repeat(3, 1fr);
    margin: 40px 0 0 0;
    gap: 20px;
    color: #272525;
    font-size: 18px;
  }
}
</style>
