<script setup lang="ts">
import { HappyCoinFooter } from '../../widgets/footer'
import { HappyCoinHeader } from '../../widgets/header'
</script>

<template>
  <div class="mx-auto max-w-[1440px]">
    <HappyCoinHeader />
    <slot></slot>
    <HappyCoinFooter />
  </div>
</template>

<style scoped lang="scss"></style>
