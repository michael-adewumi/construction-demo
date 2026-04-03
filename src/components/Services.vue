<template>
  <section id="services" class="py-20 lg:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 fade-in-up">
        <span class="text-accent font-semibold text-sm uppercase tracking-widest">What We Do</span>
        <h2 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight">
          Our Services
        </h2>
        <p class="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
          From ground-up builds to renovations, we deliver quality craftsmanship on every project.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 stagger-children">
        <div
          v-for="(service, i) in services"
          :key="i"
          class="fade-in-up group relative p-8 rounded-2xl border border-gray-100 bg-white hover:bg-primary hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 cursor-default"
        >
          <div class="w-14 h-14 rounded-xl bg-accent/10 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors duration-300">
            <div v-html="service.icon" class="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300"></div>
          </div>
          <h3 class="text-xl font-bold text-text-primary group-hover:text-white mb-3 transition-colors duration-300">
            {{ service.title }}
          </h3>
          <p class="text-text-secondary group-hover:text-white/75 leading-relaxed transition-colors duration-300">
            {{ service.description }}
          </p>
          <div class="mt-6 flex items-center gap-2 text-accent group-hover:text-accent-light font-medium text-sm transition-colors duration-300">
            Learn More
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'General Construction',
    description: 'Complete building solutions from foundation to finish. New builds for residential and commercial properties.',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
  },
  {
    title: 'Renovations',
    description: 'Transform your existing space with expert renovations. Kitchen, bathroom, basement, and whole-home remodels.',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>',
  },
  {
    title: 'Roofing',
    description: 'Professional roofing installation, repair, and replacement. Protect your investment with quality roofing.',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>',
  },
  {
    title: 'Concrete Work',
    description: 'Driveways, foundations, patios, and decorative concrete. Precision work built to last for decades.',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>',
  },
]
</script>
