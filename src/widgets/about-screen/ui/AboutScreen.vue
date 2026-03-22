<script setup lang="ts">
import { CoinTag } from '@/shared/coin-tag'
import { CoinHeading } from '@/shared/coin-heading'

const cardContent = [
  {
    title: '❤️ Персональная',
    text: 'Ваш уникальный текст',
  },
  {
    title: '🚚 Доставка',
    text: 'По всей России',
  },
  {
    title: '✨ Технологии',
    text: 'Высокоточная лазерная гравировка',
  },
]
</script>

<template>
  <section class="mx-auto flex w-full max-w-[1240px] flex-col gap-4">
    <CoinTag tag-type="fill">Наш продукт</CoinTag>
    <CoinHeading>Что такое <span>Happy Coin?</span></CoinHeading>
    <div class="about__wrapper my-5">
      <img
        class="w-full max-w-[220px] md:max-w-[320px] lg:max-w-[400px]"
        alt="Medal image"
        src="@/shared/assets/love-draw.png"
      />
      <div class="flex flex-col gap-4 text-[16px] md:text-[17px] lg:text-[18px]">
        <p>
          Happy Coin — это изящная круглая медаль из металла с уникальным механизмом: в центре вращается миниатюрное
          сердечко. На обеих сторонах медали мы гравируем текст, который вы придумаете сами — признание в любви, важную
          дату, имена или особые слова.
        </p>
        <p>Каждая медаль создаётся вручную под ваш заказ и доставляется в подарочной упаковке прямо до двери.</p>
        <div class="about__cards gap-4">
          <div
            v-for="(item, i) in cardContent"
            :key="item.text"
            :class="['rounded-[8px] bg-[#DADBF1] p-4', i === 2 ? 'md:col-span-2' : '']"
          >
            <p class="inter-600 text-[20px] md:text-[22px]">{{ item.title }}</p>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  &__wrapper {
    display: grid;
    gap: 24px;
    justify-items: center;
    grid-template-columns: 1fr;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
}
</style>
