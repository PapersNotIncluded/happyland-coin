<script setup lang="ts">
import { ref } from 'vue'

const headerLinks = [
  {
    link: '/',
    name: 'Главная',
  },
  {
    link: '/',
    name: 'О нас',
  },
  {
    link: '/',
    name: 'Конструктор',
  },
  {
    link: '/',
    name: 'FAQ',
  },
  {
    link: '/',
    name: 'Контакты',
  },
]

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="relative flex w-full items-center justify-end py-4 md:py-5">
    <button
      class="flex h-11 w-11 items-center justify-center rounded-full border border-[#4950BC] text-[#4950BC] lg:hidden"
      type="button"
      :aria-expanded="isMenuOpen"
      aria-label="Открыть меню"
      @click="isMenuOpen = !isMenuOpen"
    >
      <span class="flex flex-col gap-[5px]">
        <span class="block h-[2px] w-5 bg-current"></span>
        <span class="block h-[2px] w-5 bg-current"></span>
        <span class="block h-[2px] w-5 bg-current"></span>
      </span>
    </button>

    <div class="hidden w-fit gap-6 lg:flex">
      <a
        v-for="link in headerLinks"
        :key="link.name"
        class="inter-500 text-[18px]"
        :href="link.link"
      >
        {{ link.name }}
      </a>
    </div>

    <div
      v-if="isMenuOpen"
      class="absolute top-full right-0 z-20 mt-2 flex w-full max-w-[320px] flex-col gap-2 rounded-2xl border border-[#DADBF1] bg-white p-4 shadow-xl lg:hidden"
    >
      <a
        v-for="link in headerLinks"
        :key="`mobile-${link.name}`"
        class="inter-500 rounded-xl px-3 py-3 text-[16px] text-[#272525] transition hover:bg-[#DADBF1]"
        :href="link.link"
        @click="closeMenu"
      >
        {{ link.name }}
      </a>
    </div>
  </header>
</template>

<style scoped></style>
