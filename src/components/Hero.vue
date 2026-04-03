<template>
  <section id="home" class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-dark/95 via-primary/90 to-primary-light/85 z-10"></div>
      <img
        src="/images/construction-hero.png"
        alt="Home renovation and construction in Houston, Texas"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Decorative elements -->
    <div class="absolute inset-0 z-10">
      <div class="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
    </div>

    <!-- Content -->
    <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
      <div class="max-w-3xl">
        <div class="fade-in-up">
          <span class="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/20 text-accent-light rounded-full text-sm font-medium mb-6 border border-accent/20">
            <span class="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            Houston's Trusted Home Contractor
          </span>
        </div>

        <h1 class="fade-in-up text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight tracking-tight">
          Transform Your Home
          <span class="block mt-2">
            with Houston's Most
            <span class="text-accent"> Trusted</span> Experts
          </span>
        </h1>

        <p class="fade-in-up mt-6 text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
          We deliver high-quality home renovations with reliable timelines, transparent pricing, and results you'll love. From kitchens to full renovations — done right, on time, and on budget.
        </p>

        <!-- Urgency micro-copy -->
        <div class="fade-in-up mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-white/60 text-sm">
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            Free consultation
          </span>
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            No obligation quote
          </span>
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            Response within 24 hrs
          </span>
        </div>

        <div class="fade-in-up mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            class="inline-flex items-center justify-center gap-2 px-10 py-5 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl text-lg transition-all duration-200 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 ring-2 ring-accent/50"
            @click.prevent="scrollTo('contact')"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            Get a Free Quote
          </a>
          <a
            href="tel:+17135551234"
            class="inline-flex items-center justify-center gap-2 px-8 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-lg border border-white/20 transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            Call (713) 555-1234
          </a>
        </div>

        <!-- Quick stats inline -->
        <div class="fade-in-up mt-14 flex flex-wrap gap-8 text-white/60">
          <div class="flex items-center gap-2">
            <span class="text-2xl font-bold text-white">10+</span>
            <span class="text-sm">Years Serving<br/>Houston</span>
          </div>
          <div class="w-px h-10 bg-white/20"></div>
          <div class="flex items-center gap-2">
            <span class="text-2xl font-bold text-white">100+</span>
            <span class="text-sm">Homes<br/>Transformed</span>
          </div>
          <div class="w-px h-10 bg-white/20"></div>
          <div class="flex items-center gap-2">
            <span class="text-2xl font-bold text-white">100%</span>
            <span class="text-sm">Licensed<br/>& Insured</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
      <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </div>
  </section>
</template>

<script setup>
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
