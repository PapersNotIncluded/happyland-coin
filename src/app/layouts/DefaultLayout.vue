<script setup lang="ts">
import { HappyCoinFooter } from '../../widgets/footer'
import { HappyCoinHeader } from '../../widgets/header'
</script>

<template>
  <div class="mx-auto w-full max-w-[1440px] overflow-x-clip px-4 md:px-6 lg:px-10">
    <HappyCoinHeader />
    <slot></slot>
    <HappyCoinFooter />
  </div>
</template>

<style scoped lang="scss"></style>
