<script setup lang="ts">
import { computed, ref } from 'vue'
import { CoinHeading } from '@/shared/coin-heading'
import { CoinTag } from '@/shared/coin-tag'

const firstName = ref('Витя')
const secondName = ref('Глаша')

const svgText = computed(() => `${firstName.value}           ${secondName.value}`.replace(/ /g, '\u00a0'))
const currentDate = new Date()
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
const svgCurrentDate = `${currentDate.getDate()}.${month}.${currentDate.getFullYear()}`
</script>

<template>
  <div class="flex flex-col gap-10">
    <div class="flex flex-col gap-4">
      <CoinTag tag-type="fill">Конструктор медали</CoinTag>
      <CoinHeading>Напишите слова, которые<span> останутся навсегда</span></CoinHeading>
    </div>
    <div class="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
      <div class="flex flex-col gap-4">
        <label class="flex flex-col gap-2 text-sm font-medium text-gray-700">
          Первое имя
          <input
            v-model="firstName"
            maxlength="12"
            class="rounded-xl border border-gray-200 px-4 py-3 text-base text-gray-900 shadow-sm transition outline-none focus:border-[#4950bc] focus:ring-2 focus:ring-[#4950bc]/30"
            type="text"
            placeholder="Например, Анна"
          />
        </label>

        <label class="flex flex-col gap-2 text-sm font-medium text-gray-700">
          Второе имя
          <input
            v-model="secondName"
            maxlength="12"
            class="rounded-xl border border-gray-200 px-4 py-3 text-base text-gray-900 shadow-sm transition outline-none focus:border-[#4950bc] focus:ring-2 focus:ring-[#4950bc]/30"
            type="text"
            placeholder="Например, Сергей"
          />
        </label>
      </div>

      <div
        ref="containerRef"
        class="relative mx-auto flex h-[360px] w-[360px] max-w-full items-center justify-center"
      >
        <img
          src="@/shared/assets/constructor.png"
          alt="Превью медали"
          class="h-full w-full rounded-full object-contain select-none"
        />
        <svg
          class="absolute top-[54%] left-[50%] translate-x-[-50%] translate-y-[-50%] rotate-[-88deg] overflow-visible"
          width="310"
          height="310"
          viewBox="0 0 100 100"
        >
          <defs>
            <path
              id="pathCircle"
              d="M 50 50 m -40 0 a 40 40 0 1 1 80 0 a 40 40 0 1 1 -80 0"
              fill="black"
            />
          </defs>

          <text
            xml:space="preserve"
            fill="black"
            font-size="8"
          >
            <textPath
              href="#pathCircle"
              startOffset="50%"
              text-anchor="middle"
            >
              {{ svgText }}
            </textPath>
          </text>
        </svg>
        <svg
          class="absolute top-[54%] left-[50%] translate-x-[-50%] translate-y-[-50%] rotate-[-20deg] overflow-visible"
          width="310"
          height="310"
          viewBox="0 0 100 100"
        >
          <defs>
            <path
              id="pathCircle"
              d="M 50 50 m -40 0 a 40 40 0 1 1 80 0 a 40 40 0 1 1 -80 0"
              fill="black"
            />
          </defs>

          <text
            fill="black"
            font-size="8"
          >
            <textPath
              href="#pathCircle"
              startOffset="180"
              text-anchor="start"
            >
              {{ svgCurrentDate }}
            </textPath>
          </text>
        </svg>
      </div>
    </div>

  </div>
</template>

<style scoped></style>
