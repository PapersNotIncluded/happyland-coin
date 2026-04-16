<template>
  <teleport to="body">
    <div
      class="pointer-events-none fixed inset-x-0 bottom-3 z-40 flex justify-center px-4 md:inset-x-auto md:bottom-6 md:left-6 md:px-0 lg:right-[-60%]"
    >
      <aside
        aria-live="polite"
        class="w-full max-w-sm rounded-[22px] border-2 border-[#C0C1D7] bg-white px-4 py-4 text-[#272525] shadow-[0_16px_44px_rgba(39,37,37,0.12)] md:max-w-[24rem] md:px-5 md:py-5"
      >
        <div class="flex flex-col gap-2">
          <div class="flex items-start gap-3">
            <div class="mt-1 h-3 w-3 shrink-0 rounded-full bg-[#4950BC] shadow-[0_0_0_6px_rgba(73,80,188,0.12)]"></div>
            <span
              class="inter-600 w-fit rounded-full border border-[#DADBF1] bg-[#F3F4FF] px-3 py-1 text-[11px] leading-none tracking-[0.14em] text-[#4950BC] uppercase"
            >
              Разработка
            </span>
          </div>
          <p class="inter-700 text-[15px] leading-6 md:text-base">Сайт находится в разработке.</p>
          <p class="text-sm leading-5 text-[#5E5B6E] md:text-[15px] md:leading-6">
            Контент и функциональность будут постепенно дополняться.
          </p>
        </div>
      </aside>
    </div>
  </teleport>
</template>

<script setup lang="ts"></script>
<style scoped></style>
