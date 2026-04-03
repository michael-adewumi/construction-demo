<template>
  <section id="projects" class="py-20 lg:py-28 bg-surface">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 fade-in-up">
        <span class="text-accent font-semibold text-sm uppercase tracking-widest">Our Work</span>
        <h2 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight">
          Recent Projects in Houston
        </h2>
        <p class="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
          Real results for real homeowners. Browse our portfolio of completed renovations and construction projects across the Houston area.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
        <div
          v-for="(project, i) in projects"
          :key="i"
          class="fade-in-up group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
          :class="i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''"
        >
          <div class="relative overflow-hidden" :class="i === 0 ? 'h-64 sm:h-full' : 'h-64'">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <span class="text-accent text-sm font-semibold uppercase tracking-wider mb-2">
                {{ project.category }}
              </span>
              <h3 class="text-white text-xl font-bold mb-2">{{ project.title }}</h3>
              <p class="text-white/75 text-sm">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Modern Kitchen Remodel – Houston',
    category: 'Kitchen Remodeling',
    description: 'Complete kitchen transformation with custom cabinetry, quartz countertops, and modern appliances. Completed in 4 weeks.',
    image: '/images/kitchen-remodel.png',
  },
  {
    title: 'Full Home Renovation – Katy, TX',
    category: 'Home Renovation',
    description: 'Whole-home renovation including open floor plan, new flooring, and updated fixtures for a growing family.',
    image: '/images/residential-build.png',
  },
  {
    title: 'Master Bathroom Remodel – Sugar Land',
    category: 'Bathroom Remodeling',
    description: 'Luxury walk-in shower, double vanity, and heated tile floors. A spa-like retreat at home.',
    image: '/images/office-renovation.png',
  },
  {
    title: 'Roof & Exterior Restoration – Houston Heights',
    category: 'General Construction',
    description: 'Full roof replacement and exterior siding upgrade. Restored curb appeal and long-term protection.',
    image: '/images/roof-replacement.png',
  },
  {
    title: 'Outdoor Living Space – The Woodlands',
    category: 'General Construction',
    description: 'Custom patio with stamped concrete, pergola, and outdoor kitchen area. Built for Houston living.',
    image: '/images/concrete-driveway.png',
  },
]
</script>
