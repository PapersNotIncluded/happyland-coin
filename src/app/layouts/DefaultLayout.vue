<script setup lang="ts">
import { HappyCoinFooter } from '../../widgets/footer'
import { HappyCoinHeader } from '../../widgets/header'
</script>

<template>
  <div>
    <HappyCoinHeader />
    <slot></slot>
    <HappyCoinFooter />
  </div>
</template>

<style scoped lang="scss"></style>
