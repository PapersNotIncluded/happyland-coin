<script setup lang="ts">
import { computed, ref } from 'vue'
import { CoinHeading } from '@/shared/coin-heading'
import { CoinTag } from '@/shared/coin-tag'

const firstName = ref('Витя')
const secondName = ref('Глаша')

const svgText = computed(() =>
  `${firstName.value}                            ${secondName.value}`.replace(/ /g, '\u00a0'),
)
const currentDate = new Date()
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
const svgCurrentDate = `${currentDate.getDate()}.${month}.${currentDate.getFullYear()}`
</script>

<template>
  <section class="flex w-full flex-col gap-8 md:gap-10">
    <div class="flex flex-col gap-4">
      <div v-reveal="{ type: 'fade-in', delay: 0 }">
        <CoinTag tag-type="fill">Конструктор медали</CoinTag>
      </div>
      <div v-reveal="{ type: 'fade-up', delay: 80 }">
        <CoinHeading>Напишите слова, которые<span> останутся навсегда</span></CoinHeading>
      </div>
    </div>
    <div class="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">
      <div
        v-reveal="{ type: 'fade-up', delay: 140 }"
        class="flex flex-col gap-4"
      >
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
        v-reveal="{ type: 'zoom-soft', delay: 180 }"
        class="relative mx-auto flex h-[260px] w-[260px] max-w-full items-center justify-center md:h-[320px] md:w-[320px] lg:h-[360px] lg:w-[360px]"
      >
        <img
          src="@/shared/assets/constructor.png"
          alt="Превью медали"
          class="h-full w-full rounded-full object-contain select-none"
        />
        <svg
          class="absolute top-[54%] left-[50%] translate-x-[-50%] translate-y-[-50%] rotate-[-88deg] overflow-visible text-[24px]"
          width="300"
          height="300"
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
            font-size="7"
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
          class="absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] rotate-[-88deg] overflow-visible"
          width="300"
          height="300"
          viewBox="0 0 100 100"
        >
          <defs>
            <path
              id="pathCircleReverse"
              d="M 50 50 m 40 0 a 40 40 0 1 0 -80 0 a 40 40 0 1 0 80 0"
              fill="none"
            />
          </defs>

          <text
            fill="black"
            font-size="7"
          >
            <textPath
              href="#pathCircleReverse"
              startOffset="50%"
              text-anchor="middle"
            >
              {{ svgCurrentDate }}
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
