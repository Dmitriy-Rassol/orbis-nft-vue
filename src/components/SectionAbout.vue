<script setup lang="ts">
defineProps<{ t: any }>()

const videoUrl = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4'
</script>

<template>
  <section id="about" class="relative min-h-screen py-16 md:py-20 lg:py-24" style="scroll-margin-top: 80px;">
    <!-- Background Video -->
    <video
      class="absolute inset-0 w-full h-full object-cover"
      autoPlay loop muted playsInline
    >
      <source :src="videoUrl" type="video/mp4" />
    </video>

    <!-- Content -->
    <div class="relative z-10 mx-auto px-6 sm:px-10 md:px-16 lg:px-20" style="max-width: 1831px;">
      <!-- Top Row -->
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
        <!-- Left - Heading -->
        <div class="relative">
          <h2 class="font-grotesk uppercase leading-[1.1]">
            <span class="block" style="font-size: 32px;">{{ t.about.greeting }}</span>
            <span class="hidden sm:block md:hidden" style="font-size: 40px;">{{ t.about.name }}</span>
            <span class="hidden md:block lg:hidden" style="font-size: 50px;">{{ t.about.name }}</span>
            <span class="hidden lg:block" style="font-size: 60px;">{{ t.about.name }}</span>
          </h2>
          <span
            class="absolute bottom-0 font-condiment text-neon mix-blend-exclusion -rotate-1 normal-case"
            style="right: 0;"
          >
            <span class="sm:hidden" style="font-size: 36px;">{{ t.about.accent }}</span>
            <span class="hidden sm:block md:hidden" style="font-size: 48px; right: 16px;">{{ t.about.accent }}</span>
            <span class="hidden md:block lg:hidden" style="font-size: 58px; right: 32px;">{{ t.about.accent }}</span>
            <span class="hidden lg:block" style="font-size: 68px; right: 32px;">{{ t.about.accent }}</span>
          </span>
        </div>

        <!-- Right - Paragraph -->
        <p class="font-mono uppercase text-cream leading-relaxed" style="font-size: 14px; max-width: 266px;">
          {{ t.about.description }}
        </p>
      </div>

      <!-- Bottom Row -->
      <div class="flex justify-between mt-20 lg:mt-32">
        <div class="flex flex-col gap-4">
          <p class="font-mono uppercase leading-relaxed" style="font-size: 14px; max-width: 266px; color: #010828;">
            {{ t.about.description }}
          </p>
          <p class="font-mono uppercase leading-relaxed" style="font-size: 14px; max-width: 266px; color: #010828;">
            {{ t.about.description }}
          </p>
        </div>

        <div class="hidden lg:flex flex-col gap-4">
          <p class="font-mono uppercase text-cream/10 leading-relaxed" style="font-size: 14px; max-width: 266px;">
            {{ t.about.description }}
          </p>
          <p class="font-mono uppercase text-cream/10 leading-relaxed" style="font-size: 14px; max-width: 266px;">
            {{ t.about.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
