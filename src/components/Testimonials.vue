<template>
  <section class="py-20 lg:py-28 bg-surface">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 fade-in-up">
        <span class="text-accent font-semibold text-sm uppercase tracking-widest">Testimonials</span>
        <h2 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight">
          What Houston Homeowners Say
        </h2>
        <p class="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
          Don't just take our word for it — hear from the families and homeowners we've served across the Houston area.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 stagger-children">
        <div
          v-for="(t, i) in testimonials"
          :key="i"
          class="fade-in-up relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
        >
          <!-- Quote icon -->
          <div class="absolute -top-4 left-8">
            <div class="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z"/>
              </svg>
            </div>
          </div>

          <!-- Stars -->
          <div class="flex gap-1 mb-4 mt-2">
            <svg v-for="s in 5" :key="s" class="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>

          <p class="text-text-secondary leading-relaxed mb-6 italic">"{{ t.text }}"</p>

          <div class="flex items-center gap-3 pt-4 border-t border-gray-100">
            <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
              {{ t.name.charAt(0) }}
            </div>
            <div>
              <p class="font-semibold text-text-primary">{{ t.name }}</p>
              <p class="text-sm text-text-secondary">{{ t.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'James R.',
    location: 'Houston, TX',
    text: 'They remodeled our kitchen and finished ahead of schedule. The crew was professional, showed up on time every day, and the result was beyond what we expected. Our kitchen looks like something out of a magazine.',
  },
  {
    name: 'Maria S.',
    location: 'Katy, TX',
    text: 'We hired SolidBuild for a full home renovation and they transformed our 1990s house into a modern home. Communication was excellent throughout the project and they stayed within our budget. Highly recommend!',
  },
  {
    name: 'David & Lisa T.',
    location: 'Sugar Land, TX',
    text: 'After getting quotes from five different contractors, SolidBuild offered the best value with the most detailed proposal. Our master bathroom remodel turned out beautifully. Very satisfied and will use them again.',
  },
]
</script>
