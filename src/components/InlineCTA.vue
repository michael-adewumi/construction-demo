<template>
  <section class="py-10 bg-surface-dark">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="fade-in-up flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
        <div class="text-center sm:text-left">
          <p class="text-lg sm:text-xl font-bold text-text-primary">{{ headline }}</p>
          <p v-if="subtext" class="text-sm text-text-secondary mt-1">{{ subtext }}</p>
        </div>
        <a
          href="#contact"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl text-sm sm:text-base transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0"
          @click.prevent="scrollTo('contact')"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          {{ buttonText }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  headline: { type: String, default: 'Ready to get started?' },
  subtext: { type: String, default: '' },
  buttonText: { type: String, default: 'Get a Free Quote' },
})

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
