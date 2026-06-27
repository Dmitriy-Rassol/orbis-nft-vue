<script setup lang="ts">
import { Mail } from '@lucide/vue'

defineProps<{ t: any }>()

const videoUrl = '../video/footer.mp4'
</script>

<template>
  <section id="cta" class="relative overflow-hidden" style="scroll-margin-top: 80px;">
    <!-- Background Video -->
    <video
      class="w-full h-auto block"
      autoPlay loop muted playsInline
    >
      <source :src="videoUrl" type="video/mp4" />
    </video>

    <!-- Text Overlay -->
    <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
      <!-- Go beyond accent -->
      <span
        class="font-condiment text-neon mix-blend-exclusion normal-case block mb-4"
        style="font-size: 20px;"
      >
        <span class="sm:hidden">{{ t.cta.accent }}</span>
        <span class="hidden sm:block md:hidden" style="font-size: 28px;">{{ t.cta.accent }}</span>
        <span class="hidden md:block lg:hidden" style="font-size: 36px;">{{ t.cta.accent }}</span>
        <span class="hidden lg:block" style="font-size: 48px;">{{ t.cta.accent }}</span>
      </span>

      <!-- Main Heading -->
      <h2 class="font-grotesk uppercase text-cream" style="line-height: 1.2;">
        <span class="block mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          <span class="sm:hidden" style="font-size: 20px;">{{ t.cta.joinUs }}</span>
          <span class="hidden sm:block md:hidden" style="font-size: 30px;">{{ t.cta.joinUs }}</span>
          <span class="hidden md:block lg:hidden" style="font-size: 42px;">{{ t.cta.joinUs }}</span>
          <span class="hidden lg:block" style="font-size: 56px;">{{ t.cta.joinUs }}</span>
        </span>
        <span class="block mb-2">
          <span class="sm:hidden" style="font-size: 16px;">{{ t.cta.reveal }}</span>
          <span class="hidden sm:block md:hidden" style="font-size: 24px;">{{ t.cta.reveal }}</span>
          <span class="hidden md:block lg:hidden" style="font-size: 34px;">{{ t.cta.reveal }}</span>
          <span class="hidden lg:block" style="font-size: 46px;">{{ t.cta.reveal }}</span>
        </span>
        <span class="block mb-2">
          <span class="sm:hidden" style="font-size: 16px;">{{ t.cta.define }}</span>
          <span class="hidden sm:block md:hidden" style="font-size: 24px;">{{ t.cta.define }}</span>
          <span class="hidden md:block lg:hidden" style="font-size: 34px;">{{ t.cta.define }}</span>
          <span class="hidden lg:block" style="font-size: 46px;">{{ t.cta.define }}</span>
        </span>
        <span class="block">
          <span class="sm:hidden" style="font-size: 16px;">{{ t.cta.follow }}</span>
          <span class="hidden sm:block md:hidden" style="font-size: 24px;">{{ t.cta.follow }}</span>
          <span class="hidden md:block lg:hidden" style="font-size: 34px;">{{ t.cta.follow }}</span>
          <span class="hidden lg:block" style="font-size: 46px;">{{ t.cta.follow }}</span>
        </span>
      </h2>
    </div>

    <!-- Social Icons - Bottom Left -->
    <div class="absolute" style="left: 8%; bottom: 12%;">
      <div class="flex flex-col liquid-glass overflow-hidden" style="border-radius: 8px;">
        <a
          href="#"
          class="flex items-center justify-center hover:bg-white/10 transition-colors border-b border-white/10"
          style="width: 56px; height: 56px;"
        >
          <Mail style="width: 20px; height: 20px;" class="text-cream" />
        </a>
        <a
          href="#"
          class="flex items-center justify-center hover:bg-white/10 transition-colors border-b border-white/10"
          style="width: 56px; height: 56px;"
        >
          <svg style="width: 20px; height: 20px;" class="text-cream" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href="#"
          class="flex items-center justify-center hover:bg-white/10 transition-colors"
          style="width: 56px; height: 56px;"
        >
          <svg style="width: 20px; height: 20px;" class="text-cream" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
