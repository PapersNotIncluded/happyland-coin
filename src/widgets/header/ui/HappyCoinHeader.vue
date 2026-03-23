<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

type HeaderLink = {
  name: string
  href: string
  type: 'section' | 'link'
  sectionId?: string
}

const headerLinks: HeaderLink[] = [
  {
    href: '#hero',
    name: 'Главная',
    type: 'section',
    sectionId: 'hero',
  },
  {
    href: '#about',
    name: 'О нас',
    type: 'section',
    sectionId: 'about',
  },
  {
    href: '#constructor',
    name: 'Конструктор',
    type: 'section',
    sectionId: 'constructor',
  },
  {
    href: '#faq',
    name: 'FAQ',
    type: 'section',
    sectionId: 'faq',
  },
  {
    href: '#contacts',
    name: 'Контакты',
    type: 'section',
    sectionId: 'contacts',
  },
]

const isMenuOpen = ref(false)
const isHeaderVisible = ref(true)
const isScrolled = ref(false)
const headerHeight = ref(0)
const headerElement = ref<HTMLElement | null>(null)
const lastScrollY = ref(0)

const headerClasses = computed(() => [
  'fixed',
  'top-0',
  'left-1/2',
  'z-50',
  'flex',
  'w-[calc(100%-2rem)]',
  'max-w-[1440px]',
  '-translate-x-1/2',
  'items-center',
  'justify-between',
  'rounded-b-[20px]',
  'px-4',
  'py-4',
  'transition-all',
  'duration-300',
  'ease-out',
  'md:w-[calc(100%-3rem)]',
  'md:px-6',
  'md:py-5',
  'lg:w-[calc(100%-5rem)]',
  'lg:px-10',
  isHeaderVisible.value ? 'translate-y-0' : '-translate-y-full',
  isScrolled.value ? 'bg-white/90 shadow-[0_10px_40px_rgba(39,37,37,0.08)] backdrop-blur-md' : 'bg-transparent',
])

const updateHeaderHeight = () => {
  headerHeight.value = headerElement.value?.offsetHeight ?? 0
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleScroll = () => {
  const currentScrollY = window.scrollY

  isScrolled.value = currentScrollY > 8

  if (isMenuOpen.value) {
    isHeaderVisible.value = true
    lastScrollY.value = currentScrollY
    return
  }

  if (currentScrollY <= 16) {
    isHeaderVisible.value = true
    lastScrollY.value = currentScrollY
    return
  }

  if (currentScrollY > lastScrollY.value + 4) {
    isHeaderVisible.value = false
  }

  if (currentScrollY < lastScrollY.value - 4) {
    isHeaderVisible.value = true
  }

  lastScrollY.value = currentScrollY
}

const handleLinkClick = (link: HeaderLink, event: MouseEvent) => {
  if (link.type !== 'section' || !link.sectionId) {
    closeMenu()
    return
  }

  const targetElement = document.getElementById(link.sectionId)

  if (!targetElement) {
    closeMenu()
    return
  }

  event.preventDefault()
  closeMenu()
  isHeaderVisible.value = true

  targetElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })

  window.history.replaceState(null, '', link.href)
}

const handleBrandClick = (event: MouseEvent) => {
  const heroLink = headerLinks[0]

  if (!heroLink) {
    return
  }

  handleLinkClick(heroLink, event)
}

onMounted(() => {
  updateHeaderHeight()
  lastScrollY.value = window.scrollY

  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', updateHeaderHeight)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateHeaderHeight)
})
</script>

<template>
  <div :style="{ height: `${headerHeight}px` }">
    <header
      ref="headerElement"
      :class="headerClasses"
    >
      <a
        class="inter-700 text-[22px] leading-none text-[#272525] transition hover:text-[#4950BC] lg:hidden"
        href="#hero"
        @click="handleBrandClick($event)"
      >
        HappyCoin
      </a>

      <button
        class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#4950BC] text-[#4950BC] transition hover:bg-[#4950BC] hover:text-white lg:hidden"
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

      <nav
        aria-label="Основная навигация"
        class="hidden w-fit gap-6 lg:flex"
      >
        <a
          v-for="link in headerLinks"
          :key="link.name"
          class="inter-500 text-[18px] text-[#272525] transition hover:text-[#4950BC]"
          :href="link.href"
          @click="handleLinkClick(link, $event)"
        >
          {{ link.name }}
        </a>
      </nav>

      <div
        v-if="isMenuOpen"
        class="absolute top-full right-4 left-4 z-20 mt-2 flex flex-col gap-2 rounded-2xl border border-[#DADBF1] bg-white p-4 shadow-xl lg:hidden"
      >
        <a
          v-for="link in headerLinks"
          :key="`mobile-${link.name}`"
          class="inter-500 rounded-xl px-3 py-3 text-[16px] text-[#272525] transition hover:bg-[#DADBF1]"
          :href="link.href"
          @click="handleLinkClick(link, $event)"
        >
          {{ link.name }}
        </a>
      </div>
    </header>
  </div>
</template>

<style scoped></style>
