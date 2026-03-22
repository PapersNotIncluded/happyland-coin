<script setup lang="ts">
import { ref } from 'vue'
import type { FaqContentType } from '../model/type'
import { CoinTag } from '@/shared/coin-tag'
import { CoinHeading } from '@/shared/coin-heading'

const faqContent = ref<FaqContentType[]>([
  {
    title: 'Сколько символов можно нанести?',
    text: 'До 60 символов на каждой стороне медали. Этого достаточно для имён, дат и короткого признания.',
    opened: false,
  },
  {
    title: 'Из какого материала сделана медаль?',
    text: 'Медаль изготовлена из износостойкого металлического сплава с гальваническим покрытием под золото или серебро.',
    opened: false,
  },
  {
    title: 'Как долго делается заказ?',
    text: 'Изготовление занимает 1–3 рабочих дня. Доставка по России — ещё 2–7 дней в зависимости от региона.',
    opened: false,
  },
  {
    title: 'Есть ли подарочная упаковка?',
    text: 'Каждая медаль поставляется в бархатной коробочке. По желанию можно добавить открытку с вашим посланием.',
    opened: false,
  },
  {
    title: 'Можно ли исправить текст после оплаты?',
    text: 'Да! До начала гравировки наш менеджер свяжется с вами и подтвердит текст. Изменения бесплатны.',
    opened: false,
  },
  {
    title: 'Доставляете ли вы за рубеж?',
    text: 'На данный момент доставка осуществляется по России и странам СНГ. Уточняйте детали при оформлении заказа.',
    opened: false,
  },
])

const toggleAccordion = (index: number) => {
  if (faqContent.value[index]) {
    faqContent.value[index].opened = !faqContent.value[index].opened
  }
}
</script>

<template>
  <section class="flex w-full flex-col gap-4">
    <CoinTag tag-type="fill">FAQ</CoinTag>
    <CoinHeading>Часто задаваемые <span>вопросы</span></CoinHeading>
    <div class="flex flex-col items-center gap-6">
      <div
        v-for="(item, i) in faqContent"
        :key="item.title"
        class="accordion"
        @click="toggleAccordion(i)"
      >
        <div class="flex items-center justify-between">
          <p class="inter-700 pr-3 text-[18px] leading-[24px] md:text-[20px] md:leading-[26px] lg:text-[22px]">{{ item.title }}</p>
          <img
            alt="Arrow icon"
            :class="['w-5 shrink-0 transition-transform duration-300 md:w-6', item.opened ? 'rotate-180' : '']"
            src="@/shared/assets/arrow-up.svg"
          />
        </div>
        <div :class="['accordion__wrapper', item.opened ? 'accordion__wrapper_opened' : '']">
          <div class="accordion__item">
            <p class="mt-[18px] text-[16px] md:text-[18px]">{{ item.text }}</p>
          </div>
        </div>
        <div class="absolute top-0 left-0 h-1 w-full bg-[#4950bc] md:h-[6px]"></div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.accordion {
  border: 1px solid #4950bc;
  cursor: pointer;
  max-width: 800px;
  width: 100%;
  padding: 16px 10px;
  user-select: none;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  &__wrapper {
    display: grid;
    grid-template-rows: 0fr;
    transition: 300ms grid-template-rows ease;

    &_opened {
      grid-template-rows: 1fr;
    }
  }

  &__item {
    overflow: hidden;
  }
}
</style>
