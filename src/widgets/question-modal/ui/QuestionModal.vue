<script setup lang="ts">
import { useQuestionModal } from '@/shared/composables/useQuestionModal'

const { isOpen, formState, closeQuestionModal } = useQuestionModal()
</script>

<template>
  <div class="flex w-full items-center justify-center">
    <teleport to="body">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
        @click.self="closeQuestionModal"
      >
        <div class="relative w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl">
          <button
            aria-label="Закрыть модальное окно"
            class="absolute top-4 right-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:rotate-90 hover:bg-gray-50"
            type="button"
            @click="closeQuestionModal"
          >
            <img
              alt="Close Icon"
              class="block h-[20px] w-[20px]"
              src="@/shared/assets/cross.svg"
            />
          </button>

          <h2 class="mb-4 text-2xl font-semibold text-gray-900">Задайте нам вопрос</h2>
          <p class="mb-6 text-gray-600">
            Оставьте контактные данные и свой вопрос — мы ответим в течение рабочего дня.
          </p>

          <form class="flex flex-col gap-4">
            <label class="flex flex-col gap-2 text-sm font-medium text-gray-700">
              Имя
              <input
                v-model="formState.name"
                class="rounded-xl border border-gray-200 px-4 py-3 text-base text-gray-900 shadow-sm transition outline-none focus:border-[#4950bc] focus:ring-2 focus:ring-[#4950bc]/30"
                name="name"
                placeholder="Ваше имя"
                type="text"
              />
            </label>

            <label class="flex flex-col gap-2 text-sm font-medium text-gray-700">
              Телефон
              <input
                v-model="formState.phone"
                class="rounded-xl border border-gray-200 px-4 py-3 text-base text-gray-900 shadow-sm transition outline-none focus:border-[#4950bc] focus:ring-2 focus:ring-[#4950bc]/30"
                name="phone"
                placeholder="+7 (___) ___-__-__"
                type="tel"
              />
            </label>

            <label class="flex flex-col gap-2 text-sm font-medium text-gray-700">
              Ваш вопрос
              <textarea
                v-model="formState.question"
                class="min-h-[120px] rounded-xl border border-gray-200 px-4 py-3 text-base text-gray-900 shadow-sm transition outline-none focus:border-[#4950bc] focus:ring-2 focus:ring-[#4950bc]/30"
                name="question"
                placeholder="Опишите, что хотите уточнить"
              ></textarea>
            </label>

            <button
              class="mt-2 rounded-full bg-[#4950bc] px-6 py-3 text-white shadow-md transition hover:bg-[#3a40a0] focus:ring-2 focus:ring-[#4950bc]/40 focus:outline-none"
              type="button"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </teleport>
  </div>
</template>

<style scoped></style>
