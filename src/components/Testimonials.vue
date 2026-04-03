<template>
  <section class="py-20 lg:py-28 bg-surface">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 fade-in-up">
        <span class="text-accent font-semibold text-sm uppercase tracking-widest">Testimonials</span>
        <h2 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight">
          What Houston Homeowners Say
        </h2>
        <p class="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
          Don't just take our word for it — hear from the families we've served across the Houston area.
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

          <!-- Project type tag -->
          <div class="flex items-center gap-2 mb-3 mt-2">
            <span class="px-2.5 py-0.5 bg-accent/10 text-accent text-xs font-semibold rounded-md">
              {{ t.projectType }}
            </span>
            <div class="flex gap-0.5">
              <svg v-for="s in 5" :key="s" class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
          </div>

          <p class="text-text-secondary leading-relaxed mb-6 italic">"{{ t.text }}"</p>

          <!-- Outcome highlight -->
          <div v-if="t.outcome" class="mb-5 px-3 py-2 bg-green-50 border border-green-100 rounded-lg">
            <p class="text-green-700 text-sm font-medium flex items-center gap-1.5">
              <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              {{ t.outcome }}
            </p>
          </div>

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
    projectType: 'Kitchen Remodel',
    text: 'They remodeled our kitchen and finished ahead of schedule. The crew was professional, showed up on time every day, and the result was beyond what we expected. Our kitchen looks like something out of a magazine.',
    outcome: 'Completed ahead of schedule & within budget',
  },
  {
    name: 'Maria S.',
    location: 'Katy, TX',
    projectType: 'Full Home Renovation',
    text: 'We hired SolidBuild for a full home renovation and they transformed our 1990s house into a modern home. Communication was excellent throughout the project and they stayed within our budget. Highly recommend!',
    outcome: 'Home value increased after renovation',
  },
  {
    name: 'David & Lisa T.',
    location: 'Sugar Land, TX',
    projectType: 'Bathroom Remodel',
    text: 'After getting quotes from five different contractors, SolidBuild offered the best value with the most detailed proposal. Our master bathroom remodel turned out beautifully. Very satisfied and will use them again.',
    outcome: 'Best value among 5 contractor quotes',
  },
]
</script>
