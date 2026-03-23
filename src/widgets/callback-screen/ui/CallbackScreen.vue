<script setup lang="ts">
import { CoinTag } from '@/shared/coin-tag'
import { CoinHeading } from '@/shared/coin-heading'
import { CoinButton } from '@/shared/coin-button'
import phoneIcon from '@/shared/assets/phoneIcon.svg'
import telegramIcon from '@/shared/assets/telegramIcon.svg'
import emailIcon from '@/shared/assets/emailIcon.svg'
import maxIcon from '@/shared/assets/maxIcon.svg'

const callbackContent = [
  {
    link: 'tel:+71234567890',
    text: '+7 (123) 456-78-90',
    alt: 'Phone Icon',
    icon: phoneIcon,
  },
  {
    link: 'https://t.me/rmunger',
    text: '@rmunger',
    alt: 'Telegram Icon',
    icon: telegramIcon,
  },
  {
    link: 'mailto:support@happy-coin.ru',
    text: 'support@happy-coin.ru',
    alt: 'Email Icon',
    icon: emailIcon,
  },
  {
    link: '/',
    text: '@linkToMax',
    alt: 'Max Messenger Icon',
    icon: maxIcon,
  },
]
</script>

<template>
  <section class="flex w-full flex-col gap-4">
    <CoinTag tag-type="outline">Обратная связь</CoinTag>
    <CoinHeading>Есть вопросы? <span>Напишите нам</span></CoinHeading>
    <div class="flex flex-col gap-6 lg:flex-row">
      <div class="flex w-full max-w-[600px] flex-col gap-6">
        <img
          alt="Callback image"
          class="h-auto w-full"
          src="@/shared/assets/callback.png"
        />
        <p class="text-[16px] md:text-[18px]">
          Мы отвечаем на все обращения в течение нескольких часов. Рады помочь с выбором
          текста, оформлением заказа или любым другим вопросом.
        </p>
      </div>
      <div class="callback__wrapper w-full self-center lg:w-fit">
        <a
          v-for="item in callbackContent"
          :key="item.text"
          target="_blank"
          :href="item.link"
          class="flex w-full items-center justify-start gap-2 rounded-[10px] bg-[#DADBF1] p-5 md:p-[30px]"
        >
          <img
            class="w-[24px] md:w-[30px]"
            :alt="item.alt"
            :src="item.icon"
          />
          <p class="break-all text-[16px] md:text-[18px]">{{ item.text }}</p>
        </a>
        <CoinButton
          class="justify-self-center lg:col-span-2"
          button-type="default"
        >
          Обратный звонок
        </CoinButton>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.callback {
  &__wrapper {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr;
    justify-items: center;

    @media (min-width: 1024px) {
      grid-template: auto auto 1fr / repeat(2, 1fr);
    }
  }
}
</style>
