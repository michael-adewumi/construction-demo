<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-18 md:h-20">
        <!-- Logo -->
        <a href="#home" class="flex items-center gap-2 group" @click.prevent="scrollTo('home')">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center bg-accent text-white font-black text-lg transition-transform group-hover:scale-105">
            SB
          </div>
          <div>
            <span class="text-lg font-bold tracking-tight" :class="scrolled ? 'text-primary' : 'text-white'">
              SolidBuild
            </span>
            <span class="hidden sm:inline text-xs font-medium ml-1" :class="scrolled ? 'text-text-secondary' : 'text-white/70'">
              Construction
            </span>
          </div>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-1">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="`#${link.id}`"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-accent/10"
            :class="scrolled ? 'text-text-primary hover:text-accent' : 'text-white/90 hover:text-white'"
            @click.prevent="scrollTo(link.id)"
          >
            {{ link.label }}
          </a>
          <a
            href="#contact"
            class="ml-3 px-5 py-2.5 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
            @click.prevent="scrollTo('contact')"
          >
            Get a Quote
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 rounded-lg transition-colors"
          :class="scrolled ? 'text-text-primary hover:bg-gray-100' : 'text-white hover:bg-white/10'"
          @click="mobileOpen = !mobileOpen"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="md:hidden bg-white border-t border-gray-100 shadow-xl">
        <div class="px-4 py-3 space-y-1">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="`#${link.id}`"
            class="block px-4 py-3 rounded-lg text-text-primary font-medium hover:bg-surface transition-colors"
            @click.prevent="scrollTo(link.id); mobileOpen = false"
          >
            {{ link.label }}
          </a>
          <a
            href="#contact"
            class="block mt-2 px-4 py-3 bg-accent text-white text-center font-semibold rounded-lg hover:bg-accent-dark transition-colors"
            @click.prevent="scrollTo('contact'); mobileOpen = false"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
