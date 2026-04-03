<template>
  <section id="contact" class="py-20 lg:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <!-- Left: Info -->
        <div class="fade-in-left">
          <span class="text-accent font-semibold text-sm uppercase tracking-widest">Get Started</span>
          <h2 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight leading-tight">
            Get Your Free Quote<br/>
            <span class="text-accent">Within 24 Hours</span>
          </h2>
          <p class="mt-6 text-lg text-text-secondary leading-relaxed">
            No obligation. No pressure. Fill out the form and our team will call you within 24 hours with a free, detailed estimate — or call us directly.
          </p>

          <!-- Prominent Call Now -->
          <a
            href="tel:+17135551234"
            class="mt-6 inline-flex items-center gap-3 px-6 py-4 bg-accent/10 hover:bg-accent/20 rounded-xl border border-accent/20 transition-all group"
          >
            <div class="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <div>
              <p class="text-sm text-text-secondary">Call us directly</p>
              <p class="text-xl font-bold text-accent">(713) 555-1234</p>
            </div>
          </a>

          <div class="mt-8 space-y-5">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-text-primary">Email</p>
                <a href="mailto:info@solidbuildhouston.com" class="text-text-secondary hover:text-accent transition-colors">info@solidbuildhouston.com</a>
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
                <p class="text-text-secondary">Houston, TX & surrounding areas</p>
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
                <p class="text-text-secondary">Sat: 8:00 AM – 2:00 PM</p>
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
            <h3 class="text-2xl font-bold text-text-primary mb-1">Request Your Free Quote</h3>
            <p class="text-text-secondary text-sm mb-1">No obligation — just a quick conversation about your project.</p>
            <div class="flex flex-wrap items-center gap-3 mb-5 text-xs text-text-muted">
              <span class="flex items-center gap-1"><svg class="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>Free consultation</span>
              <span class="flex items-center gap-1"><svg class="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>Fast response</span>
              <span class="flex items-center gap-1"><svg class="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>No hidden fees</span>
            </div>

            <div class="space-y-5">
              <div>
                <label for="name" class="block text-sm font-medium text-text-primary mb-1.5">Full Name *</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="John Smith"
                  required
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                />
              </div>

              <div>
                <label for="phone" class="block text-sm font-medium text-text-primary mb-1.5">Phone Number * <span class="text-text-muted font-normal">(we'll call, not spam)</span></label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  placeholder="(713) 555-1234"
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
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                />
              </div>

              <div>
                <label for="projectType" class="block text-sm font-medium text-text-primary mb-1.5">Project Type *</label>
                <select
                  id="projectType"
                  v-model="form.projectType"
                  required
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all appearance-none"
                >
                  <option value="" disabled>What do you need help with?</option>
                  <option value="kitchen">Kitchen Remodeling</option>
                  <option value="bathroom">Bathroom Remodeling</option>
                  <option value="renovation">Home Renovation</option>
                  <option value="construction">General Construction</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-text-primary mb-1.5">Tell Us About Your Project</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="3"
                  placeholder="Describe what you're looking to build or renovate..."
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="submitted"
                class="w-full py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl text-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span v-if="!submitted" class="flex items-center justify-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  Request My Free Quote
                </span>
                <span v-else class="flex items-center justify-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Request Sent! We'll Call You Soon.
                </span>
              </button>

              <p class="text-xs text-text-muted text-center mt-2">
                🔒 Your information is safe. We never share or sell your data.
              </p>
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
