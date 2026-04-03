<template>
  <section id="contact" class="py-20 lg:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <!-- Left: Info -->
        <div class="fade-in-left">
          <span class="text-accent font-semibold text-sm uppercase tracking-widest">Contact Us</span>
          <h2 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight leading-tight">
            Let's Discuss<br/>
            <span class="text-accent">Your Project</span>
          </h2>
          <p class="mt-6 text-lg text-text-secondary leading-relaxed">
            Ready to get started? Fill out the form and we'll get back to you within 24 hours with a free estimate.
          </p>

          <div class="mt-10 space-y-6">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-text-primary">Phone</p>
                <a href="tel:+15551234567" class="text-text-secondary hover:text-accent transition-colors">(555) 123-4567</a>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-text-primary">Email</p>
                <a href="mailto:info@solidbuild.com" class="text-text-secondary hover:text-accent transition-colors">info@solidbuild.com</a>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-text-primary">Location</p>
                <p class="text-text-secondary">Austin, TX</p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-text-primary">Business Hours</p>
                <p class="text-text-secondary">Mon – Fri: 7:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="fade-in-right">
          <form
            @submit.prevent="handleSubmit"
            class="bg-surface rounded-2xl p-8 lg:p-10 border border-gray-100"
          >
            <h3 class="text-2xl font-bold text-text-primary mb-6">Get a Free Quote</h3>

            <div class="space-y-5">
              <div>
                <label for="name" class="block text-sm font-medium text-text-primary mb-1.5">Full Name</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="John Smith"
                  required
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                />
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label for="phone" class="block text-sm font-medium text-text-primary mb-1.5">Phone</label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    required
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-text-primary mb-1.5">Email</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    placeholder="john@email.com"
                    required
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                  />
                </div>
              </div>

              <div>
                <label for="projectType" class="block text-sm font-medium text-text-primary mb-1.5">Project Type</label>
                <select
                  id="projectType"
                  v-model="form.projectType"
                  required
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all appearance-none"
                >
                  <option value="" disabled>Select a project type</option>
                  <option value="general">General Construction</option>
                  <option value="renovation">Renovation</option>
                  <option value="roofing">Roofing</option>
                  <option value="concrete">Concrete Work</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-text-primary mb-1.5">Project Details</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  placeholder="Tell us about your project..."
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="submitted"
                class="w-full py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl text-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span v-if="!submitted">Submit Request</span>
                <span v-else class="flex items-center justify-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Request Sent!
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  phone: '',
  email: '',
  projectType: '',
  message: '',
})

const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.name = ''
    form.phone = ''
    form.email = ''
    form.projectType = ''
    form.message = ''
  }, 3000)
}
</script>
