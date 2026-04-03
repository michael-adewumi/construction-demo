<template>
  <section class="py-20 lg:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 fade-in-up">
        <span class="text-accent font-semibold text-sm uppercase tracking-widest">Before & After</span>
        <h2 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight">
          See the Transformation
        </h2>
        <p class="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
          Real before-and-after results from our Houston renovation projects. This is what quality craftsmanship looks like.
        </p>
      </div>

      <div class="space-y-12 stagger-children">
        <div
          v-for="(item, i) in transformations"
          :key="i"
          class="fade-in-up bg-surface rounded-2xl overflow-hidden border border-gray-100"
        >
          <div class="grid grid-cols-1 md:grid-cols-2">
            <!-- Before -->
            <div class="relative">
              <div class="aspect-[4/3] bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  :src="item.beforeImage"
                  :alt="'Before: ' + item.title"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="absolute top-4 left-4 px-3 py-1.5 bg-gray-900/80 text-white text-xs font-bold uppercase tracking-wider rounded-lg backdrop-blur-sm">
                Before
              </div>
            </div>
            <!-- After -->
            <div class="relative">
              <div class="aspect-[4/3] bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  :src="item.afterImage"
                  :alt="'After: ' + item.title"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="absolute top-4 left-4 px-3 py-1.5 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-lg">
                After
              </div>
            </div>
          </div>
          <!-- Caption -->
          <div class="p-6 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 class="text-lg font-bold text-text-primary">{{ item.title }}</h3>
              <p class="text-text-secondary text-sm mt-1">{{ item.caption }}</p>
            </div>
            <div class="flex items-center gap-4 text-sm flex-shrink-0">
              <span v-if="item.duration" class="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 text-accent font-semibold rounded-lg">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {{ item.duration }}
              </span>
              <span v-if="item.location" class="inline-flex items-center gap-1.5 text-text-secondary">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                {{ item.location }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const transformations = [
  {
    title: 'Complete Kitchen Transformation',
    caption: 'From outdated 1990s kitchen to a modern open-concept space with custom cabinetry and quartz countertops.',
    beforeImage: '/images/roof-replacement.png',
    afterImage: '/images/kitchen-remodel.png',
    duration: '4 weeks',
    location: 'Houston, TX',
  },
  {
    title: 'Full Home Renovation',
    caption: 'Whole-home renovation including new flooring, open floor plan, updated electrical, and modern fixtures.',
    beforeImage: '/images/concrete-driveway.png',
    afterImage: '/images/residential-build.png',
    duration: '8 weeks',
    location: 'Katy, TX',
  },
]
</script>
