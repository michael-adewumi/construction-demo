import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  let observer = null

  const initObserver = () => {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in')
        .forEach((el) => el.classList.add('visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px',
      }
    )

    const elements = document.querySelectorAll(
      '.fade-in-up, .fade-in-left, .fade-in-right, .scale-in'
    )
    elements.forEach((el) => observer.observe(el))
  }

  // Re-observe new elements added via HMR or dynamic content
  const reobserve = () => {
    if (!observer) return
    const elements = document.querySelectorAll(
      '.fade-in-up:not(.visible), .fade-in-left:not(.visible), .fade-in-right:not(.visible), .scale-in:not(.visible)'
    )
    elements.forEach((el) => observer.observe(el))
  }

  onMounted(() => {
    // Use requestAnimationFrame to ensure DOM is fully rendered
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        initObserver()
      })
    })
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return { initObserver, reobserve }
}
