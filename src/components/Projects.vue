<template>
  <section id="projects" class="py-20 lg:py-28 bg-surface">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 fade-in-up">
        <span class="text-accent font-semibold text-sm uppercase tracking-widest">Our Work</span>
        <h2 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight">
          Featured Projects
        </h2>
        <p class="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
          Browse our portfolio of completed projects showcasing our craftsmanship and attention to detail.
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
    title: 'Modern Residential Build',
    category: 'New Construction',
    description: 'Complete 4-bedroom home with contemporary design and premium finishes.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
  {
    title: 'Commercial Office Renovation',
    category: 'Renovation',
    description: 'Full interior remodel of a 5,000 sq ft office space.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  },
  {
    title: 'Custom Kitchen Remodel',
    category: 'Renovation',
    description: 'High-end kitchen renovation with custom cabinetry.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  },
  {
    title: 'Roof Replacement',
    category: 'Roofing',
    description: 'Complete roof replacement with premium materials.',
    image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600&q=80',
  },
  {
    title: 'Concrete Driveway',
    category: 'Concrete',
    description: 'Decorative stamped concrete driveway and walkways.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
  },
]
</script>
