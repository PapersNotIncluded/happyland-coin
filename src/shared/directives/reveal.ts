import type { Directive, DirectiveBinding } from 'vue'

type RevealType = 'fade-up' | 'fade-in' | 'zoom-soft'

type RevealBinding =
  | RevealType
  | {
      type?: RevealType
      delay?: number
      once?: boolean
    }

type RevealElement = HTMLElement & {
  __revealObserver?: IntersectionObserver
}

const DEFAULT_TYPE: RevealType = 'fade-up'
const DEFAULT_DELAY = 0
const DEFAULT_ONCE = true

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const resolveOptions = (binding: DirectiveBinding<RevealBinding>) => {
  if (typeof binding.value === 'string') {
    return {
      type: binding.value,
      delay: DEFAULT_DELAY,
      once: DEFAULT_ONCE,
    }
  }

  return {
    type: binding.value?.type ?? DEFAULT_TYPE,
    delay: binding.value?.delay ?? DEFAULT_DELAY,
    once: binding.value?.once ?? DEFAULT_ONCE,
  }
}

const setVisible = (el: RevealElement, visible: boolean) => {
  el.classList.toggle('reveal-visible', visible)
}

const cleanupObserver = (el: RevealElement) => {
  el.__revealObserver?.disconnect()
  delete el.__revealObserver
}

const setupReveal = (el: RevealElement, binding: DirectiveBinding<RevealBinding>) => {
  cleanupObserver(el)

  const { type, delay, once } = resolveOptions(binding)

  el.classList.remove('reveal--fade-up', 'reveal--fade-in', 'reveal--zoom-soft', 'reveal-visible')
  el.classList.add('reveal', `reveal--${type}`)
  el.style.setProperty('--reveal-delay', `${Math.max(delay, 0)}ms`)

  if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
    setVisible(el, true)
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(el, true)

          if (once) {
            cleanupObserver(el)
          }

          return
        }

        if (!once) {
          setVisible(el, false)
        }
      })
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -10% 0px',
    },
  )

  observer.observe(el)
  el.__revealObserver = observer
}

export const revealDirective: Directive<HTMLElement, RevealBinding> = {
  mounted(el, binding) {
    setupReveal(el as RevealElement, binding)
  },
  updated(el, binding) {
    setupReveal(el as RevealElement, binding)
  },
  beforeUnmount(el) {
    cleanupObserver(el as RevealElement)
  },
}
