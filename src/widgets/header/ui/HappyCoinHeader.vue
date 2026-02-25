<script setup lang="ts">
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
</script>

<template>
  <header class="flex w-full items-end justify-end py-5">
    <div class="flex w-fit gap-6">
      <a
        v-for="link in headerLinks"
        :key="link.name"
        class="inter-500 text-[18px]"
        :href="link.link"
      >
        {{ link.name }}
      </a>
    </div>
  </header>
</template>

<style scoped></style>
