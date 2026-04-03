<template>
  <section id="about" class="py-20 lg:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Image side -->
        <div class="fade-in-left relative">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Construction team at work"
              class="w-full h-80 lg:h-[500px] object-cover"
            />
          </div>
          <!-- Floating card -->
          <div class="absolute -bottom-6 -right-4 sm:right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                <svg class="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <p class="text-2xl font-extrabold text-text-primary">10+</p>
                <p class="text-sm text-text-secondary">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Text side -->
        <div class="fade-in-right">
          <span class="text-accent font-semibold text-sm uppercase tracking-widest">About Us</span>
          <h2 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight leading-tight">
            Building Dreams,<br/>
            <span class="text-accent">Delivering Quality</span>
          </h2>
          <p class="mt-6 text-lg text-text-secondary leading-relaxed">
            SolidBuild Construction has been transforming properties and building new structures across the region for over a decade. Founded with a commitment to honest, quality work, we've grown through word-of-mouth referrals and repeat customers.
          </p>
          <p class="mt-4 text-text-secondary leading-relaxed">
            Every project we take on is treated with the same level of care and attention, whether it's a small bathroom remodel or a full commercial build-out. We believe in transparent pricing, clear communication, and delivering results that exceed expectations.
          </p>

          <div class="mt-8 grid grid-cols-2 gap-6">
            <div class="flex items-start gap-3">
              <div class="mt-1 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg class="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-text-primary">On-Time Delivery</p>
                <p class="text-sm text-text-secondary">We respect deadlines</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="mt-1 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg class="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-text-primary">Budget Friendly</p>
                <p class="text-sm text-text-secondary">Transparent pricing</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="mt-1 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg class="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-text-primary">Quality Materials</p>
                <p class="text-sm text-text-secondary">Premium products only</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="mt-1 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg class="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-text-primary">Clean Worksites</p>
                <p class="text-sm text-text-secondary">Respectful & tidy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
