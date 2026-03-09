<script setup lang="ts">
import { CoinTag } from '@/shared/coin-tag'
import { CoinHeading } from '@/shared/coin-heading'
import { CoinButton } from '@/shared/coin-button'

const callbackContent = [
  {
    link: 'tel:+71234567890',
    text: '+7 (123) 456-78-90',
    alt: 'Phone Icon',
    icon: 'src/shared/assets/phoneIcon.svg',
  },
  {
    link: 'https://t.me/rmunger',
    text: '@rmunger',
    alt: 'Telegram Icon',
    icon: 'src/shared/assets/telegramIcon.svg',
  },
  {
    link: 'mailto:support@happy-coin.ru',
    text: 'support@happy-coin.ru',
    alt: 'Email Icon',
    icon: 'src/shared/assets/emailIcon.svg',
  },
  {
    link: '/',
    text: '@linkToMax',
    alt: 'Max Messenger Icon',
    icon: 'src/shared/assets/maxIcon.svg',
  },
]
</script>

<template>
  <div class="flex flex-col">
    <CoinTag tag-type="outline">Обратная связь</CoinTag>
    <CoinHeading>Есть вопросы? <span>Напишите нам</span></CoinHeading>
    <div class="flex gap-6">
      <div class="flex max-w-[600px] flex-col gap-6">
        <img
          alt="Callback image"
          src="@/shared/assets/callback.png"
        />
        <p class="text-[18px]">
          Мы отвечаем на все обращения в течение нескольких часов. Рады помочь с выбором текста, оформлением заказа или
          любым другим вопросом.
        </p>
      </div>
      <div class="callback__wrapper w-fit self-center">
        <a
          v-for="item in callbackContent"
          :key="item.text"
          target="_blank"
          :href="item.link"
          class="flex w-full max-w-[300px] items-center justify-start gap-2 rounded-[10px] bg-[#DADBF1] p-[30px]"
        >
          <img
            class="w-[30px]"
            :alt="item.alt"
            :src="item.icon"
          />
          <p class="text-[18px] whitespace-nowrap">{{ item.text }}</p>
        </a>
        <CoinButton
          class="col-span-2 justify-self-center"
          button-type="default"
        >
          Обратный звонок
        </CoinButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.callback {
  &__wrapper {
    display: grid;
    gap: 10px;
    grid-template: auto auto 1fr / repeat(2, 1fr);
    justify-items: center;
  }
}
</style>
