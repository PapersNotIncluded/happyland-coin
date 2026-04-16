<script setup lang="ts">
import { computed } from 'vue'
import { DevelopmentNotice } from '../../widgets/development-notice'
import { HappyCoinFooter } from '../../widgets/footer'
import { HappyCoinHeader } from '../../widgets/header'

const showDevelopmentNotice = true

const layoutClasses = computed(() => [
  'mx-auto',
  'w-full',
  'max-w-[1440px]',
  'overflow-x-clip',
  'px-4',
  'md:px-6',
  'lg:px-10',
  showDevelopmentNotice ? 'pb-28 md:pb-32 lg:pb-36' : '',
])
</script>

<template>
  <div :class="layoutClasses">
    <HappyCoinHeader />
    <slot></slot>
    <HappyCoinFooter />
    <DevelopmentNotice v-if="showDevelopmentNotice" />
  </div>
</template>

<style scoped lang="scss"></style>
