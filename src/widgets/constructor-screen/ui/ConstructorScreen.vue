<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { Ref } from 'vue'
import { CoinHeading } from '@/shared/coin-heading'
import { CoinTag } from '@/shared/coin-tag'

type ConstructorLanguage = 'ru' | 'en'

const NON_LANGUAGE_LETTER_PATTERN = /\p{L}/u
const LANGUAGE_LETTER_PATTERNS: Record<ConstructorLanguage, RegExp> = {
  ru: /[А-Яа-яЁё]/u,
  en: /[A-Za-z]/u,
}

const selectedLanguage = ref<ConstructorLanguage>('ru')
const firstName = ref('Витя')
const secondName = ref('Глаша')

const sanitizeValue = (value: string, language: ConstructorLanguage) =>
  Array.from(value)
    .filter((character) => {
      if (LANGUAGE_LETTER_PATTERNS[language].test(character)) {
        return true
      }

      return !NON_LANGUAGE_LETTER_PATTERN.test(character)
    })
    .join('')

const canInsertValue = (value: string, language: ConstructorLanguage) =>
  Array.from(value).every(
    (character) => LANGUAGE_LETTER_PATTERNS[language].test(character) || !NON_LANGUAGE_LETTER_PATTERN.test(character),
  )

const handleNameInput = (source: Ref<string>, event: Event) => {
  const target = event.target as { value: string } | null

  if (!target) {
    return
  }

  const sanitizedValue = sanitizeValue(target.value, selectedLanguage.value)
  source.value = sanitizedValue
  target.value = sanitizedValue
}

const handleNameBeforeInput = (event: Event) => {
  const nativeEvent = event as Event & {
    data?: string | null
    preventDefault: () => void
  }

  if (!nativeEvent.data) {
    return
  }

  if (!canInsertValue(nativeEvent.data, selectedLanguage.value)) {
    nativeEvent.preventDefault()
  }
}

const handleFirstNameInput = (event: Event) => {
  handleNameInput(firstName, event)
}

const handleSecondNameInput = (event: Event) => {
  handleNameInput(secondName, event)
}

const svgText = computed(() =>
  `${firstName.value}                            ${secondName.value}`.replace(/ /g, '\u00a0'),
)
const currentDate = new Date()
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
const svgCurrentDate = `${currentDate.getDate()}.${month}.${currentDate.getFullYear()}`

watch(selectedLanguage, () => {
  firstName.value = ''
  secondName.value = ''
})
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
          Язык текста
          <select
            v-model="selectedLanguage"
            class="rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 shadow-sm transition outline-none focus:border-[#4950bc] focus:ring-2 focus:ring-[#4950bc]/30"
          >
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
        </label>

        <label class="flex flex-col gap-2 text-sm font-medium text-gray-700">
          Первое имя
          <input
            :value="firstName"
            maxlength="11"
            class="rounded-xl border border-gray-200 px-4 py-3 text-base text-gray-900 shadow-sm transition outline-none focus:border-[#4950bc] focus:ring-2 focus:ring-[#4950bc]/30"
            type="text"
            :placeholder="selectedLanguage === 'ru' ? 'Например, Анна' : 'For example, Anna'"
            @beforeinput="handleNameBeforeInput"
            @input="handleFirstNameInput"
          />
        </label>

        <label class="flex flex-col gap-2 text-sm font-medium text-gray-700">
          Второе имя
          <input
            :value="secondName"
            maxlength="11"
            class="rounded-xl border border-gray-200 px-4 py-3 text-base text-gray-900 shadow-sm transition outline-none focus:border-[#4950bc] focus:ring-2 focus:ring-[#4950bc]/30"
            type="text"
            :placeholder="selectedLanguage === 'ru' ? 'Например, Сергей' : 'For example, Michael'"
            @beforeinput="handleNameBeforeInput"
            @input="handleSecondNameInput"
          />
        </label>
      </div>

      <div
        v-reveal="{ type: 'zoom-soft', delay: 180 }"
        class="mx-auto flex max-w-full flex-col items-center gap-3"
      >
        <div
          ref="containerRef"
          class="relative flex h-[360px] w-[360px] max-w-full items-center justify-center"
        >
          <img
            src="@/shared/assets/constructor.png"
            alt="Превью медали"
            class="h-full w-full rounded-full object-contain select-none"
          />
          <svg
            class="absolute top-[52%] left-[50%] translate-x-[-50%] translate-y-[-50%] rotate-[-88deg] overflow-visible text-[24px]"
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
        <p class="max-w-[360px] text-center text-xs leading-4 text-gray-500">
          Конечный продукт может незначительно отличаться от изображения на конструкторе.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
