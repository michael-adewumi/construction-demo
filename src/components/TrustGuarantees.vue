<template>
  <section class="py-14 bg-white border-y border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10 fade-in-up">
        <h3 class="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
          Why Houston Homeowners Choose Us
        </h3>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 stagger-children">
        <div
          v-for="(item, i) in guarantees"
          :key="i"
          class="fade-in-up text-center"
        >
          <div class="w-14 h-14 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
            <div v-html="item.icon" class="w-7 h-7 text-accent"></div>
          </div>
          <p class="font-bold text-text-primary text-sm sm:text-base">{{ item.title }}</p>
          <p class="text-xs sm:text-sm text-text-secondary mt-1">{{ item.subtitle }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const guarantees = [
  {
    title: 'On-Time Completion',
    subtitle: 'We meet every deadline',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
  },
  {
    title: 'Transparent Pricing',
    subtitle: 'No hidden fees, ever',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
  },
  {
    title: 'Free Consultation',
    subtitle: 'No obligation to start',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>',
  },
  {
    title: 'Quality Guaranteed',
    subtitle: 'Premium materials only',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
  },
]
</script>
