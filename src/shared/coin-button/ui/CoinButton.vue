<script setup lang="ts">
import type { ButtonProps } from '../model/type'
import { computed } from 'vue'

const {
  buttonType,
  backgroundColor,
  color,
  borderRadius,
  size = 'm',
  stretched = false,
  padX,
  padY,
} = defineProps<ButtonProps>()

const buttonClasses = computed(() => [
  'font-semibold rounded-lg transition inter-600 cursor-pointer transition duration-300',
  stretched ? 'w-full' : '',
  size === 'm' ? 'text-base py-3 px-6' : 'text-sm py-2 px-4',
  buttonType === 'default'
    ? 'bg-[#e31e24] border-[1px] border-dashed border-[#e31e24] text-white hover:bg-transparent hover:text-[#e31e24] hover:border-[1px] hover:border-[#e31e24]'
    : buttonType === 'outline'
      ? 'bg-transparent text-[#e31e24] border-[1px] border-[#e31e24] hover:bg-[#e31e24] hover:text-white hover:border-transparent'
      : 'bg-black text-white hover:bg-gray-800 hover:scale-105',
])

const buttonInlineStyles = computed(() => [
  backgroundColor ?? `background-color: ${backgroundColor};`,
  color ?? `color: ${color};`,
  borderRadius ?? `border-radius: [${borderRadius}px];`,
  padX ?? `padding: ${padX}px `,
  padY ?? `py-${padY}`,
])
</script>

<template>
  <div>
    <button
      :class="buttonClasses"
      :style="buttonInlineStyles"
    >
      <slot></slot>
    </button>
  </div>
</template>

<style scoped></style>
