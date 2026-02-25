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
  <div class="mx-auto my-0 flex w-fit gap-5">
    <p
      v-for="link in headerLinks"
      :key="link.name"
    >
      {{ link.name }}
    </p>
  </div>
</template>

<style scoped></style>
