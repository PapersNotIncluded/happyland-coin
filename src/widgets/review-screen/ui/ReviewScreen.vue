<script setup lang="ts">
import { CoinTag } from '@/shared/coin-tag'
import { CoinHeading } from '@/shared/coin-heading'

const reviewsContent = [
  {
    text: 'Подарила медаль мужу на годовщину. Текст выгравировали именно так, как я просила, а упаковка выглядела как полноценный подарок.',
    name: 'Анна К., Москва',
    number: '5000+',
    title: 'счастливых заказов',
  },
  {
    text: 'Заказывал подарок ко Дню святого Валентина. Медаль пришла быстро, гравировка аккуратная, а сама идея с сердцем действительно работает.',
    name: 'Дмитрий С., Мурманск',
    number: '4.9/5',
    title: 'средняя оценка',
  },
  {
    text: 'Это уже третий заказ для близких. Каждый раз эмоции очень сильные, потому что подарок ощущается личным, а не шаблонным.',
    name: 'Марина В., Екатеринбург',
    number: '98%',
    title: 'рекомендуют друзьям',
  },
]
</script>

<template>
  <section class="my-12 flex w-full flex-col md:my-16 lg:my-20">
    <div v-reveal="{ type: 'fade-in', delay: 0 }">
      <CoinTag tag-type="outline">Отзывы</CoinTag>
    </div>
    <div v-reveal="{ type: 'fade-up', delay: 80 }">
      <CoinHeading>Истории <span>счастливых</span> покупателей</CoinHeading>
    </div>
    <div class="review__wrapper">
      <div
        v-for="(review, i) in reviewsContent"
        :key="review.title"
        v-reveal="{ type: 'fade-up', delay: 140 + i * 100 }"
        class="flex max-w-[400px] flex-col items-center gap-4"
      >
        <div
          class="relative flex h-full flex-col justify-center gap-4 rounded-[10px] border-2 border-[#C0C1D7] p-4 md:p-5"
        >
          <p>{{ review.text }}</p>
          <p class="inter-600">— {{ review.name }}</p>
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
