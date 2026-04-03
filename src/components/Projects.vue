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
            <!-- Always-visible bottom info bar -->
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/70 to-transparent pt-16 pb-4 px-5">
              <div class="flex items-center gap-2 mb-1.5">
                <span class="text-accent text-xs font-semibold uppercase tracking-wider">
                  {{ project.category }}
                </span>
                <span v-if="project.timeline" class="text-white/50 text-xs">•</span>
                <span v-if="project.timeline" class="text-white/60 text-xs flex items-center gap-1">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  {{ project.timeline }}
                </span>
              </div>
              <h3 class="text-white text-lg font-bold leading-tight">{{ project.title }}</h3>
              <p class="text-white/65 text-sm mt-1 leading-snug">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA below projects -->
      <div class="text-center mt-12 fade-in-up">
        <p class="text-text-secondary mb-4">Have a project in mind? Let's talk about it.</p>
        <a
          href="#contact"
          class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl text-base transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
          @click.prevent="scrollTo('contact')"
        >
          Request a Quote Today
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const projects = [
  {
    title: 'Modern Kitchen Remodel – Houston',
    category: 'Kitchen Remodeling',
    description: 'Full cabinet replacement, quartz countertops, and modern appliances. Completed on schedule.',
    timeline: '4 weeks',
    image: '/images/kitchen-remodel.png',
  },
  {
    title: 'Full Home Renovation – Katy, TX',
    category: 'Home Renovation',
    description: 'Open floor plan, new flooring, updated fixtures. Transformed a 1990s home for a growing family.',
    timeline: '8 weeks',
    image: '/images/residential-build.png',
  },
  {
    title: 'Master Bathroom – Sugar Land',
    category: 'Bathroom Remodeling',
    description: 'Walk-in shower, double vanity, heated tile. A spa-like retreat at home.',
    timeline: '3 weeks',
    image: '/images/office-renovation.png',
  },
  {
    title: 'Roof & Exterior – Houston Heights',
    category: 'General Construction',
    description: 'Full roof replacement and siding upgrade. Restored curb appeal and protection.',
    timeline: '2 weeks',
    image: '/images/roof-replacement.png',
  },
  {
    title: 'Outdoor Living – The Woodlands',
    category: 'General Construction',
    description: 'Stamped concrete patio, pergola, and outdoor kitchen. Built for Houston living.',
    timeline: '5 weeks',
    image: '/images/concrete-driveway.png',
  },
]
</script>
