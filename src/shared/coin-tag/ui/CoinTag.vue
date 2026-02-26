<script setup lang="ts">
import { computed } from 'vue'
import type { CoinTagProps } from '../model/type.ts'

const { tagType = 'fill' } = defineProps<CoinTagProps>()

const tagClasses = computed(() => [
  'fz-[14px] uppercase w-fit py-[6px] px-[10px] rounded-[6px]',
  tagType === 'fill'
    ? 'bg-[#DADBF1] text-[#272525] border-1 border-[#DADBF1]'
    : 'text-[#4950BC] border-1 border-[#4950BC]',
])
</script>

<template>
  <div>
    <div :class="tagClasses">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
