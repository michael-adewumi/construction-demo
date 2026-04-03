<template>
  <section class="py-20 lg:py-28 bg-primary relative overflow-hidden">
    <!-- Decorative -->
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div class="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
    </div>

    <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="fade-in-up">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Ready to transform<br/>
          <span class="text-accent">your home?</span>
        </h2>
        <p class="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
          Whether it's a kitchen upgrade, bathroom remodel, or full renovation — get a free, no-obligation quote from Houston's most trusted contractor. We'll walk through your vision, timeline, and budget.
        </p>
        <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl text-lg transition-all duration-200 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
            @click.prevent="scrollTo('contact')"
          >
            Request Your Free Quote Today
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          <a
            href="tel:+17135551234"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-lg border border-white/20 transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            (713) 555-1234
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
