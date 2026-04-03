<template>
  <div class="min-h-screen">
    <Navbar />
    <Hero />
    <TrustBar />
    <Services />
    <Projects />
    <About />
    <Testimonials />
    <CTA />
    <ContactForm />
    <Footer />

    <!-- Mobile Sticky Call Button -->
    <a
      href="tel:+15551234567"
      class="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent hover:bg-accent-dark text-white rounded-full shadow-xl shadow-accent/30 flex items-center justify-center transition-all duration-200 hover:scale-110"
      aria-label="Call Now"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
      </svg>
    </a>
  </div>
</template>

<script setup>
import { useScrollAnimation } from './composables/useScrollAnimation.js'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import TrustBar from './components/TrustBar.vue'
import Services from './components/Services.vue'
import Projects from './components/Projects.vue'
import About from './components/About.vue'
import Testimonials from './components/Testimonials.vue'
import CTA from './components/CTA.vue'
import ContactForm from './components/ContactForm.vue'
import Footer from './components/Footer.vue'

useScrollAnimation()
</script>
