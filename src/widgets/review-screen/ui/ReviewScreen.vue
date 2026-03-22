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
  <section class="my-12 flex w-full flex-col md:my-16 lg:my-20">
    <CoinTag tag-type="outline">Отзывы</CoinTag>
    <CoinHeading>Истории <span>счастливых</span> покупателей</CoinHeading>
    <div class="review__wrapper">
      <div
        v-for="review in reviewsContent"
        :key="review.title"
        class="flex max-w-[400px] flex-col items-center gap-4"
      >
        <div
          class="relative flex h-full flex-col justify-center gap-4 rounded-[10px] border-2 border-[#C0C1D7] p-4 md:p-5"
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
          <p class="inter-700 text-[42px] md:text-[50px] lg:text-[60px]">{{ review.number }}</p>
          <p class="inter-700 text-[20px] md:text-[22px]">{{ review.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.review {
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr;
    margin: 40px 0 0 0;
    gap: 20px;
    color: #272525;
    font-size: 16px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      font-size: 17px;
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      font-size: 18px;
    }
  }
}
</style>
